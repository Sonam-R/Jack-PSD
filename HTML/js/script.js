
$(window).scroll(function() {
    var scroll = $(window).scrollTop(),
        windowWidth = $(window).width();
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
    if(windowWidth >= 800) {
        if (scroll > 1992) {
            $('.thirdcontainer-inr').addClass('decription-container-full')
        } else {
            $('.thirdcontainer-inr').removeClass('decription-container-full')
        }
    } else {
        $('.thirdcontainer-inr').addClass('decription-container-half')
    }
});
$( document ).ready(function() {
    $(".menu-toggle").on("click", function () {
        $('.navigation').slideToggle();
    });
    $(".fixed-btn a").on("click", function () {
        $('.fixed-form').slideToggle();
    });




    $(document).mouseup(function (e)
    {
        var container = $(".fixed-form");
        if (!container.is(e.target)
            && container.has(e.target).length === 0)
        {
            container.hide();
        }
    });
});