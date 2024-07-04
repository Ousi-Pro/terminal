import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "",
       skills: ["react.js", "next.js", "node.js", "mongoDB"]
    }
  }
  
  render() {
    return (
      <div>
         <h1>Hello Oussama</h1>
         I know {this.state.skills.join(",")}
      </div>
    );
  }
}

export default MyForm;