import React, { PureComponent } from 'react'

class Pure extends PureComponent {
    
  render() {
    console.log("From Pure")
    return (
      <div>
        L3eeezzzz {this.props.name}
      </div>
    )
  }
}

export default Pure
