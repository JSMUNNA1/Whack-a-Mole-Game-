
import { useEffect, useState } from 'react';
import HoleCard from './Components/HoleCard';
import rat from "./images/Rat.jpg";
import style from './Styles/App.module.css'
function App() {

     
       const[startGame,setStartGame]=useState(false);
       const[resetGame,setResetGame]=useState(false);
        const[score,setScore]=useState(0);
        const[hit,sethit]=useState(false)
       const[imgElement,setImgElement]=useState(null);
       
        ; // Replace with your image path

       // Randomly choose an index to add the image
       const randomIndex = Math.floor(Math.random() * 6); // Total of 6 HoleCards
      
         function handleScore(){
               sethit(true)
               setScore(score+1);
         }
         useEffect(()=>{
                  setTimeout(()=>{
                       if(score<10 && startGame){
                        setImgElement( <img src={rat} alt="Random"  onClick={handleScore}  width="100px"
                              height="100px"
                              className={style.rat}/>)
                              sethit(false)
                       }
                       if(score===10){
                           sethit(true)
                       }
                             
                  },600)
         },[imgElement,startGame])

         function handleStartGame(){
              setStartGame(true)
         }
        function handleResetGame(){
               setStartGame(false)
               setScore(0)

        }
  return (
      <>
         <div className={style.mainBody}>
         <center><h1>Score is:{score}</h1>
      {hit && <h3>{score<10?'hit':'youWin'}</h3> }</center>
      <div className={style.outerBox}>   
      <div className={style.box}>
        <HoleCard img= {randomIndex === 0 ? imgElement : null}></HoleCard>
        <HoleCard img={randomIndex === 1 ? imgElement : null}></HoleCard>
        <HoleCard img={randomIndex === 2 ? imgElement : null}></HoleCard>
      </div>
      <div className={style.box}>
        <HoleCard img={randomIndex === 3 ? imgElement : null}></HoleCard>
        <HoleCard img={randomIndex === 4 ? imgElement : null}></HoleCard>
        <HoleCard img={randomIndex === 5 ? imgElement : null}></HoleCard>
      </div>
        <div className={style.btnBox}> 
            <div>
                  <button className={style.startGame}  onClick={handleStartGame}>Start Game</button>
            </div>
            <button className={style.reset} onClick={handleResetGame}>Reset Game</button>
        </div>
    </div>
     
      
      
         </div>
      </>
  );
}

export default App;
