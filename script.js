```
JavaScript (script.js)
```
// Efek animasi
const hero = document.querySelector('.hero');
hero.addEventListener('mouseover', () => {
 hero.style.transform = 'scale(1.1)';
});
hero.addEventListener('mouseout', () => {
 hero.style.transform = 'scale(1)';
});
```
