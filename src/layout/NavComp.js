import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
  return (
    <div>
        {/* <h1>This is a NavComp</h1> */}
        <Link to="mystate" className="btn btn-primary bt-sm">mystate  </Link>
        <Link to="virtualdom" className="btn btn-primary bt-sm">virtualdom  </Link>
        <Link to="hooks" className="btn btn-primary bt-sm">hooks </Link>
        <Link to='myfav' className="btn btn-primary bt-sm">myfav</Link>
        <Link to='formval' className="btn btn-primary bt-sm">formval</Link>
        <Link to='formtask' className="btn btn-primary bt-sm">formtask</Link>
        <Link to='productdash' className="btn btn-primary bt-sm">productdash</Link>
        <Link to='productadd' className="btn btn-primary bt-sm">productadd</Link>
        <Link to='productedit' className="btn btn-primary bt-sm">productedit</Link>
    </div>
  )
}

export default NavComp