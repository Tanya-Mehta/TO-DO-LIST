import React from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
function User() {
    const params= useParams();
    console.log(params.id);
    const navigate=useNavigate();
    return(
    <div className='user'>
      <button onClick={()=>navigate('/about')}>CLICK ME</button>
    </div>
  )
}

export default User
