import React from 'react'

let  Reg = React.memo((props) => {
  return (
    <div>
      From Func {props.name}
    </div>
  )
})
export default Reg