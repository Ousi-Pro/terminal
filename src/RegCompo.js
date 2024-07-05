import React, { Component } from 'react'
import Pure from './Pure.js'
import Reg from './Reg.js'
export class RegCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Oussama Pro hh"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "HOHOHO"
            })
        }, 2000)
    }
  render() {
    console.log("From Parent")
    return (
    <>
     <div>Parent Component</div>
     <Reg name={this.state.name}></Reg> 
     <Pure name={this.state.name}></Pure>
    </>
      
    )   
  }
}

export default RegCompo
