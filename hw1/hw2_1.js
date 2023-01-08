// Homework from JavaScriptDeveloper

let messages = ["Пойдем гулять в парк?",
    "Кажется, дождь собирается. Лучше пойдем в кино!",
    "Давай, сегодня как раз вышел новый фильм.",
    "Встречаемся через час у кинотеатра."];

for (let i = 0; i < messages.length; i++) {
    if (i%2 === 0) {
        console.log("Friend: " + messages[i])
    }
    else {
        console.log("You: " + messages[i])
    }
}