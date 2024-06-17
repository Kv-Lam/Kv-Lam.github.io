import { Col, Nav, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import React from "react"
import GitHubImage from "../assets/images/GitHub.png"


export const Projects = () => {

    const DetectTouchscreen = () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    const projects = [
        {
            title: "Dungeon Game",
            description: "ASCII terminal-based game that allows users to utilize their own dungeons.",
            image: GitHubImage,
            github: "https://github.com/Kv-Lam/ASCII-Terminal-Dungeon-Game"
        },
    ]

    const isTouchScreen = DetectTouchscreen();

    return (
        <div className="Projects-Container">
            <h2 className="Projects-Title">Projects</h2>
            <Tab.Container id="Projects-Tabs" defaultActiveKey="first">
                <Row>
                    <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {projects.map((project, key) => (
                                        <ProjectCard key={key} {...project} isTouchScreen={isTouchScreen} />
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Projects;