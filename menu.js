var openMenu = new TimelineMax({
        paused: true
    })
    .from(".menu", 0.500, {
        y: "-100%",
        ease: Quad.easeInOut
    }, "drop")
    .staggerFrom(".menu a", 0.500, {
        scale: 2,
        opacity: 0,
        ease: Quad.easeInOut
    }, 0.100, "drop+=0.250");

var closeMenu = new TimelineMax({
        paused: true
    })
    .to(".menu", 0.500, {
        y: "-100%",
        ease: Quad.easeInOut
    });

function close() {
    closeMenu.restart();
    $(".menu-trigger>i").slicon('menu');
}

function open() {
    openMenu.restart();
    $(".menu-trigger>i").slicon('close');
}

$(".menu").on("click", function (e) {
    e.stopPropagation();
    close();
})

$(".menu-trigger>i").on("click", function (e) {
    e.stopPropagation();
    if ($(this).is(".slicon-menu")) {
        open();
    } else {
        close();
    }
})

$.fn.slicon = function (name) {
    return this.each(function () {
        if (name) {
            var $slicon = $(this);
            var classes = $slicon.attr("class");
            var new_classes = classes.replace(/slicon-\w+/, "slicon-" + name);
            $slicon.attr("class", new_classes);
        }
    });
}
$('[class*="slicon-"]').html("<i/><i/><i/>");
