'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnOk = document.querySelector('.btn-ok');
const btnClose = document.querySelector('.btn-close');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < btnsOpenModal.length; i++) // De esta forma contenemos varios elementos de una vez
	btnsOpenModal[i].addEventListener('click', openModal);
    
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

btnOk.addEventListener('click', () => {
    console.log(`Click on Ok, the user accepted`);
    closeModal();
})


document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();

    if(e.key === 'Enter' && !modal.classList.contains('hidden')) {
        console.log(`Enter was pressed, the user accepted`);
        closeModal();
    }
});