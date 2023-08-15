import {useState} from 'react';
function App() {

  const [calc,setCalc]= useState("");
  const [result,setResult] = useState("");

  const ops = ['/','*','+','-','.'];

  const updateCalc = value =>{//getting the parsing value

    if( ops.includes(value) && calc ==='' ||  // cant add operators without adding any value
        ops.includes(value) && ops.includes(calc.slice(-1)) //cant add more than one operators at once
      )return; 

    setCalc(calc+value);

    if(!ops.includes(value)){//if havent value in ops array that have entered by button
      setResult(eval(calc+value).toString());
    }
  }

  const createDigits = ()=>{
    const digits = [];
    for(let i=1;i<10;i++){
        digits.push(
          <button  onClick={()=> updateCalc(i.toString())} key={i}>
            {i}
          </button>
        )
    }
    return digits;
  }

  const calculate = () =>{
    setCalc(eval(calc).toString()); // eval function acccepts a string and return that calculated value
  }

  const deleteLast = () =>{
  if(calc==''){
    return;
  }
  const value = calc.slice(0,-1);
  setCalc(value);
  setResult(eval(value).toString());

  }

  return (
    <div className="App">

      <div className="calculator">

        <div className="display">

          {result?<span>({result}) </span>:""}{calc||"0"}

        </div>

        <div className="operators">
          <button onClick={()=> updateCalc("/")}>/</button>
          <button onClick={()=> updateCalc("*")}>*</button>
          <button onClick={()=> updateCalc("+")}>+</button>
          <button onClick={()=> updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={()=> updateCalc("0")}>0</button>
          <button onClick={()=> updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>

      </div>
      
    </div>

    // see above two function calls. if we want to parse a value, we shold call that function as arrow. if not we can call ass normally.
  );
}

export default App;
