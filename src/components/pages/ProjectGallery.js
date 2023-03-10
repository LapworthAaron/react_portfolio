import React from "react";
import Project from './Project';
import {Container, Row} from 'react-bootstrap';
import projJSON from '../../assets/json/project.json';

function ProjectGallery() {
    return (
        <section className="projectGallery">
            <Container fluid className="cardContainer">
                <Row>
                    {projJSON.map(item => (
                        <Project 
                            link = {item.link}
                            image = {item.image}
                            title = {item.title}
                            text = {item.text}
                            github = {item.github}
                            key = {item.title}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default ProjectGallery;