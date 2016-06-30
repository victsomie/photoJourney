(function($) {

    var game = $('.game'),
        body = $('body'),
        tl = new TimelineLite();

    tl
        .fromTo(game, 3,
              { backgroundColor: "red", scale: 1, transform: "skew(0deg)", x: 20, y: 200},
              {autoAlpha: 1, backgroundColor: "blue", transform: "skew(100deg)", scale: 5.3, transform: "rotateZ(20deg)", ease: Power3.easeIn, delay: 0.05},
                3
             )

        .fromTo(game, 3,
                {autoAlpha: 1, backgroundColor: "blue", transform: "skew(100deg)", scale: 5.3},
                {autoAlpha: 1,  backgroundColor: "brown", scale: 1, ease:Power3.easeIn},
                6
        )
        .fromTo(game, 3,
              { autoAlpha: 1,  backgroundColor: "brown", scale: 1},
              {autoAlpha: 1, backgroundColor: "blue", transform: "rotateZ(-45deg)", scale: 4, ease:Power1.easeNone},
                9
             )
        .fromTo(game, 3,
                {autoAlpha: 1, backgroundColor: "blue", transform: "rotateZ(-45deg)", scale: 4},
                {autoAlpha: 1, backgroundColor: "purple", transform: "rotateZ(45deg)", scale: 2, ease:Power1.easeNone},
                12
               )
        .fromTo(game, 3,
                {autoAlpha: 1, backgroundColor: "purple", transform: "rotateZ(45deg)", scale: 2},
                {autoAlpha: 1, backgroundColor: "gray", transform: "rotateZ(-90deg)", scale: 4, ease:Power1.easeNone},
                15
               ) ;

//        .to(game, 2, {opacity: 0});

    /*
        dot = $('.dot'),
        loader = $('#loader'),
        tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent});  // Create a timeline /


    //var header = document.getElementById('header');
//    TweenLite.to(h2, 1, {autoAlpha: 0, delay: 1});
    //TweenLite.to(h2, 1, {autoAlpha: 0, delay: 1});
    //TweenLite.from(img, 1, {y: -200});
    //TweenLite.to(img, 3, {y:-200, autoAlpha: 0, ease: Expo.easeInOut, delay:0.4});
    /*
    tl
        .set(header, {autoAlpha: 1})
        .from(img, 1, { y: 200, scale: 3})
        .from(h2, 5, {opacity:0, x: 200,  ease:Back.easeOut })
        .from(img, 1, {opacity: 0, x: -200})
        .from(p, 1, {opacity: 0})
        .from(ul, 1, {opacity: 0})
        //.from(header, 1, {opacity: 0})
        .from(h1, 1, {opacity: 0});

    tlLoader
        .staggerFromTo(dot, 0.3,
                       {y: 0, autoAlpha: 0},
                       {y: 20, autoAlpha: 1, ease: Back.easeInOut},
                       0.05
                      )
        .fromTo(loader, 0.3,
                {autoAlpha: 1, scale: 1.3},
                {autoAlpha: 0, scale: 1, ease:Power0.easeNone},
                0.9
        );

    function loadContent(){
        var tlLoaderOut = new TimelineLite({onComplete: contentIn});
        tlLoaderOut
            .set(dot, {backgroundColor: '#2b4d66'})
            .to(loader, 0.3, {autoAlpha:1, scale: 1.3, ease: Power0.easeNone})
            .staggerFromTo(dot, 0.3,
                           {y: 0, autoAlpha: 0},
                           {y: 20, autoAlpha: 1, ease: Back.easeInOut},
                           0.05, 0
                          )
            .to(loader, 0.3, {y: -150, autoAlpha: 0, ease: Back.easeIn}, '+=0.3');
    }

    function contentIn(){
        tl.play();
    }*/


})(jQuery);
