// 1) HUD de estilo: o rank sobe conforme a rolagem da página
const ranks = [
  ['D', 'Dismal'], ['C', 'Crazy'], ['B', 'Badass'], ['A', 'Apocalyptic'],
  ['S', 'Savage'], ['SS', 'Sick Skills'], ['SSS', 'Smokin\' Sexy Style']
];
const rank = document.getElementById('rank');
const rankWord = document.getElementById('rankWord');
const rankFill = document.getElementById('rankFill');
let atual = 0;

function atualizarRank() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? Math.min(scrollY / max, 1) : 0;
  const i = Math.min(Math.floor(p * ranks.length), ranks.length - 1);
  rankFill.style.width = ((p * ranks.length) % 1 * 100) + '%';
  if (p === 1) rankFill.style.width = '100%';
  if (i !== atual) {
    atual = i;
    rank.textContent = ranks[i][0];
    rankWord.textContent = ranks[i][1];
    rank.classList.add('pop');
    setTimeout(() => rank.classList.remove('pop'), 150);
  }
}
addEventListener('scroll', atualizarRank, { passive: true });
atualizarRank();

// 2) Barras de habilidade: preenchem quando entram na tela
const skills = document.querySelectorAll('.skill');
skills.forEach(s => s.style.setProperty('--v', s.dataset.v));
const obs = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('go'); obs.unobserve(e.target); } });
}, { threshold: .4 });
skills.forEach(s => obs.observe(s));

// 3) Abas de filtro das especialidades
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
    tab.classList.add('on');
    skills.forEach(s => {
      s.classList.toggle('off', tab.dataset.f !== 'all' && s.dataset.c !== tab.dataset.f);
      s.classList.add('go');
    });
  });
});

// 4) Lightbox da galeria
const lb = document.getElementById('lb');
const lbImg = lb.querySelector('img');
const lbCap = lb.querySelector('p');
document.querySelectorAll('.gallery .slot').forEach(f => {
  f.addEventListener('click', () => {
    const img = f.querySelector('img');
    lbImg.src = img ? img.src : '';
    lbImg.alt = img ? img.alt : '';
    lbCap.textContent = f.dataset.cap || '';
    lb.hidden = false;
  });
});
const fechar = () => { lb.hidden = true; };
lb.addEventListener('click', e => { if (e.target === lb) fechar(); });
lb.querySelector('.close').addEventListener('click', fechar);
addEventListener('keydown', e => { if (e.key === 'Escape') fechar(); });

// 5) Trilha sonora (coloque o arquivo em assets/audio/tema.mp3)
const bgm = document.getElementById('bgm');
const audioBtn = document.getElementById('audioBtn');
audioBtn.addEventListener('click', () => {
  const ligar = bgm.paused;
  if (ligar) bgm.play().catch(() => { audioBtn.textContent = 'Som: sem arquivo'; });
  else bgm.pause();
  audioBtn.setAttribute('aria-pressed', ligar);
  audioBtn.textContent = ligar ? 'Som: on' : 'Som: off';
});

// 6) Formulário: abre o e-mail com a mensagem pronta (troque o e-mail abaixo)
const EMAIL = 'seuemail@exemplo.com';
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(e.target);
  const assunto = encodeURIComponent('Contratação: ' + d.get('vaga'));
  const corpo = encodeURIComponent(d.get('msg') + '\n\nDe: ' + d.get('nome'));
  location.href = `mailto:${EMAIL}?subject=${assunto}&body=${corpo}`;
});