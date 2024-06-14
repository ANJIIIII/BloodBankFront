import React from 'react'
import Form from '../../components/shared/form/Form'
import { useSelector } from "react-redux";
import Spinner from '../../components/shared/Spinner';

function Register() {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
    {
      loading?<Spinner/>:( 
        <div className='row g-0'>
          <div className='col-md-8 form-banner '>
            <img src='./assets/image/2.jpg' alt="register img"/>
          </div>
          <div className='col-md-4 form-container'>
          <div className="border1">
            <Form formTitle={"Register"} submitButton={'Register'} formType={'Register'} />
            </div>
          </div>
        </div>
        )
    }
       
    </>
  )
}

export default Register
