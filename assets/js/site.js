/* Academic homepage behaviour: dark-mode toggle + section scroll-spy.
   Deliberately dependency-free so it also works from a file:// preview.
   It never invents anchors or counts: nav links are matched to existing
   element ids with getElementById, and links without a target are ignored. */
(function () {
  'use strict';

  var root = document.documentElement;
  var KEY = 'theme';
  var toggle = document.getElementById('theme-toggle');

  function readSaved() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function apply(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      toggle.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
    if (persist) {
      try { window.localStorage.setItem(KEY, theme); } catch (e) { /* ignore */ }
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      apply(current() === 'dark' ? 'light' : 'dark', true);
    });
  }

  /* Sync the toggle's initial state with the theme the inline head script
     already applied (saved preference or OS default). Without this call the
     button keeps aria-pressed="false"/aria-label="Toggle dark mode" even when
     the page actually starts dark. */
  apply(current(), false);

  /* Follow the OS preference until the visitor makes an explicit choice. */
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var sync = function (event) {
      if (!readSaved()) { apply(event.matches ? 'dark' : 'light', false); }
    };
    if (mq.addEventListener) { mq.addEventListener('change', sync); }
    else if (mq.addListener) { mq.addListener(sync); }
  }

  /* Keep the sticky-bar offset in sync with the bar's real rendered height.
     The bar wraps to two rows on narrow screens, so the fixed --topbar-h token
     would let it cover anchor targets after a jump. Measuring it keeps both
     scroll-margin-top (anchors) and the sticky sidebar offset correct at every
     breakpoint. Falls back to the CSS token if measurement is unavailable. */
  var topbar = document.querySelector('.topbar');
  function syncTopbarHeight() {
    if (!topbar) { return; }
    var h = Math.round(topbar.getBoundingClientRect().height);
    if (h > 0) { root.style.setProperty('--topbar-h', h + 'px'); }
  }
  syncTopbarHeight();
  window.addEventListener('resize', syncTopbarHeight);
  window.addEventListener('load', syncTopbarHeight);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncTopbarHeight);
  }

  /* Scroll-spy: highlight the nav entry for the section currently in view. */
  var links = Array.prototype.slice.call(document.querySelectorAll('.topnav a[href^="#"]'));
  if (!links.length || !('IntersectionObserver' in window)) { return; }

  var pairs = links.map(function (link) {
    var id = link.getAttribute('href').slice(1);
    var el = id ? document.getElementById(id) : null;
    return el ? { link: link, el: el } : null;
  }).filter(Boolean);
  if (!pairs.length) { return; }

  var visible = Object.create(null);
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { visible[entry.target.id] = true; }
      else { delete visible[entry.target.id]; }
    });
    var chosen = null;
    pairs.forEach(function (pair) {
      if (!chosen && visible[pair.el.id]) { chosen = pair; }
    });
    if (chosen) {
      links.forEach(function (link) { link.classList.remove('is-active'); });
      chosen.link.classList.add('is-active');
    }
  }, { rootMargin: '-72px 0px -55% 0px', threshold: 0 });

  pairs.forEach(function (pair) { observer.observe(pair.el); });
})();

/* Enlarged-figure dialog.
   Progressive enhancement for the publication thumbnails. The clicked
   thumbnail's real <img src> is copied into the shared <dialog> (so the modal
   never depends on a detached, script-only asset), its caption data
   attributes fill the idea / label / source-locator fields, Escape, the 44px
   close button and a backdrop click all exit, and focus returns to the
   thumbnail that opened it. When <dialog> is unavailable, or the script never
   runs, the thumbnails simply stay on the page unchanged — nothing is hidden
   behind JavaScript. */
