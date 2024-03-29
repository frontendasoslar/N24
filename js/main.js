const elModal = document.querySelector('.modal');//Modal elementining klasini topib olayapdi
const elmodal_back = elModal.querySelector('.js-modal-close');//Modal elementi ichidagi close tugmasini js ga tegishli klasini topib olayapdi

setTimeout (function() {//Bu biror bir vaqtdan keyin biror jarayon sodir bo'lishi uchun ishlatiladigan teg. Bu teg 30 sekunddan keyin modal elementiga open modal klesini qo'shib qo'yayapdi
  elModal.classList.add('open-modal');
}, 30000);

if (elmodal_back) {//Agar shu js kod ishlamasi undan keyingi js kodga o'tib ketishi uchun sug'urtalab qo'yayapdi
   elmodal_back.addEventListener('click', function() {//close elementining clasi click hodisasiga quloq solayapdi
     elModal.classList.remove('open-modal')//va close tugmasi bosilganda modal elementidan open modal klasini olib tashlayapdi
    })
}
