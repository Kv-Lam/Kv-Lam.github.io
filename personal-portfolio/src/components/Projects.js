import { Col, Nav, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import React from "react"
import testingImage from "../assets/images/Testing.png"


export const Projects = () => {
    const projects = [
        {
            title: "Dungeon Game",
            description: "ASCII terminal-based game that allows users to utilize their own dungeons.",
            image: testingImage,
            github: "https://github.com/Kv-Lam/ASCII-Terminal-Dungeon-Game"
        },
    ]
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
                                        <ProjectCard key={key} {...project} />
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