import React from 'react'
import "./SidebarOption.css"
function SidebarOption( {tittle,Icon} ) {
  return (
    <div className='sidebarOption'>
    {Icon && <Icon className="sidebaroption_icon"/>}
      {Icon ? <h4>{tittle}</h4> : <p>{tittle}</p>}
    </div>
  )
}

export default SidebarOption
 