// Single Page Element Generation
var container = document.getElementById( 'container' );
var highScoreButton = document.getElementById( 'high-scores' ).addEventListener( 'click', function() {
    event.preventDefault();
    highScoreHTML()
})
var timer = document.getElementById('timer');

// On page load, populate DOM with start page
startHTMl()

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
    var timeLeft = 5;
    var timeInterval = setInterval(function() {
        timeLeft--
        timer.textContent = timeLeft + ' seconds'
        if( timeLeft === 0 ) {
            clearInterval(timeInterval)
            endGameHTML()
            // displayMessage()
        }
    }, 1000); 
}