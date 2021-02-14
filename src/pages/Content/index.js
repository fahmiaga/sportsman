import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Content = (props) => {
  const data = {
    result: [
      {
        title: "Linger",
        url: "G6Kspj3OO0s",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
      {
        title: "Promises",
        url: "hUFPooqKllA",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
      {
        title: "My Immortal",
        url: "5anLPw0Efmo",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
      {
        title: "Going Under",
        url: "CdhqVtpR2ts",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
    ],
  };

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = (e) => {
    // console.log(e.target.src.substring(26, 37));
    setModal(!modal);
  };
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  console.log(data);
  return (
    <div>
      <Container className="mt-4 mb-4">
        <Row>
          {data.result.map((video, i) => (
            <Col
              md="3"
              className="mb-3"
              onClick={toggle}
              style={{ cursor: "pointer" }}
              value={video.url}
              key={i}
            >
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={`http://img.youtube.com/vi/${video.url}/0.jpg`}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5"> {video.title}</CardTitle>
                  <CardText>{video.description.substr(0, 25)}...</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <Button color="success" onClick={toggleNested}>
              Show Nested Modal
            </Button>
            <Modal
              isOpen={nestedModal}
              toggle={toggleNested}
              onClosed={closeAll ? toggle : undefined}
            >
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggleNested}>
                  Done
                </Button>{" "}
                <Button color="secondary" onClick={toggleAll}>
                  All Done
                </Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
};

export default Content;
