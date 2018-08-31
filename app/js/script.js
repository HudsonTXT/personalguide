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

});

// DROPZONE AUTODISCOVER OFF

Dropzone.autoDiscover = false;