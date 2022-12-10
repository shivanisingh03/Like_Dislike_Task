import './App.css';
import {useState} from 'react';

const App = () => {
  const [likeCounter, setlikeCounter] = useState(0);
//   const [unlikeCounter, setunlikeCounter] = useState(0);
 
  return (
    
    <div id="maindiv">
        <h1>{likeCounter}</h1>
        <button id="button1" onClick={()=>{
            if (likeCounter>=0){
                setlikeCounter(likeCounter+1)
            }
            
        }}>Like</button>

        {/* <h1>{unlikeCounter}</h1> */}
        
        <button id="button2" onClick={()=>{
            if (likeCounter>0){
                setlikeCounter(likeCounter-1)

            }
            
        }}>disLike</button>

    </div>
  );
};


export default App