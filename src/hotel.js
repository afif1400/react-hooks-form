import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import left_arrow from './assets/left_arrow.png';


const Booking = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => alert("current state is " + JSON.stringify(data));;

    // if(navigation){const { next } = navigation;}

    //   console.log(watch("firstname")); // watch input value by passing the name of it

    return (
        <div className="container">
        <h3><u>Booking Information</u></h3> 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="a">
            <label>Room Type<select name="room type" ref={register({required:true,})} type="">
                <option value="single bed">Single Bed</option>
                <option value="double bed">Double Bed</option>
                </select>
            </label>
            <label>Number of guests<input name="guests" type="number" ref={register({ required: true })} />
            {errors.guests && <span>This field is required</span>}</label>
            </div>
            <label>Arrival Date and Time
            <div style={{display:"flex"}}><input style={{marginRight:"2%"}} name="date" type="date" ref={register({ required:true})}/>
            <input name="time" type="time" ref={register({ required:true})} /></div></label>
            <label>Flight Number<input name="radio" type="text" ref={register({ required:true})} /></label>
            <label>Special Requests<textarea name="requests" type="textarea" rows="4" ref={register({ required:true})} /></label>
            <input type="submit" />
        </form>
        <div className="navigate">
            <Link to="/home">
            <span className="right_text">
            submit another response
            </span>
            </Link>
            <Link to="/address">
            <span>
            <img className="left_arrow" src={left_arrow} alt="left"/>
            </span>
          </Link>
        </div>
    </div>
    );

}

export default Booking;


