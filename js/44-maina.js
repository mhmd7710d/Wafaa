const questions = [
  "إنتي عارفة إني بفكر فيكي قبل ما أنام؟ 💭",
  "إيه أكتر لحظة فرحتك معايا؟",
  "لو قولتلك تمنيلي حاجة دلوقتي، هتقولي إيه؟",
  "إنتي حاسة إني بقدّرك زي ما تستحقي؟",
  "إيه حاجة عاوزة نعملها مع بعض قريب؟"
];

const qaWrap = document.getElementById('qaWrap');
questions.forEach((q, i) => {
  const card = document.createElement('div');
  card.className = 'qa-card rv';
  card.style.transitionDelay = (i*90) + 'ms';
  card.innerHTML = `
    <div class="q"><span>${q}</span><span class="mark">+</span></div>
    <div class="a">
      <input type="text" placeholder="اكتبي إجابتك هنا...">
      <div class="save-line">تم الحفظ في قلبي 🤍</div>
    </div>
  `;
  const head = card.querySelector('.q');
  const input = card.querySelector('input');
  const saveLine = card.querySelector('.save-line');
  head.addEventListener('click', () => card.classList.toggle('open'));
  input.addEventListener('input', () => {
    saveLine.classList.toggle('show', input.value.trim().length > 0);
  });
  qaWrap.appendChild(card);
});

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
  for(let i=0;i<8;i++){
    const h = document.createElement('div');
    h.className = 'float-heart';
    h.textContent = '♥';
    h.style.left = (e.clientX + (Math.random()*80-40)) + 'px';
    h.style.top = (e.clientY) + 'px';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(), 2500);
  }
});

/* ===== staggered scroll reveal ===== */
document.querySelectorAll('.g-card').forEach((el, i) => {
  el.classList.add('rv');
  el.style.transitionDelay = (i*100) + 'ms';
});
document.querySelectorAll('.section-title,.section-lead,.finale h2,.finale p,.finale .heart-btn')
  .forEach(el => el.classList.add('rv'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: .15 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* ===== surprise message (reuses the words already on the page) ===== */
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
  for (let k = 0; k < 5; k++) {
    const h = document.createElement('div');
    h.className = 'float-heart';
    h.textContent = '♥';
    h.style.left = (e.clientX + (Math.random()*60-30)) + 'px';
    h.style.top = e.clientY + 'px';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2500);
  }
});

/* ===== photo viewer with touch swipe ===== */
const gCards = [...document.querySelectorAll('.g-card')];
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
function openLb(i) {
  lbIndex = (i + gCards.length) % gCards.length;
  const img = gCards[lbIndex].querySelector('img');
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  const fig = gCards[lbIndex].querySelector('figcaption');
  lbCap.textContent = fig ? fig.textContent : '';
  lightbox.classList.add('open');
}
function closeLb() { lightbox.classList.remove('open'); }
gCards.forEach((card, i) => card.querySelector('img').addEventListener('click', () => openLb(i)));
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
