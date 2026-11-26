/* =====================================================================
   Wojciech Rosik — profil menedżerski
   Bez frameworków i bez kroku budowania: działa na każdym hostingu
   statycznym (GitHub Pages, Netlify, Vercel), także w podkatalogu.
   Treści: assets/js/content.js
   ===================================================================== */
(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  if (!C) return;

  var params = new URLSearchParams(location.search);
  var REVIEW = params.has("review");
  var reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var NAV = ["approach", "experience", "cases", "skills", "contact"];
  var CHART_START = 2013;

  var state = {
    lang: detectLang(),
    filter: "all",
    open: { solaris: true },
    caseIdx: 0,
    skillIdx: 0,
    loopIdx: 0,
    counted: false,
    firstRender: true
  };

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
  function pad(n) { return String(n).padStart(2, "0"); }
  function t() { return C[state.lang]; }
  function todo(s) {
    if (!REVIEW || !s) return "";
    return '<p class="todo"><span>' + (state.lang === "pl" ? "Do uzupełnienia" : "To complete") + "</span>" + esc(s) + "</p>";
  }
  function roleById(id) {
    var roles = t().experience.roles;
    for (var i = 0; i < roles.length; i++) if (roles[i].id === id) return roles[i];
    return null;
  }
  function nowYear() {
    var d = new Date();
    return d.getFullYear() + d.getMonth() / 12;
  }
  function years(r) {
    return r.start + " — " + (r.end == null ? t().experience.present : r.end);
  }

  function detectLang() {
    var q = (params.get("lang") || "").toLowerCase();
    if (q === "pl" || q === "en") return q;
    try {
      var s = localStorage.getItem("wr-lang");
      if (s === "pl" || s === "en") return s;
    } catch (e) {}
    var nav = (navigator.language || "pl").toLowerCase();
    return nav.indexOf("pl") === 0 ? "pl" : "en";
  }

  var ICON = {
    arrow: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arrowLeft: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16 10H5m4-4-4 4 4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    download: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v10m-4-4 4 4 4-4M4 16h12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    eye: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2 10s3-5.5 8-5.5S18 10 18 10s-3 5.5-8 5.5S2 10 2 10Z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="10" cy="10" r="2.3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    copy: '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="7" y="7" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M13 7V5.5A1.5 1.5 0 0 0 11.5 4h-6A1.5 1.5 0 0 0 4 5.5v6A1.5 1.5 0 0 0 5.5 13H7" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    check: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10.5 3 3 7-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    external: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M8 5H5v10h10v-3M11 4h5v5m0-5-7 7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function sectionHead(num, s, id) {
    return (
      '<header class="section-head reveal">' +
        '<p class="kicker"><span class="kicker-num">' + pad(num) + "</span><span>" + esc(s.kicker) + "</span></p>" +
        '<div class="section-head-main">' +
          '<h2 class="section-title" id="' + id + '-title">' + esc(s.title) + "</h2>" +
          (s.intro ? '<p class="section-intro">' + esc(s.intro) + "</p>" : "") +
        "</div>" +
      "</header>"
    );
  }

  /* ---------- NAV ---------- */
  function renderNav() {
    var n = t().nav;
    var items = NAV.map(function (id, i) {
      return '<li><a href="#' + id + '" data-nav="' + id + '"><span class="nav-num">' + pad(i + 1) + "</span>" + esc(n[id]) + "</a></li>";
    }).join("");
    $("#nav-links").innerHTML = items;
    $("#mobile-links").innerHTML = items +
      '<li><a href="' + C.meta.cv[state.lang] + '" target="_blank" rel="noopener"><span class="nav-num">PDF</span>' + esc(n.cv) + "</a></li>";
    var cv = $("#header-cv");
    cv.href = C.meta.cv[state.lang];
    cv.innerHTML = ICON.download + "<span>" + esc(n.cv) + "</span>";
    $("#menu-toggle-label").textContent = n.menu;
    $("#primary-nav").setAttribute("aria-label", state.lang === "pl" ? "Główna nawigacja" : "Main navigation");
    var sw = $("#lang-switch");
    sw.setAttribute("aria-label", n.langLabel);
    sw.dataset.active = state.lang;
    $$("button", sw).forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang));
    });
    $(".skip-link").textContent = t().skip;
  }

  /* ---------- HERO ---------- */
  function statValue(s, animated) {
    var v = animated ? 0 : s.value;
    return '<span class="stat-prefix">' + esc(s.prefix) + '</span><span class="num" data-target="' + s.value + '">' + v + '</span><span class="stat-suffix">' + esc(s.suffix) + "</span>";
  }

  function renderHero() {
    var h = t().hero;
    var animate = !state.counted && !reduceMotion;
    $("#top").innerHTML =
      '<div class="container hero-grid">' +
        '<div class="hero-main">' +
          '<p class="status reveal"><span class="status-dot" aria-hidden="true"></span>' + esc(h.status) + "</p>" +
          '<h1 class="hero-title reveal" id="hero-title">' +
            h.title.map(function (l, i) { return '<span class="line' + (i ? " line-accent" : "") + '">' + esc(l) + "</span>"; }).join(" ") +
          "</h1>" +
          '<p class="eyebrow reveal">' + esc(h.eyebrow) + "</p>" +
          '<p class="hero-lead reveal">' + esc(h.lead) + "</p>" +
          '<div class="hero-ctas reveal">' +
            '<a class="btn btn-primary" href="#cases">' + esc(h.ctaPrimary) + ICON.arrow + "</a>" +
            '<a class="btn btn-ghost" href="#contact">' + esc(h.ctaSecondary) + "</a>" +
            '<a class="btn btn-link" href="' + C.meta.cv[state.lang] + '" target="_blank" rel="noopener">' + ICON.download + esc(h.ctaCv) + "</a>" +
          "</div>" +
        "</div>" +
        '<aside class="ledger reveal" aria-labelledby="ledger-title">' +
          '<p class="ledger-title" id="ledger-title"><span>' + esc(h.ledgerTitle) + '</span><span class="ledger-rule" aria-hidden="true"></span></p>' +
          '<dl class="ledger-list">' +
            h.stats.map(function (s) {
              return '<div class="stat"><dt class="stat-value" aria-label="' + esc(s.prefix + s.value + s.suffix) + '">' + statValue(s, animate) + '</dt><dd class="stat-label">' + esc(s.label) + "</dd></div>";
            }).join("") +
          "</dl>" +
        "</aside>" +
      "</div>" +
      '<a class="scroll-cue" href="#approach"><span>' + esc(h.scroll) + '</span><span class="scroll-cue-line" aria-hidden="true"></span></a>';
  }

  function countUp() {
    if (state.counted) return;
    state.counted = true;
    if (reduceMotion) return;
    $$(".ledger .num").forEach(function (el, i) {
      var target = +el.dataset.target;
      var dur = 1100 + i * 120;
      var t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * e);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- APPROACH ---------- */
  function renderApproach() {
    var a = t().approach;
    var portrait = C.meta.portrait
      ? '<figure class="portrait reveal"><img src="' + esc(C.meta.portrait) + '" alt="' + esc(C.meta.name) + '" width="480" height="600" loading="lazy" decoding="async"></figure>'
      : "";
    $("#approach").innerHTML =
      '<div class="container">' +
        sectionHead(1, a, "approach") +
        portrait +
        '<ol class="principles">' +
          a.principles.map(function (p, i) {
            return '<li class="principle reveal" style="--d:' + i * 70 + 'ms">' +
              '<span class="principle-num">' + pad(i + 1) + "</span>" +
              '<h3 class="principle-title">' + esc(p.title) + "</h3>" +
              '<p class="principle-body">' + md(p.body) + "</p>" +
              '<p class="principle-proof">' + esc(p.proof) + "</p>" +
            "</li>";
          }).join("") +
        "</ol>" +
        '<div class="loop reveal">' +
          '<div class="loop-head"><h3 class="loop-title">' + esc(a.loopTitle) + '</h3><p class="loop-hint">' + esc(a.loopHint) + "</p></div>" +
          '<div class="loop-track" style="--steps:' + a.loop.length + '">' +
            '<span class="loop-rail" aria-hidden="true"><span class="loop-rail-fill"></span></span>' +
            '<div class="loop-steps" role="tablist" aria-label="' + esc(a.loopTitle) + '">' +
              a.loop.map(function (s, i) {
                return '<button type="button" role="tab" class="loop-step" id="loop-tab-' + i + '" aria-controls="loop-panel" data-idx="' + i + '">' +
                  '<span class="loop-node">' + pad(i + 1) + "</span>" +
                  '<span class="loop-label">' + esc(s.title) + "</span>" +
                "</button>";
              }).join("") +
            "</div>" +
          "</div>" +
          '<div class="loop-panel" id="loop-panel" role="tabpanel" aria-live="polite"></div>' +
        "</div>" +
      "</div>";
    setLoop(state.loopIdx, false);
  }

  function setLoop(idx, focus) {
    var a = t().approach;
    state.loopIdx = idx;
    var s = a.loop[idx];
    $$(".loop-step").forEach(function (b, i) {
      var on = i === idx;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
      b.classList.toggle("is-done", i < idx);
      if (on && focus) b.focus();
    });
    var track = $(".loop-track");
    if (track) track.style.setProperty("--progress", a.loop.length > 1 ? idx / (a.loop.length - 1) : 0);
    var panel = $("#loop-panel");
    panel.setAttribute("aria-labelledby", "loop-tab-" + idx);
    panel.innerHTML =
      '<div class="loop-panel-inner">' +
        '<p class="loop-body"><span class="loop-body-title">' + esc(s.title) + ".</span> " + md(s.body) + "</p>" +
        '<div class="loop-practice"><span class="label">' + esc(a.loopPracticeLabel) + "</span><p>" + md(s.practice) + "</p></div>" +
      "</div>";
    animateIn(panel.firstChild);
  }

  /* ---------- EXPERIENCE ---------- */
  function renderExperience() {
    var e = t().experience;
    var end = Math.ceil(nowYear());
    if (end <= new Date().getFullYear()) end = new Date().getFullYear() + 1;
    var span = end - CHART_START;
    var ticks = [];
    for (var y = CHART_START; y <= end; y++) ticks.push(y);

    var chart =
      '<figure class="career-chart reveal" aria-label="' + esc(e.chartLabel) + '">' +
        '<figcaption class="chart-caption">' + esc(e.chartLabel) + "</figcaption>" +
        '<div class="chart-body">' +
          '<div class="chart-row chart-axis" aria-hidden="true"><span class="chart-label"></span><span class="chart-track">' +
            ticks.map(function (y) {
              return '<span class="tick' + ((y - CHART_START) % 2 ? " tick-minor" : "") + '" style="left:' + ((y - CHART_START) / span) * 100 + '%"><span>' + y + "</span></span>";
            }).join("") +
          "</span></div>" +
          e.roles.map(function (r) {
            var rEnd = r.end == null ? nowYear() : r.end;
            var left = ((r.start - CHART_START) / span) * 100;
            var width = Math.max(((rEnd - r.start) / span) * 100, 3);
            return '<button type="button" class="chart-row chart-role" data-role="' + r.id + '" data-tags="' + r.tags.join(" ") + '">' +
              '<span class="chart-label">' + esc(r.company) + "</span>" +
              '<span class="chart-track"><span class="chart-bar' + (r.end == null ? " is-current" : "") + '" style="left:' + left + "%;width:" + width + '%"><span class="visually-hidden">' + esc(r.role + ", " + years(r)) + "</span></span></span>" +
            "</button>";
          }).join("") +
        "</div>" +
      "</figure>";

    var toolbar =
      '<div class="exp-toolbar reveal">' +
        '<span class="filter-label" id="filter-label">' + esc(e.filterLabel) + "</span>" +
        '<div class="chips" role="group" aria-labelledby="filter-label">' +
          Object.keys(e.filters).map(function (k) {
            return '<button type="button" class="chip" data-filter="' + k + '" aria-pressed="' + (state.filter === k) + '">' + esc(e.filters[k]) + "</button>";
          }).join("") +
        "</div>" +
        '<span class="filter-count" aria-live="polite"></span>' +
      "</div>";

    var list =
      '<ol class="timeline">' +
        e.roles.map(function (r) {
          var open = !!state.open[r.id];
          return '<li class="role reveal' + (open ? " is-open" : "") + '" id="role-' + r.id + '" data-role="' + r.id + '" data-tags="' + r.tags.join(" ") + '">' +
            '<button type="button" class="role-head" aria-expanded="' + open + '" aria-controls="role-body-' + r.id + '">' +
              '<span class="role-years">' + esc(years(r)) + "</span>" +
              '<span class="role-main">' +
                '<span class="role-title">' + esc(r.role) + "</span>" +
                '<span class="role-company">' + esc(r.company) + '<span class="role-sector"> · ' + esc(r.sector) + "</span></span>" +
              "</span>" +
              (r.metric ? '<span class="role-metric"><span class="role-metric-value">' + esc(r.metric.value) + '</span><span class="role-metric-label">' + esc(r.metric.label) + "</span></span>" : '<span class="role-metric"></span>') +
              '<span class="role-toggle" aria-hidden="true"></span>' +
            "</button>" +
            '<div class="role-body" id="role-body-' + r.id + '"' + (open ? "" : " inert") + ">" +
              '<div class="role-body-inner">' +
                '<p class="role-context"><span class="label">' + esc(e.contextLabel) + "</span>" + md(r.context) + "</p>" +
                '<ul class="role-bullets">' + r.bullets.map(function (b) { return "<li>" + md(b) + "</li>"; }).join("") + "</ul>" +
                '<p class="role-tags">' + r.tags.map(function (tg) { return '<span class="tag">' + esc(e.filters[tg]) + "</span>"; }).join("") + "</p>" +
                todo(r.todo) +
              "</div>" +
            "</div>" +
          "</li>";
        }).join("") +
      "</ol>";

    $("#experience").innerHTML =
      '<div class="container">' + sectionHead(2, e, "experience") + chart + toolbar + list + "</div>";
    applyFilter();
    // na wąskich ekranach oś kariery przewija się poziomo — pokaż najpierw ostatnie lata
    var cb = $(".chart-body");
    if (cb && cb.scrollWidth > cb.clientWidth) cb.scrollLeft = cb.scrollWidth;
  }

  function toggleRole(id, force) {
    var li = $("#role-" + id);
    if (!li) return;
    var open = force == null ? !li.classList.contains("is-open") : force;
    state.open[id] = open;
    li.classList.toggle("is-open", open);
    $(".role-head", li).setAttribute("aria-expanded", String(open));
    var body = $(".role-body", li);
    if (open) body.removeAttribute("inert"); else body.setAttribute("inert", "");
  }

  function applyFilter() {
    var f = state.filter;
    var visible = 0, total = 0;
    $$(".timeline .role").forEach(function (li) {
      total++;
      var match = f === "all" || li.dataset.tags.split(" ").indexOf(f) > -1;
      li.hidden = !match;
      if (match) visible++;
    });
    $$(".chart-role").forEach(function (b) {
      var match = f === "all" || b.dataset.tags.split(" ").indexOf(f) > -1;
      b.classList.toggle("is-dimmed", !match);
    });
    $$(".chip").forEach(function (c) { c.setAttribute("aria-pressed", String(c.dataset.filter === f)); });
    var cnt = $(".filter-count");
    if (cnt) cnt.textContent = f === "all" ? "" : visible + " / " + total;
  }

  function focusRole(id) {
    var li = $("#role-" + id);
    if (!li) return;
    if (li.hidden) { state.filter = "all"; applyFilter(); }
    toggleRole(id, true);
    li.classList.add("is-flash");
    setTimeout(function () { li.classList.remove("is-flash"); }, 1400);
    li.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    $(".role-head", li).focus({ preventScroll: true });
  }

  /* ---------- CASES ---------- */
  function renderCases() {
    var c = t().cases;
    $("#cases").innerHTML =
      '<div class="container">' +
        sectionHead(3, c, "cases") +
        '<div class="cases reveal">' +
          '<div class="case-tabs" role="tablist" aria-orientation="vertical" aria-label="' + esc(c.kicker) + '">' +
            c.items.map(function (it, i) {
              return '<button type="button" role="tab" class="case-tab" id="case-tab-' + i + '" aria-controls="case-panel" data-idx="' + i + '">' +
                '<span class="case-tab-num">' + pad(i + 1) + "</span>" +
                '<span class="case-tab-text"><span class="case-tab-title">' + esc(it.short) + '</span><span class="case-tab-org">' + esc(it.org) + "</span></span>" +
              "</button>";
            }).join("") +
          "</div>" +
          '<article class="case-panel" id="case-panel" role="tabpanel" tabindex="0"></article>' +
        "</div>" +
      "</div>";
    setCase(state.caseIdx, false);
  }

  function setCase(idx, focus) {
    var c = t().cases;
    var n = c.items.length;
    idx = (idx + n) % n;
    state.caseIdx = idx;
    var it = c.items[idx];
    var L = c.labels;
    $$(".case-tab").forEach(function (b, i) {
      var on = i === idx;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
      if (on && focus !== undefined && b.scrollIntoView && window.innerWidth < 900) {
        b.parentNode.scrollTo({ left: b.offsetLeft - 16, behavior: reduceMotion ? "auto" : "smooth" });
      }
    });
    var panel = $("#case-panel");
    panel.setAttribute("aria-labelledby", "case-tab-" + idx);
    panel.innerHTML =
      '<div class="case-inner">' +
        '<header class="case-head">' +
          '<p class="case-meta"><span class="tag tag-accent">' + esc(it.area) + "</span><span>" + esc(it.org) + "</span></p>" +
          '<h3 class="case-title">' + esc(it.title) + "</h3>" +
          (it.metric ? '<p class="case-metric"><span class="case-metric-value">' + esc(it.metric.value) + '</span><span class="case-metric-label">' + esc(it.metric.label) + "</span></p>" : "") +
        "</header>" +
        '<div class="case-grid">' +
          '<section class="case-block"><h4>' + esc(L.context) + "</h4><p>" + md(it.context) + "</p></section>" +
          '<section class="case-block"><h4>' + esc(L.role) + "</h4><p>" + md(it.role) + "</p></section>" +
          '<section class="case-block case-actions"><h4>' + esc(L.actions) + "</h4><ol>" + it.actions.map(function (a) { return "<li>" + md(a) + "</li>"; }).join("") + "</ol></section>" +
          '<section class="case-block case-result"><h4>' + esc(L.result) + "</h4><p>" + md(it.result) + "</p>" + todo(it.todo) + "</section>" +
        "</div>" +
        (it.lesson ? '<blockquote class="case-lesson"><span class="label">' + esc(L.lesson) + "</span><p>" + md(it.lesson) + "</p></blockquote>" : "") +
        '<footer class="case-nav">' +
          '<button type="button" class="btn btn-small btn-ghost" data-case-step="-1" aria-label="' + esc(L.prev) + '">' + ICON.arrowLeft + '<span class="btn-text">' + esc(L.prev) + "</span></button>" +
          '<span class="case-count">' + pad(idx + 1) + " " + esc(L.of) + " " + pad(n) + "</span>" +
          '<button type="button" class="btn btn-small btn-ghost" data-case-step="1" aria-label="' + esc(L.next) + '">' + '<span class="btn-text">' + esc(L.next) + "</span>" + ICON.arrow + "</button>" +
        "</footer>" +
      "</div>";
    animateIn(panel.firstChild);
  }

  /* ---------- SKILLS ---------- */
  function renderSkills() {
    var s = t().skills;
    $("#skills").innerHTML =
      '<div class="container">' +
        sectionHead(4, s, "skills") +
        '<div class="skills reveal">' +
          '<div class="skill-tabs" role="tablist" aria-label="' + esc(s.kicker) + '">' +
            s.groups.map(function (g, i) {
              return '<button type="button" role="tab" class="skill-tab" id="skill-tab-' + i + '" aria-controls="skill-panel" data-idx="' + i + '">' +
                '<span class="skill-tab-num">' + pad(i + 1) + "</span>" +
                '<span class="skill-tab-title">' + esc(g.title) + "</span>" +
              "</button>";
            }).join("") +
          "</div>" +
          '<div class="skill-panel" id="skill-panel" role="tabpanel"></div>' +
        "</div>" +
        '<div class="credentials">' +
          '<h3 class="credentials-title reveal">' + esc(s.credentialsTitle) + "</h3>" +
          '<div class="cred-grid">' +
            s.credentials.map(function (c, i) {
              return '<article class="cred reveal" style="--d:' + i * 60 + 'ms"><h4 class="cred-title">' + esc(c.title) + '</h4><p class="cred-meta">' + esc(c.meta) + '</p><p class="cred-body">' + md(c.body) + "</p></article>";
            }).join("") +
          "</div>" +
        "</div>" +
      "</div>";
    setSkill(state.skillIdx, false);
  }

  function setSkill(idx, focus) {
    var s = t().skills;
    var n = s.groups.length;
    idx = (idx + n) % n;
    state.skillIdx = idx;
    var g = s.groups[idx];
    $$(".skill-tab").forEach(function (b, i) {
      var on = i === idx;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    });
    var panel = $("#skill-panel");
    panel.setAttribute("aria-labelledby", "skill-tab-" + idx);
    panel.innerHTML =
      '<div class="skill-inner">' +
        '<p class="skill-summary">' + md(g.summary) + "</p>" +
        '<div class="skill-list-head" aria-hidden="true"><span></span><span>' + esc(s.whereLabel) + "</span></div>" +
        '<ul class="skill-list">' +
          g.items.map(function (it) {
            return '<li><span class="skill-name">' + esc(it.name) + '</span><span class="skill-where"><span class="visually-hidden">' + esc(s.whereLabel) + ": </span>" + esc(it.where) + "</span></li>";
          }).join("") +
        "</ul>" +
        '<div class="skill-roles"><span class="label">' + esc(s.rolesLabel) + "</span>" +
          g.roles.map(function (id) {
            var r = roleById(id);
            return r ? '<a class="chip chip-link" href="#role-' + id + '" data-goto-role="' + id + '">' + esc(r.company) + "</a>" : "";
          }).join("") +
        "</div>" +
      "</div>";
    animateIn(panel.firstChild);
  }

  /* ---------- CONTACT ---------- */
  function renderContact() {
    var c = t().contact, m = C.meta;
    function row(label, valueHtml, copyVal) {
      return '<div class="contact-row"><dt>' + esc(label) + "</dt><dd>" + valueHtml +
        (copyVal ? '<button type="button" class="copy-btn" data-copy="' + esc(copyVal) + '" aria-label="' + esc(c.copy + ": " + copyVal) + '">' + ICON.copy + '<span class="copy-text">' + esc(c.copy) + "</span></button>" : "") +
        "</dd></div>";
    }
    function cvRow(label, href, lang) {
      return '<li class="cv-row"><span class="cv-name"><span class="cv-lang">' + lang.toUpperCase() + "</span>" + esc(label) + "</span>" +
        '<span class="cv-actions">' +
          '<a class="btn btn-small btn-light" href="' + href + '" download>' + ICON.download + esc(c.download) + "</a>" +
          '<a class="btn btn-small btn-outline-light" href="' + href + '" target="_blank" rel="noopener">' + ICON.eye + esc(c.preview) + "</a>" +
        "</span></li>";
    }
    $("#contact").innerHTML =
      '<div class="container contact-grid">' +
        '<div class="contact-main reveal">' +
          '<p class="kicker"><span class="kicker-num">05</span><span>' + esc(c.kicker) + "</span></p>" +
          '<h2 class="contact-title" id="contact-title">' + esc(c.title) + "</h2>" +
          '<p class="contact-body">' + esc(c.body) + "</p>" +
          '<dl class="contact-list">' +
            row(c.emailLabel, '<a href="mailto:' + esc(m.email) + '">' + esc(m.email) + "</a>", m.email) +
            (m.phone ? row(c.phoneLabel, '<a href="tel:' + esc(m.phoneHref || m.phone.replace(/\s/g, "")) + '">' + esc(m.phone) + "</a>", m.phone) : "") +
            row(c.linkedinLabel, '<a href="' + esc(m.linkedin) + '" target="_blank" rel="noopener">' + esc(m.linkedinLabel) + ICON.external + "</a>") +
            row(c.locationLabel, "<span>" + esc(c.location) + "</span>") +
          "</dl>" +
        "</div>" +
        '<aside class="cv-card reveal">' +
          '<h3 class="cv-title">' + esc(c.cvTitle) + "</h3>" +
          '<p class="cv-body">' + esc(c.cvBody) + "</p>" +
          '<ul class="cv-list">' +
            (state.lang === "pl"
              ? cvRow(c.cvPl, m.cv.pl, "pl") + cvRow(c.cvEn, m.cv.en, "en")
              : cvRow(c.cvEn, m.cv.en, "en") + cvRow(c.cvPl, m.cv.pl, "pl")) +
          "</ul>" +
        "</aside>" +
      "</div>";
  }

  function renderFooter() {
    var f = t().footer;
    $("#site-footer").innerHTML =
      '<div class="container footer-inner">' +
        "<p>© " + new Date().getFullYear() + " " + esc(C.meta.name) + ". " + esc(f.rights) + "</p>" +
        "<p>" + esc(f.updated) + ": " + esc(C.meta.updated[state.lang]) + "</p>" +
        '<a href="#top" class="footer-top">' + esc(f.top) + " ↑</a>" +
      "</div>";
  }

  /* ---------- review mode ---------- */
  function renderReviewBanner() {
    var old = $("#review-banner");
    if (old) old.remove();
    if (!REVIEW) return;
    var count = $$(".todo").length;
    var el = document.createElement("div");
    el.id = "review-banner";
    el.className = "review-banner";
    el.innerHTML = '<button type="button" class="review-banner-close" aria-label="Zamknij / Close">×</button>' + (state.lang === "pl"
      ? "<strong>Tryb przeglądu</strong> · widoczne pola do uzupełnienia: " + count + " (w tym ukryte w zwiniętych kartach). Usuń <code>?review</code> z adresu, aby je schować."
      : "<strong>Review mode</strong> · placeholders to complete: " + count + " (including collapsed cards). Remove <code>?review</code> from the URL to hide them.");
    document.body.appendChild(el);
  }

  /* ---------- render all ---------- */
  function renderAll() {
    var L = t();
    document.documentElement.lang = state.lang;
    document.title = L.htmlTitle;
    var md_ = $('meta[name="description"]');
    if (md_) md_.setAttribute("content", L.metaDescription);
    var ogt = $('meta[property="og:title"]');
    if (ogt) ogt.setAttribute("content", L.htmlTitle);

    renderNav();
    renderHero();
    renderApproach();
    renderExperience();
    renderCases();
    renderSkills();
    renderContact();
    renderFooter();
    renderReviewBanner();

    if (state.firstRender) {
      state.firstRender = false;
      observeReveal();
    } else {
      $$(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
    }
    observeLedger();
    updateActiveNav(currentSectionId());
  }

  /* ---------- language ---------- */
  function setLang(lang) {
    if (lang === state.lang || !C[lang]) return;
    // zapamiętaj pozycję względem bieżącej sekcji
    var anchor = currentSectionEl();
    var offset = anchor ? window.scrollY - anchor.offsetTop : 0;
    var main = $("#main");
    var swap = function () {
      state.lang = lang;
      try { localStorage.setItem("wr-lang", lang); } catch (e) {}
      var p = new URLSearchParams(location.search);
      p.set("lang", lang);
      history.replaceState(null, "", location.pathname + "?" + p.toString() + location.hash);
      renderAll();
      if (anchor) {
        var same = document.getElementById(anchor.id);
        if (same) window.scrollTo(0, same.offsetTop + offset);
      }
      main.classList.remove("is-switching");
    };
    if (reduceMotion) { swap(); return; }
    main.classList.add("is-switching");
    setTimeout(swap, 160);
  }

  /* ---------- observers & scroll ---------- */
  var revealObs = null;
  function observeReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window) || reduceMotion) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          revealObs.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { revealObs.observe(el); });
  }

  function observeLedger() {
    var led = $(".ledger");
    if (!led || state.counted) return;
    if (!("IntersectionObserver" in window)) { countUp(); return; }
    var o = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { countUp(); o.disconnect(); }
    }, { threshold: 0.4 });
    o.observe(led);
  }

  function headerH() {
    var h = $("#site-header");
    return h ? h.offsetHeight : 64;
  }
  function currentSectionEl() {
    var y = window.scrollY + headerH() + 24;
    var secs = $$("main > section");
    var cur = secs[0];
    secs.forEach(function (s) { if (s.offsetTop <= y) cur = s; });
    return cur;
  }
  function currentSectionId() {
    var el = currentSectionEl();
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 4) return "contact";
    return el ? el.id : "top";
  }
  function updateActiveNav(id) {
    $$("[data-nav]").forEach(function (a) {
      var on = a.dataset.nav === id;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      $("#progress-bar").style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
      $("#site-header").classList.toggle("is-scrolled", y > 8);
      updateActiveNav(currentSectionId());
    });
  }

  function animateIn(el) {
    if (!el || reduceMotion) return;
    el.classList.remove("fade-in");
    void el.offsetWidth;
    el.classList.add("fade-in");
  }

  /* ---------- mobile menu ---------- */
  function setMenu(open) {
    var btn = $("#menu-toggle"), menu = $("#mobile-menu");
    btn.setAttribute("aria-expanded", String(open));
    $("#menu-toggle-label").textContent = open ? t().nav.close : t().nav.menu;
    document.body.classList.toggle("menu-open", open);
    if (open) { menu.hidden = false; requestAnimationFrame(function () { menu.classList.add("is-open"); }); }
    else { menu.classList.remove("is-open"); setTimeout(function () { if (!menu.classList.contains("is-open")) menu.hidden = true; }, 220); }
  }

  /* ---------- copy ---------- */
  function copyText(btn) {
    var val = btn.dataset.copy;
    var done = function () {
      var label = $(".copy-text", btn);
      btn.classList.add("is-copied");
      btn.innerHTML = ICON.check + '<span class="copy-text">' + esc(t().contact.copied) + "</span>";
      setTimeout(function () {
        btn.classList.remove("is-copied");
        btn.innerHTML = ICON.copy + '<span class="copy-text">' + esc(t().contact.copy) + "</span>";
      }, 1600);
      return label;
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(val).then(done, function () { legacyCopy(val); done(); });
    } else { legacyCopy(val); done(); }
  }
  function legacyCopy(v) {
    var ta = document.createElement("textarea");
    ta.value = v; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    ta.remove();
  }

  /* ---------- tablist keyboard ---------- */
  function tabKeys(e, selector, setter, getIdx, count) {
    var k = e.key, i = getIdx();
    var next = null;
    if (k === "ArrowRight" || k === "ArrowDown") next = i + 1;
    else if (k === "ArrowLeft" || k === "ArrowUp") next = i - 1;
    else if (k === "Home") next = 0;
    else if (k === "End") next = count - 1;
    if (next === null) return;
    e.preventDefault();
    setter((next + count) % count, true);
  }

  /* ---------- events (delegated, survive re-render) ---------- */
  document.addEventListener("click", function (e) {
    var el;
    if ((el = e.target.closest("[data-lang]"))) { setLang(el.dataset.lang); return; }
    if ((el = e.target.closest(".role-head"))) { toggleRole(el.parentNode.dataset.role); return; }
    if ((el = e.target.closest(".chip[data-filter]"))) { state.filter = el.dataset.filter; applyFilter(); return; }
    if ((el = e.target.closest(".chart-role"))) { focusRole(el.dataset.role); return; }
    if ((el = e.target.closest("[data-goto-role]"))) { e.preventDefault(); focusRole(el.dataset.gotoRole); return; }
    if ((el = e.target.closest(".loop-step"))) { setLoop(+el.dataset.idx, false); return; }
    if ((el = e.target.closest(".case-tab"))) { setCase(+el.dataset.idx, false); return; }
    if ((el = e.target.closest("[data-case-step]"))) {
      setCase(state.caseIdx + +el.dataset.caseStep, false);
      var p = $("#case-panel");
      if (p && p.getBoundingClientRect().top < headerH()) p.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      return;
    }
    if ((el = e.target.closest(".skill-tab"))) { setSkill(+el.dataset.idx, false); return; }
    if ((el = e.target.closest(".copy-btn"))) { copyText(el); return; }
    if (e.target.closest(".review-banner-close")) { $("#review-banner").remove(); return; }
    if ((el = e.target.closest("#menu-toggle"))) { setMenu(el.getAttribute("aria-expanded") !== "true"); return; }
    if (e.target.closest("#mobile-menu a")) { setMenu(false); }
  });

  document.addEventListener("keydown", function (e) {
    var el = e.target;
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setMenu(false); $("#menu-toggle").focus(); return; }
    if (el.classList && el.classList.contains("loop-step")) tabKeys(e, ".loop-step", setLoop, function () { return state.loopIdx; }, t().approach.loop.length);
    else if (el.classList && el.classList.contains("case-tab")) tabKeys(e, ".case-tab", setCase, function () { return state.caseIdx; }, t().cases.items.length);
    else if (el.classList && el.classList.contains("skill-tab")) tabKeys(e, ".skill-tab", setSkill, function () { return state.skillIdx; }, t().skills.groups.length);
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("resize", function () { if (window.innerWidth > 900 && document.body.classList.contains("menu-open")) setMenu(false); });

  /* ---------- go ---------- */
  renderAll();
  onScroll();
  // przewiń do kotwicy po wyrenderowaniu treści (np. link .../#contact)
  if (location.hash && location.hash.length > 1) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(function () { target.scrollIntoView(); }, 0);
  }
})();
