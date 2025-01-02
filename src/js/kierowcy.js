const statusButtons = document.querySelectorAll('.list__table-status')

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
  });
