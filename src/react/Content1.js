import React from 'react';

class Content1 extends React.Component {
    render() {
      console.log(this.props.myDataProp)
       return (
          
          <div>
             <h3 >Write A Text: <input type = "text"  
                onChange = {this.props.updateStateProp} /></h3>
             <h3>Text Will Be Reflecting Here: <input value={this.props.myDataProp} type = "text"></input></h3>
             
          </div>
       );
    }
 }

 export default Content1;