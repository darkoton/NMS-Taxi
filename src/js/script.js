//< " modules " >=============================================================================================================>//

import isWebp from './modules/webp.js';

import './modules/spoiler.js';

isWebp();
//< " popups " >=============================================================================================================>//

const popups = document.querySelectorAll('.popup');
const openBtns = document.querySelectorAll('[data-popup-open]');
openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const popup = document.querySelector('.' + btn.dataset.popupOpen);
    popup.classList.add('active');
  });
});

popups.forEach(popup => {
  const closeBtns = popup.querySelectorAll('.popup-close');

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  });
});

window.addEventListener('click', ({ target }) => {
  if (!target.closest('.popup-body') && !target.closest('[data-popup-open]')) {
    popups.forEach(popup => {
      popup.classList.remove('active');
    });
  }
});

//< " СКРИПТЫ " >=============================================================================================================>//

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

if (switchRegister) {
  switchRegister.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
      document.querySelector('.driver').style.display = 'none';
      document.querySelector('.partner').style.display = 'none';

      document.querySelector(`.${button.dataset.value}`).style.display = 'flex';

      switchRegister.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('active');
      });

      button.classList.add('active');
    };
  });
}

// Event delegation
window.addEventListener('click', ({ target }) => {
  if (!target.closest('.form__language')) {
    document.querySelectorAll('.form__language').forEach(list => {
      list.classList.remove('open');
    });
  }
});
