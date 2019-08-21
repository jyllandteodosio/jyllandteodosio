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
        workItem = $('.works-item'),
        contactSection = $('.contact-section'),
        contactTitle = $('.contact-title-wrap'),
        contactContainer = $('.contact-container'),
        contactSocial = $('.contact-social');

    let tlIntroIn = new TimelineMax({ paused: true }),
        tlIntroOut = new TimelineMax({ paused: true }),
        tlHeaderIn = new TimelineMax({ paused: true }),
        tlHomeIn = new TimelineMax({ paused: true }),
        tlHomeOut = new TimelineMax({ paused: true }),
        tlAboutIn = new TimelineMax({ paused: true }),
        tlAboutOut = new TimelineMax({ paused: true }),
        tlWorksIn = new TimelineMax({ paused: true }),
        tlWorksOut = new TimelineMax({ paused: true }),
        tlContactIn = new TimelineMax({ paused: true }),
        tlContactOut = new TimelineMax({ paused: true });


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

    tlHeaderIn
        .from(siteLogo, 0.7, { opacity: 0, y: "-20", ease: "smoothEase" }, 0.6)
        .staggerFrom(iterator, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" }, 0.1);

    tlHomeIn
        .to(bannerSection, 0, { display: "block" })
        .from(homeLogo, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" })
        .from(homeSubtitle, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" }, 0.2);

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

    tlWorksOut
        .to(workItem, 0.5, { opacity: 0, y: "30", ease: "smoothEase" })
        .to(worksTitle, 0.5, { opacity: 0, y: "30", ease: "smoothEase" }, 0.2)
        .to(worksSection, 0, { display: "none" });

    tlContactIn
        .to(contactSection, 0, { display: "block" })
        .from(contactTitle, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" })
        .from(contactContainer, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" }, 0.2)
        .from(contactSocial, 0.5, { opacity: 0, y: "-20", ease: "smoothEase" }, 0.4);

    tlContactOut
        .to(contactSocial, 0.5, { opacity: 0, y: "30", ease: "smoothEase" })
        .to(contactContainer, 0.5, { opacity: 0, y: "30", ease: "smoothEase" }, 0.2)
        .to(contactTitle, 0.5, { opacity: 0, y: "30", ease: "smoothEase" }, 0.4)
        .to(contactSection, 0, { display: "none" });

    // Animations

    function animateIntroIn() {
        //        console.log('Animating Intro In');
        currentState = 1;
        tlIntroIn.play(0);
    }

    function animateIntroOut() {
        //        console.log('Animating Intro Out');
        tlIntroIn.stop();
        tlIntroOut.play(0);
    }

    function animateHeaderIn() {
        //        console.log('Animating Header In');
        tlHeaderIn.play(0);
    }

    function animateHomeIn() {
        //        console.log('Animating Home In');
        tlHomeIn.play(0);
    }

    function animateHomeOut() {
        //        console.log('Animating Home Out');
        tlHomeOut.play(0);
    }

    function animateAboutIn() {
        //        console.log('Animating About In');
        tlAboutIn.play(0);
    }

    function animateAboutOut() {
        //        console.log('Animating About Out');
        tlAboutOut.play(0);
    }

    function animateWorksIn() {
        //        console.log('Animating Works In');
        tlWorksIn.play(0);
    }

    function animateWorksOut() {
        //        console.log('Animating Works Out');
        tlWorksOut.play(0);
    }

    function animateContactIn() {
        //        console.log('Animating Contact In');
        tlContactIn.play(0);
    }

    function animateContactOut() {
        //        console.log('Animating Contact Out');
        tlContactOut.play(0);
    }


    animateIntroIn();

    // Prev and Next State

    var currentState = 0;
    var workDetailState = 0;

    function prevState() {
        if(currentState - 1 > 0) {
            currentState--;
        } else {
            currentState = 1;
        }
        console.log('current page:'+currentState);

        if(currentState == 1) {
            animateAboutOut();

            setTimeout(function() {
                animateHomeIn();
            }, 2500);
        } else if(currentState == 2) {
            animateWorksOut();

            setTimeout(function() {
                animateAboutIn();
            }, 2500);
        } else if(currentState == 3) {
            animateContactOut();

            setTimeout(function() {
                animateWorksIn();
            }, 2500);
        }
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
                animateHeaderIn();
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
        } else if(currentState == 4) {
            animateWorksOut();

            setTimeout(function() {
                animateContactIn();
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
           || tlWorksOut.isActive() 
           || tlContactIn.isActive() 
           || tlContactOut.isActive() 
           || workDetailState == 1) {

            console.log('Animation is active');
            return false;

        } else {

            if(e.originalEvent.wheelDelta / 120 > 0) {
                console.log('scrolling up!');

                if(currentState >= 1) {
                    var current = $('.iterator.current');

                    if(current.hasClass('current')) {
                        setTimeout(function(){
                            current.prev().addClass('current');
                            current.removeClass('current');
                        }, 2000);
                    }
                }

                prevState();

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
        workDetailState = 1;

        let workID = $(this).attr('id'),
            workDetail = $('#work-'+workID),
            workDetailNav = workDetail.find('.work-detail-nav'),
            workDetailContainer = workDetail.find('.work-detail-container'),
            workDetailImage = workDetail.find('.work-detail-image'),
            workTransition = $('.work-transition');

        //        console.log('work detail: #work-'+workID);

        workDetail.addClass('active-work');

        TweenMax.to(workTransition, 0, { display: "block" });
        TweenMax.to(workTransition, 1, { top: "0", ease: "smoothEase", delay: 0.5 });
        TweenMax.to(workDetail, 2, { top: "0", ease: "smoothEase", delay: 0.7 });

        setTimeout(function() {
            $('#work-'+workID).niceScroll({
                smoothscroll: true,
                scrollspeed: 180,
                cursorcolor: "#a5486d",
                cursorwidth: "10px",
                background: "rgba(255,255,255,0.6)",
                cursorborder: "none",
            });
        }, 2500);
    });

    $('.works-back').on('click', function(e) {
        e.preventDefault();
        workDetailState = 0;

        let workTransition = $('.work-transition'),
            activeWorkDetail = $('.work-detail.active-work');

        TweenMax.to(activeWorkDetail, 2, { top: "100vh", ease: "smoothEase", delay: 0.5 });
        TweenMax.to(workTransition, 1, { top: "100vh", ease: "smoothEase", delay: 0.7 });
        TweenMax.to(workTransition, 0, { display: "none", delay: 1 });

        setTimeout(function() {
            activeWorkDetail.removeClass('active-work');
        }, 3000);

    });

    $('.iterator').on('click', function(e) {
        e.preventDefault();
        $('.iterator').removeClass('current');

        let newState = $(this).attr('data-state');

        console.log('Getting current state: ' + currentState);
        console.log('Getting next state: ' + newState);

        switch (currentState) {
            case 1:
            case '1':
                animateHomeOut();
                break;
            case 2: 
            case '2': 
                animateAboutOut();
                break;
            case 3: 
            case '3': 
                animateWorksOut();
                break;
            case 4: 
            case '4': 
                animateContactOut();
                break;
            default: 
                console.log('default');
        }

        setTimeout(function() {
            switch (newState) {
                case 1:
                case '1':
                    animateHomeIn();
                    currentState = 1;
                    $('.iterator-banner').addClass('current');
                    break;
                case 2: 
                case '2': 
                    animateAboutIn();
                    currentState = 2;
                    $('.iterator-about').addClass('current');
                    break;
                case 3: 
                case '3': 
                    animateWorksIn();
                    currentState = 3;
                    $('.iterator-works').addClass('current');
                    break;
                case 4: 
                case '4': 
                    animateContactIn();
                    currentState = 4;
                    $('.iterator-contact').addClass('current');
                    break;
                default: 
                    console.log('default');
            }
        }, 2500);

    });

});