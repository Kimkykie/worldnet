/**
 * Template Name: Tempo - v2.0.0
 * Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function($) {
	switch (window.location.pathname) {
		case '/':
			$('#home').addClass('active');
			break;
		case '/about':
			$('#about').addClass('active');
			break;
		case '/services':
			$('#services').addClass('active');
			break;
		case '/portfolio':
			$('#portfolio').addClass('active');
			break;
		case '/contact':
			$('#contact').addClass('active');
			break;
	}
	// Smooth scroll for the navigation menu and links with .scrollto classes
	$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			e.preventDefault();
			const target = $(this.hash);
			if (target.length) {
				let scrollto = target.offset().top;
				const scrolled = 20;

				if ($('#header').length) {
					scrollto -= $('#header').outerHeight();

					if (!$('#header').hasClass('header-scrolled')) {
						scrollto += scrolled;
					}
				}

				if ($(this).attr('href') == '#header') {
					scrollto = 0;
				}

				$('html, body').animate(
					{
						scrollTop: scrollto,
					},
					1500,
					'easeInOutExpo'
				);

				if ($(this).parents('.nav-menu, .mobile-nav').length) {
					$('.nav-menu .active, .mobile-nav .active').removeClass('active');
					$(this)
						.closest('li')
						.addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass(
						'icofont-navigation-menu icofont-close'
					);
					$('.mobile-nav-overly').fadeOut();
				}
				return false;
			}
		}
	});
	// Mobile Navigation
	if ($('.nav-menu').length) {
		const $mobile_nav = $('.nav-menu')
			.clone()
			.prop({
				class: 'mobile-nav d-lg-none',
			});
		$('body').append($mobile_nav);
		$('body').prepend(
			'<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
		);
		$('body').append('<div class="mobile-nav-overly"></div>');

		$(document).on('click', '.mobile-nav-toggle', function(e) {
			$('body').toggleClass('mobile-nav-active');
			$('.mobile-nav-toggle i').toggleClass(
				'icofont-navigation-menu icofont-close'
			);
			$('.mobile-nav-overly').toggle();
		});

		$(document).on('click', '.mobile-nav .drop-down > a', function(e) {
			e.preventDefault();
			$(this)
				.next()
				.slideToggle(300);
			$(this)
				.parent()
				.toggleClass('active');
		});

		$(document).click(function(e) {
			const container = $('.mobile-nav, .mobile-nav-toggle');
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass(
						'icofont-navigation-menu icofont-close'
					);
					$('.mobile-nav-overly').fadeOut();
				}
			}
		});
	} else if ($('.mobile-nav, .mobile-nav-toggle').length) {
		$('.mobile-nav, .mobile-nav-toggle').hide();
	}
	// Toggle .header-scrolled class to #header when page is scrolled
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#header').addClass('header-scrolled');
		} else {
			$('#header').removeClass('header-scrolled');
		}
	});

	if ($(window).scrollTop() > 100) {
		$('#header').addClass('header-scrolled');
	}
	// Back to top button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	$('.back-to-top').click(function() {
		$('html, body').animate(
			{
				scrollTop: 0,
			},
			1500,
			'easeInOutExpo'
		);
		return false;
	});
	// Porfolio isotope and filter
})(jQuery);
