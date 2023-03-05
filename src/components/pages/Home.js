import React from "react";

function Home() {
    return (
        <div>
            <div className="transparent_bg">
                <img className="" src={require("../../assets/images/picofme_transparent.png")} alt="aaron lapworth" width="250px" />
                <div className="">
                    <h1 className="">Web Developer in training</h1>
                    <p className="">I'm currently studying on a 4 month Front End web development Bootcamp</p>
                </div>
            </div>
        <div className="about-content">
            <h2>Welcome To Pupster!</h2>
            <p>
            With the goal of making a career switch into Web development, I am about to complete a Frontend web development bootcamp, currently tracking at a grade of 100% for all modules. This career change will build on my existing data and tech experience, and reconnect with my HND and Degree focus.
            Significant experience in tech environments, with a cross-functional background covering IT, account management and software support. Working in Data Analytics for the last 9 years, covering Data Analytics, Visualisation and Data Engineering.
            A great addition to any team, I would provide value quickly through my strengths of people development, my learning agility and problem solving and the depth of my business and technical experience.
            </p>
        </div>
        </div>
    );
}

export default Home;