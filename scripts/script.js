$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.card-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        zoom: {
            enabled: true,
        }
    });

    $('.btn').addClass('hvr-pop');

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
    });

    $(function () {
        $("#accordion").accordion();
    });

    // валидация формы
    let index = $('#index');
    let modal = $('.modal');
    let form = $('.form-block');

// запрет на ввод всего, кроме цифр

    index.bind("change keyup input keydown", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    $('#submit').click(function (event) {
        event.preventDefault();

        let firstName = $('#firstName');
        let lastName = $('#lastName');
        let phone = $('#phone');
        let country = $('#country');
        let address = $('#address');

        if (!firstName.val()) {
            alert("Не заполнено поле 'Имя'!")
            return;
        } else if (!lastName.val()) {
            alert("Не заполнено поле 'Фамилия'!")
            return;
        } else if (!phone.val()) {
            alert("Не заполнено поле 'Телефон'!")
            return;
        } else if (!country.val()) {
            alert("Не заполнено поле 'Страна'!")
            return;
        } else if (!index.val()) {
            alert("Не заполнено поле 'Индекс'!")
            return;
        }  // проверка на длину индекса
        else if (index.val().length !== 6) {
            alert("Поле 'Индекс' должно содержать 6 цифр!")
            return;
        } else if (!address.val()) {
            alert("Не заполнено поле 'Адрес'!")
            return;
        }
        form.css('opacity', '0');
        $(':input','form').val(''); // сброс заполненных полей
        modal.show();

        setTimeout( function() {
            modal.hide();
            form.css('opacity', '1');
        }, 5000)
    });

});
