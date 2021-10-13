import './App.css';

function App() {
  const signs = ["+", "-", "*", "/"];
  var a, b, i, s;
  function input(x) {
    var y = document.getElementById("text");
    if (signs.includes(y.value.charAt(y.value.length - 1)) && signs.includes(x)) {
      y.value = y.value.slice(0, y.value.length - 1);
    }
    if (signs.includes(x)) {
      if (y.value.indexOf("+") > -1 || y.value.indexOf("-") > -1 || y.value.indexOf("*") > -1 || y.value.indexOf("/") > -1
      ) {
        calculate();
      }
      separate(x);
    }
    y.value += x;
  }
  function calculate() {
    var x = document.getElementById("text");
    b = parseFloat(x.value.slice(i));
    if (s === "+") {
      x.value = a + b;
    } else if (s === "-") {
      x.value = a - b;
    } else if (s === "*") {
      x.value = a * b;
    } else if (s === "/") {
      x.value = a / b;
    }
  }
  function separate(x) {
    var y = document.getElementById("text");
    i = parseInt(y.value.length + 1);
    a = parseFloat(y.value.slice(0, i - 1));
    s = x;
  }
  function backspace() {
    var y = document.getElementById("text");
    y.value = y.value.slice(0, y.value.length - 1);
  }
  function clean() {
    document.getElementById("text").value = "";
    s = "";
    a = "";
    b = "";
  }

  return (
    <div className="container">
    <input id="text" disabled/><br/><br/>
    <div className="buttons">
      <button style={{width:'140px'}} onClick={backspace}>BackSpace</button>
      <button style={{width:'140px'}} onClick={clean}>Clear</button>
    </div>
    <div className="buttons">
      <button onClick={()=>input(7)}>7</button>
      <button onClick={()=>input(8)}>8</button>
      <button onClick={()=>input(9)}>9</button>
      <button onClick={()=>input('+')}>+</button>
    </div>
    <div className="buttons">
      <button onClick={()=>input(4)}>4</button>
      <button onClick={()=>input(5)}>5</button>
      <button onClick={()=>input(6)}>6</button>
      <button onClick={()=>input('-')}>-</button>
    </div>
    <div className="buttons">
      <button onClick={()=>input(1)}>1</button>
      <button onClick={()=>input(2)}>2</button>
      <button onClick={()=>input(3)}>3</button>
      <button onClick={()=>input('*')}>*</button>
    </div>
    <div className="buttons">
      <button onClick={()=>input(0)}>0</button>
      <button onClick={()=>input('.')}>.</button>
      <button onClick={calculate}>=</button>
      <button onClick={()=>input('/')}>/</button>
    </div>
  </div>
  );
}

export default App;
