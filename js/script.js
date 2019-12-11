/*=====================================================
|  |  |  |    Preloader
======================================================== */
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
/*=====================================================
|  |  |  |    Team
======================================================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});

/*=====================================================
|  |  |  |    Progress Bar
======================================================== */
$(function() {
    $("#progress-elements").waypoint(function() {
        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
       offset: 'bottom-in-view'
    });
}); 

/*=====================================================
|  |  |  |    Responsive Tabs
======================================================== */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*=====================================================
|  |  |  |    Portfolio
========================================================*/
$(window).on('load', function () {

    //Initialize Isotope
    $("#isotope-container") .isotope

    //filter items on button click
    $("#isotope-filters").on('click', 'button', function() {

         //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*=====================================================
|  |  |  |    Magnifier
========================================================*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=====================================================
|  |  |  |    Testimonials
========================================================*/
$(function () {
    $("#testimonial-slider") .owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});

/*=====================================================
|  |  |  |    Stats
========================================================*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time:2000
    });
});

/*=====================================================
|  |  |  |  Clients  
========================================================*/
$(function () {
    $("#clients-list") .owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});

/*=====================================================
|  |  |  |    Google Map
========================================================*/
/*$(window).on('load', function () {
    // Map Variables
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {lat: 40.712685, lng: -74.005920};
    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center:myLatlng
    });
    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map;
        title: "Click To See Address"
      });
    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });
    // Show info window when user clicks marker
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
});*/

/*==============================================
|   |    |  Navigation
==============================================*/
/* Show & Hide White Navigation */
$(function () {
    $(window).scroll(function (){
        if( $(window).scrollTo() > 50) {
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
        }

    });

});



















 




















