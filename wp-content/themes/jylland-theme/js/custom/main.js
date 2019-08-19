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

    CustomEase.create("smoothEase", "M0,0c0.2,0.6,0.1,1,1,1");

    //    $("body").niceScroll({
    //        smoothscroll: true,
    //        scrollspeed: 180,
    //        cursorcolor: "#a5486d",
    //        cursorwidth: "10px",
    //        background: "rgba(255,255,255,0.6)",
    //        cursorborder: "none",
    //    });


    // Variables

    let logoWrapBG = $('.logo-intro-bg'),
        logoIntro = $('.logo-intro'),
        scrollText = $('.scroll-text'),
        scrollLine = $('.scroll-line'),
        siteMain = $('.site-main'),
        transitionSection = $('.transition-section'),
        bannerSection = $('.banner-section'),
        siteLogo = $('.site-logo'),
        homeLogo = $('.banner-logo'),
        homeSubtitle = $('.banner-subtitle'),
        iterator = $('.iterator'),
        aboutSection = $('.about-section'),
        aboutTitle = $('.about-title-wrap'),
        aboutContainer = $('.about-container'),
        worksSection = $('.works-section'),
        worksTitle = $('.works-title-wrap'),
        workItem = $('.works-item');

    let tlIntroIn = new TimelineMax({ paused: true }),
        tlIntroOut = new TimelineMax({ paused: true }),
        tlHomeIn = new TimelineMax({ paused: true }),
        tlHomeOut = new TimelineMax({ paused: true }),
        tlAboutIn = new TimelineMax({ paused: true }),
        tlAboutOut = new TimelineMax({ paused: true }),
        tlWorksIn = new TimelineMax({ paused: true }),
        tlWorksOut = new TimelineMax({ paused: true });


    // Tweens

    tlIntroIn
        .from(logoWrapBG, 1.5, { opacity: 0, y: "-100", ease: "smoothEase" }, 0)
        .from(logoIntro, 1.5, { opacity: 0, y: "-100", ease: "smoothEase" }, 0)
        .from(scrollText, 1, { opacity: 0, ease: "smoothEase" }, 1)
        .from(scrollLine, 1, { opacity: 0, ease: "smoothEase" }, 1)
        .fromTo(logoWrapBG, 2, { scale: 1 }, { scale: 1.2, repeat: -1, repeatDelay: 0, yoyo: true }, 2)
        .fromTo(scrollLine, 1, { height: "10px" }, { height: "100px", repeat: -1, repeatDelay: 0, yoyo: true }, 0);


    tlIntroOut
        .to(siteMain, 0, { overflow: "hidden" })
        .to(logoWrapBG, 3, { scale: 20, ease: "smoothEase" })
        .to(logoIntro, 0.5, { opacity: 0, ease: "smoothEase" }, 0.5)
        .to(scrollLine, 0.5, { opacity: 0, ease: "smoothEase" }, 0.5)
        .to(scrollText, 0.5, { opacity: 0, ease: "smoothEase" }, 0.5)
        .to(transitionSection, 0.5, { opacity: 0, ease: "smoothEase" }, 1)
        .to(transitionSection, 0.5, { display: "none" });

    tlHomeIn
        .from(homeLogo, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" })
        .from(homeSubtitle, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" }, 0.2)
        .from(siteLogo, 0.7, { opacity: 0, y: "-20", ease: "smoothEase" }, 0.6)
        .staggerFrom(iterator, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" }, 0.1);

    tlHomeOut
        .to(homeSubtitle, 0.7, { opacity: 0, y: "30", ease: Power4.easeOut })
        .to(homeLogo, 0.7, { opacity: 0, y: "30", ease: Power4.easeOut }, 0.2)
        .to(bannerSection, 0.5, { display: "none" });

    tlAboutIn
        .to(aboutSection, 0, { display: "block" })
        .from(aboutTitle, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" })
        .from(aboutContainer, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" }, 0.2);

    tlAboutOut
        .to(aboutContainer, 0.5, { opacity: 0, y: "30", ease: "smoothEase" })
        .to(aboutTitle, 0.5, { opacity: 0, y: "30", ease: "smoothEase" }, 0.2)
        .to(aboutSection, 0, { display: "none" });

    tlAboutOut
        .to(aboutContainer, 0.5, { opacity: 0, y: "30", ease: "smoothEase" })
        .to(aboutTitle, 0.5, { opacity: 0, y: "30", ease: "smoothEase" }, 0.2)
        .to(aboutSection, 0, { display: "none" });

    tlWorksIn
        .to(worksSection, 0, { display: "block" })
        .from(worksTitle, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" })
        .staggerFrom(workItem, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" }, 0.1);

    // Animations

    function animateIntroIn() {
        console.log('Animating Intro In');
        currentState = 1;
        tlIntroIn.play();
    }

    function animateIntroOut() {
        console.log('Animating Intro Out');
        tlIntroIn.stop();
        tlIntroOut.play();
    }

    function animateHomeIn() {
        console.log('Animating Home In');
        tlHomeIn.play();
    }

    function animateHomeOut() {
        console.log('Animating Home Out');
        tlHomeOut.play();
    }

    function animateAboutIn() {
        console.log('Animating About In');
        tlAboutIn.play();
    }

    function animateAboutOut() {
        console.log('Animating About Out');
        tlAboutOut.play();
    }

    function animateWorksIn() {
        console.log('Animating Works In');
        tlWorksIn.play();
    }

    animateIntroIn();

    // Prev and Next State

    var currentState = 0;

    function prev_page() {
        if(currentState - 1 > 0) {
            currentState--;
        } else {
            currentState = 1;
        }
        console.log('current page:'+currentState);
    }

    function nextState() {
        if(currentState + 1 < 4) {
            currentState++;
        } else {
            currentState = 4;
        }
        console.log('currentState:'+currentState);

        if(currentState == 1) {
            animateIntroOut();

            setTimeout(function() {
                animateHomeIn();
            }, 2500);
        } else if(currentState == 2) {
            animateHomeOut();

            setTimeout(function() {
                animateAboutIn();
            }, 2500);
        } else if(currentState == 3) {
            animateAboutOut();

            setTimeout(function() {
                animateWorksIn();
            }, 2500);
        }
    }

    // Scroll Events

    $(window).bind('mousewheel DOMMouseScroll', debounce(function(e){
        console.log('scrolling detected!');

        if(tlIntroOut.isActive() 
           || tlHomeIn.isActive()
           || tlHomeOut.isActive()
           || tlAboutIn.isActive() 
           || tlAboutOut.isActive() 
           || tlWorksIn.isActive() 
           || tlWorksOut.isActive()) {

            console.log('Animation is active');
            return false;

        } else {

            if(e.originalEvent.wheelDelta / 120 > 0) {
                console.log('scrolling up!');

                var current = $('.iterator.current');

            } else {

                console.log('scrolling down!');

                if(currentState >= 1) {
                    var current = $('.iterator.current');

                    if(current.hasClass('current')) {
                        setTimeout(function(){
                            current.next().addClass('current');
                            current.removeClass('current');
                        }, 2000);
                    }
                }

                nextState();
            }
        }
    }, 1000));

    workItem.on('mouseenter', function() {
        let workHighlight = $(this).find('.works-border');
        TweenMax.fromTo(workHighlight, 1, { width: 0 }, { width: "100px" });
    });

    workItem.on('click', function() {
        let workID = $(this).attr('id'),
            workDetail = $('#work-'+workID),
            workDetailTitle = workDetail.find('.work-detail-title'),
            workTypeLabel = workDetail.find('.type-label'),
            workTypeList = workDetail.find('.type-list'),
            workRoleLabel = workDetail.find('.role-label'),
            workRoleList = workDetail.find('.role-list'),
            workDetailLink = workDetail.find('.work-detail-link'),
            workDetailImage = workDetail.find('.work-image'),
            workTransition = $('.work-transition'),
            tlWorkTransition = new TimelineMax({ paused: true });

        console.log('work detail: #work-'+workID);

        tlWorkTransition
            .to(workTransition, 0, { display: "block" })
            .fromTo(workTransition, 1, { top: "-100vh" }, { top: "0", ease: "smoothEase" }, 0.2)
            .to(workDetail, 1, { height: "100vh", display: "block", ease: "smoothEase" }, 0.4)
//            .from(workDetailTitle, 0.5, { y: "-50", ease: "smoothEase" }, 0.5)
//            .from(workTypeLabel, 0.5, { y: "-50", ease: "smoothEase" }, 0.7)
//            .from(workTypeList, 0.5, { y: "-50", ease: "smoothEase" }, 0.7)
//            .from(workRoleLabel, 0.5, { y: "-50", ease: "smoothEase" }, 0.7)
//            .from(workRoleList, 0.5, { y: "-50", ease: "smoothEase" }, 0.7)
//            .from(workDetailLink, 0.5, { y: "-50", ease: "smoothEase" }, 0.7)
            .staggerFrom(workDetailImage, 0.5, { y: "-20", ease: "smoothEase" }, 0.1);

        tlWorkTransition.play();

        setTimeout(function() {
            $('body').addClass('work-detail-body');
        }, 1000);
    });

});