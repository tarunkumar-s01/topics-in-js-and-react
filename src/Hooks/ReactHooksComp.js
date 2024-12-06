import React from 'react'
import { Outlet ,Link} from 'react-router-dom'

import UseEffectHooksComp from './UseEffectHooksComp'

const ReactHooksComp = () => {
  return (
    <div> 
      this is a ReactHooksComp
      <div className='container'>
        <div className='card border-primary'>
          <div className='card-header '>
            <Link to="useeffect" className='btn btn-primary'>useeffect</Link>
            <Link to="usestate" className='btn btn-primary'>usestate</Link>
          </div>
          <div className='card-body'>
            <Outlet></Outlet>

          </div>
        </div>
      </div>
      
      
      
    </div>
  )
}

export default ReactHooksComp