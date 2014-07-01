
<<<<<<< HEAD
=======

    $(document).ready(function() {
        $(".fancybox").fancybox();

        $(".link").fancybox();

        $('#smart ul li').click(function(){
            var srcLink = $(this).attr('data-src');
            $('.gallery .bigImage img').attr('src', srcLink);
        });




});
>>>>>>> origin/master
