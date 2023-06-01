import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import data from '../../../data';

const Portfolio = () => {

  return (
    <Row className='mx-5 mb-5'>
      {data.portfolio.map((project, index) => (
        <Col md={4} className='justify-content-center' style={{ minWidth: '20rem' }} key={index}>
            <Card className='project-card m-2'>
              <div className='image'>
                <Card.Img variant='top' src={project.images[0]} className='mainImage' />
                <Card.Img variant='top' src={project.images[1]} className='secondImage' />
              </div>
              <Card.Body>
                <Card.Title className='text-center'>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text className='text-center d-flex flex-wrap justify-content-center'>
                  {project.skills.map((skill, skillIndex) => (
                    <span className='skills m-1' key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </Card.Text>
                <div className='text-center'>
                  <Button className='prime-custom-2 mx-2' href={project.deployedSite} target='_blank'>
                    Deployed Site
                  </Button>
                  <Button className='prime-custom-2 mx-2' href={project.sourceCode} target='_blank'>
                    Source Code
                  </Button>
                </div>
              </Card.Body>
            </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Portfolio;
