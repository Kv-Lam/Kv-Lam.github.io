import React from 'react'

export const AboutSkills = () => {
    const skills = ["C++", "Python", "Godot", "C", "Git", "GitHub", "JavaScript", "React", "HTML/CSS"];

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
