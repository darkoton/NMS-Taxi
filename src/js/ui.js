const fields = document.querySelectorAll('.ui-field.ui-field-text');

function validateEmail(value) {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

function validatePhone(value) {
  const validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

function validCallback(cond, field, input, errorFiled) {
  if (cond) {
    field.classList.add('valid');
    input.classList.remove('error');

    errorFiled && errorFiled.classList.remove('error');
  } else {
    field.classList.remove('valid');
    input.classList.add('error');

    errorFiled && errorFiled.classList.add('error');
  }
}

const inputValid = {
  text: (field, input) => {
    const value = input.value;
    const errorFiled = field.querySelector('.ui-field-error');

    validCallback(value.trim(), field, input, errorFiled);
  },
  email: (field, input) => {
    const value = input.value;
    const errorFiled = field.querySelector('.ui-field-error');

    validCallback(validateEmail(value), field, input, errorFiled);
  },
  password: (field, input) => {
    const value = input.value;
    const errorFiled = field.querySelector('.ui-field-error');

    validCallback(value.length >= 8, field, input, errorFiled);
  },
  phone: (field, input) => {
    const value = input.value;
    const errorFiled = field.querySelector('.ui-field-error');

    validCallback(validatePhone(value), field, input, errorFiled);
  },
};

fields.forEach(field => {
  const input = field.querySelector('input');

  let timer = null;
  input.oninput = () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      if (field.dataset.valid === '' && input.dataset.type) {
        inputValid[input.dataset.type](field, input);
      }
    }, 500);
  };

  if (input.dataset.type === 'password') {
    const visibleButton = field.querySelector('.ui-field-visible');

    if (visibleButton) {
      visibleButton.onclick = () => {
        visibleButton.classList.toggle('close');
        input.type = input.type === 'password' ? 'text' : 'password';
      };
    }
  }

  if (input.dataset.type === 'phone') {
    const selectButton = field.querySelector('.ui-field-phone');
    const selectList = field.querySelector('.ui-dropdown-list');
    const phoneCode = selectButton.querySelector('span');

    selectButton.onclick = () => {
      selectList.classList.toggle('open');
      selectButton.classList.toggle('open');
    };

    selectList.querySelectorAll('li').forEach(li => {
      li.onclick = () => {
        selectList.querySelectorAll('li').forEach(i => {
          i.classList.remove('select');
        });

        selectButton.classList.remove('open');
        li.classList.add('select');
        phoneCode.textContent = li.dataset.value;
      };
    });
  }
});

// Dropdowns

const dropdowns = document.querySelectorAll('.ui-dropdown');

dropdowns.forEach(dropdown => {
  const list = dropdown.querySelector('.ui-dropdown-list');
  const listValue = dropdown.querySelector('.ui-dropdown-value-list');
  const openButton = dropdown.querySelector('.ui-dropdown-value');

  openButton.onclick = () => {
    list.classList.toggle('open');
    dropdown.classList.toggle('open');
  };

  const options = list.querySelectorAll('li');
  options.forEach(
    option =>
      (option.onclick = () => {
        let value = listValue.dataset.value ? JSON.parse(listValue.dataset.value) : [];

        if (value.includes(option.dataset.value)) {
          option.classList.remove('select');
          listValue.querySelector(`[data-value="${option.dataset.value}"]`).remove();

          value = value.filter(e => e !== option.dataset.value);
          listValue.dataset.value = JSON.stringify(value);
          return;
        }

        const li = document.createElement('li');
        li.dataset.value = option.dataset.value;

        li.innerHTML = `
          ${option.textContent}
          <button>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.1712 1.17157L6.82806 6.82843M1.1712 6.82843L6.82806 1.17157" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        `;
        li.querySelector('button').onclick = event => {
          event.stopPropagation();
          list.querySelector(`[data-value="${li.dataset.value}"]`).classList.remove('select');
          li.remove();
          value = value.filter(e => e !== li.dataset.value);
          listValue.dataset.value = JSON.stringify(value);
        };

        value.push(option.dataset.value);
        listValue.dataset.value = JSON.stringify(value);
        listValue.appendChild(li);
        option.classList.add('select');
      }),
  );
});

// Selects
const selects = document.querySelectorAll('.ui-select');

selects.forEach(select => {
  const list = select.querySelector('.ui-dropdown-list');
  const value = select.querySelector('.ui-dropdown-value > span');
  const openButton = select.querySelector('.ui-dropdown-value');

  openButton.onclick = () => {
    list.classList.toggle('open');
  };

  const options = list.querySelectorAll('li');
  options.forEach(
    option =>
      (option.onclick = () => {
        value.textContent = option.textContent;
        select.dataset.value = option.dataset.value;
      }),
  );
});

// Multi field

const multiFields = document.querySelectorAll('.ui-multi-field');
multiFields.forEach(field => {
  const list = field.querySelector('.ui-multi-value-list');
  const input = field.querySelector('.ui-multi-input');
  const button = field.querySelector('.ui-multi-button');

  function RenderItem() {
    list.innerHTML = '';

    if (input.files.length) {
      button.classList.add('change');
      button.textContent = 'Zmień';
    } else {
      button.classList.remove('change');
      button.textContent = 'Dodać';
    }

    Array.from(input.files).forEach(file => {
      const li = document.createElement('li');
      li.innerHTML = ` <span></span>
                  <button>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.1712 1.17157L6.82806 6.82843M1.1712 6.82843L6.82806 1.17157" stroke="white"
                              stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  </button>`;

      li.querySelector('span').textContent = file.name;
      const multiValue = input.dataset.value ? JSON.parse(input.dataset.value) : [];
      multiValue.push(file.name);
      input.dataset.value = JSON.stringify(multiValue);
      li.querySelector('button').addEventListener('click', () => {
        li.remove();

        let currMultiValue = input.dataset.value ? JSON.parse(input.dataset.value) : [];
        currMultiValue = currMultiValue.filter(e => e !== li.querySelector('span').textContent);
        input.dataset.value = JSON.stringify(currMultiValue);
        if (currMultiValue.length) {
          button.classList.add('change');
          button.textContent = 'Zmień';
        } else {
          button.classList.remove('change');
          button.textContent = 'Dodać';
        }
      });

      list.appendChild(li);
    });
  }

  input.dataset.value = '[]';
  input.addEventListener('change', RenderItem);
});

// Datepicker
const datepickers = document.querySelectorAll('.datepicker');
datepickers.forEach(el => {
  const datepicker = new Datepicker(el, { language: 'pl', format: 'yyyy-mm-dd' });
});

// Event delegation
window.addEventListener('click', ({ target }) => {
  if (!target.closest('.ui-dropdown-list') && !target.closest('.ui-field-phone') && !target.closest('.ui-dropdown-field')) {
    document.querySelectorAll('.ui-dropdown-list').forEach(list => {
      list.classList.remove('open');
    });

    document.querySelectorAll('.ui-dropdown').forEach(dropdown => {
      dropdown.classList.remove('open');
    });

    document.querySelectorAll('.ui-field-phone').forEach(field => {
      field.classList.remove('open');
    });
  }
});
