import logo from './logo.svg';
import './App.css';
//import './component-1.js';


function App() {
    return (
        <div className="App">
            <h1>Hello React JS!</h1>
            <p>I am so <strong>HAPPY</strong> that I can learn it</p>


        <ul id="clock">
            <li className="numbers"><span>1</span></li>
            <li className="numbers"><span>2</span></li>
            <li className="numbers"><span>3</span></li>
            <li className="numbers"><span>4</span></li>
            <li className="numbers"><span>5</span></li>
            <li className="numbers"><span>6</span></li>
            <li className="numbers"><span>7</span></li>
            <li className="numbers"><span>8</span></li>
            <li className="numbers"><span>9</span></li>
            <li className="numbers"><span>10</span></li>
            <li className="numbers"><span>11</span></li>
            <li className="numbers"><span>12</span></li>
            <li id="hour"></li>
            <li id="minute"></li>
            <li id="second"></li>
        </ul>
        </div>
    );
}
export default App;
