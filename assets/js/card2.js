$('#main__order-cards-1').on("click",function(e){
    showCard2(e);
});
$('#main__order-cards-2').on("click",function(e){
    showCard2(e);
});
$('#main__order-cards-3').on("click",function(e){
    showCard2(e);
});
$('#main__order-cards-4').on("click",function(e){
    showCard2(e);
});
function showCard2(e){
    $('.section2_loaded').addClass('section2_hidden').removeClass('section2_loaded');
    $('.clicked2').removeClass('clicked2').addClass('noneclicked2');
    let target= e.currentTarget;
    let currentCard2=$(target).prop("id").split('#');
    cardName=currentCard2[0];
    toShowCard = $('.'+cardName);
    console.log(currentCard2[0]);
    toShowCard.removeClass('section2_hidden').addClass('section2_loaded');
    $('#'+cardName).removeClass('noneclicked2').addClass('clicked2');
}
