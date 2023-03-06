import React from "react";

function Home() {
    return (
        <div id="home">
            <div className="transparent_bg">
                <img className="" src={require("../../assets/images/picofme_transparent.png")} alt="aaron lapworth"/>
                <div className="heading_text">
                    <h1 className="name">Aaron Lapworth</h1>
                    <h2 className="title">Web Developer in training</h2>
                    <p className="intro">I'm currently studying on a 4 month Front End web development Bootcamp</p>
                </div>
            </div>
            <div className="about-content">
                <p>
                With the goal of making a career switch into Web development, I am about to complete a Frontend web development bootcamp, currently tracking at a grade of 100% for all modules. This career change will build on my existing data and tech experience, and reconnect with my HND and Degree focus.
                Significant experience in tech environments, with a cross-functional background covering IT, account management and software support. Working in Data Analytics for the last 9 years, covering Data Analytics, Visualisation and Data Engineering.
                A great addition to any team, I would provide value quickly through my strengths of people development, my learning agility and problem solving and the depth of my business and technical experience.
                Please enjoy looking through my portfolio and contact me if you think I could be a good addition to your team.
                </p>
            </div>
        </div>
    );
}

export default Home;