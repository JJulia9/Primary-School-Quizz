
//global variables for functions. Using dom manipulation to get elements from each quiz.html
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let countdown;


//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "What should you do if someone is being bullied?",
        options: ["Join in and make fun of them too", "Ignore it and walk away", "Tell an adult or someone you trust", "Take a photo or video of the bullying and share it online"],
        correct: "Tell an adult or someone you trust",
        },
        {
        id: "1",
        question: "What is the best way to make new friends?",
        options: ["Tease them", "Be kind and friendly", "Ignore them", "Be mean to them"],
        correct: "Be kind and friendly",
        },
        {
        id: "2",
        question: "What is the importance of being honest?",
        options: ["It makes you popular", "It can hurt others' feelings", "It builds trust and respect", "It is not important"],
        correct: "It builds trust and respect",
        },
        {
        id: "3",
        question: "What should you do if you find a lost item at school?",
        options: ["Keep it for yourself", "Return it to its owner or give it to a teacher", "Sell it for money", "Throw it away"],
        correct: "Return it to its owner or give it to a teacher",
        },
        {
        id: "4",
        question: "What should you do if you find a lost item in the park?",
        options: ["Keep it for yourself", "Return it to its owner or give it to a park ranger", "Sell it for money", "Throw it away"],
        correct: "Return it to its owner or give it to a park ranger",
    },
    
];

//   checkCookie();
 showName();


//when user click on start button
function startQuiz() {
    startScreen.classList.add("hide");//hidding the start-sceen from html and showing section with questions
    displayContainer.classList.remove("hide");
    initial(); // call the function which start the quiz
  } 

  startButton.addEventListener("click", startQuiz);
  




//initial setup
function initial() {
    document.getElementById("container").innerHTML = ""; //place where all question are displayed, used dom manipulation to get it
    //give for var a value
    questionCount = 0;
    scoreCount = 0;
    count = 5;
    //calling a funcrions
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
    
}




//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);


    //generate quiz using a loop
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);


        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");


        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";



        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);




        //dynamically adds buttons to a div element and assigns a click event listener to each button that calls the checker function with the clicked button element as an argument. The text displayed on each button is taken from the options array of an object i.
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}






//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + "<br>" + scoreCount + "/" + questionCount;
                if(scoreCount<3){
                    document.getElementById("resultPic").src = "images/sad.svg";

                }
              


        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 6;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);



//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options after choosing the answer
    options.forEach((element) => {
        element.disabled = true;
    });
}



//Timer
const timerDisplay = () => {
    count = 60;
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};


//hide quiz and 
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};


//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};





//come back home
function openHomePage(){
    window.location.href = "home.html";
}







