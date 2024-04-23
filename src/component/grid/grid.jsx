import Card from '../card/card'
import { useState } from "react";
import Winner from '../../helpers/winner';
import './grid.css'
function Grid({numberOfCards}){
 const [board,setBoard] = useState(Array(numberOfCards).fill(""))
 const [turn,setTurn] = useState(true)
 const [winners,setWinner ]=useState(null); 

 function play(index){
    if(turn == true){
        board[index] = 'O';
    }else{
        board[index] = 'X';
    }
    const win = Winner(board , turn ?'O':'X');
    if(win){
        setWinner(win)
    }
    setBoard([...board]);
    setTurn(!turn);
 }
 function Reset(){
    setTurn(true);
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
 }

 return(
    <div className='grid-wrapper'>
        {
            winners &&(
                <>
                <h1 className='highlight'>Winner is :{winners}</h1>
                <button className='reset' onClick={Reset} >Reset Game</button>
                </>
            )
        }
        <h1 className='turn'>Current Turn: {(turn) ? 'O' : 'X'}</h1>
       <div className="grid">
         {board.map((el,idx) => <Card gameEnd={winners?true:false} key={idx} onPlay={play} player = {el} index = {idx}/>)}
      </div>
    </div>

 )
}
 export default Grid;