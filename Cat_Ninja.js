    $(document).ready(function() {



        $("img").click(function() {
            $(this).attr("src", $(this).attr("data-alt-src"));


        });




    });

    $(document).ready(function() {
        $('button').click(function() {
            for (var i = 0; i <= 4; i++) {
                $('#container').append('<img src=cat/png/' + i + '.png/>');
            }
        })
    });