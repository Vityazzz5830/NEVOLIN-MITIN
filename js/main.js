document.querySelectorAll('.solutionssec_mainpage_content_list_item_header').forEach(header => {
  header.addEventListener('click', function() {
    const parent = this.closest('.solutionssec_mainpage_content_list_item');
    const content = parent.querySelector('.solutionssec_mainpage_content_list_item_title');

    content.classList.toggle('active');
    parent.classList.toggle('active');
  });
});

$('.reviewssec_mainpage_content_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: true,
  variableWidth: true,
  autoplay: true,
  centerMode: true,
  prevArrow: $('.reviewssec_mainpage_content_slider_buttons_leftbtn'),
  nextArrow: $('.reviewssec_mainpage_content_slider_buttons_rightbtn')
});

const slidermainpage = $('.firstsec_cases_content_slider');

slidermainpage.on('init afterChange', function(event, slick, currentSlide){
  const i = currentSlide || 0;
  const last = slick.slideCount - 1;

  const prev = $('.firstsec_cases_content_slider_buttons_leftbtn');
  const next = $('.firstsec_cases_content_slider_buttons_rightbtn');

  // левая стрелка
  if (i === 0) {
    prev.addClass('arrow-disabled').removeClass('arrow-active');
  } else {
    prev.addClass('arrow-active').removeClass('arrow-disabled');
  }

  // правая стрелка
  if (i === last) {
    next.addClass('arrow-disabled').removeClass('arrow-active');
  } else {
    next.addClass('arrow-active').removeClass('arrow-disabled');
  }
});

$('.firstsec_cases_content_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  autoplay: false,
  prevArrow: $('.firstsec_cases_content_slider_buttons_leftbtn'),
  nextArrow: $('.firstsec_cases_content_slider_buttons_rightbtn')
});

const slidercases = $('.firstsec_cases_content_slider');

slidercases.on('init afterChange', function(event, slick, currentSlide){
  const i = currentSlide || 0;
  const last = slick.slideCount - 1;

  const prev = $('.firstsec_cases_content_slider_buttons_leftbtn');
  const next = $('.firstsec_cases_content_slider_buttons_rightbtn');

  // левая стрелка
  if (i === 0) {
    prev.addClass('arrow-disabled').removeClass('arrow-active');
  } else {
    prev.addClass('arrow-active').removeClass('arrow-disabled');
  }

  // правая стрелка
  if (i === last) {
    next.addClass('arrow-disabled').removeClass('arrow-active');
  } else {
    next.addClass('arrow-active').removeClass('arrow-disabled');
  }
});



window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});




if (document.querySelector('.modal-overlay')) {

const btns = document.querySelectorAll('.order_btn');
const modalOverlay = document.getElementById('modalOverlay');
const modal_order = document.getElementById('modal_order');
const closeBtn = document.getElementById('closeBtn_modal');
const formModalOrderBtn = document.querySelector('.form_modal_order_btn');



// Функция открытия модального окна
function openModal() {
  modalOverlay.style.pointerEvents = 'auto';
  modalOverlay.classList.add('show');
  modal_order.classList.add('show');
  document.body.classList.add('noscroll');
  if (modalOverlay.classList.contains('show')) {
    modal_order.classList.add('modal_order_animate');
  }
}

// Функция закрытия модального окна
function closeModal() {
  modal_order.classList.remove('show');
  modalOverlay.classList.remove('show');
  document.body.classList.remove('noscroll');
  setTimeout(() => {
    modalOverlay.style.pointerEvents = 'none';
  }, 300);
  if (modalOverlay.classList.contains('show')) {
    modal_order.classList.remove('modal_order_animate');
  }
}

// Открытие по любой кнопке .modal_order_btn
btns.forEach(button => {
  button.addEventListener('click', openModal);
});

// Закрытие по крестику
closeBtn.addEventListener('click', closeModal);


// Закрытие по клику на оверлей
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});


}




if (document.querySelector('.modal-overlay2')) {

const btnsl = document.querySelectorAll('.portfoliosec_mainpage_content_list_item');
const modalOverlayl = document.getElementById('modalOverlay2');
const modal_info = document.getElementById('modal_info');
const closeBtnl = document.getElementById('closeBtn_modal2');


// Функция открытия модального окна
function openModall() {
  modalOverlayl.style.pointerEvents = 'auto';
  modalOverlayl.classList.add('show');
  modal_info.classList.add('show');
  document.body.classList.add('noscroll');
}

// Функция закрытия модального окна
function closeModall() {
  modal_info.classList.remove('show');
  modalOverlayl.classList.remove('show');
  document.body.classList.remove('noscroll');

  setTimeout(() => {
    modalOverlayl.style.pointerEvents = 'none';
  }, 300);
}

// Открытие по любой кнопке .modal_order_btn
btnsl.forEach(buttonl => {
  buttonl.addEventListener('click', openModall);
});

// Закрытие по крестику
closeBtnl.addEventListener('click', closeModall);


// Закрытие по клику на оверлей
modalOverlayl.addEventListener('click', (event) => {
  if (event.target === modalOverlayl) {
    closeModall();
  }
});


}