let userScore = 0;
let copmScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const result_p = document.getElementById('res');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getcompchoice(){
  const choices = ['r','p','s'];
  const randomnumber = Math.floor(Math.random() *3);
  return choices[randomnumber];
}
function game(userchoice){
const compchoice = getcompchoice();
switch (userchoice + compchoice) {
  case 'rs':
  case 'pr':
  case 'sp':
  userScore++;
  result_p.innerHTML = "User WINS!!!";

  userScore_span.innerHTML = userScore;
    break;
  case 'rp':
  case 'ps':
  case 'sr':
  copmScore++
    result_p.innerHTML = "User loses";
    compScore_span.innerHTML = copmScore;
    break;
  case 'rr':
  case 'pp':
  case 'ss':
    console.log('draw');
    result_p.innerHTML = "its a draw";
    break;


}
}
function main(){
rock_div.addEventListener('click', function () {
game('r')
})
paper_div.addEventListener('click', function () {
game('p')
})
scissors_div.addEventListener('click', function () {
  game('s')
})
}
main()
