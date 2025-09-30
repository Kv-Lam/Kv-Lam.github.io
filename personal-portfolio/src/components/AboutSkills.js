import React from 'react'

export const AboutSkills = () => {
    const skills = ["Python", "Machine Learning", "NLP", "C++", "C", "JavaScript", "React", "React Native", "Git", "GitHub", "Godot", "HTML/CSS", "Linux", "Windows"];

    return (
        <div className="About-Skills-Container">
            <h2 className="Skills-Title">Skills</h2>
            <div className="Skills-Boxes">
                {skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default AboutSkills;
