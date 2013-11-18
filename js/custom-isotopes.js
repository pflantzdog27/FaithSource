(function($){})(window.jQuery);
$(document).ready(function (){

    var $container = $('#isotopes-container');
    filters = {};
    $container.imagesLoaded( function(){
        $container.isotope({
            itemSelector : '.expert-excerpt',
            layoutMode : 'masonry',
            fliter : '*',
            getSortData : {
                position : function ( $elem ) {
                    return $elem.attr('rel');
                }
            },
            sortBy : 'random'
        });
    });

    //filtering
    $('.dropdown-menu li a').click(function(e){
        var $this = $(this);
        if ( $this.hasClass('selected') ) {
            e.preventDefault();
            return;
        }
        var $optionSet = $this.parents('.dropdown-menu');
        console.log($optionSet)
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        $optionSet.prev('.dropdown-toggle').html($this.text()+'<span class="caret"></span>');
        $optionSet.parent('.dropdown').removeClass('open');

        var group = $optionSet.attr('data-filter-group');
        filters[ group ] = $this.attr('data-filter-value');
        var isoFilters = [];
        for ( var prop in filters ) {
            isoFilters.push( filters[ prop ] )
        }
        var selector = isoFilters.join('');
        $container.isotope({ filter: selector });
        return false;
    });

});
