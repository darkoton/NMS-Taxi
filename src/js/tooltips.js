const statusButtons = document.querySelectorAll('.list__table-status');

tippy(statusButtons, {
  content: `
       <div class="tippy-status">
         <span class="tippy-title">
          Brak dokumentów
         </span>
         <p class="tippy-text">
          Brakują badanie lekarskie, psychotechnika, zdjęcie profilowe
         </p>
       </div>
       `,
  allowHTML: true,
  placement: 'bottom-start',
  arrow: false,
  interactive: true,
  trigger: 'click',
});

const dotButtons = document.querySelectorAll('.list__table-button-dots');

tippy(dotButtons, {
  content: `
       <div class="tippy-menu">
         <button class="tippy-menu-button">
          <i class="ui-icon-error"></i>
          Zablokuj gotówkę
         </button>
         <button class="tippy-menu-button">
          <i class="ui-icon-error"></i>
          Zablokuj gotówkę
         </button>
       </div>
       `,
  allowHTML: true,
  placement: 'bottom-end',
  arrow: false,
  interactive: true,
  trigger: 'click',
});

const docStatusButtons = document.querySelectorAll('.list__doc-verf');

tippy(docStatusButtons, {
  content: `
       <div class="tippy-menu">
         <p class="tippy-menu-title">Dowód osobisty</p>
         <button class="tippy-menu-button success">
          <i class="ui-icon-ok"></i>
          Polskie prawo jazdy
         </button>
         <button class="tippy-menu-button warning">
          <i class="ui-icon-attention"></i>
          Zablokuj gotówkę
         </button>
         <button class="tippy-menu-button process">
          <i class="ui-icon-in-process"></i>
          Badanie lekarskie
         </button>
         <button class="tippy-menu-button process">
          <i class="ui-icon-in-process"></i>
          Psychotechnika
         </button>
         <button class="tippy-menu-button error">
          <i class="ui-icon-error"></i>
          Zdjęcie profilowe
         </button>         
       </div>
       `,
  allowHTML: true,
  placement: 'bottom-end',
  arrow: false,
  interactive: true,
  trigger: 'click',
});

const addButtons = document.querySelectorAll('.list__add-button');
tippy(addButtons, {
  content: e => {
    const menu = document.createElement('div');
    menu.classList.add('tippy-menu');
    menu.style.width = `${e.clientWidth}px`;

    menu.innerHTML = `
        <button class="tippy-menu-button" data-popup-open="popup-invite-driver">
          Wysłać zaproszenie 
          </button>  
          <button class="tippy-menu-button" data-popup-open="popup-add-driver">
          Dodaj do systemy 
        </button>      
    `;

    const buttons = menu.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.onclick = () => {
        e._tippy.hide();
      };
    });

    return menu;
  },
  allowHTML: true,
  placement: 'bottom-end',
  arrow: false,
  interactive: true,
  trigger: 'click',
});
