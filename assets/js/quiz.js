// Single Page Element Generation
var container = document.getElementById( 'container' );
var highScoreButton = document.getElementById( 'high-scores' ).addEventListener( 'click', function() {
    event.preventDefault();
    highScoreHTML()
})
var timer = document.getElementById('timer');
var questionEl; 

// On page load, populate DOM with start page
startHTMl()
var questionID = -1

// Question Array
var questions = [
    { 'question': 'blah blah 1',   'answersObj': [
            { 'answer': 'blah 1',       'value': true },
            { 'answer': 'blah 2',       'value': false },
            { 'answer': 'blah 3',       'value': false },
            { 'answer': 'blah 4',       'value': false },
        ]
    },
    { 'question': 'blah blah 2',   'answersObj': [
            { 'answer': 'blah 21',       'value': false },
            { 'answer': 'blah 22',       'value': true },
            { 'answer': 'blah 23',       'value': false },
            { 'answer': 'blah 24',       'value': false },
        ]
    },
    { 'question': 'blah blah 3',   'answersObj': [
            { 'answer': 'blah 31',       'value': false },
            { 'answer': 'blah 32',       'value': true },
            { 'answer': 'blah 33',       'value': false },
            { 'answer': 'blah 34',       'value': false },
        ]
    },
    { 'question': 'blah blah 4',   'answersObj': [
            { 'answer': 'blah 41',       'value': false },
            { 'answer': 'blah 42',       'value': true },
            { 'answer': 'blah 43',       'value': false },
            { 'answer': 'blah 44',       'value': false },
        ]
    },
    { 'question': 'blah blah 5',   'answersObj': [
            { 'answer': 'blah 51',       'value': false },
            { 'answer': 'blah 52',       'value': true },
            { 'answer': 'blah 53',       'value': false },
            { 'answer': 'blah 54',       'value': false },
        ]
    },
    { 'question': 'blah blah 6',   'answersObj': [
            { 'answer': 'blah 61',       'value': false },
            { 'answer': 'blah 62',       'value': true },
            { 'answer': 'blah 63',       'value': false },
            { 'answer': 'blah 64',       'value': false },
        ]
    }
]

// Start Page
function startHTMl() {
        // clear container
    container.innerHTML = ""
        
        //title section
    var startDiv = document.createElement( 'div' );
    startDiv.setAttribute( 'id', 'start-el' );
    startDiv.setAttribute( 'class', 'block' );
    var startTitle = document.createElement( 'h1' );
    startTitle.textContent = 'coding quiz challenge'
    var startPara = document.createElement( 'p' );
    startPara.innerHTML = `Try to answer the following code-related questions within the time limit. </br>
    Keep in mind that incorrect answers will penalize your score/time by ten seconds!`;
    var startButton = document.createElement( 'button' );
    startButton.setAttribute( 'id', 'start-button');
    startButton.textContent = 'start quiz';
    startDiv.appendChild( startTitle );
    startDiv.appendChild( startPara );
    startDiv.appendChild( startButton );
    container.appendChild( startDiv );

    document.getElementById( 'start-button' ).addEventListener( 'click', function() { 
        event.preventDefault();
        questionHTML();
    })
}

// Question List Page
function questionHTML() {
        // clear container
    container.innerHTML = ""

        //question section
    var questionDiv = document.createElement( 'div' );
    questionDiv.setAttribute( 'id', 'question' );
    questionDiv.setAttribute( 'class', 'block' );
    var questionSpan = document.createElement('span');
    questionSpan.setAttribute( 'id', 'question-el' );
    questionSpan.textContent = 'placeholder text';
    questionDiv.appendChild( questionSpan );
    container.appendChild( questionDiv );

        // answer section
    var answerDiv = document.createElement('div');
    answerDiv.setAttribute( 'id', 'answer' );
    answerDiv.setAttribute( 'class', 'block' );
    var answerOl = document.createElement('ol');
    answerOl.setAttribute( 'id', 'ol' )
    answerDiv.appendChild( answerOl );
    container.appendChild( answerDiv );

        // response section
    var responseDiv = document.createElement( 'div' );
    responseDiv.setAttribute( 'id', 'response' );
    responseDiv.setAttribute( 'class', 'block' );
    var responseSpan = document.createElement( 'span' );
    responseSpan.setAttribute( 'id', 'response-el' );
    responseSpan.textContent = 'placeholder text';
    responseDiv.appendChild( responseSpan );
    container.appendChild( responseDiv );

    // start timer
    timerStart()
    initQuiz()
}

