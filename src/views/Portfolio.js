import React from "react";
import Cards from "../components/Cards"
import Chatter_Ladder from "../assets/Chatter_Ladder.png"
import DayPlanner from "../assets/Day Planner.png"
import ReadMeGen from "../assets/ReadMe Generator.png"
import recipe_finder from "../assets/recipe_finder.jpg"
import weather_dashboard from "../assets/weather_dashboard.png"
import BudgetTracker from "../assets/BudgetTracker.png"

function Portfolio() {
    return (
        <div class="container">
            <h1>Checkout My Projects.<br></br><br></br> Click To View Repository:</h1><br></br><br></br>
            <div class="row mt-2">
                <div class="col">
                    <Cards name='Budget Tracker' image={BudgetTracker} link ="https://github.com/ryanbrowne360/PWA-Online-Offline-Budget-Trackers.git" about='A responsive, easy to use application for keeping a monetary ledger.' />
                </div>
                <div class="col">
                    <Cards name='DayPlanner' image={DayPlanner} link="https://github.com/ryanbrowne360/Homework5.git" about="A helpful application that marks events and to do's in real time, with color."  />
                </div>
                <div class="col">
                    <Cards name='Weather App' image={weather_dashboard} link= "https://github.com/ryanbrowne360/WeatherDashboard.git" about="This application allows you to search for a city, and see the current weather + 5 day forecast."/></div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <Cards name='Chatter Ladder' image={Chatter_Ladder} link= "https://github.com/ryanbrowne360/Project-2.git" about="An application that allows you to chat with random users."/>
                </div>
                <div class="col">
                    <Cards name='Restaurant Finder' image={recipe_finder} link="https://github.com/ryanbrowne360/Project1.git" about="Search for the perfect restaurant in your area that meets your specific dietary requirenments." />
                </div>
                <div class="col">
                    <Cards name='ReadMe Generator' image= {ReadMeGen} link="https://github.com/ryanbrowne360/09ReadMeGenerator.git" about="A command line program which asks the user a series of specific questions, and then renders a very nice ReadMe file." />
                </div>
            </div>
        </div>


    );

}

// image={<img  src={BudgetTracker} width="240px" height="280px"/>}



export default Portfolio;