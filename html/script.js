const QSection = document.getElementById("QSection");
const status = document.getElementById("status");
const navbuttons = document.getElementById("navbuttons");
const prevBut = document.getElementById("prev");
const nextBut = document.getElementById("next");
const email_address = document.getElementById("email_address");
const CommentName = document.getElementById("CommentName");
const CommentEmail = document.getElementById("CommentEmail");
const Comment = document.getElementById("Comment");
const CommentStatus = document.getElementById("CommentStatus");
const peopleCount1 = document.getElementById("peopleCount1");
const peopleCount2 = document.getElementById("peopleCount2");
const peopleCount3 = document.getElementById("peopleCount3");
const peopleCount4 = document.getElementById("peopleCount4");

var questions = [
    {
        "Q": "1. What is your age?",
        "options": ["0-19", "20-35", "36-60"],
        "values": ["1", "3", "2"],
        "name": "age"
    },
    {
        "Q": "2. Do you have a family history of mental illness?",
        "options": ["Yes", "No"],
        "values": ["1", "0"],
        "name": "family"
    },
    {
        "Q": "3. Have you ever sought treatment for a mental health disorder from a mental health professional?",
        "options": ["Yes", "No"],
        "values": ["1", "0"],
        "name": "taking_help"
    },
    {
        "Q": "4. Do you know the options for mental health care available online?",
        "options": ["Yes", "No"],
        "values": ["1", "0"],
        "name": "online_help"
    },
    {
        "Q": "5. Have you ever experienced an ‘attack’ of fear, anxiety, or panic?",
        "options": ["Yes", "No"],
        "values": ["1", "0"],
        "name": "experienced_attack"
    },
    {
        "Q": "6. Do you ever feel that you’ve been affected by feelings of edginess, anxiety, or nerves?",
        "options": ["Yes", "No"],
        "values": ["1", "0"],
        "name": "feelings"
    },
    {
        "Q": "7. How would you describe your appetite over the past 4 weeks?",
        "options": ["Very Good", "Good", "Bad", "Very Bad"],
        "values": ["0", "1", "2", "3"],
        "name": "appetite"
    },
    {
        "Q": "8. How often during the past 1 months have you felt as though your moods, or your life, were under your control?",
        "options": ["sometimes", "majority", "all the time"],
        "values": ["2", "1", "0"],
        "name": "mood_control"
    },
    {
        "Q": "9. how often you have felt satisfied with yourself over the past 1 months.",
        "options": ["sometimes", "majority", "all the time"],
        "values": ["2", "1", "0"],
        "name": "self_satisfaction"
    },
    {
        "Q": "10. how ‘supported’ you feel by others around you – your friends, family, or otherwise?",
        "options": ["Very Supportive", "Supportive", "Disconnected", "Lost"],
        "values": ["0", "1", "2", "3"],
        "name": "family_support"
    },
    {
        "Q": "11. How frequently have you been doing things that mean something to you or your life?",
        "options": ["sometimes", "majority", "all the time"],
        "values": ["2", "1", "0"],
        "name": "things_yourself"
    },
    {
        "Q": "12. Focus on work or other activities?",
        "options": ["Very Focused", "Focused", "Neutral", "Distracted", "Lost"],
        "values": ["0", "1", "2", "3", "4"],
        "name": "focus"
    }
];

var Qno = 0;
var marks = Array(questions.length).fill(-1);
var QuestionData = [];

// Function to initialize the page
function init() {
    prevBut.style.display = "none";
    nextBut.style.display = "none";
    countAllNumbers();
    showQuestion();
}

// Function to display the current question
function showQuestion() {
    nextBut.style.display = "inline-block";
    if (Qno == 0) {
        prevBut.style.display = "none";
    } else {
        prevBut.style.display = "inline-block";
    }
    QSection.innerHTML = generateQuestionHTML(questions[Qno]);
}

// Function to generate HTML for a question
function generateQuestionHTML(question) {
    var html = '<div class="question ml-sm-5 pl-sm-5 pt-2"><div class="py-2 h5"><b>' + question.Q + '</b></div><div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">';
    for (var i = 0; i < question.options.length; i++) {
        html += '<label class="options">' + question.options[i] + ' <input type="radio" value="' + question.values[i] + '" name="' + question.name + '"> <span class="checkmark"></span> </label>';
    }
    html += '</div>';
    return html;
}

// Function to handle moving to the previous question
function previous() {
    if (Qno > 0) {
        Qno--;
        showQuestion();
    }
}

// Function to handle moving to the next question
function next() {
    var ele = document.getElementsByName(QuestionData[Qno]);
    var selected = false;
    var Qmark = 0;
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            selected = true;
            Qmark = ele[i].value;
            break;
        }
    }
    if (!selected) {
        status.innerHTML = "Please select an answer.";
    } else {
        marks[Qno] = parseInt(Qmark);
        if (Qno < questions.length - 1) {
            Qno++;
            status.innerHTML = "";
            showQuestion();
        } else {
            // This is where you would handle the end of the questions
            // You may want to send the data to the server or display results
            // For now, we'll just log the marks to the console
            console.log("Marks:", marks);
        }
    }
}

// Rest of your script...

// Initialize the page
init();

function readEmail() {
    const quizdiv = document.getElementById("quiz");
    quizdiv.style.display = "initial";
    quizQuestions()
}



function quizQuestions() {
    const question = document.getElementById("question");
    question.textContent = questions[0].Q;

    console.log(questions[0].options.length)
    var i = 1
    for(i = 0; i< questions[0].options.length; i++){
        var optionsElement = document.getElementById("options");
    
        var newElement = document.createElement("div");
        newElement.innerHTML = `<input type="radio" style="opacity: 100% !important" id="html" name="fav_language" value="HTML"> <h2 id="ans1">${questions[0].options[i]}</h2>`;

        optionsElement.appendChild(newElement);
    }
}

function next() {

}

