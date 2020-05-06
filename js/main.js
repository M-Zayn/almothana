
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  new WOW().init();
  
  
$(function() {


  
  
  // $('a[data-scroll]').on("click",function (e){
  //   e.preventDefault();    
    
  //   $("html, body").animate({
  //     scrollTop: $($(this).attr("data-scroll")).offset().top
  //   }, 1000);
  // });



  $('.boot-select').selectpicker();

  // $(".search .boot-select").on("click", function () {
  //   $(this).children(".dropdown-menu").toggleClass("display");
  //   // $(".bootstrap-select .dropdown-menu").toggleClass("display");
  // });
  
    
    $('.main-slider .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:10,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      },
      navText: ["<span class='fa fa-chevron-right'></span>","<span class='fa fa-chevron-left'></span>"]
    });

    // if ($(window).width() < 992) {
    //   $(".category .cat:nth-of-type(1), .category .cat:nth-of-type(2), .category .cat:nth-of-type(3), .category .cat:nth-of-type(4), .category .cat:nth-of-type(5), .category .cat:nth-of-type(6)").wrapAll("<div class='owl-carousel'></div>");
    //   $('.category .owl-carousel').owlCarousel({
    //     rtl: document.dir == 'rtl' ? true : false,
    //     autoplay:true,
    //     loop:true,
    //     margin:0,
    //     dots:true,
    //     nav:true,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:6
    //         }
    //     },
    //     navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    //   });
    // } else {

    // }
    
    


    


    $(".section-one .sections .main-menu .sub-menu").on("click", function () {
      $(this).children("ul").slideToggle();
    });
    
  

  // menu - search




    // $(".nav-bar .icons .search").on("click", function () {
    //   $(".search-container").fadeIn();
    //   $('html, body').css("overflow-y", "hidden");
    // });
    // $(".search-container, .search-container .close").on("click", function () {
    //   $(".search-container").fadeOut();
    //   $('html, body').css("overflow-y", "visible");

    // });
    // $(".search").on("click", function(e) {
    //   e.stopPropagation();
    // });



    




    $(".nav-bar .icons .menu").on("click", function () {
      $(".fixed-menu").fadeIn();
      $(".fixed-menu .menu").addClass("show");
      $(".fixed-menu .main-list").addClass("show");
      $('html, body').css("overflow-y", "hidden");
    });
    $(".fixed-menu, .fixed-menu .menu-header .close").on("click", function () {
      $(".fixed-menu").fadeOut();
      $(".fixed-menu .menu").removeClass("show");
      $(".fixed-menu .main-list").removeClass("show");
      $('html, body').css("overflow-y", "visible");
    });
    $(".fixed-menu .menu").on("click", function(e) {
      e.stopPropagation();
    });



    $(".fixed-menu .main-list .slide").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
      });
    $(".fixed-menu .sub-list .slide-two").on("click", function(e) {
      e.stopPropagation();
    });
    $(".fixed-menu .sub-list .slide-two").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
    });


     if ($(window).width() < 992) {
       $(".footer .list-header").on("click", function() {
         $(this).toggleClass("active");
         $(this).siblings("ul").slideToggle();
       });
     
      } else {
        
      }

    

  
});
