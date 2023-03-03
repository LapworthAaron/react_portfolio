import React from "react";
import Project from './Project';

function ProjectGallery(props) {
    return (
        <section>
            <Project
                link="https://github.com/LapworthAaron/readme_generator"
                image={require("../../assets/images/readme_generator.png")}
                title="Readme Generator"
                text="A node.js application to generate Readmes"
            />
        </section>
    );
}

export default ProjectGallery;