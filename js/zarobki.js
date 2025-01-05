const info = document.querySelector('.info');
const sidebarButtons = document.querySelectorAll('.list__table-item-top');
const moreButtons = document.querySelectorAll('.list__table-item-more');
const sidebarUser = document.querySelector('.user');
const table = document.querySelector('.info__body');
const total = document.querySelector('.filtr');
sidebarButtons.forEach(button => {
  button.onclick = () => {
    if (window.innerWidth <= 680) {
      return;
    }

    total.classList.add('hidden');
    sidebarUser.classList.add('active');
    info.classList.add('right-0');
  };
});

moreButtons.forEach(button => {
  button.onclick = () => {
    total.classList.add('hidden');
    table.style.display = 'none';
    sidebarUser.classList.add('active');
    info.classList.add('right-0');
  };
});

const closeUserButton = document.querySelector('.user__close');

closeUserButton.onclick = () => {
  total.classList.remove('hidden');
  table.style.display = 'flex';
  sidebarUser.classList.remove('active');
  info.classList.remove('right-0');
};
