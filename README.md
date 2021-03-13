# JavaScript Code Quiz

## Purpose
Functional quiz web application to ask multiple choice questions about JavaScript

## Build With
* HTML
* CSS FlexBox
* JavaScript

## Website
https://primalorb.github.io/code_quiz/

## Resources Referenced / Used
* Some question / Answer combinations derived from:
  * https://www.topzenith.com/2020/04/javascript-quiz-with-questions-and-answers.html
  * https://www.javatpoint.com/result.jsp?answer=obj.method%28%29&x=39&y=7   
* Sorting arrays by object properties ( for displaying high score results )
  * https://stackoverflow.com/questions/54623130/javascript-sort-an-array-of-objects-by-a-numeric-property-in-each-object/54623139

## Design Concepts
* Page Wireframes
  * ![page_wirefames](https://user-images.githubusercontent.com/69044956/111041354-c9c89200-8405-11eb-979e-93401bcc9484.png)
* Question / Answer data structure plan
  * ![question_data_structure](https://user-images.githubusercontent.com/69044956/111041361-d5b45400-8405-11eb-8368-ab513379509d.png)
* Initial program design flow chart
  * ![program_flow](https://user-images.githubusercontent.com/69044956/111041381-e6fd6080-8405-11eb-9258-e7f338b652e1.png)

## Application Flow
* Start Quiz
  * Question page is loaded  
    * Shuffle question array order
    * Iterate through questions (i++) until all questions are asked
      * Shuffle order of answers to display on page
        * Correct answer 
          * displays "correct"
          * iterates to next question
        * Incorrect answer 
          * penalizes the time counter
          * graphic of penalty generated and animated
          * display "wrong"
          * iterates to next question
  * Timer Starts

* End Quiz
  * Whichever occurs first
    * All questions are answered
      * Score is time remaining on the timer
    * Timer is run to zero (or below if due to penalty)
      * Score is the timer value ( can be negative due to penalties )
      * Additional negative score is factored by the number of questions not answers yet (penalty for each)

* Submit Score
  * Different text generated based on end quiz conditions ( remaining question / all completed questions )
  * Enter initials (or name, I do not have a limit on max length)
  * Initials are validated by requiring at least some sort of input
  * Object created of timestamp, initials, and score
  * Object pushed to array of scores on localStorage

* High Score Page
  * Array of scores pulled from localStorage
  * Array sorted to be score descending ( highest score first )
  * Page displays the scores (no limit) and decodes the timestamp into a date/time record
  * Go back button will return to the start quiz page
  * Clear high scores button
    * Removes array from localStorage
    * empties the current array in use

* Leaving active quiz
  * If clicking high score list while in active quiz
    * time is "paused" by iterating timer++ to offset the timer-- of the regular interval
    * user is asked to confirm they want to abort the quiz
      * if yes, timer interval is cleared, value set to zero, and proceed to high score page
      * if no, timer is resumed and the quiz continues as is
  
## Completed app screenshots
* Start page
  * ![start_screem](https://user-images.githubusercontent.com/69044956/111041428-1dd37680-8406-11eb-9ed6-c212dfd9712b.PNG)
* Question display
  * ![questions](https://user-images.githubusercontent.com/69044956/111041435-2d52bf80-8406-11eb-907e-63446dd4609a.png)
* Wrong answer penalty display
  * ![wrong](https://user-images.githubusercontent.com/69044956/111041762-e4036f80-8407-11eb-8122-a9abcb336db9.png)
* Confirm abort quiz (timer gets paused if trying to visit high score while participating in a quiz)
  * ![abort](https://user-images.githubusercontent.com/69044956/111041794-06958880-8408-11eb-8f6e-e06624e340b5.png)
* Submit score page
  * ![submit](https://user-images.githubusercontent.com/69044956/111041805-1319e100-8408-11eb-8317-509e18a25bda.PNG)
* High score page
  * ![scores](https://user-images.githubusercontent.com/69044956/111041809-1e6d0c80-8408-11eb-975f-5bf11253db50.PNG)



