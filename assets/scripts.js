$(document).ready(function () {

	if (localStorage.getItem("__is_checkout") != null) {
		document.getElementById("pageMain").setAttribute("style", "display: none");
		openCheckout();
		checkoutInit();
	}

	//Фиксированная шапка при скроле
	function fixedHeader() {
		var topp = $('.topline-row').height();;
		function fixScroll() {
			if (window.scrollY > topp) {
				$(".header").addClass("fixed");
			}
			if (window.scrollY < topp) {
				$(".header").removeClass("fixed");
			}
		}

		fixScroll();

		$(window).scroll(function () {
			fixScroll();
		});
	}
	fixedHeader();

	$(window).resize(function () {
		fixedHeader();
	});

	//Скролл к блоку
	$("a.go").click(function (e) {
		e.preventDefault();
		var $link = $(this),
			id = $link.attr("href");
		$("html, body").animate(
			{
				scrollTop: $(id).offset().top - 150,
			},
			1200
		);
		if ($(window).width() < 992) {
			$(".info-center-content-wrp .sticky-block").removeClass("visible");
			$(".js-open-close-infocenter-menu").removeClass("active");
			$(".info-center-mobile-search").removeClass("visible");
			$(".js-close-infocenter-search").hide();
			$(".js-open-infocenter-search").show();
			$(".js-open-close-infocenter-menu").show();
		} else {
			$(".search-result").hide();
			$(".info-center-search-input-wrp__input").val("");
			$(".remove-search").hide();
		}
	});

	//Смена активного элемента в выборе характеристики товара
	$('.parameters-list__link').click(function (e) {
		e.preventDefault();
		let currentLink = $(this);
		currentLink.closest('.parameters-list__item').siblings('.parameters-list__item').removeClass('active');
		currentLink.closest('.parameters-list__item').addClass('active');
		var slideno = $(this).data('slide');
		$('.product-slider-nav').slick('slickGoTo', slideno - 1);
	});

	//Выбор количества товаров
	$('.quantity-block__button').click(function (e) {
		e.preventDefault();
		let currentButton = $(this);
		let itemsInput = $('.quantity-block__input');
		let itemsInputValue = $('.quantity-block__input').val();
		if (currentButton.hasClass('plus')) {
			itemsInput.val(Number(itemsInputValue) + 1);
		}
		if (currentButton.hasClass('minus')) {
			itemsInput.val(Number(itemsInputValue) - 1);
			if (Number(itemsInputValue) <= 1) {
				itemsInput.val('1');
			}
		}
	});

	//Проставляем первую букву имени в аватар
	$(".review-item").each(function () {
		let currentName = $(this).find('.review-item-head__name');
		let currentNameText = $(this).find('.review-item-head__name').text();
		$(this).find('.review-item-head__avatar-text').text(currentNameText[0]);
	});

	//Рандомный цвет для аватарок
	function randColor() {
		let rand = () => Math.floor(Math.random() * (255 + 1 - 0) + 0);
		return `rgb(${rand()},${rand()},${rand()})`;
	}

	$(".review-item").each(function () {
		$(this).find('.review-item-head__avatar').css('background-color', randColor());
	});

	//Проставление лайка-дизлайка
	$('.like-diselike__link').click(function (e) {
		e.preventDefault();
		let currentAction = $(this);
		currentActionText = currentAction.text();
		currentAction.addClass('active');
		console.log(currentActionText);
		currentAction.find('.like-diselike__value').text(Number(currentActionText) + 1);
		currentAction.closest('.like-diselike').addClass('noclick');
	});

	//Показать больше
	$('.js-load-more').click(function (e) {
		e.preventDefault();
		let currentLoadMore = $(this);
		currentLoadMore.closest('.reviews-content').find('div.hidden').removeClass('hidden');
		$('.reviews-content').find('.four-stars').show();
		currentLoadMore.remove();
	});

	//Фильтрация комментариев при клике на рейтинг
	$('.rating-list__link').click(function (e) {
		e.preventDefault();
		let currentSortingLink = $(this);
		$('.load-more-block').hide();
		if (currentSortingLink.hasClass('js-sorting-five')) {
			console.log('test');
			$('.reviews-content').find('.four-stars').hide();
			$('.reviews-content').find('.five-stars').show();
			$('.reviews-content').find('.hidden').removeClass('hidden');
		} else if (currentSortingLink.hasClass('js-sorting-four')) {
			$('.reviews-content').find('.four-stars').show();
			$('.reviews-content').find('.five-stars').hide();
			$('.reviews-content').find('.hidden').removeClass('hidden');
		}
	});



	//Слайдер-баннер на главной
	$(".product-slider-for").on(
		"init",
		function (event, slick) {
			$(this).css("visibility", "visible");
		}
	);
	if ($(".product-slider-for").length > 0) {
		$(".product-slider-for").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 400,
			arrows: false,
			dots: false,
			infinite: true,
			fade: true,
			asNavFor: '.product-slider-nav'
		});
	}

	$(".product-slider-nav").on(
		"init",
		function (event, slick) {
			$(this).css("visibility", "visible");
		}
	);
	if ($(".product-slider-nav").length > 0) {
		$(".product-slider-nav").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			speed: 400,
			arrows: false,
			dots: false,
			focusOnSelect: true,
			infinite: true,
			fade: false,
			swipe: true,
			swipeToSlide: true,
			asNavFor: '.product-slider-for',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						arrows: true,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						arrows: true,
					}
				}
			]
		});
	}


	const productSelections = document.querySelectorAll("#productSelection");
	const selectedProductName = document.getElementById("selectedProductName");


	productSelections.forEach(selection => {
		selection.addEventListener("click", function () {
			// Remove 'selected' class from all elements
			productSelections.forEach(item => item.classList.remove("selected"));

			// Add 'selected' class to the clicked element
			this.classList.add("selected");

			// Update the selected product name
			const selectedColor = this.getAttribute("data-color");
			selectedProductName.textContent = selectedColor;
		});
	});


	const buyButton = document.getElementById('buyButton');
	buyButton.addEventListener('click', () => {
		const selectedElement = document.querySelector('.product__variant.selected');
		lsSelectProduct(selectedElement.getAttribute("data-color"));
		document.getElementById("pageMain").setAttribute("style", "display: none");
		openCheckout();
		checkoutInit();
	});


	// if (localStorage.filled_form) {
	// 	let arr = JSON.parse(localStorage.filled_form);
	// 	arr.forEach(el => {
	// 		document.getElementById(el[0]).value = el[1];
	// 	});
	// }


	// let finalForm = document.querySelector('#checkoutContent');
	// if (finalForm) {
	// 	finalForm.addEventListener('submit', function (e) {
	// 		console.log('submit');
	// 		let countryCode = "+51";

	// 		// Prevent the form from submitting
	// 		e.preventDefault();

	// 		// Add your custom JavaScript code here to execute when the form is submitted successfully
	// 		// For example:
	// 		// fbq('track', 'InitiateCheckout');
	// 		console.log('Form submitted successfully!');

	// 		// Get values from input fields
	// 		var firstName = document.getElementById('nameField').value;
	// 		var lastName = document.getElementById('familyField').value;
	// 		var address = document.getElementById('addressField').value;
	// 		var zip = document.getElementById('zipField').value;
	// 		var city = document.getElementById('cityField').value;
	// 		var phone = document.getElementById('phoneField').value;
	// 		var email = document.getElementById('emailField').value;

	// 		// Get country code

	// 		// Get the redirect link
	// 		let redirectLink = document.querySelector('.redirectLink').href;
	// 		// let  = redirectLinkElement.href;

	// 		// Check if the redirect link already has parameters
	// 		var separator = redirectLink.includes('?') ? '&' : '?';

	// 		// Construct the redirect link with form values as parameters
	// 		var constructedLink = redirectLink + separator +
	// 			"first_name=" + encodeURIComponent(firstName) +
	// 			"&last_name=" + encodeURIComponent(lastName) +
	// 			"&address=" + encodeURIComponent(address) +
	// 			"&zip=" + encodeURIComponent(zip) +
	// 			"&city=" + encodeURIComponent(city) +
	// 			"&phone=" + encodeURIComponent(countryCode + phone) +
	// 			"&email=" + encodeURIComponent(email);

	// 		let arr = [['nameField', firstName],
	// 		['familyField', lastName],
	// 		['addressField', address],
	// 		['zipField', zip],
	// 		['phoneField', phone],
	// 		['cityField', city],
	// 		['emailField', email]];

	// 		localStorage.setItem('filled_form', JSON.stringify(arr));

	// 		// Update the href attribute of the redirect link
	// 		// redirectLinkElement.href = constructedLink;
	// 		// let preloader = document.getElementById('preloader');
	// 		// preloader.style.opacity = 1;
	// 		// preloader.style.display = "flex";
	// 		// preloader.querySelector('.info_text').innerHTML = "Espera un momento, te estamos redirigiendo al formulario de pago..."

	// 		// setTimeout(() => {
	// 		enableLoader();
	// 		window.location.href = constructedLink;

	// 		// }, 500);




	// 		console.log('Form submitted successfully!', constructedLink);
	// 	});

	// }

});
