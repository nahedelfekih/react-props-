import React from 'react'
import PropTypes from "prop-types";
const Profile = (props) => {
  return (
    <div> 
      <h1 className='FullName'>{props.FullName}</h1>
      <h2 className='Bio'> {props.Bio} </h2>
      <h3 className='Profession'> {props.Profession} </h3>
      <div className='Image'> {props.children} </div>
      <div>
    <button className='Alert' onClick={() => props.HandleName(props.FullName)}>Upload</button>
        
  
  </div>
      </div>
  
 
  )
}
Profile.defaultProps ={
  FullName: "unknown",
  Bio: "not defined",
  Profession: "error",
  HandleName: () => alert("unknown"),
  children: "not found",

};
Profile.propTypes ={
  FullName:PropTypes.string,
  Bio:PropTypes.string,
  Profession:PropTypes.string,
  HandleName:PropTypes.func,
  children: PropTypes.element.isRequired,

};

export default Profile
