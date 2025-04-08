let workButton = document.querySelector('.work_button');
let workButtonOne = document.querySelector('.work_button1');
let workButtonTwo = document.querySelector('.work_button2');
let workButtonThree = document.querySelector('.work_button3');
let workButtonFour = document.querySelector('.work_button4');
let workTextOne = document.querySelector('.work_text_wrapper1');
let workTextTwo = document.querySelector('.work_text_wrapper2');
let workTextThree = document.querySelector('.work_text_wrapper3');
let workTextFour = document.querySelector('.work_text_wrapper4');

workButtonOne.onclick = function () {
  workButtonTwo.classList.remove('work_button');
  workButtonThree.classList.remove('work_button');
  workButtonFour.classList.remove('work_button');
  workButtonTwo.classList.add('work_button2');
  workButtonThree.classList.add('work_button3');
  workButtonFour.classList.add('work_button4');
  workButtonOne.classList.remove('work_button1');
  workButtonOne.classList.add('work_button');
  workTextOne.style.display = 'flex';
  workTextTwo.style.display = 'none';
  workTextThree.style.display = 'none';
  workTextFour.style.display = 'none';
};

workButtonTwo.onclick = function () {
  workButtonOne.classList.remove('work_button');
  workButtonThree.classList.remove('work_button');
  workButtonFour.classList.remove('work_button');
  workButtonOne.classList.add('work_button1');
  workButtonThree.classList.add('work_button3');
  workButtonFour.classList.add('work_button4');
  workButtonTwo.classList.remove('work_button2');
  workButtonTwo.classList.add('work_button');
  workTextTwo.style.display = 'flex';
  workTextOne.style.display = 'none';
  workTextThree.style.display = 'none';
  workTextFour.style.display = 'none';
};

workButtonThree.onclick = function () {
  workButtonOne.classList.remove('work_button');
  workButtonTwo.classList.remove('work_button');
  workButtonFour.classList.remove('work_button');
  workButtonOne.classList.add('work_button1');
  workButtonTwo.classList.add('work_button2');
  workButtonFour.classList.add('work_button4');
  workButtonThree.classList.remove('work_button3');
  workButtonThree.classList.add('work_button');
  workTextThree.style.display = 'flex';
  workTextOne.style.display = 'none';
  workTextTwo.style.display = 'none';
  workTextFour.style.display = 'none';
};

workButtonFour.onclick = function () {
  workButtonOne.classList.remove('work_button');
  workButtonTwo.classList.remove('work_button');
  workButtonThree.classList.remove('work_button');
  workButtonOne.classList.add('work_button1');
  workButtonTwo.classList.add('work_button2');
  workButtonThree.classList.add('work_button3');
  workButtonFour.classList.remove('work_button4');
  workButtonFour.classList.add('work_button');
  workTextFour.style.display = 'flex';
  workTextOne.style.display = 'none';
  workTextTwo.style.display = 'none';
  workTextThree.style.display = 'none';
};

/*.........................................................первое окно.................................................*/

let modal = document.getElementById('myModal');
let OpenPopapModal = document.getElementById('myBtn');
let modalContentWrapper = document.querySelector('.modal_content_wrapper');

OpenPopapModal.onclick = function () {
  //открытие модального окна
  modal.style.display = 'flex';
  modalContentWrapper.style.display = 'flex';
};

window.onclick = function (event) {
  // закрыть по любому месту вне поля
  if (event.target == modal) {
    closePopap();
  } else if (event.target == modalPravdinskoe) {
    closePopap();
  } else if (event.target == modalRepino) {
    closePopap();
  } else if (event.target == modalPetergoph) {
    closePopap();
  }
};

function closePopap() {
  modal.style.display = 'none';
  modalContentWrapper.style.display = 'none';
  modalPravdinskoe.style.display = 'none';
  modalContentWrapper2.style.display = 'none';
  modalRepino.style.display = 'none';
  modalContentWrapper3.style.display = 'none';
  modalPetergoph.style.display = 'none';
  modalContentWrapper4.style.display = 'none';
}

/*.........................................................второе окно.................................................*/

let modalPravdinskoe = document.getElementById('modalPravdinskoe');
let OpenPopapModalPravdinskoe = document.getElementById('btnPravdinskoe');
let modalContentWrapper2 = document.querySelector('.modal_content_wrapper2');

OpenPopapModalPravdinskoe.onclick = function () {
  //открытие модального окна
  modalPravdinskoe.style.display = 'flex';
  modalContentWrapper2.style.display = 'flex';
};

/*.........................................................третье окно.................................................*/

let modalRepino = document.getElementById('modalRepino');
let OpenPopapModalRepino = document.getElementById('btnRepino');
let modalContentWrapper3 = document.querySelector('.modal_content_wrapper3');

OpenPopapModalRepino.onclick = function () {
  //открытие модального окна
  modalRepino.style.display = 'flex';
  modalContentWrapper3.style.display = 'flex';
};

/*.........................................................четвертое окно.................................................*/

let modalPetergoph = document.getElementById('modalPetergoph');
let OpenPopapModalPetergoph = document.getElementById('btnPetergoph');
let modalContentWrapper4 = document.querySelector('.modal_content_wrapper4');

OpenPopapModalPetergoph.onclick = function () {
  //открытие модального окна
  modalPetergoph.style.display = 'flex';
  modalContentWrapper4.style.display = 'flex';
};
