function getCategory(ident) {
    switch (ident) {
        case "2":
            return "Отзыв";
        case "3":
            return "Предложение";
        case "4":
            return "Жалоба";
        default:
            return "Без категории";
    }
}

function writeToJSON(...data) {
    JSON.stringify(data);
}

function commentAction() {
    if (comment_topic.value != "" &&
        comment_message.value != "" &&
        comment_email.value != "" &&
        question.value != "1") {
        data = {
            category: getCategory(question),
            topic: comment_topic.value,
            message: comment_message.value,
            email: comment_email.value,
            date: new Date()
        }
    } else {
        comment_error.innerHTML = 'Все поля должны быть заполнены!';
    }


}