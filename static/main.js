$(function() {

    $(document).on('click', '.btn-fire', function() {

        var $K = parseInt($('[name="K"]').val().trim()),
            $M = parseInt($('[name="M"]').val().trim());

        if(typeof $K == 'number' && typeof $M == 'number') {
            $.ajax({
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                url: "/chipsincells.php",
                data: { K : $K, M : $M },
                beforeSend: function() {
                    $("#result").html('<p style="color:darkgray; font-size: 14px;">Ждемс...</p>');
                },
                success: function (result) {
                    $("#result").html('<p style="color:green;">'+ result['message'] +'</p>');
                },
                error: function( req, status, err ) {
                    $("#result").html('<p style="color:red;">Блин(: Запрос завершится в фоне. Если нужны потоки, отпишите!</p>');
                }
            });
        } else {
            $("#result").html('<p>Введите валидные значения K и N</p>');
        }


    });

    $(document).on('click', '.btn-clean', function() {
        $('[name="K"]').val('');
        $('[name="M"]').val('');
    });

})