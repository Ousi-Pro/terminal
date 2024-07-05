import React, {memo} from 'react'

let  Reg = memo((props) => {
  console.log(React.Fragment)
  return (
    <div>
      From Func cv hh {props.name}
    </div>
  )
})
export default Reg
