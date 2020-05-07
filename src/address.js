import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import right_arrow from './assets/right_arrow.png';
import left_arrow from './assets/left_arrow.png';


const Address = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => alert("current state is " + JSON.stringify(data));;


//   console.log(watch("firstname")); // watch input value by passing the name of it
 
  return (
      <div className="container">
          <h3>Address</h3>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label>Address<input name="address" ref={register( {required:true,})} />
            {errors.address && <span>This field is required</span>}</label>
            <div className="add">
                <label style={{marginRight:"5%"}}>City<input name="city" ref={register({ required: true })} />
                {errors.city && <span>This field is required</span>}</label>
                <label >State<input name="state" ref={register({ required: true })} />
                {errors.state && <span>This field is required</span>}</label>
            </div>
            <label>Country<input name="country" ref={register({ required: true })} />
            {errors.country && <span>This field is required</span>} </label>
            <input type="submit" />
        </form>
        <div className="navigate">
          <Link to="/booking">
            <span>
            <img  className="right_arrow" src={right_arrow} alt="right"/>
            </span>
          </Link>
          <Link to="/home">
            <span>
            <img className="left_arrow" src={left_arrow} alt="left"/>
            </span>
          </Link>
        </div>

    </div>
  );
  
}

export default Address;