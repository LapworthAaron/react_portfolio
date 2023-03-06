import React from "react";
import {Col, Card} from 'react-bootstrap';

function Project(props) {
    return (
            <Col xl={2} lg={3} md={4} sm={6} xs={12} className="cardTop">
                <Card>
                    <a href={props.link}  target="_blank" rel="noopener noreferrer" className="cardLink">
                        <Card.Img className="overflow-hidden card-images" variant="top" src={process.env.PUBLIC_URL + props.image} />
                        <Card.Body className="cardContent">
                            <div className="cardInfo">
                                <Card.Title className="contentTitle">
                                    {props.title}
                                </Card.Title>
                                <Card.Text className="contentText">
                                    {props.text}
                                </Card.Text>
                            </div>
                            <a href={props.github} target="_blank" rel="noopener noreferrer"><i className="cardGit fa fa-github fa-2x"></i></a>
                        </Card.Body>
                    </a>
                </Card>
            </Col>
    );
}

export default Project;