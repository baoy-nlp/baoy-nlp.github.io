/* ==========================================================================
   Bilingual UI (English / 简体中文)

   One shipped locale source — `_data/i18n.json`, serialised into the page by
   Liquid as the `<script type="application/json" id="i18n-data">` island —
   drives everything here. No fetch, so the single-file (file://) preview and
   the Jekyll site behave identically.

   English is the DOM: the baseline copy lives in the markup and is captured
   once at start-up, so switching back to English restores it byte for byte and
   the JSON never duplicates the bibliography. Only Chinese is carried in the
   locale file, keyed by the record's stable `<li>` id.

   Resolution order: `?lang=` (explicit, wins) -> saved choice -> English.
   Switching keeps the hash, the filter state, the reveal pin and the theme,
   writes the choice to localStorage, mirrors it into the URL with
   replaceState (never a new history entry) and restores the scroll anchor.
   ========================================================================== */
var YB_I18N = null;
(function () {
  'use strict';

  var root = document.documentElement;
  var KEY = 'lang';
  var DEFAULT = 'en';
  var SUPPORTED = ['en', 'zh-CN'];
  var group = document.getElementById('lang-switch');

  var data = null;
  try {
    var island = document.getElementById('i18n-data');
    if (island && island.textContent) { data = JSON.parse(island.textContent); }
  } catch (e) { data = null; }

  /* No locale data (or no buttons): leave the English page alone and take the
     dead control away — never an inert, blank switch. */
  if (!data || !data.ui || !group) {
    if (group) { group.hidden = true; }
    return;
  }

  function normalise(code) {
    if (!code) { return null; }
    var c = String(code).trim().toLowerCase();
    if (c === 'zh' || c === 'zh-cn' || c === 'zh-hans' || c === 'zh-sg' ||
        c === 'cn') { return 'zh-CN'; }
    if (c === 'en' || c === 'en-us' || c === 'en-gb' || c.indexOf('en-') === 0) {
      return 'en';
    }
    return null;
  }

  function fromURL() {
    var m = /[?&]lang=([^&#]*)/.exec(window.location.search || '');
    return m ? normalise(decodeURIComponent(m[1])) : null;
  }

  function fromStore() {
    try { return normalise(window.localStorage.getItem(KEY)); } catch (e) { return null; }
  }

  var lang = fromURL() || fromStore() || DEFAULT;
  if (SUPPORTED.indexOf(lang) === -1) { lang = DEFAULT; }

  function pack(l) {
    return (data.ui && data.ui[l]) || {};
  }

  /* Interpolate {name} placeholders. */
  function fill(template, vars) {
    return String(template).replace(/\{(\w+)\}/g, function (whole, key) {
      return (vars && Object.prototype.hasOwnProperty.call(vars, key))
        ? String(vars[key]) : whole;
    });
  }

  /* Look a key up for `l`, falling back to English and then to the key itself,
     so a missing string can never render as an empty control. */
  function t(key, l) {
    var want = pack(l || lang);
    if (Object.prototype.hasOwnProperty.call(want, key)) { return want[key]; }
    var en = pack(DEFAULT);
    return Object.prototype.hasOwnProperty.call(en, key) ? en[key] : key;
  }

  function tt(key, vars, l) { return fill(t(key, l), vars); }

  function htmlPack(l) {
    return (data.html && data.html[l]) || {};
  }

  /* ---- capture the English DOM once ------------------------------------- */
  var textNodes = [], htmlNodes = [], ariaNodes = [], phNodes = [];
  Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'),
    function (el) { textNodes.push({ el: el, key: el.getAttribute('data-i18n'), en: el.textContent }); });
  Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-html]'),
    function (el) { htmlNodes.push({ el: el, key: el.getAttribute('data-i18n-html'), en: el.innerHTML }); });
  Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-aria]'),
    function (el) { ariaNodes.push({ el: el, key: el.getAttribute('data-i18n-aria'), en: el.getAttribute('aria-label') || '' }); });
  Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-placeholder]'),
    function (el) { phNodes.push({ el: el, key: el.getAttribute('data-i18n-placeholder'), en: el.getAttribute('placeholder') || '' }); });
  var altNodes = [];
  Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-alt]'),
    function (el) { altNodes.push({ el: el, key: el.getAttribute('data-i18n-alt'), en: el.getAttribute('alt') || '' }); });

  var records = [];
  Array.prototype.forEach.call(
    document.querySelectorAll('.right-column li.pub-item[id]'), function (li) {
      var idea = li.querySelector('.pub-idea');
      var btn = li.querySelector('.pub-figure-btn');
      var img = li.querySelector('.pub-figure img');
      var capLabel = li.querySelector('figcaption .pub-figure-label');
      var capSrc = li.querySelector('figcaption .pub-figure-src');
      records.push({
        id: li.id, idea: idea, btn: btn, img: img,
        capLabel: capLabel, capSrc: capSrc,
        authors: li.querySelector('.pub-authors'),
        en: {
          idea: idea ? idea.textContent : '',
          label: btn ? (btn.getAttribute('data-figure-label') || '') : '',
          locator: btn ? (btn.getAttribute('data-figure-locator') || '') : '',
          buttonIdea: btn ? (btn.getAttribute('data-figure-idea') || '') : '',
          aria: btn ? (btn.getAttribute('aria-label') || '') : '',
          alt: img ? (img.getAttribute('alt') || '') : '',
          capLabel: capLabel ? capLabel.textContent : '',
          capSrc: capSrc ? capSrc.textContent : '',
          authors: li.querySelector('.pub-authors')
            ? li.querySelector('.pub-authors').textContent : ''
        }
      });
    });

  var featured = [];
  Array.prototype.forEach.call(document.querySelectorAll('.featured-card'),
    function (card) {
      var link = card.querySelector('.featured-card-link');
      var idea = card.querySelector('.featured-idea');
      var track = card.querySelector('.featured-track');
      var more = card.querySelector('.featured-more');
      featured.push({
        id: link ? String(link.getAttribute('href') || '').replace(/^#/, '') : '',
        idea: idea, track: track, more: more,
        en: {
          idea: idea ? idea.textContent : '',
          track: track ? track.textContent : '',
          more: more ? more.textContent : ''
        }
      });
    });

  var metaTags = Array.prototype.map.call(
    document.querySelectorAll('meta[name="description"], meta[property="og:title"], ' +
      'meta[property="og:description"], meta[name="twitter:title"], ' +
      'meta[name="twitter:description"]'),
    function (tag) { return { tag: tag, en: tag.getAttribute('content') || '' }; });
  var titleEn = document.title;

  var buttons = Array.prototype.slice.call(group.querySelectorAll('.lang-btn'));

  /* ---- apply ------------------------------------------------------------- */
  function put(node, key, en, zh) {
    if (!node) { return; }
    node.textContent = (lang === DEFAULT || !zh) ? en : zh;
  }

  function putAttr(node, attr, en, zh) {
    if (!node) { return; }
    var value = (lang === DEFAULT || !zh) ? en : zh;
    if (value) { node.setAttribute(attr, value); }
    else { node.removeAttribute(attr); }
  }

  function trackLabel(value) {
    if (lang === DEFAULT) { return value; }
    var map = (data.track_labels && data.track_labels[lang]) || {};
    return String(value).split(' · ').map(function (part) {
      var key = part.trim();
      return map[key] || part;
    }).join(' · ');
  }

  function applyTopics() {
    var map = (data.topics && data.topics[lang]) || {};
    var en = (data.topics && data.topics.en) || {};
    Array.prototype.forEach.call(document.querySelectorAll('.filter-chip[data-topic]'),
      function (chip) {
        var slug = chip.getAttribute('data-topic');
        var label = map[slug] || en[slug];
        if (label) { chip.textContent = label; }
      });
  }

  function applyRecords() {
    var rec = (data.records && data.records[lang]) || {};
    /* the author overrides exist only for the translated language, but the
       English value must be written back too — so test on the translated map
       and let put() pick the language */
    var auth = (data.authors && data.authors['zh-CN']) || {};
    records.forEach(function (r) {
      var zh = rec[r.id];
      put(r.idea, null, r.en.idea, zh ? zh.idea : null);
      putAttr(r.btn, 'data-figure-label', r.en.label, zh ? zh.label : null);
      putAttr(r.btn, 'data-figure-locator', r.en.locator, zh ? zh.locator : null);
      putAttr(r.btn, 'data-figure-idea', r.en.buttonIdea, zh ? zh.idea : null);
      putAttr(r.btn, 'aria-label', r.en.aria,
        zh ? tt('figure.enlarge', { idea: zh.idea }) : null);
      put(r.capLabel, null, r.en.capLabel, zh ? zh.label : null);
      put(r.capSrc, null, r.en.capSrc, zh ? zh.locator : null);
      putAttr(r.img, 'alt', r.en.alt, zh ? zh.alt : null);
      if (r.authors && auth[r.id]) {
        put(r.authors, null, r.en.authors, auth[r.id]);
      }
    });
    featured.forEach(function (f) {
      var zh = rec[f.id];
      put(f.idea, null, f.en.idea, zh ? zh.idea : null);
      put(f.more, null, f.en.more, lang === DEFAULT ? null : t('featured.more'));
      if (f.track) { f.track.textContent = trackLabel(f.en.track); }
    });
  }

  function applyText() {
    textNodes.forEach(function (n) {
      var value = (lang === DEFAULT) ? null : pack(lang)[n.key];
      n.el.textContent = value || n.en;
    });
    htmlNodes.forEach(function (n) {
      var value = (lang === DEFAULT) ? null : htmlPack(lang)[n.key];
      if (value) {
        var year = /(\d{4})/.exec(n.en);
        n.el.innerHTML = fill(value, { year: year ? year[1] : new Date().getFullYear() });
      } else {
        n.el.innerHTML = n.en;
      }
    });
    ariaNodes.forEach(function (n) {
      var value = (lang === DEFAULT) ? null : pack(lang)[n.key];
      n.el.setAttribute('aria-label', value || n.en);
    });
    phNodes.forEach(function (n) {
      var value = (lang === DEFAULT) ? null : pack(lang)[n.key];
      n.el.setAttribute('placeholder', value || n.en);
    });
    altNodes.forEach(function (n) {
      var value = (lang === DEFAULT) ? null : pack(lang)[n.key];
      n.el.setAttribute('alt', value || n.en);
    });
  }

  function applyMeta() {
    var meta = (data.meta && data.meta[lang]) || {};
    document.title = (lang === DEFAULT || !meta.title) ? titleEn
      : meta.title;
    metaTags.forEach(function (m) {
      var name = m.tag.getAttribute('name') || m.tag.getAttribute('property') || '';
      var zhValue = /title/.test(name)
        ? (meta.title || '')
        : (meta.description || '');
      m.tag.setAttribute('content',
        (lang === DEFAULT || !zhValue) ? m.en : zhValue);
    });
  }

  function applySwitcher() {
    buttons.forEach(function (btn) {
      var code = normalise(btn.getAttribute('data-lang')) || DEFAULT;
      var on = code === lang;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      var label = t(code === 'zh-CN' ? 'lang.zh' : 'lang.en');
      if (label && label !== (code === 'zh-CN' ? 'lang.zh' : 'lang.en')) {
        btn.setAttribute('aria-label', label);
      }
    });
    group.setAttribute('aria-label', t('lang.group'));
  }

  function apply() {
    root.setAttribute('lang', lang);
    root.setAttribute('data-lang', lang);
    applyText();
    applyRecords();
    applyTopics();
    applyMeta();
    applySwitcher();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  /* ---- scroll anchor: keep the reader where they were -------------------- */
  function barHeight() {
    var bar = document.querySelector('.topbar');
    return bar ? Math.round(bar.getBoundingClientRect().height) : 0;
  }

  /* Only elements that actually occupy a box can be a scroll anchor: a
     filtered-out publication (display:none) reports an all-zero rect whose top
     would otherwise win and send the reader to a hidden row, #empty or the
     reset button. */
  function isRendered(el) {
    if (!el || el.getClientRects().length === 0) { return false; }
    var cs = window.getComputedStyle(el);
    if (!cs || cs.display === 'none' || cs.visibility === 'hidden') { return false; }
    return true;
  }

  function captureAnchor() {
    var bar = barHeight(), best = null;
    /* the fragment the reader is actually on is the anchor worth keeping, even
       when the language change makes the panel above it taller */
    var hashId = (window.location.hash || '').replace(/^#/, '');
    if (hashId) {
      var named = document.getElementById(hashId);
      if (named && isRendered(named)) {
        var namedTop = named.getBoundingClientRect().top - barHeight();
        if (namedTop >= -4 && namedTop <= 160) {
          return { id: hashId, offset: namedTop };
        }
      }
    }
    Array.prototype.forEach.call(
      document.querySelectorAll('.right-column [id]'), function (el) {
        if (!isRendered(el)) { return; }
        var top = el.getBoundingClientRect().top - bar;
        /* the visible element closest to the bar, i.e. the largest top <= 4 */
        if (top <= 4 && (!best || top > best.offset)) {
          best = { id: el.id, offset: top };
        }
      });
    return best;
  }

  function restoreAnchor(anchor) {
    if (!anchor) { return; }
    var el = document.getElementById(anchor.id);
    if (!el || !isRendered(el)) { return; }
    var delta = (el.getBoundingClientRect().top - barHeight()) - anchor.offset;
    if (Math.abs(delta) > 0.5) { window.scrollBy(0, delta); }
  }

  /* ---- switching --------------------------------------------------------- */
  function syncURL(code) {
    var search = (window.location.search || '').replace(/^\?/, '');
    var parts = search.split('&').filter(function (part) {
      return part && part.indexOf('lang=') !== 0;
    });
    parts.push('lang=' + encodeURIComponent(code));
    var url = window.location.pathname + '?' + parts.join('&') +
      (window.location.hash || '');
    try { window.history.replaceState(null, '', url); } catch (e) { /* file:// */ }
  }

  function setLang(code, options) {
    var next = normalise(code) || DEFAULT;
    if (SUPPORTED.indexOf(next) === -1) { next = DEFAULT; }
    var opts = options || {};
    var anchor = captureAnchor();
    lang = next;
    apply();
    restoreAnchor(anchor);
    /* a language switch reflows (labels wrap differently), and the reflow is
       not finished in the frame that swapped the text: keep the captured
       anchor true for a couple more frames so the reader cannot drift */
    var settlePasses = 0;
    var settle = function () {
      restoreAnchor(anchor);
      settlePasses += 1;
      if (settlePasses < 3) { window.requestAnimationFrame(settle); }
    };
    window.requestAnimationFrame(settle);
    if (opts.persist) {
      try { window.localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
    }
    if (opts.syncURL) { syncURL(next); }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = normalise(btn.getAttribute('data-lang')) || DEFAULT;
      if (code === lang) { return; }
      /* keep the hash, the filter state, the pin and the theme: only text
         changes, and the reader stays on the same anchor */
      setLang(code, { persist: true, syncURL: true });
    });
  });

  YB_I18N = {
    lang: function () { return lang; },
    t: t,
    tt: tt,
    default: DEFAULT,
    set: setLang,
    refresh: apply,
    /* The Chinese side of an entry's search corpus: the localised idea plus its
       synonym list. The explorer folds this into the shipped English baseline
       once, at start-up, so _data/i18n.json stays the authority for Chinese
       search terms instead of depending on a build-time re-generation. */
    corpus: function (id) {
      var out = [];
      var rec = (data.records && data.records['zh-CN']) || {};
      var syn = (data.search && data.search['zh-CN']) || {};
      if (rec[id] && rec[id].idea) { out.push(rec[id].idea); }
      if (syn[id]) { out.push(Array.isArray(syn[id]) ? syn[id].join(' ') : String(syn[id])); }
      return out.join(' ');
    }
  };

  apply();
})();

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

  /* The same string the switcher would use, so the control never goes blank
     if the locale island is missing. */
  function label(theme) {
    var key = theme === 'dark' ? 'theme.toLight' : 'theme.toDark';
    return YB_I18N ? YB_I18N.t(key) : null;
  }

  function apply(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      var text = label(theme) ||
        (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      toggle.setAttribute('title', text);
      toggle.setAttribute('aria-label', text);
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

  document.addEventListener('langchange', function () { apply(current(), false); });

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

  /* One corpus per entry, assembled once at start-up: the English baseline
     shipped in the markup (title / authors / venue / year / core idea) plus the
     Chinese half from the locale island (localised idea + search synonyms).
     Filtering always reads this string, so a language switch can never append
     twice and editing _data/i18n.json cannot drift away from the search index. */
  var corpus = {};
  pubs.forEach(function (item) {
    var base = item.getAttribute('data-search') || item.textContent || '';
    var zh = (YB_I18N && item.id) ? YB_I18N.corpus(item.id) : '';
    corpus[item.id] = (base + ' ' + zh).toLowerCase();
  });

  /* The pre-built index, with the entry's own text as the safety net. */
  function haystack(item) {
    if (item.id && corpus.hasOwnProperty(item.id)) { return corpus[item.id]; }
    return (item.getAttribute('data-search') || item.textContent || '')
      .toLowerCase();
  }

  /* The hint quotes the real number of publications, in both languages, from
     the same locale island as the status line. */
  function renderHint() {
    var hint = document.getElementById('pub-filter-hint');
    if (!hint) { return; }
    if (!hint.getAttribute('data-en-hint')) {
      hint.setAttribute('data-en-hint', hint.textContent || '');
    }
    var value = (lang() === 'en' && !YB_I18N) ? null
      : T('panel.hint', { pubs: pubs.length });
    hint.textContent = value || hint.getAttribute('data-en-hint');
  }
  function lang() { return YB_I18N ? YB_I18N.lang() : 'en'; }
  document.addEventListener('langchange', renderHint);

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

  /* Every visible string here comes from the locale island, so the count and
     the sentence stay one data source in both languages. English falls back to
     the same wording the module used before localisation existed. */
  function T(key, vars) {
    if (YB_I18N) { return YB_I18N.tt(key, vars); }
    var fallbacks = {
      'status.idle': '{pubs} publications + {reports} technical reports.',
      'status.filter': 'Showing {shown} of {pubs} publications (+ {reports} technical reports).',
      'status.all': 'Showing all {pubs} publications (+ {reports} technical reports).',
      'status.empty': 'No publications match these filters (+ {reports} technical reports).',
      'toggle.show': 'Show all publications',
      'toggle.hide': 'Hide publications',
      'panel.hint': 'Use the filters or search below, or show all {pubs} publications.'
    };
    return String(fallbacks[key] || key).replace(/\{(\w+)\}/g, function (whole, name) {
      return (vars && name in vars) ? String(vars[name]) : whole;
    });
  }

  function dropReports(text) {
    return reports ? text : text.replace(/\s*\(\+[^)]*\)/, '');
  }

  function statusText(shown) {
    var vars = { pubs: pubs.length, reports: reports, shown: shown };
    if (mode === 'idle') { return dropReports(T('status.idle', vars)); }
    if (mode === 'all') { return dropReports(T('status.all', vars)); }
    if (!shown) { return dropReports(T('status.empty', vars)); }
    return dropReports(T('status.filter', vars));
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
        ? T('toggle.hide') : T('toggle.show');
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
  renderHint();
  if (window.location.hash) {
    reveal(window.location.hash, false);
    /* the explorer just changed the page height (idle hides every row), which
       invalidates the jump the browser made before the script ran: put the
       reader back on the fragment, with the sticky bar's offset respected */
    var frag = document.getElementById(
      window.location.hash.replace(/^#/, ''));
    if (frag && !frag.closest('[data-filter-hidden="true"]')) {
      /* land on it at once — a cold-load fragment should not animate in */
      var gap = parseFloat(window.getComputedStyle(frag).scrollMarginTop) || 0;
      var y = frag.getBoundingClientRect().top + window.pageYOffset - gap;
      try { window.scrollTo({ top: y, behavior: 'instant' }); }
      catch (e) { window.scrollTo(0, y); }
    }
  }

  /* A language switch re-renders only the generated sentences: the mode, the
     controls, the reveal pin and any deep link stay exactly as they were. */
  document.addEventListener('langchange', function () { apply(); });
})();
