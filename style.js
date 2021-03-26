$(document).ready(function() {

    $("a[href='#scrollUp']").click(function() {
        $(window).scrollTop(0);
    });
    $(function() {
        $('.disable').click(function() {
            if ($(this).is(':checked')) {
                $('.button').removeAttr('disabled');
            } else {
                $('.button').attr('disabled', 'disabled');
            }
        });
        $(".colorChange").click(function() {
            $(".change").css("background-color", "green")
        })
    });


    $('#input').keypress(function() {
        $("#span").html(14 - $(this).val().length)
        $("#reflect").html($(".input").val())
    })

    $(".add").click(function() {
        $("#selector").html($(".input").val())
    })
    $(".add").click(function() {
        $('#selectorOption').append('<option>' + $('#input').val() + '</option>');

    })

    $(".rev").click(function() {
        $('#selectorOption option:selected').remove();

    })

    $(".greet").click(function() {
        $(this).html($(this).html() == "Good Morning" ? "Good Evening" : "Good Morning");
    })

    $('#int').bind('keyup', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $(".animates").click(function() {
        $(".anim").animate({
            width: "70%",
            opacity: "0.4",
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 5000)

    })

    $(".up").click(function() {
        $(".box").animate({
            'top': '-=150px'
        })
    })

    $(".down").click(function() {
        $(".box").animate({
            'top': '+=150px'
        })
    })

    $(".left").click(function() {
        $(".box").animate({
            'left': '-=150px'
        })
    })
    $(".right").click(function() {
        $(".box").animate({
            'left': '+=150px'
        })
    })

})