$(".cmn-toggle-switch__htx").click(function () {
    $(this).toggleClass("active");
    if (this.classList.contains("active") === true) {
        $('.body-list-menu').addClass("active");
        $( 'body' ).addClass( 'no-scroll' );
    } else {
        $('.body-list-menu').removeClass("active");
        $( 'body' ).removeClass( 'no-scroll' );
        $('.menu-second-level').removeClass("visible");
        $('.menu-third-level').removeClass("visible-third");
        $('.img-logo').removeClass("hide-img-logo");
        $('.link-back').removeClass("show-link-back");
    }
});

if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
    $(".SB-MENU").click(function () {
        var elem = this;
        var block = $(elem).closest('.SB-MENU');
        var items = $(block).find('.menu-second-level');
        $(items).addClass("visible");
        $('.img-logo').addClass("hide-img-logo");
        $('.link-back').addClass("show-link-back");
    });

    $(".link-back").click(function () {
        const myElem = document.querySelector(".menu-third-level")
        if( myElem.classList.contains("visible-third") === true){
            $('.menu-third-level').removeClass("visible-third");
        }
       else {
            $('.menu-second-level').removeClass("visible");
            $('.img-logo').toggleClass("hide-img-logo");
            $('.link-back').toggleClass("show-link-back");
        }
    });

    $(".SB-MENU-THIRD").click(function () {
        var elem = this;
        var block = $(elem).closest('.SB-MENU-THIRD');
        var items = $(block).find('.menu-third-level');
        $(items).addClass("visible-third");

    });
}

