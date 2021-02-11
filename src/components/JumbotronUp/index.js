import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

import background from "../../assets/jumbotron-nav.jpg";

function JumbotronUp() {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="background"
      >
        <h1 className="display-3">Track every aspect of your workouts.</h1>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default JumbotronUp;
