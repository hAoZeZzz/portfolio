import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ProjectCard from './ProjectCard'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from '../assets/img/color-sharp2.png';

function Projects() { 

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id='projects'>
      <Container>
        <Row>
          <Col>
          <h2>Projects</h2>
          <p>introduction of the project</p>
          <Tab.Container id="projects-tabs" defaultActiveKey='first'>
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
              <Nav.Item>
                <Nav.Link eventKey='first'>Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">222</Tab.Pane>
              <Tab.Pane eventKey="third">333</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" />
    </section>
  )
}

export default Projects;