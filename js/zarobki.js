
const info=document.querySelector('.info')
const arrowButtons=document.querySelectorAll('.list__table-button-arrow')
const sidebarUser=document.querySelector('.info__body.user')
const total=document.querySelector('.filtr')
arrowButtons.forEach((button)=>{button.onclick=()=>{total.style.display='none'
sidebarUser.style.display='flex'
info.classList.add('right-0')}});const closeUserButton=document.querySelector('.user__close')
closeUserButton.onclick=()=>{total.style.display='flex'
sidebarUser.style.display='none'
info.classList.remove('right-0')}