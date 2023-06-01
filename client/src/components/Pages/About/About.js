import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <div className='hero'>
                <Row className="remove-margin">
                    <Col className='left'>
                        <div className="text mx-5">
                            <h1 className=''>AARON</h1>
                            <h1>TURNER</h1>
                            <h6 className='mt-5'>ABOUT ME</h6>
                            <h4>EXPERIENCED FULL STACK DEVELOPER BY DAY, PROJECT MANAGER BY NIGHT</h4>
                            <p className='mt-2'>I am a software engineer that specializes in full stack web applications. Results-driven with a background in computer science, engineering and project management.</p>
                        </div>
                        <div className="small-screen">
                            <Image
                                src="/images/headshot-removebg.avif"
                                height='125'
                                className='headshot-small'
                            ></Image>
                        </div>
                    </Col>
                    <Col className='right'>
                        <Image
                            src="/images/headshot-removebg.avif"
                            height='400'
                            className='headshot'
                        ></Image>

                    </Col>
                </Row>
            </div>

            <div className='awards'>
                <Row>
                    <Col className='text-center'>
                        <Image src='/images/30.avif' height='75'></Image>
                    </Col>
                    <Col className='text-center'>
                        <Image src='/images/fast50.avif' height='75'></Image>
                    </Col>
                </Row>
            </div>

            <div className='background mx-5 mb-5 py-4' id='background'>
                <p className='background-text'>Highly motivated and results-driven with a background in computer science, engineering and project management.
                    <strong className='bold-text'> Atlantic Business Magazine 30 under 30 Innovator</strong> with experience in driving business development and growth. Proven track record of success as the Chief Operating Officer of Symbodi, overseeing project management, budgeting, financial models, marketing programs, web development and logistics, resulting in a <strong className='bold-text'>3084% increase in company growth</strong> and recognition as one of the <strong className='bold-text'>fastest-growing companies in Canada by the Deloitte Fast 50 program. </strong>
                    Strong expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js), teamwork and leadership, problem-solving, project management, attention to detail, written and verbal communication, critical thinking, and resource management. </p>
                <p className='background-text'>Outside of work I love to golf, play with my two dogs (Hank and Stu) and travel!</p>
            </div>
        </>

    )
}

export default About