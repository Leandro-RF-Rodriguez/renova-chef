/* Renova Chef — interações do site (JavaScript puro, sem dependências) */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
   * RECEITAS
   * Para adicionar uma receita, copie um objeto abaixo e ajuste os campos.
   * tipos: "fruta" e/ou "legume" (usados nos filtros).
   * ------------------------------------------------------------------ */
  var RECIPES = [
    {
      id: 'bolo-casca-banana',
      title: 'Bolo de casca de banana',
      summary: 'Massa fofa feita com as cascas batidas no liquidificador e claras em neve, finalizada com canela.',
      types: ['fruta'],
      tags: ['Casca de banana', 'Bolo'],
      time: '1 h (40 min de forno)',
      yield: '1 forma de 30 × 40 cm',
      image: 'https://images.unsplash.com/photo-1767065887793-f68f736ea9d6?w=1000&q=80&auto=format&fit=crop',
      imageAlt: 'Fatias de bolo de banana sobre uma tábua de madeira',
      credit: { name: 'Diego Arenas de Rodrigo', url: 'https://unsplash.com/photos/slices-of-banana-bread-on-a-wooden-cutting-board-bWj_oZPjXS8' },
      ingredients: [
        '2 xícaras (chá) de cascas de banana madura higienizadas',
        '½ xícara (chá) de água',
        '5 colheres (sopa) rasas de óleo',
        '4 gemas',
        '2 xícaras (chá) de açúcar',
        '3 xícaras (chá) de farinha de trigo',
        '2 colheres (sopa) de fermento químico em pó',
        '4 claras batidas em neve',
        'Canela em pó para polvilhar'
      ],
      steps: [
        'Preaqueça o forno a 180 °C e unte uma forma retangular de 30 × 40 cm.',
        'Pique as cascas e bata no liquidificador com a água até formar um creme liso.',
        'Na batedeira, bata o óleo, as gemas e o açúcar até a mistura ficar homogênea.',
        'Junte o creme de cascas e, em seguida, a farinha e o fermento, misturando bem.',
        'Incorpore as claras em neve com movimentos delicados, de baixo para cima.',
        'Despeje na forma, polvilhe canela por cima e asse por cerca de 40 minutos, até o palito sair limpo.'
      ],
      tip: 'Use bananas bem maduras: a casca fica mais fina e adocicada. Higienize as bananas inteiras antes de descascar.',
      labelIngredients: 'Casca de banana, farinha de trigo, açúcar, ovos, óleo vegetal, fermento químico e canela.',
      allergens: 'Contém glúten e ovos.',
      storage: 'Em recipiente fechado, em local fresco, ou na geladeira.',
      shelfDays: 3,
      source: { name: 'Prefeitura do Rio de Janeiro — Cartilha de Receitas de Aproveitamento Integral dos Alimentos (2024), CC BY-NC 4.0', url: 'https://rebrae.com.br/wp-content/uploads/2024/09/Prefeitura_CadernosPromocaoSaude_Receitas_Online_v6.pdf' }
    },
    {
      id: 'casca-laranja-cristalizada',
      title: 'Casca de laranja cristalizada',
      summary: 'Tiras de casca cozidas em calda e passadas no açúcar. Viram doce, cobertura de bolo ou acompanhamento para o café.',
      types: ['fruta'],
      tags: ['Casca de laranja', 'Doce'],
      time: 'Cerca de 1 h 30 min',
      yield: 'Cascas de 8 laranjas',
      image: 'https://images.unsplash.com/photo-1645614844091-e3d64263a289?w=1000&q=80&auto=format&fit=crop',
      imageAlt: 'Pote de vidro com açúcar e tiras de casca de laranja',
      credit: { name: 'Almas Salakhov', url: 'https://unsplash.com/photos/a-glass-jar-filled-with-sugar-and-orange-peels-F1R-lN8IJU8' },
      ingredients: [
        'Cascas de 8 laranjas higienizadas',
        '1 litro de água (para o primeiro cozimento)',
        '3 xícaras (chá) de açúcar (para a calda)',
        '2 xícaras (chá) de água (para a calda)',
        '1 xícara (chá) de açúcar (para passar as cascas)'
      ],
      steps: [
        'Corte as cascas em tiras, mantendo a parte branca.',
        'Cozinhe as tiras em 1 litro de água até amolecerem. Descarte essa água e lave as cascas em água corrente.',
        'Em outra panela, leve as 3 xícaras de açúcar e as 2 xícaras de água ao fogo para formar uma calda.',
        'Junte as cascas à calda e cozinhe em fogo baixo até ficarem macias e brilhantes.',
        'Sirva gelada na própria calda ou escorra, passe as tiras no açúcar e deixe secar sobre uma grade.'
      ],
      tip: 'Para um doce menos amargo, repita a primeira fervura trocando a água mais uma ou duas vezes.',
      labelIngredients: 'Casca de laranja e açúcar.',
      allergens: 'Não contém glúten.',
      storage: 'Em pote de vidro bem fechado, em temperatura ambiente.',
      shelfDays: 10,
      source: { name: 'Prefeitura do Rio de Janeiro — Cartilha de Receitas de Aproveitamento Integral dos Alimentos (2024), CC BY-NC 4.0', url: 'https://rebrae.com.br/wp-content/uploads/2024/09/Prefeitura_CadernosPromocaoSaude_Receitas_Online_v6.pdf' }
    },
    {
      id: 'bolo-cenoura-laranja',
      title: 'Bolo de cenoura com laranja e banana',
      summary: 'Bolo de liquidificador que usa a cenoura, a laranja e as bananas inteiras, com casca e tudo, perfumado com canela e cravo.',
      types: ['fruta', 'legume'],
      tags: ['Casca de cenoura', 'Laranja e banana com casca'],
      time: 'Cerca de 1 h (35 a 40 min de forno)',
      yield: '1 forma com furo no meio',
      image: 'https://images.unsplash.com/photo-1676300186098-9b5ae9916e3c?w=1000&q=80&auto=format&fit=crop',
      imageAlt: 'Pedaço de bolo de cenoura em um prato com garfo',
      credit: { name: 'Orkun Orcan', url: 'https://unsplash.com/photos/a-piece-of-carrot-cake-on-a-plate-with-a-fork-EvfXG4aK9d8' },
      ingredients: [
        '2 bananas nanicas com casca',
        '1 cenoura com casca',
        '1 laranja com casca, sem sementes',
        '3 ovos',
        '¾ de xícara (chá) de óleo',
        '1 xícara (chá) de leite',
        '2 xícaras (chá) de açúcar',
        '1 ½ xícara (chá) de farinha de trigo',
        '1 colher (sopa) de fermento químico em pó',
        '1 colher (café) de bicarbonato de sódio',
        'Canela e cravo em pó a gosto'
      ],
      steps: [
        'Preaqueça o forno a 180 °C e unte uma forma com furo no meio.',
        'Higienize bem as bananas, a cenoura e a laranja.',
        'Corte tudo em pedaços pequenos, mantendo as cascas. Da laranja, retire apenas as sementes.',
        'Bata no liquidificador as frutas e a cenoura com os ovos, o açúcar, o leite e o óleo.',
        'Em uma tigela, misture a farinha, o fermento, o bicarbonato, a canela e o cravo.',
        'Despeje o creme batido sobre os secos e misture bem.',
        'Leve à forma e asse por 35 a 40 minutos. Confira com um garfo se está assado.'
      ],
      tip: 'Se a casca da laranja estiver muito grossa, retire um pouco da parte branca para o bolo não ficar amargo.',
      labelIngredients: 'Banana com casca, cenoura com casca, laranja com casca, açúcar, farinha de trigo, ovos, leite, óleo vegetal, fermento químico, bicarbonato de sódio, canela e cravo.',
      allergens: 'Contém glúten, ovos e leite.',
      storage: 'Em recipiente fechado, em local fresco, ou na geladeira.',
      shelfDays: 3,
      source: { name: 'Sesc/RS — Receitas Mesa Brasil, Santa Maria (2018)', url: 'https://www.sesc-rs.com.br/wp-content/uploads/2017/10/LivretoReceitasSantaMaria2018.pdf' }
    }
  ];

  /* ------------------------------------------------------------------ */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function siteUrl() {
    return window.location.href.split('#')[0];
  }

  function qrUrl(data) {
    return 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=0&data=' + encodeURIComponent(data);
  }

  function findRecipe(id) {
    for (var i = 0; i < RECIPES.length; i++) if (RECIPES[i].id === id) return RECIPES[i];
    return null;
  }

  function toast(msg) {
    var el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.classList.remove('is-visible'); }, 2600);
  }

  var ICON_CLOCK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
  var ICON_YIELD = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11h18"/><path d="M5 11V7a7 7 0 0 1 14 0v4"/><path d="M4 11h16v2a8 8 0 0 1-16 0z"/></svg>';
  var ICON_PRINT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>';

  function imgHtml(r) {
    return '<img src="' + esc(r.image) + '" alt="' + esc(r.imageAlt) + '" loading="lazy" onerror="this.parentNode.classList.add(\'no-img\');this.remove();">' +
      '<figcaption>Foto: ' + esc(r.credit.name) + ' / Unsplash</figcaption>';
  }

  /* ---------------------------- MENU MOBILE --------------------------- */
  function initNav() {
    var btn = $('.nav-toggle');
    var links = $('#nav-links');
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    $$('a', links).forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

  /* ------------------------------ RECEITAS ---------------------------- */
  function renderRecipes() {
    var grid = $('#recipe-grid');
    grid.innerHTML = RECIPES.map(function (r) {
      return '<article class="recipe-card" data-types="' + esc(r.types.join(' ')) + '">' +
        '<figure class="recipe-img" style="margin:0">' + imgHtml(r) + '</figure>' +
        '<div class="recipe-body">' +
          '<div class="tags">' + r.tags.map(function (t, i) {
            return '<span class="tag' + (i > 0 ? ' tag-green' : '') + '">' + esc(t) + '</span>';
          }).join('') + '</div>' +
          '<h3>' + esc(r.title) + '</h3>' +
          '<p>' + esc(r.summary) + '</p>' +
          '<div class="meta"><span>' + ICON_CLOCK + esc(r.time) + '</span><span>' + ICON_YIELD + esc(r.yield) + '</span></div>' +
          '<div class="recipe-actions">' +
            '<a class="btn btn-primary btn-sm" href="#receita-' + esc(r.id) + '" data-open="' + esc(r.id) + '">Ver receita</a>' +
            '<button type="button" class="btn btn-outline btn-sm" data-print="' + esc(r.id) + '">' + ICON_PRINT + 'Imprimir</button>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');

    grid.addEventListener('click', function (e) {
      var open = e.target.closest('[data-open]');
      var print = e.target.closest('[data-print]');
      if (open) { e.preventDefault(); openRecipe(open.getAttribute('data-open'), true); }
      if (print) { printRecipe(print.getAttribute('data-print')); }
    });
  }

  function initFilters() {
    var chips = $$('.chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.getAttribute('data-filter');
        chips.forEach(function (c) {
          var on = c === chip;
          c.classList.toggle('is-active', on);
          c.setAttribute('aria-pressed', String(on));
        });
        $$('.recipe-card').forEach(function (card) {
          var types = card.getAttribute('data-types').split(' ');
          card.hidden = !(f === 'todas' || types.indexOf(f) !== -1);
        });
      });
    });
  }

  /* ------------------------------- MODAL ------------------------------ */
  var dialog, lastFocus;

  function recipeDetailHtml(r) {
    return '<figure class="dlg-hero" style="margin:0">' + imgHtml(r).replace('loading="lazy" ', '') + '</figure>' +
      '<div class="dlg-body">' +
        '<div class="tags">' + r.tags.map(function (t, i) { return '<span class="tag' + (i > 0 ? ' tag-green' : '') + '">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<h2 id="dlg-title">' + esc(r.title) + '</h2>' +
        '<div class="meta"><span>' + ICON_CLOCK + esc(r.time) + '</span><span>' + ICON_YIELD + esc(r.yield) + '</span></div>' +
        '<div class="cols-2">' +
          '<div><h3>Ingredientes</h3><ul class="ing-list">' + r.ingredients.map(function (ing) {
            return '<li><label><input type="checkbox"><span>' + esc(ing) + '</span></label></li>';
          }).join('') + '</ul></div>' +
          '<div><h3>Modo de preparo</h3><ol class="method">' + r.steps.map(function (s) {
            return '<li><span>' + esc(s) + '</span></li>';
          }).join('') + '</ol></div>' +
        '</div>' +
        '<p class="tip"><strong>Dica:</strong> ' + esc(r.tip) + '</p>' +
        '<div class="actions">' +
          '<button type="button" class="btn btn-primary" data-dlg-print="' + esc(r.id) + '">' + ICON_PRINT + 'Imprimir receita</button>' +
          '<a class="btn btn-outline" href="#etiqueta" data-dlg-label="' + esc(r.id) + '">Gerar etiqueta</a>' +
        '</div>' +
        '<p class="source">Fonte: <a href="' + esc(r.source.url) + '" target="_blank" rel="noopener">' + esc(r.source.name) + '</a>. Texto adaptado. Foto ilustrativa.</p>' +
      '</div>';
  }

  function openRecipe(id, pushHash) {
    var r = findRecipe(id);
    if (!r) return;
    lastFocus = document.activeElement;
    $('#dlg-content').innerHTML = recipeDetailHtml(r);
    if (typeof dialog.showModal === 'function') {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    dialog.scrollTop = 0;
    $('#dlg-close').focus();
    if (pushHash && history.replaceState) history.replaceState(null, '', '#receita-' + id);
  }

  function closeRecipe() {
    if (typeof dialog.close === 'function' && dialog.open) dialog.close();
    else dialog.removeAttribute('open');
  }

  function initDialog() {
    dialog = $('#recipe-dialog');
    $('#dlg-close').addEventListener('click', closeRecipe);
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) { closeRecipe(); return; }
      var p = e.target.closest('[data-dlg-print]');
      if (p) printRecipe(p.getAttribute('data-dlg-print'));
      var l = e.target.closest('[data-dlg-label]');
      if (l) {
        $('#lf-recipe').value = l.getAttribute('data-dlg-label');
        applyRecipeToLabel();
        closeRecipe();
      }
    });
    dialog.addEventListener('close', function () {
      if (/^#receita-/.test(location.hash) && history.replaceState) history.replaceState(null, '', '#receitas');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    });

    function fromHash() {
      var m = location.hash.match(/^#receita-(.+)$/);
      if (m && findRecipe(m[1])) {
        var sec = $('#receitas');
        if (sec) sec.scrollIntoView();
        openRecipe(m[1], false);
      }
    }
    window.addEventListener('hashchange', fromHash);
    fromHash();
  }

  /* ----------------------------- IMPRESSÃO ---------------------------- */
  function doPrint(html) {
    var area = $('#print-area');
    area.innerHTML = html;
    document.body.classList.add('printing');
    var cleaned = false;
    function cleanup() {
      if (cleaned) return;
      cleaned = true;
      document.body.classList.remove('printing');
      area.innerHTML = '';
      window.removeEventListener('afterprint', cleanup);
    }
    window.addEventListener('afterprint', cleanup);
    // espera as imagens (QR Code) carregarem antes de abrir a impressão
    var imgs = $$('img', area);
    var pending = imgs.filter(function (i) { return !i.complete; });
    var go = function () { setTimeout(function () { window.print(); setTimeout(cleanup, 1000); }, 50); };
    if (!pending.length) { go(); return; }
    var left = pending.length;
    var done = function () { if (--left === 0) go(); };
    pending.forEach(function (i) { i.addEventListener('load', done); i.addEventListener('error', done); });
    setTimeout(function () { if (left > 0) { left = 0; go(); } }, 2500);
  }

  function printRecipe(id) {
    var r = findRecipe(id);
    if (!r) return;
    doPrint(
      '<article class="print-recipe">' +
        '<p class="p-meta">Renova Chef · receitas com aproveitamento integral</p>' +
        '<h1>' + esc(r.title) + '</h1>' +
        '<p class="p-meta">Tempo: ' + esc(r.time) + ' · Rendimento: ' + esc(r.yield) + '</p>' +
        '<h2>Ingredientes</h2><ul>' + r.ingredients.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
        '<h2>Modo de preparo</h2><ol>' + r.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>' +
        '<h2>Dica</h2><p>' + esc(r.tip) + '</p>' +
        '<h2>Antes de começar</h2><p>Lave as frutas e legumes em água corrente, deixe de molho por 15 minutos em solução sanitizante própria para alimentos (na diluição do rótulo) e enxágue em água potável.</p>' +
        '<p class="p-source">Fonte: ' + esc(r.source.name) + '. Texto adaptado.<br>' + esc(siteUrl()) + '</p>' +
      '</article>'
    );
  }

  /* ------------------------------ ETIQUETA ---------------------------- */
  function todayISO() {
    var d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }

  function fmtDate(iso) {
    if (!iso) return '—';
    var p = iso.split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
  }

  function addDays(iso, n) {
    if (!iso) return '';
    var p = iso.split('-').map(Number);
    var d = new Date(p[0], p[1] - 1, p[2] + Number(n || 0));
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + mm + '-' + dd;
  }

  function labelHtml() {
    return '<div class="food-label">' + labelInner() + '</div>';
  }

  function labelInner() {
    var r = findRecipe($('#lf-recipe').value) || RECIPES[0];
    var maker = $('#lf-maker').value.trim();
    var date = $('#lf-date').value;
    var days = $('#lf-days').value;
    var ingredients = $('#lf-ingredients').value.trim();
    var storage = $('#lf-storage').value.trim();
    return '<div class="fl-head"><div><strong>' + esc(r.title) + '</strong>' +
        (maker ? '<span class="fl-maker">' + esc(maker) + '</span>' : '') + '</div>' +
        '<span class="fl-badge">Aproveitamento integral</span></div>' +
      '<p class="fl-text"><b>Ingredientes:</b> ' + esc(ingredients || '—') + '</p>' +
      '<p class="fl-text"><b>Alergênicos:</b> ' + esc(r.allergens) + '</p>' +
      '<p class="fl-text"><b>Conservação:</b> ' + esc(storage || '—') + '</p>' +
      '<div class="fl-dates"><div><span>Fabricação</span><strong>' + esc(fmtDate(date)) + '</strong></div>' +
        '<div><span>Validade</span><strong>' + esc(fmtDate(addDays(date, days))) + '</strong></div></div>' +
      '<div class="fl-qr"><img src="' + esc(qrUrl(siteUrl() + '#receita-' + r.id)) + '" alt="QR Code da receita no site Renova Chef" width="76" height="76">' +
        '<span>Cascas higienizadas conforme as boas práticas da Anvisa. Aponte a câmera para ver a receita.</span></div>';
  }

  function updateLabel() {
    $('#label-preview').innerHTML = labelInner();
  }

  function applyRecipeToLabel() {
    var r = findRecipe($('#lf-recipe').value);
    if (!r) return;
    $('#lf-ingredients').value = r.labelIngredients;
    $('#lf-storage').value = r.storage;
    $('#lf-days').value = r.shelfDays;
    updateLabel();
  }

  function initLabel() {
    var sel = $('#lf-recipe');
    sel.innerHTML = RECIPES.map(function (r) {
      return '<option value="' + esc(r.id) + '">' + esc(r.title) + '</option>';
    }).join('');
    $('#lf-date').value = todayISO();
    try { $('#lf-maker').value = localStorage.getItem('renovachef-maker') || ''; } catch (e) {}
    applyRecipeToLabel();

    sel.addEventListener('change', applyRecipeToLabel);
    ['#lf-maker', '#lf-date', '#lf-days', '#lf-ingredients', '#lf-storage'].forEach(function (s) {
      $(s).addEventListener('input', updateLabel);
    });
    $('#lf-maker').addEventListener('change', function () {
      try { localStorage.setItem('renovachef-maker', this.value.trim()); } catch (e) {}
    });
    $('#print-label').addEventListener('click', function () {
      var one = labelHtml();
      doPrint('<div class="print-labels">' + one + one + one + one + '</div>');
    });
  }

  /* --------------------------- CONTROLE (LOG) ------------------------- */
  var LOG_KEY = 'renovachef-log';

  function readLog() {
    try { return JSON.parse(localStorage.getItem(LOG_KEY)) || []; } catch (e) { return []; }
  }
  function writeLog(list) {
    try { localStorage.setItem(LOG_KEY, JSON.stringify(list)); } catch (e) { toast('Não foi possível salvar neste navegador.'); }
  }

  function fmtWeight(g) {
    return g >= 1000 ? (g / 1000).toFixed(2).replace('.', ',') + ' kg' : Math.round(g) + ' g';
  }

  function renderLog() {
    var list = readLog();
    var body = $('#log-body');
    if (!list.length) {
      body.innerHTML = '<tr><td colspan="5" class="empty">Nenhum registro ainda. Adicione a primeira produção acima.</td></tr>';
    } else {
      body.innerHTML = list.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).map(function (it) {
        return '<tr><td>' + esc(fmtDate(it.date)) + '</td><td>' + esc(it.item) + '</td><td>' + esc(fmtWeight(it.grams)) + '</td><td>' + esc(it.use) + '</td>' +
          '<td><button type="button" class="del-btn" data-del="' + esc(it.id) + '" aria-label="Excluir registro de ' + esc(it.item) + '">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></td></tr>';
      }).join('');
    }
    var used = 0, wasted = 0;
    list.forEach(function (it) { if (it.use === 'Descartada') wasted += it.grams; else used += it.grams; });
    var total = used + wasted;
    var pct = total ? Math.round((used / total) * 100) : 0;
    $('#log-stats').innerHTML =
      '<div class="stat"><b>' + fmtWeight(used) + '</b><span>de cascas aproveitadas</span></div>' +
      '<div class="stat"><b>' + fmtWeight(wasted) + '</b><span>ainda descartadas</span></div>' +
      '<div class="stat"><b>' + pct + '%</b><span>de aproveitamento</span></div>';
  }

  function initLog() {
    $('#lg-date').value = todayISO();
    $('#log-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var date = $('#lg-date').value;
      var item = $('#lg-item').value.trim();
      var grams = parseFloat($('#lg-grams').value);
      if (!date || !item || !(grams > 0)) { toast('Preencha data, casca e peso.'); return; }
      var list = readLog();
      list.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), date: date, item: item, grams: grams, use: $('#lg-use').value });
      writeLog(list);
      $('#lg-item').value = '';
      $('#lg-grams').value = '';
      $('#lg-item').focus();
      renderLog();
      toast('Registro adicionado.');
    });
    $('#log-body').addEventListener('click', function (e) {
      var b = e.target.closest('[data-del]');
      if (!b) return;
      var id = b.getAttribute('data-del');
      writeLog(readLog().filter(function (it) { return it.id !== id; }));
      renderLog();
      toast('Registro excluído.');
    });
    $('#log-export').addEventListener('click', function () {
      var list = readLog();
      if (!list.length) { toast('Não há registros para exportar.'); return; }
      var rows = [['Data', 'Casca ou sobra', 'Peso (g)', 'Destino']].concat(list.map(function (it) {
        return [fmtDate(it.date), it.item, String(it.grams).replace('.', ','), it.use];
      }));
      var csv = rows.map(function (r) {
        return r.map(function (c) { return '"' + String(c).replace(/"/g, '""') + '"'; }).join(';');
      }).join('\r\n');
      var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'renova-chef-controle-' + todayISO() + '.csv';
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
    });
    var clearArmed = false;
    $('#log-clear').addEventListener('click', function () {
      var btn = this;
      if (!readLog().length) { toast('Não há registros para limpar.'); return; }
      if (!clearArmed) {
        clearArmed = true;
        btn.textContent = 'Clique de novo para confirmar';
        setTimeout(function () { clearArmed = false; btn.textContent = 'Limpar registros'; }, 4000);
        return;
      }
      clearArmed = false;
      btn.textContent = 'Limpar registros';
      writeLog([]);
      renderLog();
      toast('Registros apagados.');
    });
    renderLog();
  }

  /* --------------------------- HIGIENIZAÇÃO --------------------------- */
  function initHygiene() {
    var boxes = $$('#hygiene-steps input');
    var out = $('#hygiene-progress');
    function update() {
      var n = boxes.filter(function (b) { return b.checked; }).length;
      out.textContent = n === boxes.length
        ? 'Tudo pronto: as cascas estão higienizadas.'
        : n + ' de ' + boxes.length + ' etapas concluídas';
    }
    boxes.forEach(function (b) { b.addEventListener('change', update); });
    update();
  }

  /* ---------------------------- COMPARTILHAR -------------------------- */
  function initShare() {
    $('#share-btn').addEventListener('click', function () {
      var data = { title: 'Renova Chef', text: 'Receitas com cascas de frutas e legumes para não desperdiçar comida.', url: siteUrl() };
      if (navigator.share) {
        navigator.share(data).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(data.url).then(function () { toast('Link copiado!'); }, function () { toast(data.url); });
      } else {
        toast(data.url);
      }
    });
  }

  /* ------------------------------- INÍCIO ----------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    $('#year').textContent = new Date().getFullYear();
    initNav();
    renderRecipes();
    initFilters();
    initHygiene();
    initLabel();
    initLog();
    initShare();
    initDialog();
  });
})();
