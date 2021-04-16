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

$('#main__contacts-block1').on("click",function(e){
    showCard3(e);
});
$('#main__contacts-block2').on("click",function(e){
    showCard3(e);
});
$('#main__contacts-block3').on("click",function(e){
    showCard3(e);
});

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

function showCard3(e){
    $('.section3_loaded').addClass('section3_hidden').removeClass('section3_loaded');
    $('.clicked2').removeClass('clicked2').addClass('noneclicked2');
    let target= e.currentTarget;
    let currentCard2=$(target).prop("id").split('#');
    cardName=currentCard2[0];
    toShowCard = $('.'+cardName);
    console.log(currentCard2[0]);
    toShowCard.removeClass('section3_hidden').addClass('section3_loaded');
    $('#'+cardName).removeClass('noneclicked2').addClass('clicked2');
}




