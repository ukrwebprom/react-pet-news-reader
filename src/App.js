import { Component } from "react";
import { RequestForm } from "./components/RequestForm/RequestForm";
import { Header } from "./components/Header/Header";
import { Grid } from "./components/Grid/Grid";

class App extends Component {
  state = {
    currentState: "idle",
    request: '',
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      currentState: "search",
      request: e.target.elements.request.value,
    })
    console.log(e.target.elements.request.value);
  }
  
  render() {
    if(this.state.currentState === "idle") {
      return <div className="container">
            <RequestForm onSubmit={this.onFormSubmit}/>
          </div>
    }
    if(this.state.currentState === "search") {
      return (
      <>
        <Grid request={this.state.request} />
        <Header onSubmit={this.onFormSubmit} value={this.state.request}/>
        
      </>)
    }
    
  }
}
export default App;
