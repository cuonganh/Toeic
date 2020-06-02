var character = 200 ;

$(document).ready(function(){
    $('#character').html("200");
    $("#questionInput").keyup(function(){
        $("#character").html(200 - $("#questionInput").val().length);
    });
})
