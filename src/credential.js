import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import right_arrow from './assets/right_arrow.png';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => alert("current state is " + JSON.stringify(data));;

  // if(navigation){const { next } = navigation;}

//   console.log(watch("firstname")); // watch input value by passing the name of it
 
  return (
      <div className="container">
        <div className="heading">
            <span className="text1">
                React Hooks
            </span>
            <span className="text2">
                form
            </span>
            </div>
          <h3><u>Credentials</u></h3>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name<input name="firstname" ref={register( {required:true,})} /></label>
            {errors.firstname && <span>This field is required</span>}
            <label>Last Name<input name="lastname" ref={register({ required: true })} /></label>
            {errors.lastname && <span>This field is required</span>}
            <input type="submit" />
        </form>
        <div className="navigate">
          <Link to="/address">
            <span>
            <img  className="right_arrow" src={right_arrow} alt="right"/>
            </span>
          </Link>
        </div>
    </div>
  );
  
}

export default Form;