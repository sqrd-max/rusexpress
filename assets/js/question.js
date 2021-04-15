$(document).ready(function(){
    $('h3').click(function(){
        var p = $(this).next().css('display')
        if(p=='none'){
            $(this).next().slideDown(500);
        }
        else{
            $(this).next().slideUp(500);
        }
    })
});