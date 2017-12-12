$(document).ready(function(){ 
    $('#characterLeft').text('*240 characters left');
    $('#message').keydown(function () {
        var max = 240;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('*You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#submit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#submit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });
    
    
});

function greeting(form) {
     
    alert("Thank you! We have received your message and will contact shortly!");
    return true;
}