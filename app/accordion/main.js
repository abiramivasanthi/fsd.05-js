// Create event listaner for all buttons

let button = document.getElementById('.question-btn');
console.log(button);


// {

    // 'btn1',
    // 'btn2',
    // 'btn3'

// }
// button.foreach(function(button){
// console.log(button);
// });

//for(let i = 0; i < 3; i++){
  //  console.log(i, button[i]);
  //  printMe(button[i]);
//}
function hideAllQuestionText(){
  let questionTexts = document.querySectorAll('.question.text');
  gconsole.log(questionTexts);
  questionTexts.forEach(function(questionText){
    questionText.style.display = 'none';
  });
}
function printMe(button){
  console.log(button);
    button.addEventListner('click', function(){
   
      // Select nearest question-text
      let.currentListener = this;
      questionWrapperElement = currentElement.parentNode.parentNode;
       questionTextElement = questionWrapperElement.querySectorAll('.question.text');
     
       console.log(questionTextElement);
       //Hide All question-text
       hideAllQuestionText();

 // apply display block; to that element
 questionTextElement.style.display = 'block';
 
});
}

//printMe('hello'); // it will excute printMe

 // console.log(printMe); //It will send printMe

//console.log(button.forEach);

button.forEach(printMe); // It will printMe

// button.forEach(printMe);