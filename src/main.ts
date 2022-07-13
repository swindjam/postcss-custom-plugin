import './main.css';

const el = document.createElement('div');
el.classList.add('main');
el.innerHTML = 'Some text added by JS';
document.body.appendChild(el);