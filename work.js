$(document).ready(function() {
    var link = "http://158.108.165.223/data/AssassinZEED/people";

document.getElementById('n-person').innerHTML = "สิ่งที่รับ"ว

var enter = function() {

    var message = $('#person').val();
    // console.log(message);

    $.ajax({
        url: link + "set/" + message
    }).done(function() {
      console.log(message);
      $('#textBox').append('<div class="rightM">' + message+ '</div>' + "<br>");
        console.log("successful");
    }).fail(function() {
        console.error("something wrong");

    });
}
