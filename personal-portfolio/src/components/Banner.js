import { Container, Row, Col } from "react-bootstrap"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I am Kevin Lam. `}<span className="wrap">A Comp. Sci. Undergraduate @ UTK</span></h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;