// header side items - mouse hover highlighter
$(document).ready(function() {
    $("#header-items-side a").hover (
        function () {
            $(this).css({
                "color": "rgb(140, 30, 30)",
                "font-weight": "bold",
                "border-bottom-style": "solid"
            });
        },
        function () {
            $(this).css({
                "color": "rgb(30, 30, 30)",
                "font-weight": "normal",
                "border-bottom-style": "none"
            });
        }
    )
})


// header top menu - open menu items
$(document).ready(function() {
    $(".menu-icon").click(function() {
        $(this).hide();
        $(".menu-icon-close").show();
        $(".menu-wrapper").fadeIn();        
    })
})

// header top menu - close menu items
$(document).ready(function() {
    $(".menu-icon-close").click(function() {
        $(this).hide();
        $(".menu-icon").show();
        $(".menu-wrapper").fadeOut();
    })
})


// header top items - mouse hover highlighter
$(document).ready(function() {
    $(".menu-wrapper a").hover (
        function () {
            $(this).css({
                "color": "rgb(180, 10, 10)",
                "font-weight": "bold"
            });
        },
        function () {
            $(this).css({
                "color": "rgb(230, 230, 230)",
                "font-weight": "normal"
            });
        }
    )
})