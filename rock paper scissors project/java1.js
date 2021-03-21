let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById('userscore');
const compscore_span = document.getElementById('compscore');
const reslut_p = document.getElementById('res');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('s');
const scissors_div = document.getElementById('p');

function getcompchoice(){
   const choices = ['r','p','s'];
   const randomnumber = Math.floor(Math.random()*3);
   return choices[randomnumber];
};
function getuserchoive(){
  rock_div.addEventListener('click', function(){
    game('r')
  })
paper_div.addEventListener('click', function(){
    game('p')
  })
  scissors_div.addEventListener('click', function(){
    game('s')
  })
};
function game(userchoice){
  const compchoice = getcompchoice();
  switch (userchoice + compchoice) {
    case 'rs':
    case 'pr':
    case 'sp':
    userscore++;
    reslut_p.innerHTML = 'user wins.!!!';
    userscore_span.innerHTML = userscore;

      break;
      case 'sr':
      case 'rp':
      case 'ps':
      compscore++;
      reslut_p.innerHTML = 'computer wins.!!!';
      compscore_span.innerHTML = compscore;

        break;
        case 'rr':
        case 'pp':
        case 'ss':
        compscore++;
        reslut_p.innerHTML = 'its a draw.!!!';
          break;
  }
};
getuserchoive();
