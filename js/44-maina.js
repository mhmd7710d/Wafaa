/* ================= icons ================= */
const IC = {
  album: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.7"/><path d="M3 17l5-4 4 3 4-4 5 5"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  gamepad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="19" height="11" rx="5.5"/><path d="M8 10.5v4M6 12.5h4"/><circle cx="15.5" cy="11.5" r="1" fill="currentColor" stroke="none"/><circle cx="18" cy="14" r="1" fill="currentColor" stroke="none"/></svg>',
  puzzle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h4v3a2 2 0 1 0 4 .3V3h4v4h-3a2 2 0 1 0 .3 4H21v4h-4v3a2 2 0 1 0-4-.3V15H9v4H5v-4h3a2 2 0 1 0-.3-4H5V7h4V3z" transform="scale(.92) translate(1,1)"/></svg>',
  memory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="8" height="10" rx="2"/><rect x="13" y="10" width="8" height="10" rx="2"/><path d="M7 18v.01M17 4v.01"/></svg>',
  letter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.7-10-9.3C.4 8.6 2.3 4.9 5.9 4.2c2-.4 4 .4 6.1 2.6 2.1-2.2 4.1-3 6.1-2.6 3.6.7 5.5 4.4 3.9 7.5C19.5 16.3 12 21 12 21z"/></svg>'
};
function ic(name){ return IC[name] || ''; }

/* ================= albums ================= */
const albums = [
  { id:'sawa', title:'صورنا سوا', cover:'img/35-p15.jpg', coverPos:'50% 22%', photos:[
    {src:'img/33-p13.jpg', pos:'50% 50%', wide:true, ratio:'4/3'},
    {src:'img/32-p12.jpg', pos:'50% 45%', wide:true, ratio:'4/3'},
    {src:'img/35-p15.jpg', pos:'50% 22%'},
    {src:'img/38-p18.jpg', pos:'50% 22%'},
    {src:'img/40-p20.jpg', pos:'50% 35%', ratio:'1/1'}
  ]},
  { id:'portraits', title:'بورتريهات', cover:'img/28-p8.jpg', coverPos:'50% 20%', photos:[
    {src:'img/28-p8.jpg', pos:'50% 20%'},
    {src:'img/27-p7.jpg', pos:'50% 25%'},
    {src:'img/29-p9.jpg', pos:'50% 20%'},
    {src:'img/34-p14.jpg', pos:'50% 25%'},
    {src:'img/36-p16.jpg', pos:'50% 22%'},
    {src:'img/37-p17.jpg', pos:'50% 25%'},
    {src:'img/39-p19.jpg', pos:'50% 25%'},
    {src:'img/42-p22.jpg', pos:'50% 22%'}
  ]},
  { id:'details', title:'تفاصيل', cover:'img/30-p10.jpg', coverPos:'50% 45%', photos:[
    {src:'img/30-p10.jpg', pos:'50% 45%'},
    {src:'img/25-p5.jpg', pos:'50% 60%'},
    {src:'img/41-p21.jpg', pos:'50% 50%'},
    {src:'img/26-p6.jpg', pos:'50% 65%'},
    {src:'img/31-p11.jpg', pos:'50% 50%'}
  ]},
  { id:'originals', title:'الصور الأصلية', cover:'img/p4.jpg', coverPos:'50% 30%', photos:[
    {src:'img/p4.jpg', pos:'50% 35%', cap:'ودلوقتي... لسه نفس القرب، بس كبرنا وكبرت معايا المشاعر'},
    {src:'img/p1.jpg', pos:'50% 30%', cap:'بداية حكاية عمرها سنين'},
    {src:'img/p2.jpg', pos:'50% 30%', cap:'زمان وإحنا بنجمع الفرح من حاجات صغيرة'},
    {src:'img/p3.jpg', pos:'50% 25%', cap:'سهرات بسيطة فضلت في القلب'}
  ]}
];

const EAGER = location.search.includes('eager=1');
const LAZY = EAGER ? 'eager' : 'lazy';
const albumsWrap = document.getElementById('albumsWrap');
albums.forEach((a, i) => {
  const card = document.createElement('button');
  card.className = 'album-card rv';
  card.style.transitionDelay = (i*100) + 'ms';
  card.setAttribute('aria-label', 'ألبوم ' + a.title);
  card.innerHTML = `
    <span class="album-cover">
      <img src="${a.cover}" alt="${a.title}" style="object-position:${a.coverPos || '50% 30%'}" loading="${LAZY}" decoding="async">
      <span class="album-badge">${a.photos.length} صور</span>
    </span>
    <span class="album-meta">
      <span class="album-title">${a.title}</span>
      <span class="album-open-ic">${ic('chevron')}</span>
    </span>`;
  card.addEventListener('click', () => openAlbum(a.id));
  albumsWrap.appendChild(card);
});

