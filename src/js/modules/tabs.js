let tabs = () => {
  let nav = document.querySelectorAll('.tab'),
    result = document.querySelectorAll('.tab-block'),
    tabName;

  nav.forEach(item => {
    item.addEventListener('click', selectnav);
  });

  function selectnav() {
    const parent = this.closest('.tabs');
    if (!parent) {
      return;
    }

    const currentNav = parent.querySelectorAll('.tab');
    currentNav.forEach(item => {
      item.classList.remove('_active');
    });
    this.classList.add('_active');
    tabName = this.getAttribute('data-tab-name');
    selectresult(tabName, parent);
  }

  function selectresult(tabName, parent) {
    const blocks = parent.querySelectorAll('.tab-block');
    blocks.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active');
    });
  }
};

tabs();
