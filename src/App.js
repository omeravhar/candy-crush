import { useEffect, useState } from "react";


const width = 8;
const candyColors = [
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "yellow"
];


const App = ()=> {
const [currentRandomColorArrangement,setCurrentRandomColorArrangement] = useState([]);

const checkForColumenOfFour = ()=>{
  for(let i = 0; i <= 39; i++){
    const columenOfFour = [i,i+width,i+width*2,i+width*2];
    const decidedColor = currentRandomColorArrangement[i];

    if(columenOfFour.every(square => currentRandomColorArrangement[square] === decidedColor)){
      columenOfFour.forEach(square => currentRandomColorArrangement[square] = '');
    }
  }
}

const checkForColumenOfThree = ()=>{
  for(let i = 0; i < 47; i++){
    const columenOfThree = [i,i+width,i+width*2];
    const decidedColor = currentRandomColorArrangement[i];

    if(columenOfThree.every(square => currentRandomColorArrangement[square] === decidedColor)){
      columenOfThree.forEach(square => currentRandomColorArrangement[square] = '');
    }
  }
}


const checkForRowOfThree = ()=>{
  for(let i = 0; i < 64; i++){
    const rowOfThree = [i,i+1,i+2];
    const decidedColor = currentRandomColorArrangement[i];

    const NotValid =[6,7,14,15,22,23,30,31,38,39,46,47,54,55,63,64];
    
    if(NotValid.includes(i)) continue;

    if(rowOfThree.every(square => currentRandomColorArrangement[square] === decidedColor)){
      rowOfThree.forEach(square => currentRandomColorArrangement[square] = '');
    }
  }
}

const checkForRowOfFour = ()=>{
  for(let i = 0; i < 64; i++){
    const rowOfFour = [i,i+1,i+2];
    const decidedColor = currentRandomColorArrangement[i];

    const NotValid =[5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55,62,63,64];
    
    if(NotValid.includes(i)) continue;

    if(rowOfFour.every(square => currentRandomColorArrangement[square] === decidedColor)){
      rowOfFour.forEach(square => currentRandomColorArrangement[square] = '');
    }
  }
}


const ctreateBoard = ()=>{
  const randomColorArrangement = [];
      for(let i = 0; i < width*width; i++ ){
        const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
        randomColorArrangement.push(randomColor);
      }
  setCurrentRandomColorArrangement(randomColorArrangement);

}


useEffect(()=>{
  ctreateBoard();
},[]);

useEffect(()=>{
  const timer = setInterval(()=>{
    
    checkForColumenOfFour();
    checkForColumenOfThree();
    checkForRowOfFour();
    checkForRowOfThree();
    setCurrentRandomColorArrangement([...currentRandomColorArrangement]);
  },100);
  return ()=>clearInterval(timer);
  
},[checkForRowOfFour,checkForRowOfThree,checkForColumenOfThree,checkForColumenOfThree,currentRandomColorArrangement]);

//  console.log(currentRandomColorArrangement);
  return (
   
    <div className="app">
      <div className="game">
        {currentRandomColorArrangement.map((candyColor,index)=>{
          console.log(candyColor);
                return <img  key={index}
                style={{backgroundColor:candyColor}}
                // alt={candyColor||"no color"}
                />
                
        })}
        
        
      </div>
      
    </div>
  );
}

export default App;


