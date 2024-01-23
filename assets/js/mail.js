$("#sendMail").on("click", function() {
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();
    
    if(name == "") {
        $("#errorMess").text("Введите Имя");
        return false;
    } else if(email == "") {
        $("#errorMess").text("Введите email");
        return false;
    } else if(phone == "") {
        $("#errorMess").text("Введите телефон");
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: 'assets/ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(data == false){
                    alert("Возникла ошибка, проверьте правильность заполнения обязательных полей и повторите попытку!")
            }else {
                $("#mailForm").trigger("reset");
            $("#sendMail").prop("disabled", false);
            }
        }
    });

});