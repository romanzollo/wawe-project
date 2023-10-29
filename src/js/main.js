
// var time = 2,
//   cc = 1;
// $(window).scroll(function() {
//   $('.gallery__numbers').each(function() {
//     var
//       cPos = $(this).offset().top,
//       topWindow = $(window).scrollTop();
//     if (cPos < topWindow + 250) {
//       if (cc < 2) {
//         $(".gallery__numbers-item").addClass("viz");
//         $('div').each(function() {
//           var
//             i = 1,
//             num = $(this).data('num'),
//             step = 1000 * time / num,
//             that = $(this),
//             int = setInterval(function() {
//               if (i <= num) {
//                 that.html(i);
//               } else {
//                 cc = cc + 2;
//                 clearInterval(int);
//               }
//               i++;
//             }, step);
//         });
//       }
//     }
//   });
// });

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__list'),
        menuItem = document.querySelectorAll('.menu__list-item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('menu__list--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger--active');
            menu.classList.toggle('menu__list--active');
        })
    })
});

$(function () {

    $(".promo__menu a, .pageup a").on("click", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    $('.blog-slider__items').slick({
        dots: true,
        arrows: false
    });

    // счетчик цифр
    let $element = $('.gallery__numbers-item');
    let counter = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        // var offset = $element.offset().top

        if (scroll > offset && counter == 0) {
            $('.gallery__numbers-item').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            counter = 1;
        }
    });

    // Scroll and show pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    let mixer = mixitup('.gallery__content');

});