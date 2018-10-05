$(document).ready(function() {

	// DROPZONE ADD GUIDE LICENCE

	$('#dzLicenceAddGuide').dropzone({
		url: '#',
		maxFilesize: 3,
		maxFiles: 1,
		addRemoveLinks: true
	});

	// DROPZONE IMAGES ADD GUIDE

	$('#dzImgsAddGuide').dropzone({
		url: '#',
		maxFilesize: 3,
		maxFiles: 8,
		addRemoveLinks: true
	});

	// DROPZONE CHANGE USERPIC

	$('#changeUserPic').dropzone({
		url: '#',
		maxFilesize: 3,
		maxFiles: 1,
		addRemoveLinks: false
	});

	// DROPZONE FEEDBACK ATTACHMENTS

	$('#feedbackAttachments').dropzone({
		url: '#',
		maxFilesize: 3,
		maxFiles: 4,
		addRemoveLinks: false
	});

	// TEXTAREA EDITOR

	$('textarea.editor').redactor({
		imageUpload: '/admin/imperavi/assets/upload_images.php',
		minHeight: 200,
		pastePlainText: true,
		autoresize: true,
		fixed: true, 
		toolbarFixedBox: true,
	});

	// ADD MENU

	if($(window).width() < 940) {
		$('.add-menu_open').on('click', function() {
			$(this).toggleClass('__is-active');
			$(this).siblings('.add-menu_list').toggleClass('__is-open');
			return false;
		});
	} else {
		$('.add-menu_open').on('click', function() {
			return false;
		}).on('mouseenter', function(){
			$(this).siblings('.add-menu_list').addClass('__is-open');
		}).on('mouseleave', function(e) {
			if(!$(this).is(e.target) && !$(this).siblings('.add-menu_list').is(e.target)) {
				$(this).siblings('.add-menu_list').removeClass('__is-open');
			};
		});
	};

	$('.add-menu_item._with-submenu').on('click', function() {
		$(this).siblings().removeClass('_is-open');
		$(this).toggleClass('_is-open');
		return false;
	});

	// FORM TEXT FIELD CLEANER

	$('.text-field._with-cleaning').siblings('.cleaner-btn').on('click', function() {
		$(this).siblings('.text-field').val('');
		return false;
	});

	// FORM TEXT FIELD VALUE SAVE ON FOCUSOUT

	$('.text-field').keyup(function() {
		$(this).attr('value', $(this).val());
		return false;
	});

	// TABS TOGGLE

	$('.js-tabs').on('click', 'a', function(){
		$(this).addClass('_is-active').siblings('a').removeClass('_is-active');
		$($(this).attr('href')).show().siblings('[id]').hide();
		return false;
	});

	$('.js-tabs').each(function(){
		var tab = $(this).find('a._is-active').length > 0 ? $(this).find('._is-active') : $(this).find('a')[0];
		$(tab).addClass('_is-active');
		$($(tab).attr('href')).show().siblings('[id]').hide();
	});

	// USER BLOCK MENU POPUP

	$('.js-open-user-menu').on('click', function() {
		$('.js-user-menu-popup').toggleClass('_is-show');
		return false;
	});

	$(document).mouseup(function (e){
		var popup = $('.js-user-menu-popup');
		if(!popup.is(e.target) && popup.has(e.target).length === 0) {
			popup.removeClass('_is-show')
		};
	});

	// MODALS

	$('.mopen').wmodal();

	// TOGGLE ACTIVE ITEM AT KEYWORDS LIST

	$('.keywords').children('.btn._keyword').on('click', function() {
		$(this).addClass('_is-active').siblings().removeClass('_is-active');
		return false;
	});

	// UNSHORT BLOCK

	(function($) {
		function shortBlock(o){
			return $.extend({
				block: '.js-shorted-block',
			}, o);
		}

		function blockUnshort(e, o){
			var e = typeof e == 'string' ? $(e) : $($(e).attr('href'));
			e.removeClass('_is-shorted');
		}

		$.fn.unshortBlock = function(s){
			var o = shortBlock(s),
				sel = this.selector;
			if (sel.charAt(0) == '#' && this.length > 0)
				blockUnshort(sel, o);
			else 
				$(this).click(function(){
					blockUnshort(this, o);
					(this).remove();
					return false;
				});
		}

	})(jQuery);

	$('.js-unshort-block').unshortBlock();

	// SEARCH POPUP

	$(document).mouseup(function (e){
		var popup = $('.search-form._at-search-popup');
		if(!popup.is(e.target) && popup.has(e.target).length === 0) {
			popup.addClass('_is-hide')
		};
	});

	$('.search-popup').children('.js-search-open').on('click', function() {
		$(this).siblings('.search-form._at-search-popup').removeClass('_is-hide');
		return false;
	});

	// STICKY HEADER

	if( $('.site-header').hasClass('--at-index') > 0 ) {
		$(window).scroll(function(){
			if ($(document).scrollTop() < $('.site-header .full-content').outerHeight()) {
				$('.site-header').removeClass('_is-sticky');
				$('body').css({'padding-top': 0});
				$('.site-header .js-down-anim').addClass('_is-hide')
			} else {
				$('.site-header').addClass('_is-sticky')
				$('body').css({'padding-top': $('.site-header').outerHeight()});
				$('.site-header .js-down-anim').removeClass('_is-hide')
			}
		});
	};
	

	// SITE NAV ON MOBILE

	$(window).on('load', function() {
		if($(this).width() < 940) {
			$('.site-nav').find('.nav-item._is-active').on('click', function(){
				return false;
			});
		};
	});
	

	// MOBILE MENU

	$('.open-mobile-menu').on('click', function() {
		$('#mobile-menu').addClass('_is-open')
		return false;
	});

	$('#mobile-menu').children('.m-menu-close').on('click', function() {
		$(this).parent().removeClass('_is-open');
		return false;
	});

	if($('#mobile-menu').hasClass('_is-open')) {
		$('body').css({'overflow-y': 'hidden'});
	} else {
		$('body').css({'overflow-y': 'auto'});
	};

	// FOOTER NAV ON MOBILE

	$(window).width() < 940 ? $('.js-foo-nav').addClass('_is-hidden') : $('.js-foo-nav').removeClass('_is-hidden');

	$('.js-foo-nav').children('.js-open-foo-nav').on('click', function() {
		$(this).parent().toggleClass('_is-hidden');
		return false;
	});

	// CHOISE PLACE

	$(window).on('resize', function() {
		cityChoiseM();
	});

	function cityChoiseM(s){
		var f = $('.js-places'),
			c = f.find('._is-active').length,
			b = f.find('.js-places-block');

		if($(this).width() < 940) {
			c = c == 0 || c > 3 ? 0 : c-1;
			c = s == undefined ? c : f.data('step') + s;
			$(b[c]).show().siblings('.js-places-block').hide();
			f.data('step', c);
		} else {
			b.show();
		}
	};

	cityChoiseM();

	$('.js-choise-city-list').children('.places-item').on('click', function() {
		$(this).addClass('_is-active').siblings().removeClass('_is-active');
		cityChoiseM(1);
		return false;
	});

	$('.js-places-back').click(function(){
		cityChoiseM(-1);
	});

	// ITEM CARD TOOLS ON MOBILE

	if($(window).width() < 940) {
		$(document).mouseup(function (e){
			var bar = $('.item-card_tools');
			if(!bar.is(e.target) && bar.has(e.target).length === 0) {
				$(this).find('.item-card_tool.__show-tools').show().siblings().hide();
			};
		});

		$('.item-card_tool.__show-tools').on('click', function() {
			$(this).hide();
			$(this).siblings().show();
			return false;
		});
	};

	// FILTER BY LANGUAGE. OPEN POPUP.
	$('.filter-by').on('click', 'span', function (e) {
		e.preventDefault();
		$(this).closest('.filter-by').find('.filter-by-items').slideToggle();
    });
	$('.filter-by').on('click', '.filter-by__close', function (e) {
		e.preventDefault();
        $(this).closest('.filter-by').find('.filter-by-items').slideToggle();
    })
});

// DROPZONE AUTODISCOVER OFF

Dropzone.autoDiscover = false;
