import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Form.css'
 class Form extends Component {
   constructor(props) {
      super(props)
    
      this.state = {
        userId:null,
        password:null,
        userName:null,
        address:null,
        country:null,
        zip_code:null,
        email:null,
        gender:null,
        phoneno:null,
        languages:null,
         userIdError: '',
      passwordError: '',
      userNameError: '',
      emailError: '',
      phonenoError: '',
      }
      this.handleUserIdChange=(event)=>{
        this.setState({
            userId:event.target.value,
            userIdError:'',
        }

        )
      }
      this.handlePasswordChange=(event)=>{
        this.setState({
            password:event.target.value,
            passwordError:'',
        })
      }
      this.handleNameChange=(event)=>{
        this.setState({
            userName:event.target.value,
            userNameError:'',
        })
      }
      this.handleAddressChange=(event)=>{
        this.setState({
            address:event.target.value
        })
      }
      this.handleCoutryChange=(event)=>{
        this.setState({
            country:event.target.value
        })
      }
      this.handleZipCodeChange=(event)=>
      {
        this.setState({
            zip_code:event.target.value
        })
      }
      this.handleEmailChange=(event)=>
      {
        this.setState({
            email:event.target.value,
            emailError:'',
        })
    }
      this.handlePhonenoChange=(event)=>
      {
        this.setState({
            phoneno:event.target.value,
            phonenoError:'',
        })
      }
      this.handleSubmit=(event)=>{
        event.preventDefault();
    alert(`${this.state.userName} with a Id ${this.state.userId}has successfully registered`)
   
   
        
        
    if(!this.state.userIdError)
    {
        this.setState(
            {
                userIdError:"UserId is required"
            }
        )
    }
    if(!this.state.passwordError)
    {
        this.setState(
            {
                passwordError:"password is required"
            }
        )
    }
    if(!this.state.userNameError)
    {
        this.setState(
            {
                userNameError:"UserName is required"
            }
        )
    }
    if(!this.state.emailError)
    {
        this.setState(
            {
                emailError:"Email_Id is required"
            }
        )
    }
    if(!this.state.phonenoError)
    {
        this.setState(
            {
                userIdError:"phoneno is required"
            }
        )
    }
      }
    }
 render() 
 {
    return (
      
     <div>
        <form onSubmit={this.handleSubmit}>
           
           <h1>Sign Up Form</h1>
           <div>
            <label>
                Username:
            </label>
            <input type='text' value={this.state.name} name='userName' placeholder='Enter your Name' onChange={this.handleNameChange}></input>
        <span className='error'>{this.state.userNameError}</span>
        </div>
        <div>
            <label>Password:</label>
            <input type='text' value={this.state.password} name='password' placeholder='Enter your password' onChange={this.handlePasswordChange}></input>
            <span className='error'>{this.state.passwordError}</span>
        </div>
        <div>
      <label>UserId:</label>
        <input type='text' value={this.state.userId} name='userId' placeholder='Enter your User Id'onChange={this.handleUserIdChange}></input>
        <span className='error'>{this.state.userIdError}</span>
        </div>
       
        <div>
            <label>Address:</label>
            <input type='text' value={this.state.address} name ='Address' placeholder='Enter your Address' onChange={this.handleAddressChange}></input>
        </div>
<div>
    <label>States:</label>
    <select>
        <option value="">Select your State</option>
    <option value="TamilNadu">TamilNadu</option>
    <option value="Arunachal Pradesh">AruchalPradesh</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    </select>
</div>

<div>
    <label>ZIP_code:</label>
    <input type='text' value={this.state.zip_code} name ='zip_code' placeholder='Enter your zip-code' onChange={this.handleZipCodeChange}></input>
</div>
      <div>
        <label>Email:</label>
        <input type='text' value={this.state.email} name ='email' placeholder='Enter your Email Id'onChange={this.handleEmailChange}></input>
      <span className='error'>{this.state.emailError}</span>
      </div>
      <div>
        <label id='Gender'>Gender</label>
        <input type="radio" name="msex" value="Male" /><span>Male</span>
        <input type="radio" name="fsex" value="Female" /><span>Female</span>
      </div>
      <div>
        <label>PhoneNo:</label>
        <input type='text' value={this.state.phoneno} onChange={this.handlePhonenoChange}></input>
        <span className='error'>{this.state.phonenoError}</span>
      </div>
      <div>
        <label>Languages Known</label>
        <input type="checkbox" name="en" value="en" checked /><span>English</span>
        <input type="checkbox" name="nonen" value="noen" /><span>Non English</span>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
      <Link to='/login'>Already have an account?Login here</Link>
        </form>
        </div>
      
    
      
    )
  }
}

export default Form