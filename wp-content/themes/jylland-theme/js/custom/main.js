jQuery(document).ready(function($) {
    function screen_width() {
        return $(window).width();
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    //    $("body").niceScroll({
    //        smoothscroll: true,
    //        scrollspeed: 180,
    //        cursorcolor: "#a5486d",
    //        cursorwidth: "10px",
    //        background: "rgba(255,255,255,0.6)",
    //        cursorborder: "none",
    //    });


    //* Variables

    var currentPage = 0;

    var navigationContainer = $('.navigation-container'),
        iterator = $('.iterator'),
        bannerSection = $('.banner-section'),
        bannerLogo = $('.banner-logo'),
        bannerSubtitle = $('.banner-subtitle'),
        aboutSection = $('.about-section'),
        aboutTitle = $('.about-title-wrap'),
        aboutContent = $('.about-container');

    var tlBannerIn = new TimelineLite({ paused: true }),
        tlBannerOut = new TimelineLite({ paused: true }),
        tlAboutIn = new TimelineLite({ paused: true }),
        tlAboutOut = new TimelineLite({ paused: true }),
        tlWorksIn = new TimelineLite({ paused: true }),
        tlWorksOut = new TimelineLite({ paused: true }),
        tlContactIn = new TimelineLite({ paused: true }),
        tlContactOut = new TimelineLite({ paused: true });


    CustomEase.create("smoothEase", "M0,0c0.2,0.6,0.1,1,1,1");

    //* Set tweens inside timelines

    tlBannerIn
        .to(bannerSection, 0.5, { display: "block" })
        .to(bannerLogo, 0.7, { opacity: 1, ease: "smoothEase", bottom: "0px" })
        .to(bannerSubtitle, 0.7, { opacity: 1, ease: "smoothEase", bottom: "0px" }, 0.7)
        .to(navigationContainer,0.5, { opacity: 1 }, 0.9)
        .staggerFrom(iterator, 0.5, { ease: "smoothEase", marginLeft: "100", opacity: 0 }, 0.1);

    tlBannerOut
        .to(bannerLogo, 0.7, { opacity: 0, ease: "smoothEase", bottom: "50px" })
        .to(bannerSubtitle, 0.7, { opacity: 0, ease: "smoothEase", bottom: "50px" }, 0.2)
        .to(bannerSection, 0.5, { display: "none" });

    tlAboutIn
        .to(aboutSection, 0.5, { display: "block" })
        .from(aboutTitle, 0.7, { opacity: 0, ease: "smoothEase", y: "50" })
        .from(aboutContent, 0.7, { opacity: 0, ease: "smoothEase", y: "50" }, 0.7);

    tlAboutOut
        .to(aboutTitle, 0.7, { opacity: 0, ease: "smoothEase", y: "-50" })
        .to(aboutContent, 0.7, { opacity: 0, ease: "smoothEase", y: "-50" }, 0.2)
        .to(aboutSection, 0.5, { display: "none" });
    //
    //    tlWorksIn
    //        .to(worksTitle, 1.5, { opacity: 1, ease: Power4.easeOut, top: "0em" }, 2)
    //        .to(worksWrap, 2.5, { ease: Expo.easeOut, left: "0%" }, 2.5);


    //* Animate functions

    function animateBannerIn() {
        console.log('banner in called');
        tlBannerIn.play();

        currentPage = 1;
        console.log('current page:'+currentPage);
    }

    function animateBannerOut() {
        console.log('banner out called');
        tlBannerOut.play();
    }

    function animateAboutIn() {
        console.log('about in called');
        tlAboutIn.play();
    }

    function animateAboutOut() {
        console.log('about out called');
        tlAboutOut.play();
    }

    //    function animateWorksIn() {
    //        console.log('works in called');
    //        tlWorksIn.play();
    //    }
    //
    //    function animateWorksOut() {
    //        console.log('works out called');
    //    }
    //
    //    function animateContactIn() {
    //        console.log('contact in called');
    //
    //    }
    //
    //    function animateContactOut() {
    //        console.log('contact out called');
    //
    //    }


    //* Navigation functions

    function next_page() {
        if(currentPage + 1 < 4) {
            currentPage++;
        } else {
            currentPage = 4;
        }
        console.log('current page:'+currentPage);

        if(currentPage == 2) {
            animateBannerOut();

            setTimeout(function() {
                animateAboutIn();
            }, 2500);
        } else if(currentPage == 3) {
            animateAboutOut();
//            animateWorksIn();
        } 
        //        else if(currentPage == 4) {
        //        animate_works_out();
        //        animate_contact_in();
        //    }
    }

    function prev_page() {
        if(currentPage - 1 > 0) {
            currentPage--;
        } else {
            currentPage = 1;
        }
        console.log('current page:'+currentPage);
    }


    //* Event Listeners

    $(window).load(function() {
        setTimeout(function() {
            animateBannerIn();
        }, 0);
    });

    $(window).bind('mousewheel DOMMouseScroll', debounce(function(e){
        console.log('scrolling detected!');

        if(tlBannerIn.isActive() || tlBannerOut.isActive() || tlAboutIn.isActive() || tlAboutOut.isActive() || tlWorksIn.isActive()) {
            console.log('tween is active');
            return false;
        } else {
            if(e.originalEvent.wheelDelta /120 > 0 ) {
                //            prev_page();
                console.log('scrolling up!');

                // Set iterator
                var current = $('.iterator.current');

                if(current.hasClass('current')) {
                    setTimeout(function(){
                        current.next().addClass('current');
                        current.removeClass('current');
                    }, 2000);
                }
            } else {
                console.log('scrolling down!');

                // Set iterator
                var current = $('.iterator.current');

                if(current.hasClass('current')) {
                    setTimeout(function(){
                        current.next().addClass('current');
                        current.removeClass('current');
                    }, 2000);
                }

                // Call next page
                next_page();
            }
        }
    }, 1000));
});