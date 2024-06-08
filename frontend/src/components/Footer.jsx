import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div style={{borderTop:'1px solid #999999'}}>
        <div style={{marginTop:"20px", display:"flex", fontFamily:"IBM Plex Sans", justifyContent:"space-evenly"}}>
            <span style={{color:'white', marginLeft:"20px"}}>Made With <span style={{color:"purple"}}>&hearts;</span> By <span style={{color:"purple", marginLeft:"10px",fontWeight:'900'}}>Shivansh</span> </span>
            <Link to="https://github.com/ShivanshCharak/Drippster">
            <i
            style={{ color: 'white',cursor:"pointer" }}
            className="fab fa-github-square"
        ></i>
            </Link>
        </div>
    </div>
  )
}

export default Footer