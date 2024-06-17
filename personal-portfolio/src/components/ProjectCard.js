import React from "react"
import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, image, github, isTouchScreen }) => {
    return (
        <Col sm={6} md={6} xl={3}>
            <a href={github} target="_blank">
            <div className={`Project-Image-Box${isTouchScreen ? ' Touch-Screen' : ''}`}>
                    <img src={image} />
                    <div className="Project-Text">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}