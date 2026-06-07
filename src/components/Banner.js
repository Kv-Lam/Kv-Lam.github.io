import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"

export const Banner = () => {
    const textsToRotate = ["Comp. Sci. Undergraduate @ UTK", "Software Developer", "ML/AI Enthusiast"] //Text to diplay via animation.
    const [loopNum, setLoopNum] = useState(0); //Which string in stringsToRotate the animation is on.
    const [isDeleting, setIsDeleting] = useState(false); //Default false since it must be typed out via animation. Will become true when being deleted.
    const [text, setText] = useState(''); //Current text that is being shown by the animation.
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text]) //Clears interval everytime text is updated.

    const tick = () => {
        let i = loopNum % textsToRotate.length;
        let fullText = textsToRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); //If the text is being deleted, then remove a char from the text. If it is not being deleted, add a char to the text.

        setText(updatedText);
        
        if(isDeleting) {
            setDelta(previousDelta => previousDelta / 2);
        }
        
        if(!isDeleting && (updatedText == fullText)) {
            setIsDeleting(true);
            setDelta(period);
        } 
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I am Kevin Lam. `}<span className="wrap">A {text}</span></h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;