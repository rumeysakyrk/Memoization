import './App.css';
import Header from './Components/Header';
import {useState, useMemo, useCallback} from 'react';

function App() {
  const[number, setNumber]=useState(0);
  const [newnumber, setNewNumber]=useState(0);

  const data =useMemo(() => {
    return calculatemachine();
  }, []);

  //const data=calculatemachine();
  // eğer useMemo kullanılmazsa fonksiyon sürekli kendini tekrar eder 
  //sadece istenen kısmın render edilmesine yönelik güzel bir hook
  //ayrıca useEffect ile çok benzerdir. köşeli parantezi useEffect de olduğu gibi doldurup kullanabiliriz

  const increment= useCallback(() => {
    setNewNumber((prevState) => prevState+1)
  },[]);

  return (
    <div className="App">
     <Header number={number < 5 ? 0 : number } data={data} increment={increment}/>
     <hr /> 
     <p>{number}</p>

     <div>
      <button onClick={() => {setNumber(number+1)}}>Increase</button>
     </div>
   <hr />
       <p>New Number {newnumber}</p>

    </div>
  );
}

function calculatemachine(){
  return console.log("100");
}

export default App;
