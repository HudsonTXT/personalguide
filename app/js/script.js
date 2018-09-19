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

	// ADD MENU DROPDOWN OPEN

	$('.add-menu li._with-sub-dropdown').on('click', function() {
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

	$(document).mouseup(function (e){
		var popup = $('.js-user-menu-popup');
		if(!popup.is(e.target) && popup.has(e.target).length === 0) {
			popup.removeClass('_is-show')
		};
	});

	$('.js-open-user-menu').on('click', function() {
		$('.js-user-menu-popup').toggleClass('_is-show');
		return false;
	});

	// SITE HEADER ON INDEX PAGE

	$(window).scroll(function() {
		257 > $(document).scrollTop() ? $('.site-header._full .js-down-anim').addClass('_is-hide') : $('.site-header._full .js-down-anim').removeClass('_is-hide');
	});

	// MODALS

	$('.mopen').wmodal();

	// TOGGLE ACTIVE ITEM AT CITY CHOISE LIST

	$('.js-choise-city-list').children('.places-item').on('click', function() {
		$(this).addClass('_is-active').siblings().removeClass('_is-active');
		return false;
	});

	// TOGGLE ACTIVE ITEM AT KEYWORDS LIST

	$('.keywords').children('.btn._keyword').on('click', function() {
		$(this).addClass('_is-active').siblings().removeClass('_is-active');
		return false;
	});

});

// DROPZONE AUTODISCOVER OFF

Dropzone.autoDiscover = false;
