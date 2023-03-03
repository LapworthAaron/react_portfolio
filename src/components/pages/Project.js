import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Project(props) {
    return (
        <Container>
            <Row>
                <Col xl={2} lg={3} md={6} sm={12}>
                <Card style={{ width: '18rem' }}>
                    <a href={props.link}>
                        <Card.Img variant="top" src={props.image} />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                            {props.text}
                            </Card.Text>
                        </Card.Body>
                    </a>
                </Card>
                </Col>
                {/* col-xl-2 col-lg-3 col-md-6 col-sm-12 */}
            </Row>
        </Container>
            // link={props.link}
            //     image={props.image}
            //     title={props.title}
            //     text={props.text}
    );
}

export default Project;