import React from "react";
import InputType from "../../components/shared/form/InputType";
import Form from "../../components/shared/form/Form";
// import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) :( <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/image/3.jpg" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
            {/* <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            /> */}
            <div className="border1"> <Form formTitle={'Login page'} submitButton={"Login"} formType={'login'}/> </div>
             

          </div>
        </div>) }
       
      {/* )} */}
    </>
  );
};

export default Login;

