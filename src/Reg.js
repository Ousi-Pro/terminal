import React, {memo} from 'react'

let  Reg = memo((props) => {
  console.log(React.Fragment)
  return (
    <div>
      Boom great{props.name}
    </div>
  )
})
export default Reg
