import React from "react"

export const AboutDescription = () => {
    const calculateYears = (date) => {
        const today = new Date();
        const monthDifference = today.getMonth() - date.getMonth();
        let dateDifference = today.getFullYear() - date.getFullYear();

        //Checks if birthday has occurred this year or not.
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < date.getDate())) dateDifference--;

        return dateDifference;
    };

    return (
        <div className="AboutMe-Container">
            <h2 className="About-Title">About</h2>
            <p className="About-Description">I am a {calculateYears(new Date(2004, 7, 16))}-year-old with {calculateYears(new Date(2023, 0, 17))} year(s) of experience. My interest in coding began in my second semester at Pellissippi when I took the CISP 1010 course; The curiousity towards programming sparked when I previously did a little coding for my STEM Club activities back in high school. As the semester went by, I fell in love with coding and decided to become a Computer Science major. Artificial intelligence and machine learning is something I am intrigued with, so I plan to minor in artificial intelligence along with my CS major. I am constantly improving myself and broadening my skills, so I plan to gain practical experience and mentorship via internships. With these experiences, I would love to help others through utilizing this knowledge by becoming a TA.</p>
        </div>
    );
};

export default AboutDescription;