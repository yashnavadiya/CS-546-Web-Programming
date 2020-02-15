$("#butt").click(function () {
    event.preventDefault();
    var num = $('#inputvalue').val();
    if (!num) {
        alert("Enter a number")
    }
    a = parseInt(num);
    var i, flag = true;
    n = parseInt(num);
    if (a > 1) {
        for (i = 2; i <= a - 1; i++) {
            if (a % i == 0) {
                flag = false;
                break;
            }
        }
    }
    else {
        flag = false;
    }
    if (flag == true) {
        $('#attempts').append("<li class='is-prime'>" + a + " is a prime number</li>");
    }
    else {
        $('#attempts').append("<li class='not-prime'> " + a + " is NOT a prime number</li>");
    }
});