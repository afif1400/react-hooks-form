import React from 'react';
import Form from './credential';
import Address from './address';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'; 
import Booking from './hotel';

// const steps = [
//     {id: "credential"},
//     {id: "address"},   
// ];
    

const MainForm = () => {
    // const { step, navigation } = useStep({ initialStep: 0, steps });
    // const { id } = step;
    // const props = { navigation };
    return(
            <BrowserRouter>
            <Switch>
                <Route path="/Home" component={Form}/>
                <Route exact path="/address" component={Address}/>
                <Route exact path="/booking" component={Booking}/>
                <Redirect to="/home"/>
            </Switch>
            </BrowserRouter>
            
    );
}



// const wrapper = styled.div`
//     .fade-enter{
//         opacity:0.01;
//     }

//     .fade-enter.fade-exit-active{
//         opacity:1;
//         transition:opacity 300ms ease-in;
//     }
//     .fade-exit{
//         opacity:1;
//     }
//     .fade-exit.fade-exit-active{
//         opacity:0.01;
//         transition: opacity 300 ms ease-in;
//     }
//     div.transition-group{
//         position:relative;
//     }
//     section.route-section{
//         position: absolute;
//         width:100%;
//         top:0;
//         left:0;
//     }
// `;

export default MainForm;