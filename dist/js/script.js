$(document).ready(function(){function e(e){var s=$(".js-places"),i=s.find("._is-active").length,t=s.find(".js-places-block");$(this).width()<940?(i=0==i||3<i?0:i-1,i=null==e?i:s.data("step")+e,$(t[i]).show().siblings(".js-places-block").hide(),s.data("step",i)):t.show()}if($("#dzLicenceAddGuide").dropzone({url:"#",maxFilesize:3,maxFiles:1,addRemoveLinks:!0}),$("#dzImgsAddGuide").dropzone({url:"#",maxFilesize:3,maxFiles:8,addRemoveLinks:!0}),$("#changeUserPic").dropzone({url:"#",maxFilesize:3,maxFiles:1,addRemoveLinks:!1}),$("#feedbackAttachments").dropzone({url:"#",maxFilesize:3,maxFiles:4,addRemoveLinks:!1}),$("textarea.editor").redactor({imageUpload:"/admin/imperavi/assets/upload_images.php",minHeight:200,pastePlainText:!0,autoresize:!0,fixed:!0,toolbarFixedBox:!0}),$(window).width()<940?$(".add-menu_open").on("click",function(){return $(this).toggleClass("__is-active"),$(this).siblings(".add-menu_list").toggleClass("__is-open"),!1}):($(".add-menu_open").on("click",function(){return!1}).on("mouseenter",function(){$(this).siblings(".add-menu_list").addClass("__is-open")}).on("mouseleave",function(e){$(this).is(e.target)||$(this).siblings(".add-menu_list").is(e.target)||$(this).siblings(".add-menu_list").removeClass("__is-open")}),$(".add-menu").mouseleave(function(e){$(this).find(".add-menu_list").removeClass("__is-open")})),$(document).mouseup(function(e){var s=$(".add-menu");s.is(e.target)||0!==s.has(e.target).length||(s.find(".add-menu_open").removeClass("__is-active"),s.find(".add-menu_list").removeClass("__is-open"))}),$(".add-menu_item._with-submenu").on("click",function(){return $(this).siblings().removeClass("_is-open"),$(this).toggleClass("_is-open"),!1}),$(".text-field._with-cleaning").siblings(".cleaner-btn").on("click",function(){return $(this).siblings(".text-field").val(""),!1}),$(".text-field").keyup(function(){return $(this).attr("value",$(this).val()),!1}),$(".js-tabs").on("click","a",function(){return $(this).addClass("_is-active").siblings("a").removeClass("_is-active"),$($(this).attr("href")).show().siblings("[id]").hide(),!1}),$(".js-tabs").each(function(){var e=0<$(this).find("a._is-active").length?$(this).find("._is-active"):$(this).find("a")[0];$(e).addClass("_is-active"),$($(e).attr("href")).show().siblings("[id]").hide()}),$(".js-open-user-menu").on("click",function(){return $(".js-user-menu-popup").toggleClass("_is-show"),!1}),$(document).mouseup(function(e){var s=$(".js-user-menu-popup");s.is(e.target)||0!==s.has(e.target).length||s.removeClass("_is-show")}),$(".mopen").wmodal(),$(".keywords").children(".btn._keyword").on("click",function(){return $(this).addClass("_is-active").siblings().removeClass("_is-active"),!1}),function(t){function o(e,s){(e=t("string"==typeof e?e:t(e).attr("href"))).toggleClass("_is-shorted")}t.fn.unshortBlock=function(e){s=e,t.extend({block:".js-shorted-block"},s);var s,i=this.selector;"#"==i.charAt(0)&&0<this.length?o(i):t(this).click(function(){return o(this),t(this).hasClass("js-toggle-text")?t(this).text("свернуть"==t(this).text()?"читать дальше":"свернуть"):t(this).remove(),!1})}}(jQuery),$(".js-unshort-block").unshortBlock(),$(document).mouseup(function(e){var s=$(".search-form._at-search-popup");s.is(e.target)||0!==s.has(e.target).length||s.addClass("_is-hide")}),$(document).scroll(function(e){var s=$(".search-form._at-search-popup");$(window).scrollTop()<300&&s.addClass("_is-hide")}),$(".search-popup").children(".js-search-open").on("click",function(){return $(window).scrollTop()<300&&$(window).scrollTop(300),$(this).siblings(".search-form._at-search-popup").removeClass("_is-hide"),!1}),0<$(".site-header").hasClass("--at-index")&&$(window).scroll(function(){$(document).scrollTop()<=$(".site-header .full-content").outerHeight()-30?($(".site-header").removeClass("_is-sticky"),$("body").css({"padding-top":0}),$(".site-header .js-down-anim").addClass("_is-hide")):($(".site-header").addClass("_is-sticky"),$("body").css({"padding-top":$(".site-header").outerHeight()}),$(".site-header .js-down-anim").removeClass("_is-hide"))}),$(window).on("load",function(){$(this).width()<940&&$(".site-nav").find(".nav-item._is-active").on("click",function(){return!1})}),$(".open-mobile-menu").on("click",function(){return $("#mobile-menu").addClass("_is-open"),$(document).mouseup(function(e){var s=$("#mobile-menu");s.is(e.target)||0!==s.has(e.target).length||s.removeClass("_is-open")}),!1}),jQuery(function(e){}),$("#mobile-menu").children(".m-menu-close").on("click",function(){return $(this).parent().removeClass("_is-open"),!1}),$("#mobile-menu").hasClass("_is-open")?$("body").css({"overflow-y":"hidden"}):$("body").css({"overflow-y":"auto"}),$(window).width()<940?$(".js-foo-nav").addClass("_is-hidden"):$(".js-foo-nav").removeClass("_is-hidden"),$(".js-foo-nav").children(".js-open-foo-nav").on("click",function(){return $(this).parent().toggleClass("_is-hidden"),!1}),$(window).on("resize",function(){e()}),e(),$(".js-choise-city-list").children(".places-item").on("click",function(){return $(this).addClass("_is-active").siblings().removeClass("_is-active"),e(1),!1}),$(".js-places-back").click(function(){e(-1)}),$(window).width()<940&&($(document).mouseup(function(e){var s=$(".item-card_tools");s.is(e.target)||0!==s.has(e.target).length||$(this).find(".item-card_tool.__show-tools").show().siblings().hide()}),$(".item-card_tool.__show-tools").on("click",function(){return $(this).hide(),$(this).siblings().show(),!1})),$(".filter-by").on("click","span",function(e){e.preventDefault(),$(this).closest(".filter-by").find(".filter-by-items").slideToggle()}),$(".filter-by").on("click",".filter-by__close",function(e){e.preventDefault(),$(this).closest(".filter-by").find(".filter-by-items").slideToggle()}),$(".keywords-scroll").on("click",function(e){e.preventDefault(),leftOrRight=$(this).index(),el=$(this).closest(".row.keywords").find(".keywords-carousel"),leftOrRight?(parseInt(el.css("left"))>el.width()/4*-1&&el.animate({left:"-=200"},"ease"),$(".keywords-scroll").fadeIn()):parseInt(el.css("left"))<30?el.animate({left:"+=200"},"ease"):$(this).fadeOut()}),$(window).width()<940){var s=$(".js-make-sticky");if(s.length){var i=s.css("top"),t=s.css("position"),o=$("footer").offset().top;$(document).on("scroll",function(e){300<=$(document).scrollTop()?$(document).scrollTop()+s.height()+100<o&&s.css({position:"absolute",top:$(document).scrollTop()+100+"px"}):s.css({position:t,top:i})})}}$(".fotorama__stage").on("mouseenter mousemove",function(e){$(".fotorama__caption__wrap").fadeOut()}).on("mouseleave",function(e){$(".fotorama__caption__wrap").fadeIn()}),$(".fotorama__stage").bind("touchstart",function(){$(".fotorama__caption__wrap").fadeToggle()}),$(".fotorama").on("fotorama:show",function(){"none"==$(".fotorama__caption__wrap").css("display")&&$(".fotorama__caption__wrap").fadeIn(0)})}),Dropzone.autoDiscover=!1;