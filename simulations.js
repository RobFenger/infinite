$(document).ready(() => {
    

    //make cursor pointer to note that you can open the menu
    $('.open-collaborations').css('cursor', 'pointer');
    $('.open-transcriptions').css('cursor', 'pointer');

    //mobile-device menu control
    const x = window.matchMedia("(-webkit-min-device-pixel-ratio: 3)");
    const y = window.matchMedia("(-webkit-min-device-pixel-ratio: 2)");
    const z = window.matchMedia("(max-device-width: 812px)");
    const f = window.matchMedia("(max-device-height: 767px)");
    const a = window.matchMedia("(orientation: landscape)");

     //ipad menu control--------------------------------in development
     const b = window.matchMedia("(max-device-width: 1366px)");
     const c = window.matchMedia("(min-device-width: 768px)");
     const d = window.matchMedia("(min-device-height: 768px)");
   

    if ((x.matches || y.matches) && z.matches && f.matches) {
        $('#workmenu').hide();
        

        // $('.simulations').slideDown('slow');

    // $('.open-transcriptions').on('click', () => {
    //     $('.transcriptions').slideToggle('slow');
    //     $('.simulations').slideUp('slow');
    //     $('.collaborations').slideUp('slow');
    //     $('.open-transcriptions').find('.icon').toggleClass('rotate');
    //     $('.open-simulations').find('.icon').removeClass('rotate');
    //     $('.open-collaborations').find('.icon').removeClass('rotate');
    // })

    // $('.open-simulations').on('click', () => {
    //     $('.simulations').slideToggle('slow');
    //     $('.collaborations').slideUp('slow');
    //     $('.transcriptions').slideUp('slow');
    //     $('.open-simulations').find('.icon').toggleClass('rotate');
    //     $('.open-collaborations').find('.icon').removeClass('rotate');
    //     $('.open-transcriptions').find('.icon').removeClass('rotate');
    // })
    
    // $('.open-collaborations').on('click', () => {
    //     $('.collaborations').slideToggle('slow');
    //     $('.transcriptions').slideUp('slow');
    //     $('.simulations').slideUp('slow');
    //     $('.open-collaborations').find('.icon').toggleClass('rotate');
    //     $('.open-transcriptions').find('.icon').removeClass('rotate');
    //     $('.open-simulations').find('.icon').removeClass('rotate');
    // })

    //hide menu when scrolling down and show it when moving up
    let oldValue = 0;
    let newValue = 0;
    window.addEventListener('scroll', (e) => {
    newValue = window.pageYOffset;
    if ((oldValue + 75) < newValue) {
        $('.topMenu').slideUp('slow');
        $('#workmenu').animate({'margin-top': '0px'}, 200);
    } else if ((oldValue - 75) > newValue) {
        $('.topMenu').slideDown('slow');
        $('#workmenu').animate({'margin-top': '225px'}, 200);
    }
    oldValue = newValue;
    });
    } else if ((x.matches || y.matches) && b.matches && c.matches && d.matches) {
        //ipad menu control
        
        $('.simulations').slideDown('slow');
        $('.transcriptions').slideDown('slow');
        $('.collaborations').slideDown('slow');
 
 
        $('.open-simulations').on('click', () => {
            $('.simulations').slideToggle('slow');
            $('.open-simulations').find('.icon').toggleClass('rotate');
        })
        $('.open-transcriptions').on('click', () => {
            $('.transcriptions').slideToggle('slow');
            $('.open-transcriptions').find('.icon').toggleClass('rotate');
        })
        $('.open-collaborations').on('click', () => {
            $('.collaborations').slideToggle('slow');
            $('.open-collaborations').find('.icon').toggleClass('rotate');
        })
    } else {
        //open only simulations
    $('.simulations').slideDown('slow');
    $('.open-simulations').find('.icon').addClass('rotate');

    //open collaborations
    $('.open-collaborations').on('click', () => {
            $('.collaborations').slideToggle('slow');
            $('.transcriptions').slideUp('slow');
            $('.open-collaborations').find('.icon').toggleClass('rotate');
            $('.open-transcriptions').find('.icon').removeClass('rotate');
        })

    //open transcriptions
    $('.open-transcriptions').on('click', () => {
            $('.transcriptions').slideToggle('slow');
            $('.collaborations').slideUp('slow');
            $('.open-transcriptions').find('.icon').toggleClass('rotate');
            $('.open-collaborations').find('.icon').removeClass('rotate');
        })
    }

    

    

//    -------------------------------------------------

    //add ranodom glitch effects over the page
    const array = [
        '.title',
        '.subtitle',
        '.img1',
        '.img2',
        '.img3',
        '.random-text',
        '#Location',
        '#Materials',
        '#Software',
        'hr',
        '.open-simulations',
        '.open-transcriptions',
        '.open-collaborations',
        'h1',
        '.menuu',
        ".simulations",
        ".transcriptions", 
        ".collaborations"
    ]

    let element;

    const glitcher = (elemToRemove) => {
        removeClass(elemToRemove);
        let randIndex = Math.floor(Math.random() * array.length - 1);
        element = array[randIndex];

        // if (element === ".simulations" || element === ".transcriptions" || element === ".collaborations" ) {
        //     $(element).children('a').addClass('distort');
        // } else {
            $(element).addClass('distort');
        // }

        newGlitcher = setTimeout(glitcher, 25000, element);
    }

    const removeClass = (elemToRemove) => {
        $(elemToRemove).removeClass('distort');
    }

    startGlitcher = setTimeout(glitcher, 25000);

    
})