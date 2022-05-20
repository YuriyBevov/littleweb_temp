import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

  const title = document.querySelector('.welcome__form-title');
  title.style.opacity = '0';
  title.style.transform = 'translateX(100px)';

  const controls = document.querySelectorAll('.welcome__form input');
  controls.forEach((control, i) => {
    control.style.transform = `translateY(${50 * (i + 1)}px)`;
    control.style.opacity = '0';
  });

  const button = document.querySelector('.welcome__form button');
  button.style.opacity = '0';

  if(title) {
    gsap.to(title, {duration: 1.2, x: 0, opacity: 1, ease: 'ease-in'});
  }

  if(controls) {
    controls.forEach(control=> {
      gsap.to(control, {duration: 0.6, delay: 0.2, y: 0, opacity: 1, ease: 'ease-in'});
    });
  }

  if(button) {
    gsap.to(button, {duration: 1.2, delay: 0.6,opacity: 1, ease: 'ease-in'});
  }
})
