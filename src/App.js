import User from './components/User'
import Shop from './Containers/index'
import './App.css';

const userList=[
  {name:'Suve', age: 25},
  {name:'Juthi', age: 32},
  {name:'Supti', age: 34},
  {name:'Arosh', age: 4},
  {name:'Arabi', age: 1},
]


function App() {
  return (
    <div className="App">
      <h1>Parent Component</h1>
      <User data={{userList}}/>
      <br/><br/>
      <Shop/>
    </div>
  );
}

export default App;
