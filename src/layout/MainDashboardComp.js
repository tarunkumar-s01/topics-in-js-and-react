import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'
import FooterComp from './FooterComp'

const MainDashboardComp = () => {
  return (
    <div>
        {/* <h1> MainDashboardComp</h1> */}
        <div className='container'>
            <div className='card' border-primary>
                <div className='card-header border-primary'>
                    <NavComp></NavComp>
                </div>
                <div className='card-body border-primary'>
                <Outlet></Outlet>
                </div>
                <div className='card-footer border-primary'>
                    <FooterComp></FooterComp>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default MainDashboardComp