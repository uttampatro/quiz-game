var readlineSync = require('readline-sync');

var score = 0
var username = readlineSync.question("What's your name? ")
console.log(`Hey ${username}, Welcome to the quiz about sports!!`)
console.log('Lets begin')

//play function
function play(question, answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer === answer){
    console.log('right!')
    score++
  }else{
    console.log('wrong')
  }
  console.log(`your score is ${score}`)
  console.log("-------")
}

//array of questions
var questions = [
  {
    question: 'Q1 -> After how many Year’s FIFA World Cup is held? \n\n  a) 2 Years\n  b) 3 Years\n  c) 4 Years\n  d) Every Year\n',
    answer: '4 Years'
  },
  {
    question: 'Q2 -> Which Country won the first FIFA World Cup? \n\n  a) Argentina\n  b) Uruguay\n  c) Italy\n  d) Brazil\n',
    answer: 'Uruguay'
  },
  {
    question: 'Q3 -> Who won the first ICC World Cup? \n\n  a) India\n  b) West Indies\n  c) England\n  d) Australia\n',
    answer: 'West Indies'
  },
  {
    question: 'Q4 -> Who won the first T20 World Cup? \n\n  a) Pakistan\n  b) India\n  c) West Indies\n   d) England\n',
    answer: 'India'
  },
  {
    question: 'Q5 -> Who is known as the Flying Sikh? \n\n  a) Michael Johnson\n  b) Usain Bolt\n  c) Milkha Sing\n  d) Carl Lewis\n',
    answer: 'Milkha Sing'
  },
  {
    question: 'Q6 -> What is the 100m World Record of Usain Bolt? \n\n  a) 14.35 Sec\n  b) 9.58 Sec\n  c) 9.05 Sec\n  d) 10.12 Sec\n',
    answer: '9.58 Sec'
  },
  {
    question: 'Q7 -> Where is the Famous Boxer Mary Kom from? \n\n  a) Manipur\n  b) Mizoram\n  c) Nagaland\n  d) Tripura\n',
    answer: 'Manipur'
  },
  {
    question: 'Q8 -> How many times has India won the Men’s Hockey World Cup in the Olympics? \n\n  a) 2\n  b) 3\n  c) 4\n  d) 1\n',
    answer: '1'
  },
  {
    question: 'Q9 -> Who is the Undisputed World Chess Champion from 2007–2013? \n\n  a) Viswanathan Anand\n  b) Vladimir Kramnik\n  c) Magnus Carlsen\n  d) Veselin Topalov\n',
    answer: 'Viswanathan Anand'
  },
  {
    question: 'Q10 -> Which Country won the first FIFA World Cup? \n\n  a) Ricky Ponting\n  b) MS Dhoni\n  c) Sachin Tendulkar\n  d) Anil Kumble\n',
    answer: 'Sachin Tendulkar'
  }
  
]

for(var i=0; i<questions.length; i++){
  var currQuestion = questions[i]
  play(currQuestion.question, currQuestion.answer)
}

console.log(`your total scored is : ${score}`)