import logo from './logo.svg';
import './App.css';
import { render } from '../../api/app';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""}
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res=>res.next())
    .then(res=>this.setState({apiResponse:res}));
  }

  ComponentWillMount(){
    this.callAPI();
  }
}

function App() {
  render (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <p>{this.state.apiResponse}</p>
    </div>
  );
}

export default App;
