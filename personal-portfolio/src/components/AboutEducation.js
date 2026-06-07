import React from "react"

export const AboutEducation = () => {
    const educations = [
        {
            institute: "University of Tennessee, Knoxville", 
            degree: "BS in Computer Science", 
            date: "Aug. 2023 - Expected Graduation: May 2026", 
            GPA: "4.0"
        },
        {
            institute: "Pellissippi State Community College", 
            degree: "Transfer to UTK", 
            date: "Aug. 2022 - May 2023", 
            GPA: "3.96"
        },
    ]

    return (
        <div className="About-Education-Container">
            <h2 className="Education-Title">Education</h2>
            <div className="Education-Items-Container">
                {educations.map((education, key) => (
                    <div key={key} className="Education-Item">
                        <span className="Education-Date">{education.date}</span>
                            <h2>
                                <span className="Education-Institute">
                                    <span>{education.institute} </span>
                                    <span>| GPA: {education.GPA}</span>
                                </span>
                            </h2>
                            <h4><span className="Education-Degree">{education.degree}</span></h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutEducation;