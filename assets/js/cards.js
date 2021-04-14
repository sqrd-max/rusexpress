function showCard(e){
    $('.section_loaded').addClass('section_hidden').removeClass('section_loaded');
    $('.clicked').removeClass('clicked').addClass('noneclicked');
    let target= e.currentTarget;
    let currentCard=$(target).prop("id").split('#');
    cardName=currentCard[0];
    toShowCard = $('.'+cardName);
    console.log(currentCard);
    toShowCard.removeClass('section_hidden').addClass('section_loaded');
    $('#'+cardName).removeClass('noneclicked').addClass('clicked');
}
$('#main__cooperation-cards-1').on("click",function(e){
    showCard(e);
});
$('#main__cooperation-cards-2').on("click",function(e){
    showCard(e);
});
$('#main__cooperation-cards-3').on("click",function(e){
    showCard(e);
});
$('#main__cooperation-cards-4').on("click",function(e){
    showCard(e);
});



