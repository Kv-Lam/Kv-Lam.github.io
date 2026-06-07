import React from "react"

export const AboutExperiences = () => {
    const experiences = [
        {
            employer: "Pellissippi State Community College", 
            location: "Knoxville, TN", 
            position: "General Chemistry I Teaching Assistant and Supplemental Instructor", 
            date: "Jan. 2023 - May 2023", 
            link:"https://www.pstcc.edu/learn/", 
            description: "Aided fellow students in understanding concepts, completing assignments, and checking lab reports in the Tutoring Center. Planned and operated three weekly supplemental instruction meetings to support students who required additional guidance on lessons or needed a more individualized tutor. Attended every lecture for a specific class section to develop a personalized supplemental instruction plan."
        },
    ]

    return (
        <div className="About-Experiences-Container">
            <h2 className="Experiences-Title">Experiences</h2>
            {experiences.map((experience, key) => (
                <div key={key} className="Experience-Item">
                    <span className="Experience-Date">{experience.date}</span>
                        <h2>
                            <span className="Experience-Employer">
                                <span>{experience.employer} </span>
                                <span className="Experience-Location">{experience.location}</span>
                                <a href={experience.link} target="_blank" className="Experience-Link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                </svg>
                                </a>
                            </span>
                        </h2>
                        <h4><span className="Experience-Position">{experience.position}</span></h4>
                        <span className="Experience-Description">{experience.description}</span>
                </div>
            ))}
        </div>
    )
}

export default AboutExperiences;