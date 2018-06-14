( function ($) {
    $.fn.doubleclickMenu = function( options ) {
        /**
         * Setting
         * @type object
         */
        var settings = $.extend( {
            submenuContainer : '.dropdown-menu', /* Container of submenu */
            hamburgerMenu    : '.navbar-toggler', /* Hamburger menu */
            closeButton      : 'Close' /* Close button */
        }, options );
    
        /**
         * Get the selected element
         * @type object
         */
        var selector = $( this );

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            selector.on( 'click', function( e ) {
                /* Get the parent */
                var container_element = $( this ).parent();

                /* First click */
                if ( ! container_element.hasClass( '__first_click' ) ) {
                    /* Prevet to go the link */
                    e.preventDefault();

                    /* Add class to determine that is a first click */
                    container_element.addClass( '__first_click' );

                    /**
                     * Append a close button, to minimize the submenu
                     * and slide down the submenu to show it
                     */
                    $( settings.submenuContainer, container_element ).append( '<span class="__close_submenu">'+ settings.closeButton +'</span>' ).slideDown( function() {
                        /**
                         * Remove the class __first_click to run again
                         * the showing of submenu, because the hamburger
                         * menu of bootstrap automatically hide the submenu
                         * when it is triggered
                         */
                        $( settings.hamburgerMenu ).on( 'click', function() {
                            container_element.removeClass( '__first_click' );
                        } );

                        /* Close the submenu */
                        $( '.__close_submenu', container_element ).on( 'click', function() {
                            /* Slide up the submenu */
                            $( settings.submenuContainer, container_element ).slideUp( function() {
                                /* Remove the close button */
                                $( '.__close_submenu', container_element ).remove();

                                /* Remove this class to initialize this code  */
                                container_element.removeClass( '__first_click' );
                            } );
                        } );
                    } );
                }
            } );
        }
    };
} ( jQuery ) );