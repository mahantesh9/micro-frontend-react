import React, { Component } from 'react'
import ValidatedLoginForm from './ValidatedLoginForm';
import "./styles.css";

export class App extends Component {
    render() {
        return (
            <div>
                <ValidatedLoginForm/>
            </div>
        )
    }
}

export default App
