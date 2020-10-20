// script for navbar toggle button (currently unused)

$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });
    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
    });
});