// End Game Page
function endGameHTML() {
        // clear container
    container.innerHTML = ""

        //end game section
    var scoreDiv = document.createElement( 'div' );
    scoreDiv.setAttribute( 'id', 'question' );
    scoreDiv.setAttribute( 'class', 'block' );
    var scoreTitle = document.createElement( 'h1' );
    scoreTitle.textContent = 'all done!';

        //span  
    var scorePara = document.createElement( 'span' );
    scorePara.setAttribute( 'id', 'score-span' );
    scorePara.innerHTML = `Your final score is <strong id="score">22</strong>`;

        //form
    var scoreForm = document.createElement( 'form' );
    scoreForm.setAttribute( 'id', 'submit' );
    var scoreLabel = document.createElement( 'label' );
    scoreLabel.setAttribute( 'for', 'initials');
    scoreLabel.setAttribute( 'id', 'label' );
    scoreLabel.textContent = 'Enter initials: ';
    var scoreInput = document.createElement( 'input' );
    scoreInput.setAttribute( 'type', 'text');
    scoreInput.setAttribute( 'placeholder', 'Initials');
    scoreInput.setAttribute( 'id', 'input');
    var scoreButton = document.createElement( 'button' );
    scoreButton.setAttribute( 'type', 'submit');
    scoreButton.setAttribute( 'id', 'submit-button');
    scoreButton.textContent = 'Submit';
    scoreForm.appendChild( scoreLabel );
    scoreForm.appendChild( scoreInput );
    scoreForm.appendChild( scoreButton );
    scoreDiv.appendChild( scoreTitle );
    scoreDiv.appendChild( scorePara );
    scoreDiv.appendChild( scoreForm );
    container.appendChild( scoreDiv );

    var submitButton = document.getElementById( 'submit' ).addEventListener( 'click', function() {
        event.preventDefault();
        highScoreHTML()
    })
}

// High Scores Page
function highScoreHTML() {
        // clear container
    container.innerHTML = ""

        //end game section
    var scoresDiv = document.createElement( 'div' );
    scoresDiv.setAttribute( 'id', 'scores-container' );
    scoresDiv.setAttribute( 'class', 'block' );
    var scoresTitle = document.createElement( 'h1' );
    scoresTitle.textContent = 'high scores!';

        // score list
    var scoreContainer = document.createElement( 'div' );
    scoreContainer.setAttribute( 'id', 'score-list' );
    var scoreUl = document.createElement( 'ul' );
    scoreUl.setAttribute( 'id', 'scores' );
    scoreContainer.appendChild( scoreUl );

        // controls
    var controlsContainer = document.createElement( 'div' );
    controlsContainer.setAttribute( 'id', 'controls' );
    var backButton = document.createElement( 'button' );
    backButton.setAttribute( 'id', 'back-button' );
    backButton.textContent = 'go back';
    var clearButton = document.createElement( 'button' );
    clearButton.setAttribute( 'id', 'clear-button' );
    clearButton.textContent = 'clear high scores';
    controlsContainer.appendChild( backButton );
    controlsContainer.appendChild( clearButton );

    scoresDiv.appendChild( scoresTitle );
    scoresDiv.appendChild( scoreContainer );
    scoresDiv.appendChild( controlsContainer );

    container.appendChild( scoresDiv )

    document.getElementById( 'back-button' ).addEventListener( 'click', function() { 
        event.preventDefault();
        startHTMl();
    })

}

// Timer function
function timerStart() {
    var timeLeft = 25;
    var timeInterval = setInterval(function() {
        timeLeft--
        timer.textContent = timeLeft + ' seconds'
        if( timeLeft === 0 ) {
            clearInterval(timeInterval)
            endGameHTML()
        }
    }, 1000); 
}

// Init Quiz
function initQuiz() {
    questionEl = document.getElementById('question')

        // shuffle question order
    shuffle(questions)

    iterateQuiz()

}

function iterateQuiz() {

    
    console.log(questions.length - 1, questionID)
    questionID = questionID + 1 

    if ( questions.length - 1 >= questionID ) {
    //shuffler answer order
    shuffle(questions[questionID].answersObj)
    
    // display random question
    questionEl.textContent = questions[questionID].question
    var ol = document.getElementById('ol')
    ol.innerHTML = ""

    // loop in shuffled answer
    for ( var i = 0; i < questions[questionID].answersObj.length; i++ ) {
        var li = document.createElement('li')
        li.textContent = questions[questionID].answersObj[i].answer
        li.setAttribute( 'data-response', questions[questionID].answersObj[i].value )
        ol.appendChild(li)
    }
    } else {
        endGameHTML()
    }
    
}




// Shuffler Arrays
function shuffle(a) {
    for ( var i = 0; i < a.length - 1; i++ ) {
      // select a random number up to the length of the password
      var random = Math.floor( Math.random() * ( i ) )
      // set aside the value of original indexed selection
      var orig = a[i]
      // reset the value of the indexed selection to the value of a random index
      a[i] = a[random]
      // set the value of the same random index to the value of the original indexed selection
      a[random] = orig
    }
  };

  // Listen for true / false clicks on answers
  container.addEventListener('click', function(e) {
      var response = e.target.dataset.response
      console.log(response)
      if( response === 'true' || response === 'false' ) {
          console.log('answer')
          iterateQuiz()
      }
  })

