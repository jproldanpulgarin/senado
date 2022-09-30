
import '../css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import dashboard from '../img/dashboard.jpg'
import logo from '../img/logo.png'
import React, { Component } from 'react'

 class Register extends Component {
  render() {
    return (
        <section>
        <div className="imgBox">
            <img src={dashboard} alt=""/>
        </div>

        <div className="contentBox">
            
            <form className='formBx'>
                <img src={logo} alt=""/>
                <h1>User Portal</h1>

                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Input your User'></input>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Input your Password'></input>
                   
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder='Confirm your Password'></input>
                </div>
                <input type="submit" className="btn btn-primary" id='login'></input>

                <h6>Don´t have an acount? </h6>  
            </form>
            
        </div>
    </section>
    )
  }
}

 
export default Register;