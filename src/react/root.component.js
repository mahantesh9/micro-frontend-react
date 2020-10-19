import React, { Component } from 'react'
import ValidatedLoginForm from './ValidatedLoginForm';
import "./styles.css";
import Content1 from "./Content1";

export class App extends Component {
    render() {
        return (
            <div>
                <ValidatedLoginForm/>
                <Content1/>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
       return (
          
          <div>
             <h3 >Write A Text: <input type = "text"  
                onChange = {this.props.updateStateProp} /></h3>
             <h3>Text Will Be Reflecting Here: <input value={this.props.myDataProp} type = "text"></input></h3>
             
          </div>
       );
    }
 }

export default App
