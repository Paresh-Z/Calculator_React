import React from 'react';
import './App.css';

var dummy='';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      final_input: ''
    }
  }

  adder(num,e){
    dummy= dummy+num;
    this.setState(()=> 
    {return{
      final_input: dummy
    }}
    )
  }

  handleKeyboardInput(e){
    this.setState(()=> {
      return{
        final_input: e.target.value
      }
    })
  }

  result(){
    this.setState(()=>
    {return { final_input: eval(this.state.final_input)}}
    )
  }


  render() {
    return (
      <div id='main-container'>
          <input type="text" placeholder='0' value={this.state.final_input} onChange={(e)=> this.handleKeyboardInput(e)}></input>
          <table>
            <tr>
            <td colSpan={2} onClick={(e)=>this.adder(1,e)}>AC</td>
            <td colSpan={2} onClick={()=>this.result()}>=</td>
            </tr>
              <tr>
                <td onClick={(e)=>this.adder(1,e)}>1</td>
                <td onClick={(e)=>this.adder(2,e)}>2</td>
                <td onClick={(e)=>this.adder(3,e)}>3</td>
                <td onClick={(e)=>this.adder(4,e)}>4</td>
              </tr>
              <tr>
                <td onClick={(e)=>this.adder(5,e)}>5</td>
                <td onClick={(e)=>this.adder(6,e)}>6</td>
                <td onClick={(e)=>this.adder(7,e)}>7</td>
                <td onClick={(e)=>this.adder(8,e)}>8</td>
              </tr>
              <tr>
                <td onClick={(e)=>this.adder(9,e)}>9</td>
                <td onClick={(e)=>this.adder(0,e)}>0</td>
                <td onClick={(e)=>this.adder('.',e)}>.</td>
                <td rowSpan={2} onClick={(e)=>this.adder('+',e)}>+</td>

                
              </tr>
              <tr>
                <td onClick={(e)=>this.adder('*',e)}>*</td>
                <td onClick={(e)=>this.adder('-',e)}>-</td>
                <td onClick={(e)=>this.adder('/',e)}>/</td>
              </tr>
          </table>
      </div>
    )
  }
}
export default App;