(function () {
  'use strict';

  var openers = Array.prototype.slice.call(document.querySelectorAll('.pub-figure-btn'));
  if (!openers.length) { return; }

  var dialog = document.getElementById('figure-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') { return; }

  var imgEl = dialog.querySelector('.figure-dialog-img');
  var labelEl = dialog.querySelector('.figure-dialog-label');
  var locatorEl = dialog.querySelector('.figure-dialog-locator');
  var ideaEl = dialog.querySelector('.figure-dialog-idea');
  var linkEl = dialog.querySelector('.figure-dialog-link');
  var closeBtn = dialog.querySelector('.figure-dialog-close');
  var trigger = null;

  function fill(el, value) {
    if (!el) { return; }
    if (value) {
      el.textContent = value;
      el.hidden = false;
    } else {
      el.textContent = '';
      el.hidden = true;
    }
  }

  function open(btn) {
    var img = btn.querySelector('img');
    if (!img || !imgEl) { return; }
    var src = img.getAttribute('src');
    if (!src) { return; }

    imgEl.setAttribute('src', src);
    imgEl.setAttribute('alt', img.getAttribute('alt') || '');

    fill(labelEl, btn.getAttribute('data-figure-label'));
    fill(locatorEl, btn.getAttribute('data-figure-locator'));
    fill(ideaEl, btn.getAttribute('data-figure-idea'));

    if (linkEl) {
      var url = btn.getAttribute('data-figure-source');
      if (url) {
        linkEl.setAttribute('href', url);
        linkEl.textContent = btn.getAttribute('data-figure-source-text') || url;
        linkEl.hidden = false;
      } else {
        linkEl.removeAttribute('href');
        linkEl.textContent = '';
        linkEl.hidden = true;
      }
    }

    trigger = btn;
    try {
      dialog.showModal();
    } catch (e) {
      /* last-resort fallback when showModal() is not supported */
      dialog.setAttribute('open', '');
    }
    if (closeBtn) { closeBtn.focus(); }
  }

  openers.forEach(function (btn) {
    btn.addEventListener('click', function () { open(btn); });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () { dialog.close(); });
  }

  /* a click that lands on the <dialog> itself is a backdrop click */
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) { dialog.close(); }
  });

  /* Escape fires 'cancel' then 'close', so restoring focus here covers the
     close button, Escape and the backdrop alike — the dialog is dismissible
     by keyboard and never traps the visitor. */
  dialog.addEventListener('close', function () {
    var back = trigger;
    trigger = null;
    if (!back || typeof back.focus !== 'function') { return; }
    back.focus();
    /* The user agent also restores focus to whatever was focused when the
       modal opened. That is the same thumbnail for a real click or keypress,
       but it can differ when the dialog was opened programmatically, so
       re-assert once on the next frame and leave a deterministic result. */
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(function () { back.focus(); });
    }
  });
})();

/* Publication explorer: topic chips + year select + search box, combined with
   AND, plus reveal-on-anchor.

   The list is fully rendered in the HTML; this module only adds a view state.
   Every hiding rule in site.css is scoped to `html.js` and the entries are
   hidden here by writing `data-filter-hidden`, so a browser without
   JavaScript — or a page where this file never ran — shows all 20
   publications. Technical reports sit in their own section, carry no
   data-topics, and are never filtered.

   Three models:
     'idle'   nothing asked for yet — no entry on screen, just this panel;
     'filter' topic / year / query, AND-combined;
     'all'    "Show all publications".
   The All-topics chip asks for the same thing as the Show-all button, so both
   land in 'all'. Turning every control back to neutral while filtering returns
   to 'idle' — a neutral *state* never dumps all 20 on its own. Nothing is
   written to the URL or to history: the only hashes in play are the ordinary
   #anchors the Featured cards and the navigation already use. */
