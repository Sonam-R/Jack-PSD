
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".header").addClass("sticky");
    } else {
        $(".header").removeClass("sticky");
    }
    if(scroll < 1510) {
        $('.rating-star').hide();
    } else {
        $('.rating-star').show();
    }
    if(scroll > 1992) {
        $('.thirdcontainer-inr').addClass('decription-container-full')
    } else {
        $('.thirdcontainer-inr').removeClass('decription-container-full')
    }
}); 