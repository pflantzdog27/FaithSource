(function($){})(window.jQuery);
$(document).ready(function (){
    submitted = false;

    // scrollTo Nav
    $('#main-nav ul li').click(function(e) {
        e.preventDefault();
        var pagePosition = $(this).children('a').attr('href');
        var elementOffset = $(pagePosition).offset().top;
        $('#main-nav ul li').removeClass('active');
        $('body').scrollTo(elementOffset - 70, 800 );
        $(this).addClass('active');
    });

    // scale auburn home nav on scroll
    if($('#content-home').length > 0 && $(window).width() >= 768) {
        var scrollorama = $.scrollorama({
            blocks:'#header-container',
            enablePin: false
        });
        scrollorama.animate('#auburn-header',{ duration: 100, property:'height', end: 25 });
        scrollorama.animate('#auburn-logo',{ duration: 100, property:'zoom', end:.25 });
        scrollorama.animate('#auburn-logo',{ duration: 100, property:'margin-top', end:'-37px' });
        scrollorama.animate('#auburn-header span',{duration: 100, property:'opacity', end:1 })
        scrollorama.animate('#main-nav li',{duration: 100, property:'padding-bottom', start: 85, end:5 })
    }

    // bootstrap dropdown menu
    $('.dropdown-toggle').dropdown()
    $('.dropdown-menu').width($('.dropdown').width());

    // attach correct voice to form
    $('#book-button').click(function() {
        var expert = $('header h2').text();
        console.log(expert)
        $('#contact-voice').val(expert);
    })

    // email form
    $('#hidden_iframe').load(function(){
        if(submitted = true){
            $('.alert').fadeIn(300,function() {
                $(this).removeClass('alert-warning').addClass('alert-success').text('Thanks for contacting us. We\'ll be getting back to you shortly.').fadeIn(500);
            })
        }
    });

    // FAQ Slide Toggle
    toggleFAQ();

    // Mobile Menu
   mobileMenu();
});

$(window).scroll(function() {

});

/*function sectionChunk(element,pathTrain,content,callbackFunction){
    var fnSettings;
    fnSettings = {
        catcher: element,
        path: pathTrain,
        contentBlock: content,
        callback : function() {
            if(!callbackFunction) {
                return false;
            } else {
                 callbackFunction.call();
            }
        }
    };
    loadRequest( fnSettings );
}
function loadRequest( settings ) {
    $(settings.catcher).load( settings.path+settings.contentBlock, settings.callback);
}*/


function toggleFAQ() {
    $('.panel-heading:odd').addClass('odd-faq');
    $('.panel-heading').click(function() {
       var icon = $(this).children('span');
       var parent = $(this).parent('.panel');
       var answer = parent.children('.panel-body');
        answer.slideToggle(300);
        if(icon.hasClass('glyphicon-plus')) {
            icon.removeClass('glyphicon-plus').addClass('glyphicon-minus');
        } else {
            icon.removeClass('glyphicon-minus').addClass('glyphicon-plus');
        }
    })
}

function mobileMenu() {
    $('#mobile-menu').click(function() {
        $('#main-nav ul').slideToggle(600);
        if($('#mobile-menu').hasClass('glyphicon-chevron-down')) {
            $(this).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        } else {
            $(this).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        }
    })
}


