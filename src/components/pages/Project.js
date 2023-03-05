import React from "react";
import {Col, Card} from 'react-bootstrap';

function Project(props) {
    return (
            <Col xl={2} lg={3} md={4} sm={6} xs={12} className="p-2 cards align-items-stretch">
                <Card className="card">
                    <a href={props.link} className="cardLink">
                        <Card.Img className="overflow-hidden" variant="top" src={process.env.PUBLIC_URL + props.image} />
                        <Card.Body d-flex flex-column className="cardContent">
                            <Card.Title className="contentTitle">{props.title}</Card.Title>
                            <Card.Text className="contentText">
                            {props.text}
                            </Card.Text>
                        </Card.Body>
                    </a>
                </Card>
            </Col>
    );
}

export default Project;