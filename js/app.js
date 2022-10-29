window.onload = function() {

  // map

  function initialize() {
    var myLatlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.AIzaSyCYhPHp4qceHzPOij00RnvGmNyerWAWN2w
    }
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
  }

  // zoom

  let zoomBlock = document.querySelectorAll('.zoom');

  if (zoomBlock !== null) {
    zoomBlock.forEach(zoomlist => zoomlist.onmousemove = function zoom(e){
      var zoomer = e.currentTarget;
      e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
      e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
      x = offsetX/zoomer.offsetWidth*100
      y = offsetY/zoomer.offsetHeight*100
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
    });
  };

  // menu

  var headerDropButton = document.querySelector('.header-drop__button');
  var headerDrop       = document.querySelector('.header-drop');
  var headerDropMenu   = document.querySelector('.header-drop__menu');
  var headerDropClose  = document.querySelector('.header-drop__menu-close');
  var headerDropMenuBg = document.querySelector('.header-drop__menu-bg');

  headerDropMenuBg.onclick = function ()  {
    headerDropMenu.classList.remove('active');
    headerDrop.classList.remove('active');
    navLinkBlock.forEach(del => del.classList.remove('active'));
    headerDropClose.classList.remove('active');
  };

  if ( headerDropClose !== null) {

    headerDropButton.onclick = function () {
      headerDrop.classList.toggle("active");
      headerDropMenu.classList.toggle("active");
    };

    headerDropClose.onclick = function () {
      headerDrop.classList.remove("active");
      headerDropMenu.classList.remove("active");
      navLinkBlock.forEach(del => del.classList.remove('active'));
      this.classList.remove('active');
    };

  };

  if( window.innerWidth <= 992 ){

    var navLinkMob      = document.querySelectorAll('.nav-link');

    var tabPaneButtonBack = document.querySelectorAll('.tab-pane-button-back');
    var navLinkBlock      = document.querySelectorAll('.nav-link-block');

    tabPaneButtonBack.forEach(back => back.onclick = function (){
      navLinkBlock.forEach(del => del.classList.remove('active'));
    });

    navLinkMob.forEach(back => back.onclick = function (){
      this.parentElement.classList.add('active');
    });

  }

  // menu-hover

  if( window.innerWidth >= 992 ){
    var navLink      = document.querySelectorAll('.nav-link');
    var navLinkBlock = document.querySelectorAll('.nav-link-block');

    navLink.forEach(del => del.onmouseover = function (){
      navLinkBlock.forEach(element => element.classList.remove('active'));
      this.parentElement.classList.add('active');
      headerDropClose.classList.add('active');
    });
  };

  // mob-menu

  var menuLinkButton = document.querySelector('.header-link__button');
  var menuLink       = document.querySelector('.header-link');

  menuLinkButton.onclick = function () {
    menuLink.classList.toggle('active');
  }

  // length

  var length     = document.querySelector('.length');
  var lengthCont = document.querySelector('.length__cont');
  var lengthList = document.querySelector('.length__list');
  var lengthLink = document.querySelectorAll('.length__link');

  if (length !== null) {
    lengthCont.onclick = function () {
      lengthList.classList.toggle('active');
    }

    lengthLink.forEach(del => del.onclick = function (){
      for(let i = 0;i<lengthLink.length;i++){
        lengthLink[i].classList.remove('close');
      }
      var lengthText = this.innerText;
      lengthCont.innerText = lengthText;
      lengthList.classList.remove('active');
      this.classList.add('close');
    });
  };

  // top slider

  var swiper = new Swiper(".top-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // search

  var search                  = document.querySelector('.search');
  var searchInput             = document.querySelector('.search-input');
  var searchList              = document.querySelector('.search-list');
  var searchListButton        = document.querySelectorAll('.search-list__button-span');
  var searchButtonDel         = document.querySelector('.search-list__button-span-del');
  var searchListButtonDel     = document.querySelector('.search-list__button-del');
  var clearTheStory           = document.querySelector('.clear-the-story');
  var searchBottomBlockButton = document.querySelector('.search-bottom-block-button');
  var searchBottomButtonCont  = document.querySelector('.search-bottom-block-button-cont');
  var searchBg                = document.querySelector('.search-bg');
  var searchButton            = document.querySelector('.search-button');
  var searchButtonMobClose    = document.querySelector('.search-button-mob-close');

  searchInput.onclick = function () {
    search.classList.add('active');
    searchBg.classList.add('active');
  };

  searchButtonMobClose.onclick = function () {
    search.classList.remove('active');
  };

  searchBg.onclick = function () {
    search.classList.remove('active');
  };

  searchListButton.forEach(searchList => searchList.onclick = function () {
    searchInput.value = this.textContent;
    search.classList.remove('active');
    searchListButtonDel.classList.remove('d-none');
    clearTheStory.classList.remove('d-none');
  });

  searchButtonDel.onclick = function () {
    this.parentElement.classList.add('d-none');
  };

  clearTheStory.onclick = function () {
    searchListButtonDel.classList.add('d-none');
    this.classList.add('d-none');
  };

  searchBottomBlockButton.onclick = function () {
    searchInput.value = searchBottomButtonCont.textContent;
    search.classList.remove('active');
  };

  searchButton.onclick = function () {
    search.classList.add('active');
  };

  // range-slider

  var marginSlider = document.getElementById('slider-margin');

  if (marginSlider) {
    noUiSlider.create(marginSlider, {
      start: [29, 599],
      step: 1,
      range: {
        'min': 0,
        'max': 600
      }
    });

    var marginMin = document.getElementById('slider-margin-value-min'),
      marginMax = document.getElementById('slider-margin-value-max');

    marginSlider.noUiSlider.on('update', function (values, handle) {
      if (handle) {
        marginMax.innerHTML = values[handle];
      } else {
        marginMin.innerHTML = values[handle];
      }
    });
  };

  // product slider

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    thumbs: {
      swiper: swiper,
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
      }
    },
  });

  // product add

  var removeNum = document.querySelector('#remove-num');
  var addNum = document.querySelector('#add-num');
  var inputNum = document.querySelector('#input-num');

  if (removeNum) {
    addNum.onclick = function () {
      inputNum.value++;
    }
    removeNum.onclick = function () {
      if (inputNum.value > 1) {
        inputNum.value--;
      }
    }
  };

  // phone masc

  var inputPhone          = document.getElementById('phone');
  var phoneButton         = document.querySelector('#phoneButton');

  if(inputPhone !== null) {
    inputPhone.addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[2] ? '-' + x[3] : '');
    });

    // backPhone - возврат телефона
    var backPhone = String('123456789');
    phoneButton.onclick = function (e) {
      var x = backPhone.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,4})/);
      inputPhone.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[2] ? '-' + x[3] : '');
    };
  }

  // registration phone

  var formPhoneDrop       = document.querySelector('.form-phone__drop');
  var formPhoneDropButton = document.querySelector('.form-phone__drop-button');
  var formPhoneDropList   = document.querySelector('.form-phone__drop-list');
  var formPhoneDropItem   = document.querySelectorAll('.form-phone__drop-item');
  var codeButton          = document.querySelector('.code-button');
  var formPhoneCod        = document.querySelector('.form-phone__cod');
  var formPhoneDropClose  = document.querySelector('.form-phone__drop-close');
  var formPassword        = document.querySelector('.form-password');
  var requiredText1       = document.querySelector('.required-text1');
  var requiredText2       = document.querySelector('.required-text2');
  var phoneCopy           = document.querySelector('#phoneCopy');

  if (formPhoneDrop !== null) {

    formPhoneDropButton.onclick = function () {
      formPhoneDrop.classList.toggle('active');
    };

    formPhoneDropClose.onclick = function () {
      formPhoneDrop.classList.remove('active');
    };

    formPhoneDropItem.forEach(del => del.onclick = function (){
      formPhoneDropItem.forEach(del => del.classList.remove('active'));
      this.classList.add('active');
      formPhoneDrop.classList.remove('active');
      var regText = this.innerText;
      formPhoneCod.value = regText;
    });

    inputPhone.oninput = function validate() {
      if (inputPhone.value.length === 13 && formPassword.value.length >= 8) {
        codeButton.classList.add('active');
      } else {
        codeButton.classList.remove('active');
      };

      if (inputPhone.value.length === 13) {
        requiredText1.classList.add('no-red');
      } else {
        requiredText1.classList.remove('no-red');
      };
      var data = inputPhone.value;
      phoneCopy.value = parseInt(data.replace(/\D+/g,""));
    };

    formPassword.oninput = function validate() {
      if (inputPhone.value.length === 13 && formPassword.value.length >= 8) {
        codeButton.classList.add('active');
      } else {
        codeButton.classList.remove('active');
      };

      if (formPassword.value.length >= 8) {
        requiredText2.classList.add('no-red');
      } else {
        requiredText2.classList.remove('no-red');
      };

    };

  };

  // Чекбоксы

  var formCheckInput      = document.querySelectorAll('.form-check-input');

  formCheckInput.forEach(ch => ch.onclick = function (){

    var parent2 = this.closest('.categories_list_product-item2');
    var parent1 = this.closest('.categories_list_product-item1');

    if (this.checked == true) {
      parent2.querySelector('.form-check-input').checked = true;
      parent1.querySelector('.form-check-input').checked = true;
    } else {
      var parentLast      = this.closest('.categories_list_product');
      var parentLastChild = parentLast.querySelectorAll('.form-check-input');

      var inputNum = 0;
      parentLastChild.forEach(element => {
        if (element.checked) {
          inputNum++;
        }
      });

      if (inputNum === 0) {
        parent2.querySelector('.form-check-input').checked = false;
      };

      var parentLastChild1 = document.querySelectorAll('.categories_list_product-item2');
      var inputNum1 = 0;
      parentLastChild1.forEach(element => {
        console.log(element);
        var chElement = element.querySelector('.form-check-input');
        if (chElement.checked) {
          inputNum1++;
        }
      });
      console.log(inputNum1);
      if (inputNum1 === 0) {
        parent1.querySelector('.form-check-input').checked = false;
      };

    };

  });


};
