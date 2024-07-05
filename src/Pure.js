import React, { PureComponent } from 'react'

class Pure extends PureComponent {
    
  render() {
    console.log("From Pure")
    return (
      <div>
        Pure component {this.props.name}
      </div>
    )
  }
}

export default Pure