(function () {
  'use strict';

  var bar = document.getElementById('pub-filter');
  if (!bar) return;

  var items = Array.prototype.slice.call(
    document.querySelectorAll('.right-column li.pub-item'));
  if (!items.length) return;

  /* Publications are the entries the explorer owns (they carry the manifest's
     data-topics); everything else — the technical reports — stays untouched. */
  var pubs = items.filter(function (item) {
    return item.hasAttribute('data-topics');
  });
  if (!pubs.length) return;
  var reports = items.length - pubs.length;

  var chips = Array.prototype.slice.call(bar.querySelectorAll('.filter-chip'));
  var yearSel = document.getElementById('filter-year');
  var searchBox = document.getElementById('filter-search');
  var toggle = document.getElementById('filter-toggle');
  var status = document.getElementById('filter-status');
  var emptyMsg = document.getElementById('filter-empty');
  var resetWrap = document.getElementById('filter-reset-wrap');
  var resetBtn = document.getElementById('filter-reset');
  var bands = Array.prototype.slice.call(
    document.querySelectorAll('.right-column h3.pub-year'));

  var PIN = 'data-filter-pinned';
  var HIDDEN = 'data-filter-hidden';
  var HIGHLIGHT_MS = 3000;

  var mode = 'idle';
  var topic = null;          /* a slug, or null for "any topic" */
  var year = 'all';
  var query = '';

  function tokens(item) {
    return ' ' + (item.getAttribute('data-topics') || '') + ' ';
  }

  /* The pre-built index, with the entry's own text as the safety net. */
  function haystack(item) {
    return (item.getAttribute('data-search') || item.textContent || '')
      .toLowerCase();
  }

  function matches(item) {
    if (topic && tokens(item).indexOf(' ' + topic + ' ') === -1) return false;
    if (year !== 'all' && (item.getAttribute('data-year') || '') !== year) {
      return false;
    }
    if (query && haystack(item).indexOf(query) === -1) return false;
    return true;
  }

  function pinned(item) { return item.getAttribute(PIN) === 'true'; }

  /* What the current model puts on screen. A pinned entry — one revealed from
     a Featured card or a pasted #anchor — is always shown. */
  function shownItem(item) {
    if (pinned(item)) return true;
    if (mode === 'all') return true;
    if (mode === 'filter') return matches(item);
    return false;
  }

  function countShown() {
    return pubs.filter(shownItem).length;
  }

  /* A year band whose entries are all hidden goes away with them. */
  function refreshBands() {
    bands.forEach(function (band) {
      var list = band.nextElementSibling;
      var any = false;
      if (list && list.tagName === 'OL') {
        Array.prototype.forEach.call(list.querySelectorAll('li.pub-item'),
          function (item) { if (shownItem(item)) any = true; });
      }
      band.setAttribute('data-filter-empty', any ? 'false' : 'true');
    });
  }

  function statusText(shown) {
    var tail = reports ? ' (+ ' + reports + ' technical reports)' : '';
    if (mode === 'idle') {
      var totals = pubs.length + ' publications';
      if (reports) totals += ' + ' + reports + ' technical reports';
      return totals + '.';
    }
    if (mode === 'all') {
      return 'Showing all ' + pubs.length + ' publications' + tail + '.';
    }
    if (!shown) return 'No publications match these filters' + tail + '.';
    return 'Showing ' + shown + ' of ' + pubs.length + ' publications' + tail +
      '.';
  }

  function apply() {
    pubs.forEach(function (item) {
      if (shownItem(item)) item.removeAttribute(HIDDEN);
      else item.setAttribute(HIDDEN, 'true');
    });
    chips.forEach(function (chip) {
      var name = chip.getAttribute('data-topic');
      var on = mode === 'filter' && name !== 'all' && name === topic;
      chip.setAttribute('aria-pressed', on ? 'true' : 'false');
      chip.disabled = false;
    });
    if (toggle) {
      toggle.textContent = mode === 'all'
        ? 'Hide publications' : 'Show all publications';
      toggle.setAttribute('aria-pressed', mode === 'all' ? 'true' : 'false');
    }
    var shown = countShown();
    refreshBands();
    if (status) status.textContent = statusText(shown);
    var nothing = mode === 'filter' && shown === 0;
    if (emptyMsg) emptyMsg.hidden = !nothing;
    if (resetWrap) resetWrap.hidden = !nothing;
  }

  /* Put the two value controls back to their neutral positions. */
  function resetControls() {
    if (yearSel) yearSel.value = 'all';
    if (searchBox) searchBox.value = '';
  }

  function clearPins() {
    pubs.forEach(function (item) { item.removeAttribute(PIN); });
  }

  /* Every control change goes through here: adopt the values, pick the model,
     drop a stale pin and repaint. */
  function setFilter(next) {
    if (next.topic !== undefined) topic = next.topic;
    if (next.year !== undefined) year = next.year;
    if (next.query !== undefined) query = next.query;
    mode = (topic === null && year === 'all' && query === '') ? 'idle'
      : 'filter';
    clearPins();
    apply();
  }

  /* "Show all publications" (and the All-topics chip): clear the controls and
     put the complete list on screen. */
  function showAll() {
    topic = null;
    year = 'all';
    query = '';
    mode = 'all';
    resetControls();
    clearPins();
    apply();
  }

  /* Is this entry hidden by the *filter*? A pin the reveal just set does not
     count, otherwise the second reveal a hash navigation triggers (click
     handler + hashchange) would read the pinned entry as visible, drop the
     pin, and hide it again. */
  function hiddenUnderFilter(item) {
    var had = item.getAttribute(PIN);
    if (had) item.removeAttribute(PIN);
    var hidden = !shownItem(item);
    if (had) item.setAttribute(PIN, had);
    return hidden;
  }

  /* Show a single entry the current model hides and bring it into view, so a
     Featured link or a pasted #anchor is never a dead link. The pin survives
     until the next control change. */
  function reveal(hash, focusAlways) {
    var id = String(hash || '').replace(/^#/, '');
    if (!id) return;
    var target = document.getElementById(id);
    if (!target || pubs.indexOf(target) === -1) return;

    var wasHidden = hiddenUnderFilter(target);
    clearPins();
    if (wasHidden) target.setAttribute(PIN, 'true');
    apply();
    target.classList.add('is-target');
    target.scrollIntoView({ block: 'start' });
    if (wasHidden || focusAlways === true) {
      target.setAttribute('tabindex', '-1');
      try { target.focus({ preventScroll: true }); } catch (err) {
        target.focus();
      }
    }
    window.setTimeout(function () { target.classList.remove('is-target'); },
      HIGHLIGHT_MS);
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var name = chip.getAttribute('data-topic');
      if (name === 'all') { showAll(); return; }
      /* clicking the active topic again drops it back to "any topic" */
      if (mode === 'filter' && topic === name) { setFilter({ topic: null }); return; }
      setFilter({ topic: name });
    });
  });

  if (yearSel) {
    yearSel.addEventListener('change', function () {
      setFilter({ year: yearSel.value || 'all' });
    });
  }

  if (searchBox) {
    var onSearch = function () {
      setFilter({ query: (searchBox.value || '').trim().toLowerCase() });
    };
    searchBox.addEventListener('input', onSearch);
    searchBox.addEventListener('search', onSearch);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      resetControls();
      setFilter({ topic: null, year: 'all', query: '' });
    });
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      if (mode === 'all') setFilter({ topic: null, year: 'all', query: '' });
      else showAll();
    });
  }

  /* Featured cards stay ordinary anchor links — copyable, openable in a new
     tab — and additionally reveal their target when the current model hides
     it. No preventDefault, so the browser still sets the hash. */
  Array.prototype.forEach.call(
    document.querySelectorAll('.featured-card-link'), function (link) {
      link.addEventListener('click', function (event) {
        if (event.defaultPrevented || event.button !== 0 ||
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }
        reveal(link.getAttribute('href'), true);
      });
    });

  window.addEventListener('hashchange', function () {
    reveal(window.location.hash, false);
  });

  apply();
  if (window.location.hash) reveal(window.location.hash, false);
})();
