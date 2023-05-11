$(document).ready(function(){
    $(".humberger-menu-icon").click(function(){
        $(".main-menu-holder").addClass("show-menu");
    });
    $(".close-humberger-menu").click(function(){
        $(".main-menu-holder").removeClass("show-menu");
    });

    TweenLite.defaultEase = Linear.easeNone;
    var ctrl = new ScrollMagic.Controller();

    // Create scenes
    $(".gs-grow").each(function(i) {
        let target1 = $(this).find(".grow-tagline");
        let target2 = $(this).find(".grow-img");
        var tl = new TimelineMax();
        tl.from(target1, 1, { opacity: 0, x: 100 });
        tl.from(target2, 1, { scale: 0.5 }, 0);

        new ScrollMagic.Scene({
            triggerElement: this,
            duration: "50%",
            triggerHook: 0.6
        })
        .setTween(tl)
        .addTo(ctrl)
        .addIndicators({
        colorTrigger: "transparent",
        colorStart: "transparent",
        colorEnd: "transparent",
        indent: 40
        });
    });

});