/* ================= overlays ================= */
function openOverlay(el){
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeOverlays(){
  document.querySelectorAll('.overlay.open').forEach(el => el.classList.remove('open'));
  document.body.style.overflow = '';
  closeLb();
}
function makeOverlay(titleText, countText){
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.innerHTML = `
    <div class="ov-head">
      <button class="ov-back" type="button">${ic('back')}<span>رجوع</span></button>
      <h3></h3>
      <span class="ov-count"></span>
    </div>
    <div class="ov-body"></div>`;
  ov.querySelector('h3').textContent = titleText;
  ov.querySelector('.ov-count').textContent = countText || '';
  ov.querySelector('.ov-back').addEventListener('click', closeOverlays);
  document.body.appendChild(ov);
  return ov;
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.classList.contains('open')) closeOverlays();
});

/* ================= album view ================= */
const albumOv = makeOverlay('', '');
const albumGrid = document.createElement('div');
albumGrid.className = 'av-grid';
albumOv.querySelector('.ov-body').appendChild(albumGrid);
let currentAlbum = null;

function openAlbum(id){
  const a = albums.find(x => x.id === id);
  if (!a) return;
  currentAlbum = a;
  albumOv.querySelector('h3').textContent = a.title;
  albumOv.querySelector('.ov-count').textContent = a.photos.length + ' صور';
  albumGrid.innerHTML = '';
  a.photos.forEach((p, i) => {
    const fig = document.createElement('figure');
    fig.className = 'g-card' + (p.cap ? ' highlight' : '') + (p.wide ? ' wide' : '');
    fig.innerHTML = `<img src="${p.src}" alt="${a.title}" style="object-position:${p.pos}${p.ratio ? ';aspect-ratio:' + p.ratio : ''}" loading="${LAZY}" decoding="async">`
      + (p.cap ? `<figcaption>${p.cap}</figcaption>` : '');
    fig.querySelector('img').addEventListener('click', () => openLb(i));
    albumGrid.appendChild(fig);
  });
  albumOv.scrollTop = 0;
  openOverlay(albumOv);
}

/* ================= games ================= */
const gamesWrap = document.getElementById('gamesWrap');
const games = [
  { id:'memory', cls:'mem', title:'لعبة الذاكرة', desc:'وصّلي كل صورتين شبه بعض بأقل محاولات.', icon:'memory' },
  { id:'puzzle', cls:'puz', title:'بازل الصورة', desc:'حرّكي القطع لحد ما الصورة ترجع مظبوطة.', icon:'puzzle' }
];
games.forEach((g, i) => {
  const card = document.createElement('button');
  card.className = 'game-card rv ' + g.cls;
  card.style.transitionDelay = (i*120) + 'ms';
  card.innerHTML = `
    <span class="game-ic">${ic(g.icon)}</span>
    <h3>${g.title}</h3>
    <p>${g.desc}</p>
    <span class="game-play">العبي</span>`;
  card.addEventListener('click', () => openGame(g.id));
  gamesWrap.appendChild(card);
});

const gameOv = makeOverlay('', '');
const gameBody = gameOv.querySelector('.ov-body');

function openGame(id){
  gameBody.innerHTML = '';
  if (id === 'memory'){
    gameOv.querySelector('h3').textContent = 'لعبة الذاكرة';
    gameOv.querySelector('.ov-count').textContent = '';
    buildMemory(gameBody);
  } else if (id === 'puzzle'){
    gameOv.querySelector('h3').textContent = 'بازل الصورة';
    gameOv.querySelector('.ov-count').textContent = '';
    buildPuzzle(gameBody);
  }
  gameOv.scrollTop = 0;
  openOverlay(gameOv);
}

