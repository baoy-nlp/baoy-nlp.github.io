<h2 id="about-me">About Me</h2>

I am a Principal Research Scientist at [ByteDance Seed](https://seed.bytedance.com/), working on large language models, multilingual and multimodal intelligence, and AI for Science. My current research focuses on reliable LLM reasoning and alignment, machine translation, and generative modeling for scientific discovery.

I received my Ph.D. from [Nanjing University](https://grawww.nju.edu.cn/main.htm) in 2022, advised by Prof. [Shujian Huang](http://nlp.nju.edu.cn/huangsj/) and Prof. [Jiajun Chen](https://cs.nju.edu.cn/chenjiajun/). During my doctoral studies, I interned at ByteDance AI Lab under the mentorship of Prof. [Hao Zhou](https://zhouh.github.io/) and Prof. [Lei Li](https://lileicc.github.io/), where I worked on non-autoregressive generation and latent-variable models.

<!--<center><a href="mailto:nlp.baoy@gmail.com">[Email]</a> <a href="./files/baoy_CV.pdf">[CV]</a></center>-->

<h2 id="news">Recent Highlights</h2>

<ol class="highlight-timeline" id="highlight-timeline">
  <li class="highlight-item">
    <time class="highlight-date" datetime="2026-07">2026.07</time>
    <span class="highlight-axis" aria-hidden="true"></span>
    <p class="highlight-event"><strong>"Improving Long-Context Translation via Self-Supervised Dual Learning" is published in ACL 2026</strong> (<a href="https://aclanthology.org/2026.acl-long.1257/">paper</a>).</p>
  </li>
  <li class="highlight-item">
    <time class="highlight-date" datetime="2026-04">2026.04</time>
    <span class="highlight-axis" aria-hidden="true"></span>
    <p class="highlight-event"><strong>DuPO is published at ICLR 2026 (poster)</strong> (<a href="https://iclr.cc/virtual/2026/poster/10009423">official page</a>).</p>
  </li>
  <li class="highlight-item">
    <time class="highlight-date" datetime="2025-07">2025.07</time>
    <span class="highlight-axis" aria-hidden="true"></span>
    <p class="highlight-event"><strong>Seed-X</strong> released: a 7B-parameter multilingual translation LLM with open-sourced models and demos (<a href="https://arxiv.org/abs/2507.13618">arXiv</a>, <a href="https://huggingface.co/collections/ByteDance-Seed/seed-x-6878753f2858bc17afa78543">Hugging Face</a>, <a href="https://huggingface.co/spaces/ByteDance-Seed/Seed-X">Demo</a>).</p>
  </li>
  <li class="highlight-item">
    <time class="highlight-date" datetime="2025-07">2025.07</time>
    <span class="highlight-axis" aria-hidden="true"></span>
    <p class="highlight-event"><strong>Seed LiveInterpret 2.0</strong> released: an end-to-end simultaneous speech-to-speech translation system with 3-second latency (70% reduction from prior solutions) and voice cloning (<a href="https://arxiv.org/abs/2507.17527">Technical Report</a>, <a href="https://seed.bytedance.com/zh/seed_liveinterpret">Homepage</a>, <a href="https://console.volcengine.com/ark/region:ark+cn-beijing/experience/voice?type=SI">Demo</a>).</p>
  </li>
</ol>

<!-- Compact cards for the selected work, written from the content manifest by
     artifacts/webui/integrate_featured.py, in theme order. Each card links to
     the full entry it summarises (#pub-<key> in this list, #report-<key> in
     Technical Reports) instead of repeating the record here. While the list is
     empty site.css hides the whole block, so a manifest-less build never shows
     a bare heading. -->
<section class="featured-research" aria-labelledby="featured-research">
  <h2 id="featured-research">Featured Research</h2>
  <ol class="featured-list" id="featured-cards">
  <li class="featured-card">
    <a class="featured-card-link" href="#pub-dupo">
      <span class="featured-thumb"><img src="/assets/figures/idea-dupo.webp" alt="" width="640" height="360" loading="lazy" decoding="async"></span>
      <span class="featured-body">
        <span class="featured-title">DuPO: Enabling Reliable Self-Verification via Dual Preference Optimization</span>
        <span class="featured-meta">ICLR 2026 &middot; <span class="featured-track">LLM &amp; Alignment</span></span>
        <span class="featured-idea">Turns a primal task into known and unknown components, reconstructs the unknown part as a dual task, and aligns the model with generalized duality rewards, with no verifiable labels.</span>
        <span class="featured-more">Full entry ↓</span>
      </span>
    </a>
  </li>
  <li class="featured-card">
    <a class="featured-card-link" href="#report-seed-liveinterpret-2-0">
      <span class="featured-thumb"><img src="/assets/figures/liveinterpret_fig2_system.webp" alt="" width="640" height="360" loading="lazy" decoding="async"></span>
      <span class="featured-body">
        <span class="featured-title">Seed LiveInterpret 2.0: End-to-end Simultaneous Speech-to-speech Translation with Your Voice</span>
        <span class="featured-meta">Technical Report 2025 &middot; <span class="featured-track">Speech Translation</span></span>
        <span class="featured-idea">An end-to-end duplex speech-to-speech model performs simultaneous interpretation, keeps each speaker&#x27;s own voice, and cuts cloned-speech latency to about three seconds.</span>
        <span class="featured-more">Full entry ↓</span>
      </span>
    </a>
  </li>
  <li class="featured-card">
    <a class="featured-card-link" href="#pub-decompopt">
      <span class="featured-thumb"><img src="/assets/figures/idea-decompopt.webp" alt="" width="640" height="360" loading="lazy" decoding="async"></span>
      <span class="featured-body">
        <span class="featured-title">DecompOpt: Controllable and Decomposed Diffusion Models for Structure-based Molecular Optimization</span>
        <span class="featured-meta">ICLR 2024 &middot; <span class="featured-track">Diffusion &amp; AI4S</span></span>
        <span class="featured-idea">Iteratively optimizes a ligand molecule: sample a reference arm per subpocket, generate and decompose molecules with a controllable diffusion model, then replace poor arms.</span>
        <span class="featured-more">Full entry ↓</span>
      </span>
    </a>
  </li>
  <li class="featured-card">
    <a class="featured-card-link" href="#pub-latent-glat">
      <span class="featured-thumb"><img src="/assets/figures/latent-glat.webp" alt="" width="640" height="360" loading="lazy" decoding="async"></span>
      <span class="featured-body">
        <span class="featured-title">latent-GLAT: Glancing at Latent Variables for Parallel Text Generation</span>
        <span class="featured-meta">ACL 2022 &middot; <span class="featured-track">Translation · Language Generation</span></span>
        <span class="featured-idea">Add discrete latent variables to a glancing non-autoregressive model, learning target categorical codes via vector quantization to ease the multi-modality problem in parallel generation.</span>
        <span class="featured-more">Full entry ↓</span>
      </span>
    </a>
  </li>
  </ol>
</section>

<h2 id="publications">Publications/Preprints</h2>

> <a href="https://scholar.google.com/citations?authuser=1&user=TqMb6nMAAAAJ">[Full list]</a> 
> \[*: equal contributions\] \[<ins>interns/students I mentored</ins>\]

<!-- Publication explorer. The four topic slugs match the fixed vocabulary of
     the content manifest; data-topics, data-year and data-search are written
     onto each publication entry by artifacts/webui/integrate_featured.py.
     Topic / year / search combine with AND. The explorer starts idle (no
     entry on screen, just this panel) and every hiding rule in site.css is
     scoped to `html.js`, so a browser without JavaScript — or a page where
     site.js failed — shows all 20 publications. Technical reports sit in
     their own section and are never filtered. -->
<div class="pub-filter" id="pub-filter" role="group" aria-labelledby="pub-filter-label">
  <p class="pub-filter-label" id="pub-filter-label">Find a publication</p>
  <p class="pub-filter-hint" id="pub-filter-hint">Use the filters or search below, or show all 20 publications.</p>
  <div class="pub-filter-search">
    <label class="filter-label" for="filter-search">Search</label>
    <input class="filter-search" id="filter-search" type="search"
           placeholder="title, author, venue, year, idea" autocomplete="off">
  </div>
  <div class="pub-filter-secondary">
    <div class="pub-filter-topics" role="group" aria-label="Topic">
      <button type="button" class="filter-chip" data-topic="all" aria-pressed="false">All topics</button>
      <button type="button" class="filter-chip" data-topic="llm-alignment" aria-pressed="false">LLM &amp; Alignment</button>
      <button type="button" class="filter-chip" data-topic="translation" aria-pressed="false">Translation</button>
      <button type="button" class="filter-chip" data-topic="diffusion-ai4s" aria-pressed="false">Diffusion &amp; AI4S</button>
      <button type="button" class="filter-chip" data-topic="language-generation" aria-pressed="false">Language Generation</button>
    </div>
    <div class="pub-filter-field">
      <label class="filter-label" for="filter-year">Year</label>
      <select class="filter-select" id="filter-year">
        <option value="all" selected>All years</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  </div>
  <div class="pub-filter-actions">
    <button type="button" class="filter-toggle" id="filter-toggle" aria-pressed="false">Show all publications</button>
  </div>
  <p class="pub-filter-status" id="filter-status" role="status" aria-live="polite">20 publications + 4 technical reports.</p>
  <p class="pub-filter-empty" id="filter-empty" hidden>No publications match these filters.</p>
  <p class="pub-filter-reset-wrap" id="filter-reset-wrap" hidden>
    <button type="button" class="filter-reset" id="filter-reset">Reset filters</button>
  </p>
</div>

<h3 class="pub-year">2026</h3>

<ol class="pub-list">
  <li class="pub-item pub-item--figure" id="pub-dupo" data-topics="llm-alignment" data-year="2026" data-search="2026 iclr 2026 original figure figure 1, page 3 dupo: enabling reliable self-verification via dual preference optimization shuaijie she , yu bao , yu lu, lu xu, tao li, wenhao zhu, jianbing zhang, shujian huang, shanbo cheng, lu lu, yuxuan wang iclr 2026 paper pdf turns a primal task into known and unknown components, reconstructs the unknown part as a dual task, and aligns the model with generalized duality rewards, with no verifiable labels.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 1, page 3"
              data-figure-idea="Turns a primal task into known and unknown components, reconstructs the unknown part as a dual task, and aligns the model with generalized duality rewards, with no verifiable labels."
              data-figure-source="https://proceedings.iclr.cc/paper_files/paper/2026/file/332aa4b65f636f7187982ae5bb16e50a-Paper-Conference.pdf"
              data-figure-source-text="https://proceedings.iclr.cc/paper_files/paper/2026/file/332aa4b65f636f7187982ae5bb16e50a-Paper-Conference.pdf"
              aria-label="Enlarge figure: Turns a primal task into known and unknown components, reconstructs the unknown part as a dual task, and aligns the model with generalized duality rewards, with no verifiable labels.">
        <img src="/assets/figures/idea-dupo.webp" alt="Three-panel concept figure: (a) non-unique reconstruction of x from y, (b) failure to reconstruct x given y, (c) predicting the unknown component B to preserve uniqueness, the duality challenges DuPO relaxes." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 1, page 3</span></figcaption>
    </figure>
    <a class="pub-title" href="https://iclr.cc/virtual/2026/poster/10009423">DuPO: Enabling Reliable Self-Verification via Dual Preference Optimization</a>
    <div class="pub-authors"><ins>Shuaijie She</ins>, <strong>Yu Bao</strong>, Yu Lu, Lu Xu, Tao Li, Wenhao Zhu, Jianbing Zhang, Shujian Huang, Shanbo Cheng, Lu Lu, Yuxuan Wang</div>
    <div class="pub-meta"><span class="pub-venue">ICLR 2026</span></div>
    <div class="pub-links"><a href="https://iclr.cc/virtual/2026/poster/10009423">Paper</a><a href="https://proceedings.iclr.cc/paper_files/paper/2026/file/332aa4b65f636f7187982ae5bb16e50a-Paper-Conference.pdf">PDF</a></div>
    <p class="pub-idea">Turns a primal task into known and unknown components, reconstructs the unknown part as a dual task, and aligns the model with generalized duality rewards, with no verifiable labels.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-long-context-translation" data-topics="translation llm-alignment" data-year="2026" data-search="2026 acl 2026 original figure figure 1 (page 3) improving long-context translation via self-supervised dual learning shanbo cheng, shuaijie she, yu bao , jianbing zhang, jiajun chen, shujian huang acl 2026 paper pdf round-trip self-supervised dual learning: translate x to y and back to x-hat, reward reconstructability, and add stick/carrot constraints against reward hacking.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 1 (page 3)"
              data-figure-idea="Round-trip self-supervised dual learning: translate x to y and back to x-hat, reward reconstructability, and add Stick/Carrot constraints against reward hacking."
              data-figure-source="https://aclanthology.org/2026.acl-long.1257.pdf"
              data-figure-source-text="https://aclanthology.org/2026.acl-long.1257.pdf"
              aria-label="Enlarge figure: Round-trip self-supervised dual learning: translate x to y and back to x-hat, reward reconstructability, and add Stick/Carrot constraints against reward hacking.">
        <img src="/assets/figures/longdu.webp" alt="Figure 1 of the paper: LongDu training (left) translates input x into candidates y1, y2 and back-translates them into x-hat1, x-hat2, then rewards and optimizes; Long-CIRT evaluation (right) probes the solver with questions Q-x." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 1 (page 3)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://aclanthology.org/2026.acl-long.1257/">Improving Long-Context Translation via Self-Supervised Dual Learning</a>
    <div class="pub-authors">Shanbo Cheng, Shuaijie She, <strong>Yu Bao</strong>, Jianbing Zhang, Jiajun Chen, Shujian Huang</div>
    <div class="pub-meta"><span class="pub-venue">ACL 2026</span></div>
    <div class="pub-links"><a href="https://aclanthology.org/2026.acl-long.1257/">Paper</a><a href="https://aclanthology.org/2026.acl-long.1257.pdf">PDF</a></div>
    <p class="pub-idea">Round-trip self-supervised dual learning: translate x to y and back to x-hat, reward reconstructability, and add Stick/Carrot constraints against reward hacking.</p>
  </li>
</ol>

<h3 class="pub-year">2025</h3>

<ol class="pub-list">
  <li class="pub-item pub-item--figure" id="pub-decomp-dpo" data-topics="diffusion-ai4s llm-alignment" data-year="2025" data-search="2025 tmlr 2025 original figure figure 1, page 4 decomposed direct preference optimization for structure-based drug design xiwei cheng, xiangxin zhou, yuwei yang, yu bao , quanquan gu tmlr 2025 paper pdf aligns a structure-based diffusion model to pharmaceutical preference with multi-granularity pairs, global qed and sa plus decomposable arm and scaffold rewards, under a physics-informed energy constraint.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 1, page 4"
              data-figure-idea="Aligns a structure-based diffusion model to pharmaceutical preference with multi-granularity pairs, global QED and SA plus decomposable arm and scaffold rewards, under a physics-informed energy constraint."
              data-figure-source="https://arxiv.org/pdf/2407.13981"
              data-figure-source-text="https://arxiv.org/pdf/2407.13981"
              aria-label="Enlarge figure: Aligns a structure-based diffusion model to pharmaceutical preference with multi-granularity pairs, global QED and SA plus decomposable arm and scaffold rewards, under a physics-informed energy constraint.">
        <img src="/assets/figures/idea-decompdpo.webp" alt="DecompDpo overview: a diffusion model samples and selects molecule pairs per protein; rewards score global QED and SA, plus arm1, arm2 and scaffold properties; multi-objective preference feeds back through a physics-informed energy constraint." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 1, page 4</span></figcaption>
    </figure>
    <a class="pub-title" href="https://openreview.net/forum?id=dwSpo5DRk8">Decomposed Direct Preference Optimization for Structure-Based Drug Design</a>
    <div class="pub-authors">Xiwei Cheng, Xiangxin Zhou, Yuwei Yang, <strong>Yu Bao</strong>, Quanquan Gu</div>
    <div class="pub-meta"><span class="pub-venue">TMLR 2025</span></div>
    <div class="pub-links"><a href="https://openreview.net/forum?id=dwSpo5DRk8">Paper</a><a href="https://arxiv.org/pdf/2407.13981">PDF</a></div>
    <p class="pub-idea">Aligns a structure-based diffusion model to pharmaceutical preference with multi-granularity pairs, global QED and SA plus decomposable arm and scaffold rewards, under a physics-informed energy constraint.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-trans-zero" data-topics="translation llm-alignment" data-year="2025" data-search="2025 findings of acl 2025 adapted schematic figure 1 (page 4), simplified trans-zero: self-play incentivizes large language models for multilingual translation without parallel data wei zou, sen yang, yu bao , shujian huang, jiajun chen, shanbo cheng findings of acl 2025 paper pdf self-play without parallel data: one llm expands a search tree by merging and mutating candidates, simulates to score them, and harvests preference pairs.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Adapted schematic"
              data-figure-locator="Figure 1 (page 4), simplified"
              data-figure-idea="Self-play without parallel data: one LLM expands a search tree by merging and mutating candidates, simulates to score them, and harvests preference pairs."
              data-figure-source="https://aclanthology.org/2025.findings-acl.637.pdf"
              data-figure-source-text="https://aclanthology.org/2025.findings-acl.637.pdf"
              aria-label="Enlarge figure: Self-play without parallel data: one LLM expands a search tree by merging and mutating candidates, simulates to score them, and harvests preference pairs.">
        <img src="/assets/figures/trans-zero.svg" alt="Schematic of the paper&#x27;s Figure 1: a search tree is initiated from one LLM; G-MCTS cycles selection, expansion (merge or mutate), simulation and back-propagation; the tree is finally harvested into preference pairs." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Adapted schematic</span><span class="pub-figure-src">Figure 1 (page 4), simplified</span></figcaption>
    </figure>
    <a class="pub-title" href="https://aclanthology.org/2025.findings-acl.637/">TRANS-ZERO: Self-Play Incentivizes Large Language Models for Multilingual Translation Without Parallel Data</a>
    <div class="pub-authors">Wei Zou, Sen Yang, <strong>Yu Bao</strong>, Shujian Huang, Jiajun Chen, Shanbo Cheng</div>
    <div class="pub-meta"><span class="pub-venue">Findings of ACL 2025</span></div>
    <div class="pub-links"><a href="https://aclanthology.org/2025.findings-acl.637/">Paper</a><a href="https://aclanthology.org/2025.findings-acl.637.pdf">PDF</a></div>
    <p class="pub-idea">Self-play without parallel data: one LLM expands a search tree by merging and mutating candidates, simulates to score them, and harvests preference pairs.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-enanchored-x2x" data-topics="translation llm-alignment" data-year="2025" data-search="2025 emnlp 2025 original figure figure 2 (page 3) enanchored-x2x: english-anchored optimization for many-to-many translation sen yang, yu bao , yu lu, jiajun chen, shujian huang, shanbo cheng emnlp 2025 paper pdf english-anchored many-to-many translation: compare direct, pivot and english-anchored decoding, then build an english-anchored reward model and cross-lingual preference pairs.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 2 (page 3)"
              data-figure-idea="English-anchored many-to-many translation: compare direct, pivot and English-anchored decoding, then build an English-anchored reward model and cross-lingual preference pairs."
              data-figure-source="https://aclanthology.org/2025.emnlp-main.1081.pdf"
              data-figure-source-text="https://aclanthology.org/2025.emnlp-main.1081.pdf"
              aria-label="Enlarge figure: English-anchored many-to-many translation: compare direct, pivot and English-anchored decoding, then build an English-anchored reward model and cross-lingual preference pairs.">
        <img src="/assets/figures/enanchored.webp" alt="Figure 2 of the paper: (a) compares Direct, Pivot and En-Anchored translation; (b) samples German candidates, scores them by BLEU against the English reference and forms En2De preference pairs; (c) samples Chinese candidates, scores them with a reward model and forms De2Zh preference pairs." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 2 (page 3)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://aclanthology.org/2025.emnlp-main.1081/">EnAnchored-X2X: English-Anchored Optimization for Many-to-Many Translation</a>
    <div class="pub-authors">Sen Yang, <strong>Yu Bao</strong>, Yu Lu, Jiajun Chen, Shujian Huang, Shanbo Cheng</div>
    <div class="pub-meta"><span class="pub-venue">EMNLP 2025</span></div>
    <div class="pub-links"><a href="https://aclanthology.org/2025.emnlp-main.1081/">Paper</a><a href="https://aclanthology.org/2025.emnlp-main.1081.pdf">PDF</a></div>
    <p class="pub-idea">English-anchored many-to-many translation: compare direct, pivot and English-anchored decoding, then build an English-anchored reward model and cross-lingual preference pairs.</p>
  </li>
</ol>

<h3 class="pub-year">2024</h3>

<ol class="pub-list">
  <li class="pub-item pub-item--figure" id="pub-decompopt" data-topics="diffusion-ai4s" data-year="2024" data-search="2024 iclr 2024 original figure figure 2, page 4 decompopt: controllable and decomposed diffusion models for structure-based molecular optimization xiangxin zhou *, xiwei cheng *, yuwei yang, yu bao , liang wang, quanquan gu iclr 2024 paper pdf iteratively optimizes a ligand molecule: sample a reference arm per subpocket, generate and decompose molecules with a controllable diffusion model, then replace poor arms.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 2, page 4"
              data-figure-idea="Iteratively optimizes a ligand molecule: sample a reference arm per subpocket, generate and decompose molecules with a controllable diffusion model, then replace poor arms."
              data-figure-source="https://arxiv.org/pdf/2403.13829"
              data-figure-source-text="https://arxiv.org/pdf/2403.13829"
              aria-label="Enlarge figure: Iteratively optimizes a ligand molecule: sample a reference arm per subpocket, generate and decompose molecules with a controllable diffusion model, then replace poor arms.">
        <img src="/assets/figures/idea-decompopt.webp" alt="DecompOpt iteration: a controllable decomposed diffusion model runs reverse and forward processes from t=999 noise to t=0; arm conditions encoded from reference arms steer generation; generated ligands are sampled and decomposed, poor arms replaced." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 2, page 4</span></figcaption>
    </figure>
    <a class="pub-title" href="https://openreview.net/forum?id=Y3BbxvAQS9">DecompOpt: Controllable and Decomposed Diffusion Models for Structure-based Molecular Optimization</a>
    <div class="pub-authors"><ins>Xiangxin Zhou</ins>*, <ins>Xiwei Cheng</ins>*, Yuwei Yang, <strong>Yu Bao</strong>, Liang Wang, Quanquan Gu</div>
    <div class="pub-meta"><span class="pub-venue">ICLR 2024</span></div>
    <div class="pub-links"><a href="https://openreview.net/forum?id=Y3BbxvAQS9">Paper</a><a href="https://arxiv.org/pdf/2403.13829">PDF</a></div>
    <p class="pub-idea">Iteratively optimizes a ligand molecule: sample a reference arm per subpocket, generate and decompose molecules with a controllable diffusion model, then replace poor arms.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-binding-adaptive-diffusion" data-topics="diffusion-ai4s" data-year="2024" data-search="2024 aaai 2024 original figure figure 2, page 3 binding-adaptive diffusion models for structure-based drug design zhilin huang, ling yang, zaixi zhang, xiangxin zhou, yu bao , xiawu zheng, yuwei yang, yu wang, wenming yang aaai 2024 paper pdf alternates complex-to-subcomplex and subcomplex-to-complex interaction blocks with a gated transmission module, letting the diffusion model adapt ligand generation to each binding site.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 2, page 3"
              data-figure-idea="Alternates complex-to-subcomplex and subcomplex-to-complex interaction blocks with a gated transmission module, letting the diffusion model adapt ligand generation to each binding site."
              data-figure-source="https://arxiv.org/pdf/2402.18583"
              data-figure-source-text="https://arxiv.org/pdf/2402.18583"
              aria-label="Enlarge figure: Alternates complex-to-subcomplex and subcomplex-to-complex interaction blocks with a gated transmission module, letting the diffusion model adapt ligand generation to each binding site.">
        <img src="/assets/figures/idea-binddm.webp" alt="BindDM overview: complex and subcomplex graphs exchange information through EGNN-based S2C and C2S interaction modules, with panels detailing scoring, gated transmission, filtering and broadcasting; a legend explains every block." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 2, page 3</span></figcaption>
    </figure>
    <a class="pub-title" href="https://ojs.aaai.org/index.php/AAAI/article/view/29162">Binding-Adaptive Diffusion Models for Structure-Based Drug Design</a>
    <div class="pub-authors">Zhilin Huang, Ling Yang, Zaixi Zhang, Xiangxin Zhou, <strong>Yu Bao</strong>, Xiawu Zheng, Yuwei Yang, Yu Wang, Wenming Yang</div>
    <div class="pub-meta"><span class="pub-venue">AAAI 2024</span></div>
    <div class="pub-links"><a href="https://ojs.aaai.org/index.php/AAAI/article/view/29162">Paper</a><a href="https://arxiv.org/pdf/2402.18583">PDF</a></div>
    <p class="pub-idea">Alternates complex-to-subcomplex and subcomplex-to-complex interaction blocks with a gated transmission module, letting the diffusion model adapt ligand generation to each binding site.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-pobe" data-topics="language-generation" data-year="2024" data-search="2024 软件学报 (journal of software) 2024 original figure 图 1（figure 1, 模型总览）— 全文 https://www.jos.org.cn/html/2024/9/6956.htm ，图 https://www.jos.org.cn/html/2024/9/pic/6956-1.jpg pobe: 一种基于生成式模型的分布外文本检测方法 欧阳亚文, 高源, 宗石, 鲍宇 , 戴新宇 软件学报 (journal of software) 2024 paper pdf generation-based ood text detection: combine language-model prediction with knn retrieval, take the higher score, then divide by a pretrained gpt-2 probability to calibrate bias.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="图 1（Figure 1, 模型总览）— 全文 https://www.jos.org.cn/html/2024/9/6956.htm ，图 https://www.jos.org.cn/html/2024/9/PIC/6956-1.jpg"
              data-figure-idea="Generation-based OOD text detection: combine language-model prediction with KNN retrieval, take the higher score, then divide by a pretrained GPT-2 probability to calibrate bias."
              data-figure-source="https://www.jos.org.cn/jos/article/abstract/6956"
              data-figure-source-text="https://www.jos.org.cn/jos/article/abstract/6956"
              aria-label="Enlarge figure: Generation-based OOD text detection: combine language-model prediction with KNN retrieval, take the higher score, then divide by a pretrained GPT-2 probability to calibrate bias.">
        <img src="/assets/figures/pobe.webp" alt="Figure 1 of the paper: input x is scored by a prediction module p-LM and a retrieval module p-KNN; the selection module takes p-max; a pretrained GPT-2 gives p-GPT2; Pobe(x)=p-max(x)/p-GPT2(x) separates in-distribution from out-of-distribution text." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">图 1（Figure 1, 模型总览）— 全文 https://www.jos.org.cn/html/2024/9/6956.htm ，图 https://www.jos.org.cn/html/2024/9/PIC/6956-1.jpg</span></figcaption>
    </figure>
    <a class="pub-title" href="https://doi.org/10.13328/j.cnki.jos.006956">Pobe: 一种基于生成式模型的分布外文本检测方法</a>
    <div class="pub-authors">欧阳亚文, 高源, 宗石, <strong>鲍宇</strong>, 戴新宇</div>
    <div class="pub-meta"><span class="pub-venue">软件学报 (Journal of Software) 2024</span></div>
    <div class="pub-links"><a href="https://doi.org/10.13328/j.cnki.jos.006956">Paper</a><a href="https://www.jos.org.cn/jos/ch/reader/create_pdf.aspx?falg=1&amp;file_no=6956&amp;quarter_id=9&amp;year_id=2024">PDF</a></div>
    <p class="pub-idea">Generation-based OOD text detection: combine language-model prediction with KNN retrieval, take the higher score, then divide by a pretrained GPT-2 probability to calibrate bias.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-edt" data-topics="language-generation llm-alignment" data-year="2024" data-search="2024 preprint 2024 original figure figure 2, page 4 (right column) edt: improving large language models&#x27; generation by entropy-based dynamic temperature sampling shimao zhang , yu bao , shujian huang preprint 2024 paper pdf chooses the sampling temperature at each decoding step from the entropy of the predicted token distribution, raising temperature when the model is uncertain.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 2, page 4 (right column)"
              data-figure-idea="Chooses the sampling temperature at each decoding step from the entropy of the predicted token distribution, raising temperature when the model is uncertain."
              data-figure-source="https://arxiv.org/pdf/2403.14541"
              data-figure-source-text="https://arxiv.org/pdf/2403.14541"
              aria-label="Enlarge figure: Chooses the sampling temperature at each decoding step from the entropy of the predicted token distribution, raising temperature when the model is uncertain.">
        <img src="/assets/figures/idea-edt.webp" alt="EDT decoding loop: the LLM reads a sequence and emits logits; softmax gives the next-token probability distribution; its entropy sets the temperature T; the resampled new distribution yields the next token." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 2, page 4 (right column)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://arxiv.org/abs/2403.14541">EDT: Improving Large Language Models' Generation by Entropy-based Dynamic Temperature Sampling</a>
    <div class="pub-authors"><ins>Shimao Zhang</ins>, <strong>Yu Bao</strong>, Shujian Huang</div>
    <div class="pub-meta"><span class="pub-venue">Preprint 2024</span></div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2403.14541">Paper</a><a href="https://arxiv.org/pdf/2403.14541">PDF</a></div>
    <p class="pub-idea">Chooses the sampling temperature at each decoding step from the entropy of the predicted token distribution, raising temperature when the model is uncertain.</p>
  </li>
</ol>

<h3 class="pub-year">2023</h3>

<ol class="pub-list">
  <li class="pub-item pub-item--figure" id="pub-decompdiff" data-topics="diffusion-ai4s" data-year="2023" data-search="2023 icml 2023 original figure figure 2, page 4 decompdiff: diffusion models with decomposed priors for structure-based drug design jiaqi guan *, xiangxin zhou *, yuwei yang, yu bao , jian peng, jianzhu ma, qiang liu, liang wang, quanquan gu icml 2023 paper pdf generates 3d ligands from decomposed priors, separate arm and scaffold centers, denoised by an equivariant heterogeneous-graph network with validity guidance for clash-free, connected molecules.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 2, page 4"
              data-figure-idea="Generates 3D ligands from decomposed priors, separate arm and scaffold centers, denoised by an equivariant heterogeneous-graph network with validity guidance for clash-free, connected molecules."
              data-figure-source="https://proceedings.mlr.press/v202/guan23a/guan23a.pdf"
              data-figure-source-text="https://proceedings.mlr.press/v202/guan23a/guan23a.pdf"
              aria-label="Enlarge figure: Generates 3D ligands from decomposed priors, separate arm and scaffold centers, denoised by an equivariant heterogeneous-graph network with validity guidance for clash-free, connected molecules.">
        <img src="/assets/figures/idea-decompdiff.webp" alt="DecompDiff sampling overview: decomposed priors place arm and scaffold centers; a heterogeneous graph MPNN denoises atom coordinates, types and bonds; validity guidance resolves protein-ligand clash and connects arm to scaffold; a legend maps every symbol." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 2, page 4</span></figcaption>
    </figure>
    <a class="pub-title" href="https://proceedings.mlr.press/v202/guan23a.html">DecompDiff: Diffusion Models with Decomposed Priors for Structure-Based Drug Design</a>
    <div class="pub-authors"><ins>Jiaqi Guan</ins>*, <ins>Xiangxin Zhou</ins>*, Yuwei Yang, <strong>Yu Bao</strong>, Jian Peng, Jianzhu Ma, Qiang Liu, Liang Wang, Quanquan Gu</div>
    <div class="pub-meta"><span class="pub-venue">ICML 2023</span></div>
    <div class="pub-links"><a href="https://proceedings.mlr.press/v202/guan23a.html">Paper</a><a href="https://proceedings.mlr.press/v202/guan23a/guan23a.pdf">PDF</a></div>
    <p class="pub-idea">Generates 3D ligands from decomposed priors, separate arm and scaffold centers, denoised by an equivariant heterogeneous-graph network with validity guidance for clash-free, connected molecules.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-selective-kd-nat" data-topics="translation language-generation" data-year="2023" data-search="2023 aaai 2023 original figure figure 1 (page 1) selective knowledge distillation for non-autoregressive neural machine translation min liu , yu bao , chengqi zhao, shujian huang aaai 2023 paper pdf standard kd distils from all raw data; selectively distilling only high-quality, low-complexity examples via data selection yields the selected dataset used for distillation.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 1 (page 1)"
              data-figure-idea="Standard KD distils from all raw data; selectively distilling only high-quality, low-complexity examples via data selection yields the selected dataset used for distillation."
              data-figure-source="https://arxiv.org/pdf/2303.17910"
              data-figure-source-text="https://arxiv.org/pdf/2303.17910"
              aria-label="Enlarge figure: Standard KD distils from all raw data; selectively distilling only high-quality, low-complexity examples via data selection yields the selected dataset used for distillation.">
        <img src="/assets/figures/selective-kd.webp" alt="Figure 1 of the paper: raw data carries a quality and a complexity half; standard knowledge distillation produces KD data; data selection is mixed (circled plus) with the carried-over raw signal to produce the selected data." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 1 (page 1)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://doi.org/10.1609/aaai.v37i11.26555">Selective Knowledge Distillation for Non-Autoregressive Neural Machine Translation</a>
    <div class="pub-authors"><ins>Min Liu</ins>, <strong>Yu Bao</strong>, Chengqi Zhao, Shujian Huang</div>
    <div class="pub-meta"><span class="pub-venue">AAAI 2023</span></div>
    <div class="pub-links"><a href="https://doi.org/10.1609/aaai.v37i11.26555">Paper</a><a href="https://arxiv.org/pdf/2303.17910">PDF</a></div>
    <p class="pub-idea">Standard KD distils from all raw data; selectively distilling only high-quality, low-complexity examples via data selection yields the selected dataset used for distillation.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-dinoiser" data-topics="diffusion-ai4s language-generation" data-year="2023" data-search="2023 tacl (accepted); presented at acl 2024 · preprint 2023 original figure figure 2 (p. 6) dinoiser: diffused conditional sequence learning by manipulating noises jiasheng ye, zaixiang zheng, yu bao , lihua qian, mingxuan wang tacl (accepted); presented at acl 2024 · preprint 2023 paper pdf acl 2024 program dinoiser clips the diffusion noise scale so corrupted token embeddings stay far enough apart, making discrete diffused conditional sequence learning trainable.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 2 (p. 6)"
              data-figure-idea="DINOISER clips the diffusion noise scale so corrupted token embeddings stay far enough apart, making discrete diffused conditional sequence learning trainable."
              data-figure-source="https://arxiv.org/pdf/2302.10025"
              data-figure-source-text="https://arxiv.org/pdf/2302.10025"
              aria-label="Enlarge figure: DINOISER clips the diffusion noise scale so corrupted token embeddings stay far enough apart, making discrete diffused conditional sequence learning trainable.">
        <img src="/assets/figures/dinoiser_fig2_noise_scale_clipping.webp" alt="Two-panel figure: (A) overlapping Gaussian curves for neighbouring token embeddings, marked with the minimum overlap delta and the noise scale, and (B) the sqrt noise schedule against the clipped linear schedule with two clipping thresholds." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 2 (p. 6)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://arxiv.org/abs/2302.10025">DINOISER: Diffused Conditional Sequence Learning by Manipulating Noises</a>
    <div class="pub-authors">Jiasheng Ye, Zaixiang Zheng, <strong>Yu Bao</strong>, Lihua Qian, Mingxuan Wang</div>
    <div class="pub-meta"><span class="pub-venue">TACL (accepted); presented at ACL 2024 · Preprint 2023</span></div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2302.10025">Paper</a><a href="https://arxiv.org/pdf/2302.10025">PDF</a><a href="https://2024.aclweb.org/program/tacl_papers/">ACL 2024 Program</a></div>
    <p class="pub-idea">DINOISER clips the diffusion noise scale so corrupted token embeddings stay far enough apart, making discrete diffused conditional sequence learning trainable.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-diffusion-lm-scaling" data-topics="diffusion-ai4s language-generation llm-alignment" data-year="2023" data-search="2023 preprint 2023 original figure figure 1 (p. 2) diffusion language models can perform many tasks with scaling and instruction-finetuning jiasheng ye, zaixiang zheng, yu bao , lihua qian, quanquan gu preprint 2023 paper pdf large pre-trained masked language models are reprogrammed into diffusion lms by generative surgery, so scaling plus instruction fine-tuning turns them into multitask generators.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 1 (p. 2)"
              data-figure-idea="Large pre-trained masked language models are reprogrammed into diffusion LMs by generative surgery, so scaling plus instruction fine-tuning turns them into multitask generators."
              data-figure-source="https://arxiv.org/pdf/2308.12219"
              data-figure-source-text="https://arxiv.org/pdf/2308.12219"
              aria-label="Enlarge figure: Large pre-trained masked language models are reprogrammed into diffusion LMs by generative surgery, so scaling plus instruction fine-tuning turns them into multitask generators.">
        <img src="/assets/figures/diffusionlm_fig1_overview_paradigms.webp" alt="Two panels: (A) contrasts autoregressive LMs with diffusion LMs on the same translation prompt, sequential versus iterative-denoising output; (B) shows masked-LM pre-training branching into task-specific or generalist diffusion LMs by fine-tuning." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 1 (p. 2)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://arxiv.org/abs/2308.12219">Diffusion Language Models Can Perform Many Tasks with Scaling and Instruction-Finetuning</a>
    <div class="pub-authors">Jiasheng Ye, Zaixiang Zheng, <strong>Yu Bao</strong>, Lihua Qian, Quanquan Gu</div>
    <div class="pub-meta"><span class="pub-venue">Preprint 2023</span></div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2308.12219">Paper</a><a href="https://arxiv.org/pdf/2308.12219">PDF</a></div>
    <p class="pub-idea">Large pre-trained masked language models are reprogrammed into diffusion LMs by generative surgery, so scaling plus instruction fine-tuning turns them into multitask generators.</p>
  </li>
</ol>

<h3 class="pub-year">2022</h3>

<ol class="pub-list">
  <li class="pub-item pub-item--figure" id="pub-latent-glat" data-topics="translation language-generation" data-year="2022" data-search="2022 acl 2022 original figure figure 1, pdf page 3 (acl 2022 long paper, pp.8398-8409); doi 10.18653/v1/2022.acl-long.575 latent-glat: glancing at latent variables for parallel text generation yu bao , hao zhou, shujian huang, dongqi wang, lihua qian, xinyu dai, jiajun chen, lei li acl 2022 paper pdf add discrete latent variables to a glancing non-autoregressive model, learning target categorical codes via vector quantization to ease the multi-modality problem in parallel generation.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 1, PDF page 3 (ACL 2022 long paper, pp.8398-8409); DOI 10.18653/v1/2022.acl-long.575"
              data-figure-idea="Add discrete latent variables to a glancing non-autoregressive model, learning target categorical codes via vector quantization to ease the multi-modality problem in parallel generation."
              data-figure-source="https://aclanthology.org/2022.acl-long.575.pdf"
              data-figure-source-text="https://aclanthology.org/2022.acl-long.575.pdf"
              aria-label="Enlarge figure: Add discrete latent variables to a glancing non-autoregressive model, learning target categorical codes via vector quantization to ease the multi-modality problem in parallel generation.">
        <img src="/assets/figures/latent-glat.webp" alt="Architecture diagram: an encoder and a length/soft-copy bridge produce hidden states; a latent predictor and a vector-quantized codebook give discrete latent codes z, which the mix decoder combines with the hidden states to emit output tokens." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 1, PDF page 3 (ACL 2022 long paper, pp.8398-8409); DOI 10.18653/v1/2022.acl-long.575</span></figcaption>
    </figure>
    <a class="pub-title" href="https://aclanthology.org/2022.acl-long.575/">latent-GLAT: Glancing at Latent Variables for Parallel Text Generation</a>
    <div class="pub-authors"><strong>Yu Bao</strong>, Hao Zhou, Shujian Huang, Dongqi Wang, Lihua Qian, Xinyu Dai, Jiajun Chen, Lei Li</div>
    <div class="pub-meta"><span class="pub-venue">ACL 2022</span></div>
    <div class="pub-links"><a href="https://aclanthology.org/2022.acl-long.575/">Paper</a><a href="https://aclanthology.org/2022.acl-long.575.pdf">PDF</a></div>
    <p class="pub-idea">Add discrete latent variables to a glancing non-autoregressive model, learning target categorical codes via vector quantization to ease the multi-modality problem in parallel generation.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-unsupervised-paraphrasing" data-topics="language-generation" data-year="2022" data-search="2022 中国科学: 信息科学 (scientia sinica informationis) 2022 abstract-based schematic abstract (full text and figures not retrievable — the publisher page is a javascript spa and its pdf endpoints return an empty shell) 基于句法模板采样的无监督复述生成方法 (unsupervised paraphrasing via syntactic template sampling) 鲍宇 , 黄书剑, 周浩, 李磊, 戴新宇, 陈家骏 中国科学: 信息科学 (scientia sinica informationis) 2022 paper unsupervised paraphrase with a syntactic-template latent variable linking meaning and syntax; a two-step sampling: prior over templates for diversity, posterior over syntactic representations for semantic match.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Abstract-based schematic"
              data-figure-locator="Abstract (full text and figures not retrievable — the publisher page is a JavaScript SPA and its PDF endpoints return an empty shell)"
              data-figure-idea="Unsupervised paraphrase with a syntactic-template latent variable linking meaning and syntax; a two-step sampling: prior over templates for diversity, posterior over syntactic representations for semantic match."
              data-figure-source="https://t4.sciengine.com/SSI/doi/10.1360/SSI-2021-0065"
              data-figure-source-text="https://t4.sciengine.com/SSI/doi/10.1360/SSI-2021-0065"
              aria-label="Enlarge figure: Unsupervised paraphrase with a syntactic-template latent variable linking meaning and syntax; a two-step sampling: prior over templates for diversity, posterior over syntactic representations for semantic match.">
        <img src="/assets/figures/syntactic-paraphrase.svg" alt="Schematic from the official abstract: a syntactic-template latent variable bridges the semantic and syntactic spaces; step 1 samples a template from the prior for diversity, step 2 samples the syntactic representation from the posterior for semantic match." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Abstract-based schematic</span><span class="pub-figure-src">Abstract (full text and figures not retrievable — the publisher page is a JavaScript SPA and its PDF endpoints return an empty shell)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://t4.sciengine.com/SSI/doi/10.1360/SSI-2021-0065">基于句法模板采样的无监督复述生成方法 (Unsupervised Paraphrasing via Syntactic Template Sampling)</a>
    <div class="pub-authors"><strong>鲍宇</strong>, 黄书剑, 周浩, 李磊, 戴新宇, 陈家骏</div>
    <div class="pub-meta"><span class="pub-venue">中国科学: 信息科学 (SCIENTIA SINICA Informationis) 2022</span></div>
    <div class="pub-links"><a href="https://t4.sciengine.com/SSI/doi/10.1360/SSI-2021-0065">Paper</a></div>
    <p class="pub-idea">Unsupervised paraphrase with a syntactic-template latent variable linking meaning and syntax; a two-step sampling: prior over templates for diversity, posterior over syntactic representations for semantic match.</p>
  </li>
</ol>

<h3 class="pub-year">2021</h3>

<ol class="pub-list">
  <li class="pub-item pub-item--figure" id="pub-glat" data-topics="translation language-generation" data-year="2021" data-search="2021 acl-ijcnlp 2021 original figure figure 2, pdf page 3 (acl-ijcnlp 2021 long paper, pp.1993-2003); doi 10.18653/v1/2021.acl-long.155 glancing transformer for non-autoregressive neural machine translation lihua qian, hao zhou, yu bao , mingxuan wang, lin qiu, weinan zhang, yong yu, lei li acl-ijcnlp 2021 paper pdf train a non-autoregressive transformer with adaptive glancing sampling, letting it learn word dependencies so it can decode a whole sentence in a single parallel pass.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 2, PDF page 3 (ACL-IJCNLP 2021 long paper, pp.1993-2003); DOI 10.18653/v1/2021.acl-long.155"
              data-figure-idea="Train a non-autoregressive Transformer with adaptive glancing sampling, letting it learn word dependencies so it can decode a whole sentence in a single parallel pass."
              data-figure-source="https://aclanthology.org/2021.acl-long.155.pdf"
              data-figure-source-text="https://aclanthology.org/2021.acl-long.155.pdf"
              aria-label="Enlarge figure: Train a non-autoregressive Transformer with adaptive glancing sampling, letting it learn word dependencies so it can decode a whole sentence in a single parallel pass.">
        <img src="/assets/figures/glat.webp" alt="Diagram: an encoder produces hidden states H; a parallel decoder predicts initial tokens; glancing sampling compares them with ground-truth targets, computes distance, samples words and replaces part of the decoder input, then a second parallel decoder computes the glancing language model loss." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 2, PDF page 3 (ACL-IJCNLP 2021 long paper, pp.1993-2003); DOI 10.18653/v1/2021.acl-long.155</span></figcaption>
    </figure>
    <a class="pub-title" href="https://aclanthology.org/2021.acl-long.155/">Glancing Transformer for Non-Autoregressive Neural Machine Translation</a>
    <div class="pub-authors">Lihua Qian, Hao Zhou, <strong>Yu Bao</strong>, Mingxuan Wang, Lin Qiu, Weinan Zhang, Yong Yu, Lei Li</div>
    <div class="pub-meta"><span class="pub-venue">ACL-IJCNLP 2021</span></div>
    <div class="pub-links"><a href="https://aclanthology.org/2021.acl-long.155/">Paper</a><a href="https://aclanthology.org/2021.acl-long.155.pdf">PDF</a></div>
    <p class="pub-idea">Train a non-autoregressive Transformer with adaptive glancing sampling, letting it learn word dependencies so it can decode a whole sentence in a single parallel pass.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-categorical-codes" data-topics="translation language-generation" data-year="2021" data-search="2021 naacl-hlt 2021 original figure figure 1, pdf page 2 (naacl-hlt 2021 long paper, pp.5749-5759); doi 10.18653/v1/2021.naacl-main.458 non-autoregressive translation by learning target categorical codes yu bao , shujian huang, tong xiao, dongqi wang, xinyu dai, jiajun chen naacl-hlt 2021 paper pdf learn target categorical codes as latent variables inside non-autoregressive translation, so the decoder captures word-level structure and translates more accurately in parallel.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 1, PDF page 2 (NAACL-HLT 2021 long paper, pp.5749-5759); DOI 10.18653/v1/2021.naacl-main.458"
              data-figure-idea="Learn target categorical codes as latent variables inside non-autoregressive translation, so the decoder captures word-level structure and translates more accurately in parallel."
              data-figure-source="https://aclanthology.org/2021.naacl-main.458.pdf"
              data-figure-source-text="https://aclanthology.org/2021.naacl-main.458.pdf"
              aria-label="Enlarge figure: Learn target categorical codes as latent variables inside non-autoregressive translation, so the decoder captures word-level structure and translates more accurately in parallel.">
        <img src="/assets/figures/categorical-codes.webp" alt="Three graphical models compare inference: (a) AT conditions on previously generated tokens, (b) NAT decodes all tokens independently in parallel, (c) LT adds a latent variable z with a dotted feedback link into y." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 1, PDF page 2 (NAACL-HLT 2021 long paper, pp.5749-5759); DOI 10.18653/v1/2021.naacl-main.458</span></figcaption>
    </figure>
    <a class="pub-title" href="https://aclanthology.org/2021.naacl-main.458/">Non-Autoregressive Translation by Learning Target Categorical Codes</a>
    <div class="pub-authors"><strong>Yu Bao</strong>, Shujian Huang, Tong Xiao, Dongqi Wang, Xinyu Dai, Jiajun Chen</div>
    <div class="pub-meta"><span class="pub-venue">NAACL-HLT 2021</span></div>
    <div class="pub-links"><a href="https://aclanthology.org/2021.naacl-main.458/">Paper</a><a href="https://aclanthology.org/2021.naacl-main.458.pdf">PDF</a></div>
    <p class="pub-idea">Learn target categorical codes as latent variables inside non-autoregressive translation, so the decoder captures word-level structure and translates more accurately in parallel.</p>
  </li>
</ol>

<h3 class="pub-year">2020</h3>

<ol class="pub-list">
  <li class="pub-item pub-item--figure" id="pub-semantic-decomposition" data-topics="language-generation" data-year="2020" data-search="2020 acl 2020 original figure figure 1, pdf page 3 (acl 2020 long paper, pp.708-717); doi 10.18653/v1/2020.acl-main.65 explicit semantic decomposition for definition generation jiahuan li*, yu bao *, shujian huang, xinyu dai, jiajun chen acl 2020 paper pdf decompose a word&#x27;s meaning into explicit semantic components modelled with discrete latent variables, giving interpretable components for generating a dictionary definition.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 1, PDF page 3 (ACL 2020 long paper, pp.708-717); DOI 10.18653/v1/2020.acl-main.65"
              data-figure-idea="Decompose a word&#x27;s meaning into explicit semantic components modelled with discrete latent variables, giving interpretable components for generating a dictionary definition."
              data-figure-source="https://aclanthology.org/2020.acl-main.65.pdf"
              data-figure-source-text="https://aclanthology.org/2020.acl-main.65.pdf"
              aria-label="Enlarge figure: Decompose a word&#x27;s meaning into explicit semantic components modelled with discrete latent variables, giving interpretable components for generating a dictionary definition.">
        <img src="/assets/figures/semantic-decomposition.webp" alt="Architecture diagram: word encoder, context encoder and definition encoder feed latent components q, sampled variables z and e; a definition decoder generates the definition from the combined representation." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 1, PDF page 3 (ACL 2020 long paper, pp.708-717); DOI 10.18653/v1/2020.acl-main.65</span></figcaption>
    </figure>
    <a class="pub-title" href="https://aclanthology.org/2020.acl-main.65/">Explicit Semantic Decomposition for Definition Generation</a>
    <div class="pub-authors">Jiahuan Li*, <strong>Yu Bao</strong>*, Shujian Huang, Xinyu Dai, Jiajun Chen</div>
    <div class="pub-meta"><span class="pub-venue">ACL 2020</span></div>
    <div class="pub-links"><a href="https://aclanthology.org/2020.acl-main.65/">Paper</a><a href="https://aclanthology.org/2020.acl-main.65.pdf">PDF</a></div>
    <p class="pub-idea">Decompose a word&#x27;s meaning into explicit semantic components modelled with discrete latent variables, giving interpretable components for generating a dictionary definition.</p>
  </li>
</ol>

<h3 class="pub-year">2019</h3>

<ol class="pub-list">
  <li class="pub-item pub-item--figure" id="pub-disentangled" data-topics="language-generation" data-year="2019" data-search="2019 acl 2019 original figure figure 2, pdf page 4 (acl 2019 long paper, pp.6008-6019); doi 10.18653/v1/p19-1602 generating sentences from disentangled syntactic and semantic spaces yu bao *, hao zhou*, shujian huang, lei li, lili mou, olga vechtomova, xinyu dai, jiajun chen acl 2019 paper pdf disentangle sentence generation into separate syntactic and semantic latent spaces, modelling syntax as a linearized parse-tree sequence so each factor can be controlled independently.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 2, PDF page 4 (ACL 2019 long paper, pp.6008-6019); DOI 10.18653/v1/P19-1602"
              data-figure-idea="Disentangle sentence generation into separate syntactic and semantic latent spaces, modelling syntax as a linearized parse-tree sequence so each factor can be controlled independently."
              data-figure-source="https://aclanthology.org/P19-1602.pdf"
              data-figure-source-text="https://aclanthology.org/P19-1602.pdf"
              aria-label="Enlarge figure: Disentangle sentence generation into separate syntactic and semantic latent spaces, modelling syntax as a linearized parse-tree sequence so each factor can be controlled independently.">
        <img src="/assets/figures/disentangled.webp" alt="Diagram: an encoder recurrent network maps a sentence to two latent variables, syntactic z_syn and semantic z_sem; a decoder recurrent network reconstructs the sentence, with dashed multi-task reconstruction and syntax losses and adversarial semantic losses." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 2, PDF page 4 (ACL 2019 long paper, pp.6008-6019); DOI 10.18653/v1/P19-1602</span></figcaption>
    </figure>
    <a class="pub-title" href="https://aclanthology.org/P19-1602/">Generating Sentences from Disentangled Syntactic and Semantic Spaces</a>
    <div class="pub-authors"><strong>Yu Bao</strong>*, Hao Zhou*, Shujian Huang, Lei Li, Lili Mou, Olga Vechtomova, Xinyu Dai, Jiajun Chen</div>
    <div class="pub-meta"><span class="pub-venue">ACL 2019</span></div>
    <div class="pub-links"><a href="https://aclanthology.org/P19-1602/">Paper</a><a href="https://aclanthology.org/P19-1602.pdf">PDF</a></div>
    <p class="pub-idea">Disentangle sentence generation into separate syntactic and semantic latent spaces, modelling syntax as a linearized parse-tree sequence so each factor can be controlled independently.</p>
  </li>
  <li class="pub-item pub-item--figure" id="pub-pnat" data-topics="translation language-generation" data-year="2019" data-search="2019 preprint 2019 original figure figure 1, pdf page 3 (arxiv:1911.10677, 2019 preprint; no formal venue pages) pnat: non-autoregressive transformer by position learning yu bao , hao zhou, jiangtao feng, mingxuan wang, shujian huang, jiajun chen, lei li preprint 2019 paper pdf treat positions as a latent variable in the text generation process, so a non-autoregressive transformer learns where to place each output token.">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 1, PDF page 3 (arXiv:1911.10677, 2019 preprint; no formal venue pages)"
              data-figure-idea="Treat positions as a latent variable in the text generation process, so a non-autoregressive Transformer learns where to place each output token."
              data-figure-source="https://arxiv.org/pdf/1911.10677"
              data-figure-source-text="https://arxiv.org/pdf/1911.10677"
              aria-label="Enlarge figure: Treat positions as a latent variable in the text generation process, so a non-autoregressive Transformer learns where to place each output token.">
        <img src="/assets/figures/pnat.webp" alt="Architecture diagram: input embeddings and a bridge with a length predictor and soft-copy feed the decoder, while a position predictor with pointer predictor supplies positions; the decoder outputs probabilities through linear and softmax layers." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 1, PDF page 3 (arXiv:1911.10677, 2019 preprint; no formal venue pages)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://arxiv.org/abs/1911.10677">PNAT: Non-Autoregressive Transformer by Position Learning</a>
    <div class="pub-authors"><strong>Yu Bao</strong>, Hao Zhou, Jiangtao Feng, Mingxuan Wang, Shujian Huang, Jiajun Chen, Lei Li</div>
    <div class="pub-meta"><span class="pub-venue">Preprint 2019</span></div>
    <div class="pub-links"><a href="https://arxiv.org/abs/1911.10677">Paper</a><a href="https://arxiv.org/pdf/1911.10677">PDF</a></div>
    <p class="pub-idea">Treat positions as a latent variable in the text generation process, so a non-autoregressive Transformer learns where to place each output token.</p>
  </li>
</ol>

<h2 id="technical-reports">Technical Reports</h2>

<ol class="pub-list">
  <li class="pub-item pub-item--figure" id="report-seed-liveinterpret-2-0">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Original figure"
              data-figure-locator="Figure 2 (p. 2)"
              data-figure-idea="An end-to-end duplex speech-to-speech model performs simultaneous interpretation, keeps each speaker&#x27;s own voice, and cuts cloned-speech latency to about three seconds."
              data-figure-source="https://arxiv.org/pdf/2507.17527"
              data-figure-source-text="https://arxiv.org/pdf/2507.17527"
              aria-label="Enlarge figure: An end-to-end duplex speech-to-speech model performs simultaneous interpretation, keeps each speaker&#x27;s own voice, and cuts cloned-speech latency to about three seconds.">
        <img src="/assets/figures/liveinterpret_fig2_system.webp" alt="Top: two speakers alternating Chinese and English, shown with audio waveforms. Bottom: the Seed LiveInterpret 2.0 agent aligning both streams and emitting alternating English and Chinese translations with voice-cloning bars." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Original figure</span><span class="pub-figure-src">Figure 2 (p. 2)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://arxiv.org/abs/2507.17527">Seed LiveInterpret 2.0: End-to-end Simultaneous Speech-to-speech Translation with Your Voice</a>
    <div class="pub-authors">Shanbo Cheng, Yu Bao, et al. (see the full author list on arXiv)</div>
    <div class="pub-meta"><span class="pub-venue">Technical Report 2025</span></div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2507.17527">Paper</a><a href="https://arxiv.org/pdf/2507.17527">PDF</a><a href="https://seed.bytedance.com/zh/seed_liveinterpret">Homepage</a><a href="https://console.volcengine.com/ark/region:ark+cn-beijing/experience/voice?type=SI">Demo</a></div>
    <p class="pub-idea">An end-to-end duplex speech-to-speech model performs simultaneous interpretation, keeps each speaker&#x27;s own voice, and cuts cloned-speech latency to about three seconds.</p>
  </li>
  <li class="pub-item pub-item--figure" id="report-seed-x">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Adapted schematic"
              data-figure-locator="Abstract; §2 Pre-training (pp. 2–3); §3 Post-training incl. §3.1 SFT and the RL/PPO paragraph (pp. 4–5)"
              data-figure-idea="A 7B translation LLM built in stages — multilingual pre-training, Chain-of-Thought fine-tuning, then PPO — with a revise-and-filter loop that keeps improving parallel data."
              data-figure-source="https://arxiv.org/pdf/2507.13618"
              data-figure-source-text="https://arxiv.org/pdf/2507.13618"
              aria-label="Enlarge figure: A 7B translation LLM built in stages — multilingual pre-training, Chain-of-Thought fine-tuning, then PPO — with a revise-and-filter loop that keeps improving parallel data.">
        <img src="/assets/figures/seedx_training_recipe_schematic.svg" alt="Three stage boxes, pre-training on monolingual and bilingual corpora across 28 languages, Chain-of-Thought fine-tuning, then reinforcement learning with PPO and a preference reward model, above a band describing the revise-and-filter data loop." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Adapted schematic</span><span class="pub-figure-src">Abstract; §2 Pre-training (pp. 2–3); §3 Post-training incl. §3.1 SFT and the RL/PPO paragraph (pp. 4–5)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://arxiv.org/abs/2507.13618">Seed-X: Building Strong Multilingual Translation LLM with 7B Parameters</a>
    <div class="pub-authors">Shanbo Cheng, Yu Bao, et al. (see the full author list on arXiv)</div>
    <div class="pub-meta"><span class="pub-venue">Technical Report 2025</span></div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2507.13618">Paper</a><a href="https://arxiv.org/pdf/2507.13618">PDF</a><a href="https://huggingface.co/collections/ByteDance-Seed/seed-x-6878753f2858bc17afa78543">HF</a><a href="https://huggingface.co/spaces/ByteDance-Seed/Seed-X">Demo</a></div>
    <p class="pub-idea">A 7B translation LLM built in stages — multilingual pre-training, Chain-of-Thought fine-tuning, then PPO — with a revise-and-filter loop that keeps improving parallel data.</p>
  </li>
  <li class="pub-item pub-item--figure" id="report-seed2-0-model-card">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Adapted schematic"
              data-figure-locator="§1 Introduction (p. 1) and the evaluation-framework paragraph (pp. 2 and 7)"
              data-figure-idea="Seed2.0 targets real-world complexity, tracked by four evaluation dimensions — Science Discovery, Vibe Coding, Context Learning, Real-World Tasks — across three model sizes."
              data-figure-source="https://arxiv.org/pdf/2607.00248"
              data-figure-source-text="https://arxiv.org/pdf/2607.00248"
              aria-label="Enlarge figure: Seed2.0 targets real-world complexity, tracked by four evaluation dimensions — Science Discovery, Vibe Coding, Context Learning, Real-World Tasks — across three model sizes.">
        <img src="/assets/figures/seed2_capability_framework_schematic.svg" alt="Four boxes naming Science Discovery, Vibe Coding, Context Learning and Real-World Tasks, with a note that each targets a core aspect of long-horizon agent performance, above a band listing the Pro, Lite and Mini model sizes." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Adapted schematic</span><span class="pub-figure-src">§1 Introduction (p. 1) and the evaluation-framework paragraph (pp. 2 and 7)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://arxiv.org/abs/2607.00248">Seed2.0 Model Card: Towards Intelligence Frontier for Real-World Complexity</a>
    <div class="pub-authors">Bytedance Seed (collective author)</div>
    <div class="pub-meta"><span class="pub-venue">Model Card 2026</span></div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2607.00248">Paper</a><a href="https://arxiv.org/pdf/2607.00248">PDF</a></div>
    <p class="pub-idea">Seed2.0 targets real-world complexity, tracked by four evaluation dimensions — Science Discovery, Vibe Coding, Context Learning, Real-World Tasks — across three model sizes.</p>
  </li>
  <li class="pub-item pub-item--figure" id="report-seed1-8-model-card">
    <figure class="pub-figure">
      <button type="button" class="pub-figure-btn"
              aria-haspopup="dialog"
              data-figure-label="Adapted schematic"
              data-figure-locator="§1 Introduction (p. 1) and the §2 evaluation overview (p. 2)"
              data-figure-idea="Seed1.8 pursues generalized real-world agency by integrating perception, reasoning and action in one model rather than task-specific agent pipelines."
              data-figure-source="https://arxiv.org/pdf/2603.20633"
              data-figure-source-text="https://arxiv.org/pdf/2603.20633"
              aria-label="Enlarge figure: Seed1.8 pursues generalized real-world agency by integrating perception, reasoning and action in one model rather than task-specific agent pipelines.">
        <img src="/assets/figures/seed18_capability_structure_schematic.svg" alt="Three boxes listing the report&#x27;s evaluated abilities: language (reasoning, instruction following, knowledge), vision and multimodal (image and video understanding), and agentic (search, coding and tool use, writing, GUI execution), with a band naming four thinking modes." width="960" height="540" loading="lazy" decoding="async">
      </button>
      <figcaption class="pub-figure-cap"><span class="pub-figure-label">Adapted schematic</span><span class="pub-figure-src">§1 Introduction (p. 1) and the §2 evaluation overview (p. 2)</span></figcaption>
    </figure>
    <a class="pub-title" href="https://arxiv.org/abs/2603.20633">Seed1.8 Model Card: Towards Generalized Real-World Agency</a>
    <div class="pub-authors">Bytedance Seed (collective author)</div>
    <div class="pub-meta"><span class="pub-venue">Model Card 2026</span></div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2603.20633">Paper</a><a href="https://arxiv.org/pdf/2603.20633">PDF</a></div>
    <p class="pub-idea">Seed1.8 pursues generalized real-world agency by integrating perception, reasoning and action in one model rather than task-specific agent pipelines.</p>
  </li>
</ol>

<h2 id="awards">Awards</h2>

- 2022, Excellent Doctoral Paper Award, Jiangsu Association of Artificial Intelligence (JSAI)
- 2020, Outstanding Ph.D. Candidate, Nanjing University
- 2019, Outstanding Graduate Student, Nanjing University

<!-- ### Invited Talks

- Grammar Learning and Its Application for Molecular Design, Tsinghua University AIR, Oct. 2022.
- latent-GLAT: Glancing at Latent Variables for Parallel Text Generation, CIPSC & PaperWeekly & MLNLP, ACL-IJCAI-SIGIR, Apr. — May. 2022.
- Research and Development of Parallel Text Generation, ByteDance AI Lab, Oct. 2021.
- Advice for Undergraduate Students, Northeast Forestry University, Nov. 2020. -->



<!--
## Professional Services

**<u>Area Chair of</u>**

- [ACL Rolling Review](https://aclrollingreview.org/reviewing) 2025-
- ICML 2025 Generative AI and Biology (GenBio) Workshop
- The 1st GenBio Workshop on New Frontiers of Generative AI and Biology at NeurIPS 2023

**<u>PC Member/Reviewer of</u>**

- IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)
- IEEE Transactions on Neural Networks and Learning Systems (TNNLS)
- Journal of Artificial Intelligence Research (JAIR)
- International Conference on Artificial Intelligence and Statistics (AISTATS) 2025-
- Conference on Language Modeling (COLM) 2024-
- International Conference on Machine Learning (ICML) 2023-
- Annual Conference on Neural Information Processing Systems (NeurIPS) 2022-
- International Conference on Learning Representations (ICLR) 2022-
- North American Chapter of the Association for Computational Linguistics (NAACL) 2022-2024
- Conference on Empirical Methods in Natural Language Processing (EMNLP) 2021-2024
- Annual Meeting of the Association for Computational Linguistics (ACL) 2021-2024
- ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD) 2022-2024
- AAAI Conference on Artificial Intelligence (AAAI) 2022-2024
- The Chinese National Conference on Computational Linguistics (CCL) 2022
- The CCF Conference on Natural Language Processing and Chinese Computing (NLPCC) 2022
- International Joint Conferences on Artificial Intelligence (IJCAI) 2020 
<center>
  <iframe src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FShanghai&mode=AGENDA&showTabs=0&showTitle=1&showNav=0&showPrint=0&showTz=0&showCalendars=0&title=Schedule&src=d2VpZmVuZ2xpdXl1ZUBnbWFpbC5jb20&src=Z3IwY2l0a3NpMjQ5b3RhbGxuYWVjY2ZhamxlNmlkMm1AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%23E67C73" style="border-width:1" width="600" height="300" frameborder="0" scrolling="no">
  </iframe>
</center>
<center>
  <script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=080808&w=353&t=tt&d=RXIJvl1M9HfHAiXc7AJe-qo0sHke2u_46ckL7Qp5HrY&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=808080'></script>
</center>
-->



<!--
**baoy-nlp/baoy-nlp** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.
Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
