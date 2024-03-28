const  elnotification_button = document.querySelector('.notification-button');
const elModal = document.querySelector('.modal');
const elmodal_back = document.querySelector('.modal-back');

elnotification_button.addEventListener('click', function() {
 elModal.classList.add('open-modal')
})


elmodal_back.addEventListener('click', function() {
  elModal.classList.remove('open-modal')
 })