/* ---- memory match ---- */
const memoryPhotos = ['img/33-p13.jpg','img/28-p8.jpg','img/39-p19.jpg','img/30-p10.jpg','img/p4.jpg','img/p2.jpg'];
const memoryPos = {'img/33-p13.jpg':'62% 40%','img/28-p8.jpg':'50% 20%','img/39-p19.jpg':'50% 25%','img/30-p10.jpg':'50% 45%','img/p4.jpg':'50% 32%','img/p2.jpg':'50% 30%'};
function shuffleArr(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
let memLock = false, memFirst = null, memPairs = 0, memMoves = 0;

function buildMemory(host){
  memLock = false; memFirst = null; memPairs = 0; memMoves = 0;
  const stats = document.createElement('div');
  stats.className = 'game-stats';
  stats.innerHTML = `<span>المحاولات: <b class="mem-moves">0</b></span><span>الأزواج: <b class="mem-pairs">0</b>/6</span>`;
  const grid = document.createElement('div');
  grid.className = 'mem-grid';
  const win = document.createElement('div');
  win.className = 'game-win';
  const actions = document.createElement('div');
  actions.className = 'game-actions';
  actions.innerHTML = `<button class="game-btn" type="button">${ic('refresh')}<span>من الأول</span></button>`;
  actions.querySelector('button').addEventListener('click', () => buildMemory(host));
  host.append(stats, grid, win, actions);

  const deck = shuffleArr([...memoryPhotos, ...memoryPhotos]);
  deck.forEach(src => {
    const card = document.createElement('button');
    card.className = 'mem-card';
    card.dataset.src = src;
    card.innerHTML = `
      <span class="mem-inner">
        <span class="mem-face mem-back">♥</span>
        <span class="mem-face mem-front"><img src="${src}" alt="" style="object-position:${memoryPos[src] || '50% 50%'}" loading="${LAZY}" decoding="async"></span>
      </span>`;
    card.addEventListener('click', () => memFlip(card, stats, win));
    grid.appendChild(card);
  });
  if (location.search.includes('peek=1')){
    grid.querySelectorAll('.mem-card').forEach(c => c.classList.add('flipped'));
  }
}

function memFlip(card, stats, win){
  if (memLock || card.classList.contains('flipped')) return;
  card.classList.add('flipped');
  if (!memFirst){ memFirst = card; return; }
  memMoves++;
  stats.querySelector('.mem-moves').textContent = memMoves;
  const a = memFirst, b = card;
  memFirst = null;
  if (a.dataset.src === b.dataset.src){
    a.classList.add('matched'); b.classList.add('matched');
    memPairs++;
    stats.querySelector('.mem-pairs').textContent = memPairs;
    if (memPairs === memoryPhotos.length){
      win.textContent = 'كفو! خلّصتيها في ' + memMoves + ' محاولة.';
      win.classList.add('show');
      burstHearts(window.innerWidth/2, window.innerHeight/2, 10);
    }
  } else {
    memLock = true;
    setTimeout(() => {
      a.classList.remove('flipped'); b.classList.remove('flipped');
      memLock = false;
    }, 550);
  }
}

/* ---- sliding photo puzzle ---- */
const PUZZLE_IMG = 'img/33-p13.jpg';
let slots = [], shuffleHistory = [], puzDone = false;

function puzzleSolved(){
  for (let i = 0; i < 8; i++) if (slots[i] !== i + 1) return false;
  return true;
}
function adjacent(i, e){
  const r = Math.floor(i/3), c = i%3, er = Math.floor(e/3), ec = e%3;
  return (r === er && Math.abs(c - ec) === 1) || (c === ec && Math.abs(r - er) === 1);
}
function moveTile(v, record){
  const i = slots.indexOf(v), e = slots.indexOf(0);
  if (v === 0 || !adjacent(i, e)) return false;
  slots[e] = v; slots[i] = 0;
  if (record) shuffleHistory.push(v);
  return true;
}
function shufflePuzzle(){
  slots = [1,2,3,4,5,6,7,8,0];
  shuffleHistory = [];
  do {
    for (let k = 0; k < 60; k++){
      const e = slots.indexOf(0);
      const opts = [];
      [0,1,2,3,4,5,6,7,8].forEach(i => { if (adjacent(i, e)) opts.push(slots[i]); });
      moveTile(opts[Math.floor(Math.random() * opts.length)], true);
    }
  } while (puzzleSolved());
}

function buildPuzzle(host){
  puzDone = false;
  shufflePuzzle();
  const wrap = document.createElement('div');
  wrap.className = 'puz-wrap';
  const board = document.createElement('div');
  board.className = 'puz-board';
  const win = document.createElement('div');
  win.className = 'game-win';
  const ref = document.createElement('div');
  ref.className = 'puz-ref';
  ref.innerHTML = `<img src="${PUZZLE_IMG}" alt="الصورة الأصلية"><span>الصورة الأصلية</span>`;
  const actions = document.createElement('div');
  actions.className = 'game-actions';
  actions.innerHTML = `<button class="game-btn" type="button">${ic('refresh')}<span>خلط تاني</span></button>`;
  actions.querySelector('button').addEventListener('click', () => buildPuzzle(host));
  wrap.append(board, ref, win, actions);
  host.appendChild(wrap);

  const tiles = {};
  for (let v = 1; v <= 8; v++){
    const t = document.createElement('button');
    t.className = 'puz-tile';
    const src = v - 1;
    t.style.backgroundImage = `url("${PUZZLE_IMG}")`;
    t.style.backgroundPosition = ((src % 3) * 50) + '% ' + (Math.floor(src/3) * 50) + '%';
    t.setAttribute('aria-label', 'قطعة ' + v);
    t.addEventListener('click', () => {
      if (puzDone) return;
      if (moveTile(v, false)){
        renderPuzzle(tiles, board);
        if (puzzleSolved()){
          puzDone = true;
          board.classList.add('done');
          win.textContent = 'اتظبطت! 👏';
          win.classList.add('show');
          burstHearts(window.innerWidth/2, window.innerHeight/2, 10);
        }
      }
    });
    tiles[v] = t;
    board.appendChild(t);
  }
  const emptySlot = document.createElement('div');
  emptySlot.className = 'puz-empty-slot';
  emptySlot.style.backgroundImage = `url("${PUZZLE_IMG}")`;
  emptySlot.style.backgroundPosition = '100% 100%';
  emptySlot.style.backgroundSize = '300% 300%';
  emptySlot.style.visibility = 'hidden';
  board.appendChild(emptySlot);
  tiles[0] = emptySlot;
  renderPuzzle(tiles, board);
  board._tiles = tiles;
}
function renderPuzzle(tiles, board){
  for (let v = 0; v <= 8; v++){
    const i = slots.indexOf(v);
    tiles[v].style.transform = 'translate(' + ((i % 3) * 100) + '%, ' + (Math.floor(i/3) * 100) + '%)';
  }
  tiles[0].style.visibility = board.classList.contains('done') ? 'visible' : 'hidden';
}

/* ================= love notes ================= */
const notes = [
  { text: "وفاء، إنتي مش بس حبيبتي... إنتي المكان اللي بحس فيه بالأمان والراحة. كل ما الدنيا تضيق، صوتك يفتحها.", stamp: "— أنا" },
  { text: "مهما اختلفنا أو زعلنا، فاكر دايمًا إني مش هسيبك. إنتي القرار اللي مش نادم عليه ولا هندم.", stamp: "— أنا" },
  { text: "ضحكتك ليها تأثير غريب عليّا... بتنسيني أي تعب أو زهق في يومي. ربنا يخليكي ليّا.", stamp: "— أنا" },
  { text: "بحبك مش بس في الأيام الحلوة، بحبك في كل حالاتك. وده شيء نادر أحسسك بيه.", stamp: "— أنا" }
];

const notesWrap = document.getElementById('notesWrap');
notes.forEach((n, i) => {
  const div = document.createElement('div');
  div.className = 'note rv';
  div.style.transitionDelay = (i*110) + 'ms';
  div.innerHTML = `${n.text}<span class="stamp">${n.stamp}</span>`;
  notesWrap.appendChild(div);
});

document.getElementById('finaleBtn').addEventListener('click', (e) => {
  document.getElementById('finaleReveal').classList.add('show');
  burstHearts(e.clientX, e.clientY, 8);
});

function burstHearts(x, y, n){
  for (let i = 0; i < n; i++){
    const h = document.createElement('div');
    h.className = 'float-heart';
    h.textContent = '♥';
    h.style.left = (x + (Math.random()*90 - 45)) + 'px';
    h.style.top = (y + (Math.random()*40 - 20)) + 'px';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2500);
  }
}

