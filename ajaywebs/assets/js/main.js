(function ($) {
	"use strict";

	var windowOn = $(window)
	///////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load',function () {
		$('#loading').fadeOut(500);
	});

	///////////////////////////////////////////////////
	// 02. SubMenu Dropdown Toggle
	if ($('.tp-main-menu nav > ul > li.has-dropdown > a').length) {
		$('.tp-main-menu nav > ul > li.has-dropdown > a').append('<i class="fal fa-angle-down"></i>');
	}

    ///////////////////////////////////////////////////
	// 03. scroll-to-target 
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 245) {
			$('.scroll-to-target').removeClass('open');

		} else {
			$('.scroll-to-target').addClass('open');
		}
	});
	
	///////////////////////////////////////////////////
	// 04. Scroll Up Js
	if ($('.scroll-to-target,.scrollTop').length) {
		$(".scroll-to-target,.scrollTop").on('click', function () {
		var target = $(this).attr('data-target');
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	
		});
	}

    ///////////////////////////////////////////////////
	// 05. wow animation
	var wow = new WOW(
		{
		  mobile: false,
		}
	  );
	  wow.init();
	var windowOn = $(window);


	///////////////////////////////////////////////////
	// 06. PreLoader Js
	windowOn.on('load',function() {
		$("#loading").fadeOut(500);

	});



	// 04. Scroll Up Js
	function smoothSctollTop() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 100
				}, 1000);
			}
		});
	}
	smoothSctollTop();






	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 300) {
			$("#header-sticky,#header-sticky-mobile").removeClass("header-sticky");
		} else {
			$("#header-sticky,#header-sticky-mobile").addClass("header-sticky");
		}
	});

	////////////////////////////////////////////////////
	// 08. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// 08. Mobile Menu Js
	$('#mobile-menu-2').meanmenu({
		meanMenuContainer: '.mobile-menu-2',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".tp-menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	///////////////////////////////////////////////////
	// 10. Magnific Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 11. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// 12. Counter Js
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	////////////////////////////////////////////////////
	// 13. Swiper Js
	const serviceswiper = new Swiper('.service-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 4,
        spaceBetween: 30,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.services-n',
		  prevEl: '.services-p',
		},
	  });


	////////////////////////////////////////////////////
	// 13. Swiper Js
	const blogswiper = new Swiper('.bl-hero__slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
        spaceBetween: 30,
		arrows:true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.next-arrow',
		  prevEl: '.prev-arrow',
		},
	  })

	////////////////////////////////////////////////////
	// 13. Swiper Js
	const blogdswiper = new Swiper('.bl-testimonial__active', {
		loop: true,
		slidesPerView: 1,
		arrows:false,
		effect:'fade',
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".testimonial-slider-dots",
			clickable:true,
		},
	  })

	////////////////////////////////////////////////////
	// 13. Swiper Js
	const instaswiper = new Swiper('.bl-instagram__slider-active', {
		loop: true,
		slidesPerView: 6,
		arrows:false,
		spaceBetween: 30,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	  })


	  // 09. Home-1-Slider js
	$('.bl-cta__slider-active').slick({
		speed: 12000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});



	////////////////////////////////////////////////////
	// 14. magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	////////////////////////////////////////////////////
	// 15. MagnificPopup video view Js
	$(".popup-video").magnificPopup({
	   type: "iframe",
    });
	
	////////////////////////////////////////////////////
	// 16. Swiper Js
	var swiper = new Swiper('.corporate-brand__active', {
		loop: true,
		slidesPerView: 6,
        spaceBetween: 30,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	  });

	////////////////////////////////////////////////////
	// 16. Swiper Js
	var brandswiper = new Swiper('.brand-slider-active', {
		loop: true,
		slidesPerView: 6,
        spaceBetween: 30,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},
	  });

	////////////////////////////////////////////////////
	// 17. Swiper Js
	var brandswiper = new Swiper('.testimonial-slider-active', {
		loop: true,
		slidesPerView: 3,
		centeredSlides: true,
        spaceBetween: 50,

		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	  });

	////////////////////////////////////////////////////
	// 18. Swiper Js
	var swiper = new Swiper('.testimonial-slider-active-2', {
		// Optional parameters
		loop: true,
		slidesPerView: 4,
        spaceBetween: 50,
		// Navigation arrows
		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	  });


	////////////////////////////////////////////////////
	// 19. Swiper Js
	var brandswiper = new Swiper('.testimonial-slider-two', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,


		pagination: {
			el: ".testimonial-slider-dots",
			clickable:true,
		  },
		// Navigation arrows
		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},

	  });
	var brandswiper = new Swiper('.testi-slider-active-four', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		spaceBetween: 70,
		centeredSlides:true,


		pagination: {
			el: ".testimonial-slider-dots-four",
			clickable:true,
		  },
		// Navigation arrows
		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	  });

	////////////////////////////////////////////////////
	// 20. Swiper Js
	var brandswiper = new Swiper('.testi-slider-pd-active', {
		loop: true,
		slidesPerView: 1,
		autoplay:true,
		pagination: {
			el: ".project-slider-dots",
			clickable:true,
		  },
		// Navigation arrows
		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},

	  });
	var brandswiper = new Swiper('.testi-slider-active-five', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		spaceBetween: 20,
		centeredSlides:true,


		pagination: {
			el: ".testimonial-slider-dots-four",
			clickable:true,
		  },
		// Navigation arrows
		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	  });

	////////////////////////////////////////////////////
	// 21. Swiper Js
	var brandswiper = new Swiper('.testimonial-htm-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		centeredSlides:true,


		pagination: {
			el: ".testimonial-slider-dots-four",
			clickable:true,
		  },
		// Navigation arrows
		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},

	  });

	////////////////////////////////////////////////////
	// 22. Swiper Js
	var projectswiper = new Swiper('.project-slider-three-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: ".project-slider-dots",
			clickable:true,
		  },
		// Navigation arrows
		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	  });

	////////////////////////////////////////////////////
	// 23. Swiper Js
	var projectswiper = new Swiper('.product-slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		// Navigation arrows
		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	  });

	////////////////////////////////////////////////////
	// 24. Swiper Js
	var projectswiper = new Swiper('.project-slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		loop:true,
		pagination: {
			el: ".my-dots",
			clickable:true,
		  },
		// Navigation arrows
		navigation: {
		  nextEl: '.test-n',
		  prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	  });

	////////////////////////////////////////////////////
	// 25. Swiper Js
	var projectswiper = new Swiper('.blog-post-slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		loop:true,
		// Navigation arrows
		navigation: {
		  nextEl: '.blog-nav-next',
		  prevEl: '.blog-nav-prev',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	  });


		// testimonial
		$('.corporate-testi__slider-avata-active').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		centerMode: true,
		centerPadding: '0',
		asNavFor: '.corporate-testi__slider-active'
		});

		$('.corporate-testi__slider-active').slick({	
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.corporate-testi__slider-avata-active',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		centerPadding: '0',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
				}
			}
		]
		});

	////////////////////////////////////////////////////
	//26.isotope
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			layoutMode: 'fitRows',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1,
			}
		});

		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});	 
	
	
	/* video controls*/
	if ($('#myVideo').length > 0) {
		var vid = document.getElementById("myVideo"); 
		var status = false;
		$('.vid-play-btn').on('click', function (){
	
			if(status == false){
				vid.play();
				status = true;
			}else{
				vid.pause(); 
				status = false;
			}
	
		});
	}

		// 05. Search Js
		$(".vid-play-btn").on("click", function () {
			$(".vid-play-btn").toggleClass("open");
		});
		// $(".vid-play-btn)").on("click", function () {
		// 	$(".vid-play-btn").removeClass("open");
		// });
	



})(jQuery);