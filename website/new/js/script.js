$(window).on("load", function() {
    $("#preloader").fadeOut();
    // WOW ANIMATION 
    wow = new WOW({
        animateClass: 'animated',
        offset: 50
    });
    wow.init();

});
$(document).ready(function() {
    /*open menu*/
    $(".menu-trigger").click(function() {
        $("body,html").addClass('menu-toggle');
        $(".menu-trigger").addClass('active');
    });
    $(".m-overlay").click(function() {
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });
    $('.close_cookie').click(function() {
        $(this).parent().fadeOut();
    })

    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 20) {
            $('#header').addClass('fixed');
        } else if ($(this).scrollTop() == 0) {
            $('#header').removeClass('fixed');
        }
    });
    $('.main_menu a[href^="#"],.menu_xs a[href^="#"] ,.link_scroll[href^="#"]').click(function() {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 1000);
        $('body,html').removeClass('menu-toggle');

        $('.menu-trigger').removeClass('active');
        return false;
    });


    $(".js-select").each(function(i, v) {
        var that = $(this);
        var placeholder = $(that).attr("data-placeholder");
        $(that).select2({
            placeholder: placeholder,
            minimumResultsForSearch: Infinity,
        });
    });

    $(".show_pass").click(function() {
        var eye_icon = $(this).find('i');
        eye_icon.removeClass("fa-eye");
        eye_icon.addClass("fa-eye-slash");

        var input = $(this).closest('div.password_input').find('.pwd');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
            eye_icon.removeClass("fa-eye-slash");
            eye_icon.addClass("fa-eye");
        }
    });


    var $input;

    function onInputFocus(event) {
        var $target = $(event.target);
        var $parent = $target.closest('div.input_group');
        $parent.addClass('focus-input');
    };

    function onInputBlur(event) {
        var $target = $(event.target);
        var $parent = $target.closest('div.input_group');
        $parent.removeClass('focus-input');
    };

    $input = $('.form_st1 .form-control');

    $input.on('focus', onInputFocus);
    $input.on('blur', onInputBlur);
})