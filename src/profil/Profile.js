import React from 'react'
import PropTypes from "prop-types"

export default function Profile(props) {
  const handleName=(props)=>{
    return alert(props)
   }
  return (
    <div >

      {handleName(props.fullName)}

    <div style={{color:'#7AA95C', fontSize:30, fontFamily:'fantasy' }}>
     <h1>  {props.fullName} </h1> 
    </div>
    <div style={{ color:'#AD956B', fontSize:20, fontFamily:'system-ui'}}>
    <h3>  {props.bio} </h3>
    </div> 
    <div style={{color:'#AD956B', fontSize:20, fontFamily:'system-ui'}}>  
    <h3>
         {props.profession}
    </h3>
    </div>
    <div >
    <img src={props.children} style={{width:600,
      height: 600, border:8}}/>
    </div>
    <div>
      {props.handleName}
    </div>


        
     </div>
  )
}
Profile.defaultProps={
  fullName:'Aissatou',
  bio:'biographie',
  profession:'Ecrivain'
}

Profile.propTypes={
  fullName:PropTypes.string,
  bio :PropTypes.string,
  profession:PropTypes.string
}