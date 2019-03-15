$(document).ready(function () {

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
        addRemoveLinks: true
    });

    // DROPZONE FEEDBACK ATTACHMENTS

    $('#feedbackAttachments').dropzone({
        url: '#',
        maxFilesize: 3,
        maxFiles: 4,
        addRemoveLinks: true
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

    if ($(window).width() < 940) {
        $('.add-menu_open').on('click', function () {
            $(this).toggleClass('__is-active');
            $(this).siblings('.add-menu_list').toggleClass('__is-open');
            return false;
        });
    } else {
        //.add-menu_open
        $('.add-menu_open').on('click', function () {
            return false;
        }).on('mouseenter', function () {
            $(this).siblings('.add-menu_list').addClass('__is-open');
        }).on('mouseleave', function (e) {
            if (!$(this).is(e.target) && !$(this).siblings('.add-menu_list').is(e.target)) {
                $(this).siblings('.add-menu_list').removeClass('__is-open');
                // console.log("leave");
            }
        });
        $('.add-menu').mouseleave(function (e) {
            $(this).find(".add-menu_list").removeClass("__is-open");
        });

    }

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".add-menu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.find(".add-menu_open").removeClass('__is-active');
            div.find(".add-menu_list").removeClass('__is-open'); // скрываем его
        }
    });

    $('.add-menu_item._with-submenu').on('click', function () {
        $(this).siblings().removeClass('_is-open');
        $(this).toggleClass('_is-open');
        return false;
    });

    // FORM TEXT FIELD CLEANER

    $(document).on("click", ".tf-wrapper .cleaner-btn", function (e) { 
        e.preventDefault();
        if($(this).parent().find(".text-field").attr("name") == "lang") {
            valInp = $(this).parent().find(".text-field").val();
            $(this).closest("fieldset").find("[name='excursion-lang']").append("<option value="+valInp+">"+valInp+"</option>")
            $(this).closest(".tf-wrapper").get(0).remove();
            
        }else{
            $(this).parent().find(".text-field").val('');
        }
     });

    /**
     * Excursion lang
     */
    $(document).on("change", "[name='excursion-lang']", function (e) { 
        e.preventDefault();
        // console.log("thisHTML: ", $(this).closest(".tf-wrapper"));
        $(this).closest(".tf-wrapper").clone().appendTo($(this).closest("fieldset")).find("option[value="+$(this).val()+"]").remove();
        // $(this).
        val = $(this).val();
        $(this).closest(".tf-wrapper").replaceWith('<div class="tf-wrapper _w-220">\
                    <input class="text-field _with-cleaning" type="text" name="lang" id="lang" value="'+val+'" disabled="disabled">\
                    <button class="cleaner-btn" type="button"></button>\
                  </div>');
        $(this).closest(".tf-wrapper").remove();
     });

    // FORM TEXT FIELD VALUE SAVE ON FOCUSOUT

    $('.text-field').keyup(function () {
        $(this).attr('value', $(this).val());
        return false;
    });


    // TABS TOGGLE
    $('.js-tabs').on('click', 'a', function () {
        $(this).addClass('_is-active').siblings('a').removeClass('_is-active');
        $($(this).attr('href')).show().siblings('[id]').hide();
        return false;
    });

    $('.js-tabs').each(function () {
        var tab = $(this).find('a._is-active').length > 0 ? $(this).find('._is-active') : $(this).find('a')[0];
        $(tab).addClass('_is-active');
        $($(tab).attr('href')).show().siblings('[id]').hide();
    });

    // USER BLOCK MENU POPUP

    $('.js-open-user-menu').on('click', function () {
        $('.js-user-menu-popup').toggleClass('_is-show');
        return false;
    });

    $(document).mouseup(function (e) {
        var popup = $('.js-user-menu-popup');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            popup.removeClass('_is-show')
        }
        ;
    });

    // MODALS

    $('.mopen').wmodal();

    // TOGGLE ACTIVE ITEM AT KEYWORDS LIST

    $('.keywords').children('.btn._keyword').on('click', function () {
        $(this).addClass('_is-active').siblings().removeClass('_is-active');
        return false;
    });

    // UNSHORT BLOCK

    (function ($) {
        function shortBlock(o) {
            return $.extend({
                block: '.js-shorted-block',
            }, o);
        }

        function blockUnshort(e, o) {
            var e = typeof e == 'string' ? $(e) : $($(e).attr('href'));
            e.toggleClass('_is-shorted');
        }

        $.fn.unshortBlock = function (s) {
            var o = shortBlock(s),
                sel = this.selector;
            if (sel.charAt(0) == '#' && this.length > 0)
                blockUnshort(sel, o);
            else
                $(this).click(function () {
                    blockUnshort(this, o);
                    if ($(this).hasClass("js-toggle-text")) {
                        $(this).text($(this).text() == "свернуть" ? "читать дальше" : "свернуть");

                    } else {
                        $(this).remove();
                    }
                    return false;
                });
        }

    })(jQuery);

    $('.js-unshort-block').unshortBlock();

    // SEARCH POPUP

    $(document).mouseup(function (e) {
        var popup = $('.search-form._at-search-popup');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            popup.addClass('_is-hide')
        }
    });
    $(document).scroll(function (e) {
        var popup = $('.search-form._at-search-popup');
        if ($(window).scrollTop() < 300) {
            popup.addClass('_is-hide');
        }
    });

    $('.search-popup').children('.js-search-open').on('click', function () {
        if ($(window).scrollTop() < 300) {
            $(window).scrollTop(300);
        }
        $(this).siblings('.search-form._at-search-popup').removeClass('_is-hide');
        return false;
    });

    // STICKY HEADER

    if ($('.site-header').hasClass('--at-index') > 0) {
        $(window).scroll(function () {
            if ($(document).scrollTop() <= $('.site-header .full-content').outerHeight()-30) {
                $('.site-header').removeClass('_is-sticky');
                $('body').css({'padding-top': 0});
                $('.site-header .js-down-anim').addClass('_is-hide')
            } else {
                $('.site-header').addClass('_is-sticky')
                $('body').css({'padding-top': $('.site-header').outerHeight()});
                $('.site-header .js-down-anim').removeClass('_is-hide')
            }
        });
    }
    ;


    // SITE NAV ON MOBILE

    $(window).on('load', function () {
        if ($(this).width() < 940) {
            $('.site-nav').find('.nav-item._is-active').on('click', function () {
                return false;
            });
        }
        ;
    });


    // MOBILE MENU

    $('.open-mobile-menu').on('click', function () {
        $('#mobile-menu').addClass('_is-open');
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $("#mobile-menu"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('_is-open'); // скрываем его
            }
        });
        return false;
    });

    jQuery(function ($) {

    });

    $('#mobile-menu').children('.m-menu-close').on('click', function () {
        $(this).parent().removeClass('_is-open');
        return false;
    });

    if ($('#mobile-menu').hasClass('_is-open')) {
        $('body').css({'overflow-y': 'hidden'});
    } else {
        $('body').css({'overflow-y': 'auto'});
    }
    ;


    // FOOTER NAV ON MOBILE

    $(window).width() < 940 ? $('.js-foo-nav').addClass('_is-hidden') : $('.js-foo-nav').removeClass('_is-hidden');

    $('.js-foo-nav').children('.js-open-foo-nav').on('click', function () {
        $(this).parent().toggleClass('_is-hidden');
        return false;
    });

    // CHOISE PLACE

    $(window).on('resize', function () {
        cityChoiseM();
    });

    function cityChoiseM(s) {
        var f = $('.js-places'),
            c = f.find('._is-active').length,
            b = f.find('.js-places-block');

        if ($(this).width() < 940) {
            c = c == 0 || c > 3 ? 0 : c - 1;
            c = s == undefined ? c : f.data('step') + s;
            $(b[c]).show().siblings('.js-places-block').hide();
            f.data('step', c);
        } else {
            b.show();
        }
    };

    cityChoiseM();

    $('.js-choise-city-list').children('.places-item').on('click', function () {
        $(this).addClass('_is-active').siblings().removeClass('_is-active');
        cityChoiseM(1);
        return false;
    });

    $('.js-places-back').click(function () {
        cityChoiseM(-1);
    });

    // ITEM CARD TOOLS ON MOBILE

    if ($(window).width() < 940) {
        $(document).mouseup(function (e) {
            var bar = $('.item-card_tools');
            if (!bar.is(e.target) && bar.has(e.target).length === 0) {
                $(this).find('.item-card_tool.__show-tools').show().siblings().hide();
            }
            ;
        });

        $('.item-card_tool.__show-tools').on('click', function () {
            $(this).hide();
            $(this).siblings().show();
            return false;
        });
    }
    ;


    // FILTER BY LANGUAGE. OPEN POPUP.
    $('.filter-by').on('click', 'span', function (e) {
        e.preventDefault();
        $(this).closest('.filter-by').find('.filter-by-items').slideToggle();
    });
    $('.filter-by').on('click', '.filter-by__close', function (e) {
        e.preventDefault();
        $(this).closest('.filter-by').find('.filter-by-items').slideToggle();
    });

    // SEARCH SCROLL TAGS
    $('.keywords-scroll').on('click', function (e) {
        e.preventDefault();
        leftOrRight = $(this).index();
        el = $(this).closest('.row.keywords').find('.keywords-carousel');
        if (leftOrRight) {
            if (parseInt(el.css('left')) > (el.width() / 4) * -1) {
                el.animate({left: "-=200"}, 'ease');
            }
            $('.keywords-scroll').fadeIn();
        } else {
            if (parseInt(el.css('left')) < 30) {
                el.animate({left: "+=200"}, 'ease');
            } else {
                $(this).fadeOut();
            }
        }

    });

    //MOBILE SIDEBAR FIX on MOBILE
    if ($(window).width() < 940) {
        var sticky_block = $(".js-make-sticky");
        if (sticky_block.length) {
            var defTop = sticky_block.css("top");
            var defPos = sticky_block.css("position");
            var footerPos = $("footer").offset().top;
            $(document).on("scroll", function (e) {
                if ($(document).scrollTop() >= 300) {
                    if (($(document).scrollTop() + sticky_block.height() + 100) < footerPos) {
                        sticky_block.css({position: "absolute", top: $(document).scrollTop() + 100 + "px"});
                    }
                } else {
                    sticky_block.css({position: defPos, top: defTop});
                }
            });
        }
    }

    // press to hide text
    $(".fotorama__stage").on("mouseenter mousemove", function (e) {
        $(".fotorama__caption__wrap").fadeOut();
    }).on("mouseleave", function (e) {
        $(".fotorama__caption__wrap").fadeIn();
    });

    $('.fotorama__stage').bind('touchstart', function () {
        $(".fotorama__caption__wrap").fadeToggle();
    });
    $('.fotorama').on('fotorama:show', function () {
            if ($(".fotorama__caption__wrap").css("display") == "none") {
                $(".fotorama__caption__wrap").fadeIn(0);
            }
        }

    );


    /**
     * Show error in  input, when popup login click "LOGIN"
     * add TO .tf_wrapper class ._error
     * AND
     * add inside .tf-error ERROR TEXT
     */
    // $(document).on("click", "#signin .btn._fs11", function(e){
    //     e.preventDefault();
    //     wrap = $(this).closest(".modal").find(".tf-wrapper");
    //     if(!wrap.hasClass("_error")){
    //         wrap.addClass("_error");
    //         wrap.append('<div class="tf-error">e-mail введен неверно</div>');
    //     }
    // });

    $.validate({
        lang : 'ru', 
        modules : 'date, security, file',
        onModulesLoaded : function() {
        //   $('#country').suggestCountry();
        }
      });



    /**
     * Jquery Sortable Init. Check cabinet_guide_exursions
     */
    $(".js-sortable").sortable({
        containerSelector: '.js-sortable',
        // itemPath: '> tbody',
        itemSelector: '.items-grid_item',
        placeholder: '<li class="placeholder">Отпустите мышь, чтобы поменять порядок элементов</li>',
        pullPlaceholder: false,
        tolerance: 6,
        distance: 10,
        handle: ".__drag"
        
    });

     /** Scroll to anchor */
     $(".personal-menu.--at-guide-card a[href^=\\#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top-$(".site-nav").height()-40
        }, 500);
        // $(document).find(".menu__mobile").removeClass("menu_opened");
        // $(document).find(".menu__hamburger").removeClass("menu_opened");
        e.preventDefault();
        // return false;
    });
    

});


// DROPZONE AUTODISCOVER OFF

Dropzone.autoDiscover = false;