/* ================= staggered scroll reveal ================= */
document.querySelectorAll('.section-title,.section-lead,.finale h2,.finale p,.finale .heart-btn,.sec-icon')
  .forEach(el => el.classList.add('rv'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: .15 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* ================= surprise message ================= */
const surprisePool = notes.map(n => n.text).concat([
  "بحبك أكتر من أي كلام ممكن يتقال، وهفضل جنبك في كل لحظة جاية. 🤍"
]);
let lastSurprise = -1;
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseBubble = document.getElementById('surpriseBubble');
surpriseBtn.addEventListener('click', (e) => {
  let i;
  do { i = Math.floor(Math.random() * surprisePool.length); } while (i === lastSurprise && surprisePool.length > 1);
  lastSurprise = i;
  surpriseBubble.textContent = surprisePool[i];
  surpriseBubble.classList.remove('show');
  void surpriseBubble.offsetWidth;
  surpriseBubble.classList.add('show');
  burstHearts(e.clientX, e.clientY, 5);
});

/* ================= photo viewer (lightbox) ================= */
let lbPhotos = [];
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <button class="lb-btn lb-close" aria-label="إغلاق">✕</button>
  <button class="lb-btn lb-prev" aria-label="الصورة السابقة">›</button>
  <img alt="">
  <div class="lb-cap"></div>
  <button class="lb-btn lb-next" aria-label="الصورة التالية">‹</button>`;
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector('img');
const lbCap = lightbox.querySelector('.lb-cap');
let lbIndex = 0;
function openLb(i){
  if (!currentAlbum) return;
  lbPhotos = currentAlbum.photos;
  lbIndex = (i + lbPhotos.length) % lbPhotos.length;
  const p = lbPhotos[lbIndex];
  lbImg.src = p.src;
  lbImg.alt = currentAlbum.title;
  lbCap.textContent = p.cap || '';
  lightbox.classList.add('open');
}
function closeLb(){ lightbox.classList.remove('open'); }
lightbox.querySelector('.lb-close').addEventListener('click', closeLb);
lightbox.querySelector('.lb-prev').addEventListener('click', () => openLb(lbIndex - 1));
lightbox.querySelector('.lb-next').addEventListener('click', () => openLb(lbIndex + 1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLb(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') openLb(lbIndex + 1);
  if (e.key === 'ArrowRight') openLb(lbIndex - 1);
});
let touchX = null;
lightbox.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) openLb(lbIndex + (dx < 0 ? 1 : -1));
  touchX = null;
}, { passive: true });

/* ================= deep links ================= */
try {
  const am = location.hash.match(/^#album=([\w-]+)/);
  const gm = location.hash.match(/^#game=([\w-]+)/);
  if (am) openAlbum(am[1]);
  if (gm) openGame(gm[1]);
} catch(e){}

/* ================= selftest (?selftest=1) ================= */
function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }
async function selftest(){
  const out = [];
  try {
    openGame('memory');
    let cards = [...document.querySelectorAll('.mem-card')];
    const bySrc = {};
    cards.forEach(c => { (bySrc[c.dataset.src] = bySrc[c.dataset.src] || []).push(c); });
    const pairs = Object.values(bySrc);
    out.push(pairs.length === 6 && pairs.every(p => p.length === 2) ? 'deck:ok' : 'deck:BAD');
    pairs[0][0].click(); pairs[1][0].click();
    await sleep(700);
    out.push(!pairs[0][0].classList.contains('matched') && !pairs[0][0].classList.contains('flipped') ? 'flipback:ok' : 'flipback:BAD');
    for (const p of pairs){
      if (!p[0].classList.contains('matched')){
        p[0].click(); await sleep(60); p[1].click(); await sleep(650);
      }
    }
    out.push(document.querySelectorAll('.mem-card.matched').length === 12 ? 'memory-win:ok' : 'memory-win:BAD');
    closeOverlays();
    openGame('puzzle');
    out.push(!puzzleSolved() ? 'shuffled:ok' : 'shuffled:BAD');
    const inv = [...shuffleHistory].reverse();
    for (const v of inv){ moveTile(v, false); }
    out.push(puzzleSolved() ? 'puzzle-solve:ok' : 'puzzle-solve:BAD');
    closeOverlays();
    openAlbum('sawa');
    out.push(document.querySelectorAll('#albumsWrap .album-card').length === 4 ? 'shelf:ok' : 'shelf:BAD');
    out.push(albumGrid.querySelectorAll('.g-card').length === 5 ? 'album-grid:ok' : 'album-grid:BAD');
  } catch(e){
    out.push('ERR:' + e.message);
  }
  const d = document.createElement('div');
  d.id = 'selftest';
  d.textContent = 'SELFTEST ' + out.join(' ');
  document.body.appendChild(d);
}
if (location.search.includes('flat=1')){
  const st = document.createElement('style');
  st.textContent = '.hero{min-height:844px !important;}';
  document.head.appendChild(st);
}
if (location.search.match(/scrollto=(\w+)/)){
  window.addEventListener('load', () => {
    const m = location.search.match(/scrollto=(\w+)/);
    const el = document.getElementById(m[1]);
    if (el) el.scrollIntoView();
  });
}
if (location.search.includes('h=1')){
  window.addEventListener('load', () => { setTimeout(()=>{ document.title = 'H:' + document.documentElement.scrollHeight + ' Y:' + window.scrollY; }, 300); });
}
if (location.search.includes('selftest=1')){
  window.addEventListener('load', () => selftest());
}
