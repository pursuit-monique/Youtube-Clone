import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import monique from "../Moprofile.jpg";
import tobeobi from "../Toprofile.jpg";
import "../About.css";

const About = () => {
  return (
    <div className="about">
      <section className="py-4 bg-light">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h1>About the Developers</h1>
          </div>
        </div>
      </section>

      <CardGroup>
        <Card border="danger" style={{ width: "20rem" }}>
          <div className="col-md-4">
            <Card.Img
              variant="top"
              src={monique}
              style={{ borderRadius: "100%", width: "235px", height: "235px" }}
              // className="col-md-4"
              // alt="width: 20%; height: 20%;"
            />
          </div>
          <Card.Body>
            <Card.Title>Monique Correa</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Full Stack Software Engineer, Pursuit Fellow
            </Card.Subtitle>
            <Card.Text>
              I am a Tech-savvy bundle of energy, ambition and boundless thirst
              for knowledge! A STEM girl for life, I competed for the Research
              Fellows Positition at CUNY, where I was set to study Blood Tumors
              in Fruit Flies. When COVID struck and I couldn't enter the Lab, I
              requested the ability to turn my research digital and taught
              myself Javascript to parse .csv files and create interactive COVID
              graphs that updated based on NYS Health data! From there, I worked
              with RubiconMD to create graphs in Periscope using SQL! I am
              eternally greatful for these opportunities, as I enjoyed them so
              much, I realized I wanted to be in Software Engineering more than
              Science.
            </Card.Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <Card.Link href="https://github.com/pursuit-monique">
              GitHub
            </Card.Link>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            <Card.Link href="https://www.linkedin.com/in/monique-correa-b424211b5/">
              LinkedIn
            </Card.Link>
          </Card.Body>
        </Card>

        <br />

        <Card border="danger" style={{ width: "20rem" }}>
          <div className="col-md-4">
            <Card.Img
              variant="bottom"
              src={tobeobi}
              style={{ borderRadius: "100%" }}
              // className="card-img-top img-circle"
              // alt="width: 20%; height: 20%;"
            />
          </div>
          <Card.Body>
            <Card.Title>Tobechukwu Obi</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Full Stack Software Engineer, Pursuit Fellow
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <Card.Link href="https://github.com/jasn4real">GitHub</Card.Link>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            <Card.Link href="https://www.linkedin.com/in/tobechukwu-obi-01976423/">
              LinkedIn
            </Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <Button variant="primary" href="/">
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default About;
