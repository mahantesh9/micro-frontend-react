import React from 'react';
import Content from './Content';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   render() {
      return (
         <div>
            <Content1 myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Content1>
         </div>
      );
   }
}
export default App;