'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
//DESC the above line, will select the all elements which is '.show-modal' class. the querySelector only select the first one.
// console.log(btnsOpenModal);

const closeModal = function () {
  //DESC this function will ADD the 'hidden' class to the classList of the specified elements
  /*
      in HTML file:

      class = 'modal' ==> class = 'modal hidden'
  */
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  //DESC this function will REMOVE the 'hidden' class to the classList of the specified elements
  /*
      in HTML file:

      class = 'modal hidden' ==> class = 'modal'
  */
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
