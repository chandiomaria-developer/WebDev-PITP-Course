//---JAVASCRIPT LOGIC---//

// 1. Create an array of possible answers (Classic + Fun/Sarcastic)
   const answers = [
     "It is certain.",
     "Yes definitely.",
     "Chances are good.",
     "Signs point to yes.",
     "My sources say no.",
     "Chances are not so good.",
     "Very doubtful.",
     "404 Error:Fate not found.",
     "Only if you do a little dance first.",
     "you are about die!",
     "The stars say...meh.",
     "Ask your dog,they know better.",
     "Computer says no.",
     "I'm on a coffee  break, ask later.",
     "Yes,but you won't like the consequences.",
     "you need to consult a doctor.",
     "Your WiFi connection to destiny is week.",
     "Fate is currently stuck...",
     "Chances are great...for someone else.",
  ];

   // 2. Select the important HTML elements
   const getAnswerButton = document.querySelector("#get-answer-button");
   const answerDisplay = document.querySelector("#answer");

   // 3. The function that runs on click
   function showRandomAnswer(){
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    answerDisplay.textContent = randomAnswer;
}

   //4. We use the variable 'getanswerButton' we defined above
  getAnswerButton.addEventListener("click", showRandomAnswer);