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
            title: "Credit Card Fraud Detection",
            description: "Uses machine learning to detect fraudulent credit card transactions with a Logistic Regression model.",
            image: GitHubImage,
            github: "https://github.com/Kv-Lam/CCF_CS325"
        },
        {
            title: "Dungeons of Delgrhiard",
            description: "Isometric Godot dungeon game with custom art.",
            image: GitHubImage,
            github: "https://github.com/Kv-Lam/Godot-Dungeon-Game"
        },
        {
            title: "C+++ Terminal Dungeon Game",
            description: "C++ ASCII terminal-based game with customizable dungeons.",
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