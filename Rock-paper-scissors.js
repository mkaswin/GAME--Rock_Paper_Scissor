let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
}; 
updateScoreLatest();

/*
  if(!score){
    score={
      wins:0,
      losses:0,
      ties:0
    };
  } 
*/
let isAutoplaying =false;
let intervalId;


function autoplay(){
  if(!isAutoplaying){
   intervalId= setInterval(()=>{
      const playMove=pickComputerMove();
      playGame(playMove);
    },1000)
    isAutoplaying=true;

  }
  else{
    clearInterval(intervalId);
    isAutoplaying=false;


  }

  }
 

  function playGame(playerMove){

    const computerMove =  pickComputerMove();
        let result ='';

        if(playerMove==='rock'){
            if  (computerMove==='rock'){
              result ='tie';
    
            }
            else if(computerMove === 'papper'){
              result='loser';
            }
            else if(computerMove==='scissors'){
              result =' win';
            }
    

        }
        else if(playerMove==='papper'){
            if  (computerMove==='rock'){
              result ='win';
  
            }
            else if(computerMove === 'papper'){
              result='tie';
            }
            else if(computerMove==='scissors'){
              result ='loser';
            }

          }
        else if (playerMove==='scissors'){
            if  (computerMove==='rock'){
              result ='loser';

            }
            else if(computerMove === 'papper'){
              result='win';
            }
            else if(computerMove==='scissors'){
              result ='tie';
            }

          }
            if(result==='win'){
              score.wins+=1;
            }
            else if(result==='loser'){
              score.losses+=1;

            }
            else if(result==='tie'){
              score.ties += 1;
            }
            localStorage.setItem('score',JSON.stringify(score));
           
            updateScoreLatest();

            document.querySelector('.js-result').
            innerHTML=result;
            document.querySelector('.js-moves').
            innerHTML=  `You
            <img src="Rock Paper Scissors_files/${playerMove}-emoji.png" class="move-icon">
            <img src="Rock Paper Scissors_files/${computerMove}-emoji.png" class="move-icon">
            Computer`;
            console.log('js-result');
           

      }
      function updateScoreLatest(){
        document.querySelector('.js-score')
        .innerHTML=`wins:${score.wins} ,Losess:${score.losses},  Tie: ${score.ties}`;

      }
  
  function pickComputerMove(){
      const randomNumber=Math.random();
      let computerMove ='';
        if (randomNumber>=0 && randomNumber < 1/3){
          computerMove ='rock';
        }
        else if(randomNumber >=1/3 && randomNumber<2/3 ){
            computerMove ='papper';
        }
        else if(randomNumber >=2/3 && randomNumber <1){
            computerMove ='scissors';
        }
        return computerMove;
    }