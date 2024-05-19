import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImage from "../assets/img/header-img.svg"
import { useEffect, useState } from "react";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['FrontEnd Engineer', 'BackEnd Engineer', 'Data Analyst'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200)
  const period = 2000;
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Welcome to My Porfolio!</span>
            <h1>Hi! I am Haoze Zhang, A <span className="warp">{text}</span></h1>
            <p>introduction of mine</p>
            <button onClick={()=> console.log('connect')}>Let's Connect!<ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <img src={headerImage} alt="headerImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;