import './App.css';
import Counters from './components/counters';

let ele = <h1>Idi urke some variable render chese sample</h1>

function App() {
  return (
    <div className="App">
      <br></br><br></br>
      {ele}
    <br></br>
      <WelcomeProps inp2 = "Props ki multiple inputs kuda iyochu" inp1="Idi with props (arguments) " />
      <Counters/>
      <Welcome/>
      <br></br>
    </div>
  );
}

function WelcomeProps(props) {
  return (<div>
        <h1 style={{ fontSize: 25, fontWeight: "bold", color: "pink" }}>{props.inp1} </h1>
        <h1 style={{ fontSize: 25, fontWeight: "bold", color: "red" }}>{props.inp2} </h1>
  </div>)
}
function Welcome() {
  const elem =
    <div style={{ fontSize: 25, fontWeight: "bold", color: "burgundy" }}>
      <p>Idi Normal Function</p>
    </div>
  return (elem)
}
export default App;
