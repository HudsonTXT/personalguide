$(document).ready(function(){$("#dzLicenceAddGuide").dropzone({url:"#",maxFilesize:3,maxFiles:1,addRemoveLinks:!0}),$("#dzImgsAddGuide").dropzone({url:"#",maxFilesize:3,maxFiles:8,addRemoveLinks:!0}),$("#changeUserPic").dropzone({url:"#",maxFilesize:3,maxFiles:1,addRemoveLinks:!1}),$("#feedbackAttachments").dropzone({url:"#",maxFilesize:3,maxFiles:4,addRemoveLinks:!1}),$("textarea.editor").redactor({imageUpload:"/admin/imperavi/assets/upload_images.php",minHeight:200,pastePlainText:!0,autoresize:!0,fixed:!0,toolbarFixedBox:!0}),$(".add-menu li._with-sub-dropdown").on("click",function(){return $(this).siblings().removeClass("_is-open"),$(this).toggleClass("_is-open"),!1}),$(".text-field._with-cleaning").siblings(".cleaner-btn").on("click",function(){return $(this).siblings(".text-field").val(""),!1}),$(".text-field").keyup(function(){return $(this).attr("value",$(this).val()),!1}),$(".js-tabs").on("click","a",function(){return $(this).addClass("_is-active").siblings("a").removeClass("_is-active"),$($(this).attr("href")).show().siblings("[id]").hide(),!1}),$(".js-tabs").each(function(){var e=0<$(this).find("a._is-active").length?$(this).find("._is-active"):$(this).find("a")[0];$(e).addClass("_is-active"),$($(e).attr("href")).show().siblings("[id]").hide()}),$(document).mouseup(function(e){var i=$(".js-user-menu-popup");i.is(e.target)||0!==i.has(e.target).length||i.removeClass("_is-show")}),$(".js-open-user-menu").on("click",function(){return $(".js-user-menu-popup").toggleClass("_is-show"),!1}),$(window).scroll(function(){$(document).scrollTop()<257?$(".site-header._full .js-down-anim").addClass("_is-hide"):$(".site-header._full .js-down-anim").removeClass("_is-hide")}),$(".mopen").wmodal(),$(".js-choise-city-list").children(".places-item").on("click",function(){return $(this).addClass("_is-active").siblings().removeClass("_is-active"),!1}),$(".keywords").children(".btn._keyword").on("click",function(){return $(this).addClass("_is-active").siblings().removeClass("_is-active"),!1}),$(".login-via-social").children(".unshort-link").on("click",function(){return $(this).siblings(".social").removeClass("_is-short"),$(this).remove(),!1}),$(document).mouseup(function(e){var i=$(".search-form._at-search-popup");i.is(e.target)||0!==i.has(e.target).length||i.addClass("_is-hide")}),$(".search-popup").children(".js-search-open").on("click",function(){return $(this).siblings(".search-form._at-search-popup").removeClass("_is-hide"),!1})}),Dropzone.autoDiscover=!1;