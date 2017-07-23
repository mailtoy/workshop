
$(document).ready(function() {

    var person = document.getElementById('n-person').innerHTML;
    var url_map = {
        person: "http://158.108.165.223/data/assasinZeed/people/"
    }

    var url_map2 = {
        test: "http://158.108.165.223/data/assasinZeed/a/",
    }

    setInterval(function() {
            for (var i in url_map) {
                $.ajax({
                    url: url_map[i]
                }).done(function(data) {
                    //  $("body").append(data + "<br/>");
                    document.getElementById('n-person').innerHTML = data;
                }).fail(function(data) {
                    console.error(data);
                });
            }
            for (var i in url_map2) {
                $.ajax({
                    url: url_map2[i]
                }).done(function(data) {
                    move(data);
                }).fail(function(data) {
                    console.error(data);
                });
            }
        },
        1 * 1000);
});

var enter = function() {

}

/** temperature **/
var temperature = 0;

function move(temp) {
    temp = parseInt(temp);
    // console.log("int" + (temp-1));
    if (temperature != temp) {
        var elem = document.getElementById("myBar");
        width = elem.style.width.substring(0, elem.style.width.length - 1);
        var frame = function() {
            if (width >= 100 || width == temp) {
                clearInterval(id);
            } else if (width > temp) {
                width--;
                elem.style.width = width + '%';
                elem.innerHTML = width + '°C';
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width + '°C';
            }
        }
        var id = setInterval(frame, 10);
        temperature = temp;
    }
}
/** end of temperature **/

//button
function person() {

    console.log("pass")
    var $temp = $('#myonoffswitch')
    console.log($temp)
    if (document.getElementById('myonoffswitch').checked) {
        $('#myonoffswitch').toggle(!this.checked);
        console.log("1");
        send_message();
    } else {
        $('#myonoffswitch').toggle(this.checked);
        console.log("2");
        send_message();
    }
}
var send_message = function() {
  var link = "http://158.108.165.223/data/assasinZeed/peopleison/";
    $.ajax({
        url: link + "set/" + "false"
    }).done(function() {
        console.log("Success");
    }).fail(function() {
        console.log("Fail");
    });

}
