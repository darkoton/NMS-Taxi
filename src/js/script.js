//< " CONNECTING JS COMPONENTS " >=============================================================================================================>//
import isWebp from './modules/webp.js'; //SUPPORT WEBP

import isDevice from './modules/device.js'; //DEFINE DEVICE

// import './modules/preloader.js'; // PRELOADER

// import "./modules/spoiler.js"  // SPOILERS

// import "./modules/dynamic_adap.js"  // DYNAMIC ADAPTIVE

// import "./modules/scroll_header.js"  // SCROLL HEADER

// import "./modules/swiper.js"  // SLIDER SWIPER

// import "./modules/animate_scroll.js"  // ANIMATE WITH SCROLL

// import "./modules/tabs.js"  // TABS

// import "./modules/parallax.js"  // PARALLAX EFFECT

//< " СКРИПТЫ " >=============================================================================================================>//

isWebp();
isDevice();

// Code field
const codeFields = document.querySelectorAll('.form__code-field');
codeFields.forEach(field => {
  const inputs = field.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('input', event => {
      event.preventDefault();

      const target = event.target;
      const value = event.target.value;

      if (value > 9) {
        target.value = value.slice(0, -1);
      }

      let nextInput;

      if (event.inputType === 'insertText') {
        nextInput = field.querySelector(`[data-order="${+target.dataset.order + 1}"]`);
      } else if (event.inputType === 'deleteContentBackward') {
        nextInput = field.querySelector(`[data-order="${+target.dataset.order - 1}"]`);
      }
      if (nextInput) {
        nextInput.focus();
      }
    });
  });
});

// Language select
const langSelects = document.querySelectorAll('.form__language');
langSelects.forEach(select => {
  const value = select.querySelector('.form__language-value');
  const valueField = value.querySelector('span');
  const list = select.querySelector('.form__language-list');

  value.onclick = () => {
    select.classList.toggle('open');
  };

  list.querySelectorAll('li').forEach(li => {
    li.onclick = () => {
      valueField.textContent = li.textContent;
      select.classList.remove('open');
    };
  });
});

//

const switchRegister = document.querySelector('.form__switch');

switchRegister.querySelectorAll('button').forEach(button => {
  button.onclick = () => {
    document.querySelector('.driver').style.display = 'none';
    document.querySelector('.partner').style.display = 'none';

    document.querySelector(`.${button.dataset.value}`).style.display = 'flex';
  };
});

// Event delegation
window.addEventListener('click', ({ target }) => {
  if (!target.closest('.form__language')) {
    document.querySelectorAll('.form__language').forEach(list => {
      list.classList.remove('open');
    });
  }
});
