import React, { Component } from "react";
import './countdown.css';

class Countdown extends Component {
    constructor(){
        super();

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    // when the component has rendered successfully on the page
    componentDidMount(){
        // trigger this function
        setInterval( () => {
            this.getTime();
        }, 1000 );
    }

    getTime(){

        //calculate the time difference
        const presentTime = new Date().getTime();
        const weddingTime = new Date(2022, 6, 9, 10).getTime();
        const differenceInTime = weddingTime - presentTime;

        if (weddingTime > Date.now()) {

            const timeInSecs = Math.floor(differenceInTime / 1000)  % 60;
            const timeInMins = Math.floor(differenceInTime / 1000/ 60 ) % 60;
            const timeInHours = Math.floor(differenceInTime / 1000/ 60/ 60 ) % 24;
            const timeInDays = Math.floor(differenceInTime / 1000/ 60 / 60 /24 );

            this.setState({
                days: timeInDays,
                hours: timeInHours,
                minutes: timeInMins,
                seconds: timeInSecs
            });
            
        } else {
            this.setState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            });
        }
    }

    render(){
        return (
            <div className="countdown">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-8 countdown__details">
                            <h1>#BecomingTheAkandes</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 countdown__details2">
                            <p><i>Two "Lives", two "Hearts" merged together in friendship and united forever in LOVE....</i></p>
                            <h3>Thank you for sharing in our special celebration.</h3>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-2 col-lg-1 countdown__details3 bg-white">
                            <h3>{ this.state.days }  </h3>
                            <p>Days</p>
                        </div>
                        <div className="col-2 col-lg-1 countdown__details3 bg-white">
                            <h3>{ this.state.hours }</h3>
                            <p>Hours</p>
                        </div>
                        <div className="col-2 col-lg-1 countdown__details3 bg-white">
                            <h3>{ this.state.minutes }</h3>
                            <p>Minutes</p>
                        </div>
                        <div className="col-2 col-lg-1 countdown__details3 bg-white">
                            <h3>{ this.state.seconds }</h3>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Countdown;