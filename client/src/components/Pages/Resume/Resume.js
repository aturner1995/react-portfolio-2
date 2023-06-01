import React from 'react';
import { Col, Row, ListGroup, Card } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import data from '../../../data';

import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff734f' }}
            icon={
                <img
                    src={experience.icon}
                    alt={experience.company}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    className='w-[60%] h-[60%] object-contain'
                />
            }
        >
            <div className='text-center'>
                <h4 className="vertical-timeline-element-title">{experience.position}</h4>
                <h6 className="subtitle">{experience.company}</h6>
                {experience.startDate} - {experience.endDate}
            </div>

            <ul className='mt-3'>
                {experience.points.map((point, index) => (
                    <li className='my-1'
                        key={`experience-point-${index}`}>
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const EducationCard = ({ education }) => {
    return (
        <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff734f' }}
            icon={
                <img
                    src={education.icon}
                    alt={education.uni}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    className='w-[60%] h-[60%] object-contain'
                />
            }
        >
            <div className='text-center'>
                <h4 className="vertical-timeline-element-title">{education.degree}</h4>
                <h6 className="subtitle">{education.uni}</h6>
                {education.startDate} - {education.endDate}
            </div>
        </VerticalTimelineElement>
    );
};

const Resume = () => {
    return (
        <>
            <Row className='about-section p-4 bg-light'>
                <Col lg={3}>
                    <h2 className='text-left'>SKILLS</h2>
                    <a className=' btn prime-custom-2' href="resume-aaronturner-2023.pdf" target="_blank">Download Resume</a>
                </Col>
                <Col lg={9}>
                    <Row>
                        <Col className="d-flex justify-content-center my-2">
                            <Card style={{ width: '18rem' }} className='text-center'>
                                <Card.Body>
                                    <Card.Title className='title'>LANGUAGES</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item action>JavaScript (ES6)</ListGroup.Item>
                                        <ListGroup.Item action>Python</ListGroup.Item>
                                        <ListGroup.Item action>CSS3</ListGroup.Item>
                                        <ListGroup.Item action>HTML5</ListGroup.Item>
                                        <ListGroup.Item action>SQL</ListGroup.Item>
                                        <ListGroup.Item action>NoSQL</ListGroup.Item>
                                        <ListGroup.Item action>MATLAB</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="d-flex justify-content-center my-2">
                            <Card style={{ width: '18rem' }} className='text-center'>
                                <Card.Body>
                                    <Card.Title className='title'>TOOLS</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item action>jQuery</ListGroup.Item>
                                        <ListGroup.Item action>ReactJS</ListGroup.Item>
                                        <ListGroup.Item action>Vue.JS</ListGroup.Item>
                                        <ListGroup.Item action>Bootstrap</ListGroup.Item>
                                        <ListGroup.Item action>Node.JS</ListGroup.Item>
                                        <ListGroup.Item action>Express.JS</ListGroup.Item>
                                        <ListGroup.Item action>Bulma</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="d-flex justify-content-center my-2">
                            <Card style={{ width: '18rem' }} className='text-center'>
                                <Card.Body>
                                    <Card.Title className='title'>APPLICATIONS</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item action>GitHub</ListGroup.Item>
                                        <ListGroup.Item action>MySQL</ListGroup.Item>
                                        <ListGroup.Item action>MongoDB</ListGroup.Item>
                                        <ListGroup.Item action>Heroku</ListGroup.Item>
                                        <ListGroup.Item action>SolidWorks</ListGroup.Item>
                                        <ListGroup.Item action>ANSYS FLUENT</ListGroup.Item>
                                        <ListGroup.Item action>MS PROJECT</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='p-4 bg-light'>
                <Col lg={3}>
                    <h2 className='text-left'>EXPERIENCE</h2>
                    <a className=' btn prime-custom-2' href="resume-aaronturner-2023.pdf" target="_blank">Download Resume</a>
                </Col>
                <Col lg={9}>
                    <VerticalTimeline>
                        {data.experience.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                </Col>
            </Row>
            <Row className='p-4 bg-light'>
                <Col lg={3}>
                    <h2 className='text-left'>EDUCATION</h2>
                    <a className=' btn prime-custom-2' href="resume-aaronturner-2023.pdf" target="_blank">Download Resume</a>
                </Col>
                <Col lg={9}>
                    <VerticalTimeline>

                        {data.education.map((education, index) => (
                            <EducationCard
                                key={`education-${index}`}
                                education={education}
                            />
                        ))}
                    </VerticalTimeline>
                </Col>
            </Row>
        </>
    )
}

export default Resume