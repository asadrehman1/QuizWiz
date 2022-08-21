const questions = [
    {
        'que': "Which one is the markup language?",
        'a': "HTML",
        'b': "CSS",
        'c': "JavaScript",
        'd': "PHP",
        'correct': 'a'
    },
    {
        'que': "What does CSS stands for?",
        'a': "Hypertext markup language",
        'b': "Cascading style sheet",
        'c': "JavaScript object notation",
        'd': "None of these",
        'correct': 'b'
    },
    {
        'que': "In which year JavaScript was invented?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "None of the above",
        'correct': 'b'
    },
    {
        'que': "What is the boiling point of water?",
        'a': "50°C",
        'b': "150°C",
        'c': "100°C",
        'd': "200°C",
        'correct': 'c'
    },
    {
        'que': "Which fruit is associated with Issac Newton?",
        'a': "Apple",
        'b': "Pear",
        'c': "Pineapple",
        'd': "banana",
        'correct': 'a'
    },
    {
        'que': "What is the capital of Australia?",
        'a': "Sydney",
        'b': "Melbourne",
        'c': "Brisbane",
        'd': "Canberra",
        'correct': 'd'
    }
]
const btn = document.querySelector("button");
const labels = document.querySelectorAll("label");
const question = document.querySelector("h2")
const inputs = document.querySelectorAll("input")
const inner = document.querySelector(".inner")

question.innerText = questions[0].que
labels[0].innerText = questions[0].a
labels[1].innerText = questions[0].b
labels[2].innerText = questions[0].c
labels[3].innerText = questions[0].d


let score = 0;
let index = 0;

btn.addEventListener("click", () => {
    if (index <= 5) {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                if (inputs[i].value === questions[index].correct) {
                    score++;
                }
            }
        }
        index++;
        if (index > 5) {
            inner.innerHTML = `<h2> Thanks for playing the quiz :)</h2>`
            inner.innerHTML += `<h2> Your score is ${score} !</h2>`
            inner.style.textAlign = "center"
        }
        else {
            question.innerText = questions[index].que
            labels[0].innerText = questions[index].a
            labels[1].innerText = questions[index].b
            labels[2].innerText = questions[index].c
            labels[3].innerText = questions[index].d
            reset();
        }
    }
})

const reset = () => {
    inputs.forEach((input) => {
        input.checked = false;
    })
}