import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  FormGroup,
  Input,
  Label,
  Form,
  Button,
  Row,
  Col,
  Alert,
} from "reactstrap";
import Sidebar from "../../components/Sidebar";
import { postContent } from "../../redux/Action/contentAction";

const AddContent = () => {
  useEffect(() => {
    document.title = "Add Content";
  }, []);

  const [input, setInput] = useState({
    title: "",
    image: "",
    equipment: "",
    time: "",
    gender: "",
    intensity: "",
    description: "",
    url1: "",
    time1: "",
    url2: "",
    time2: "",
    url3: "",
    time3: "",
    url4: "",
    time4: "",
    url5: "",
    time5: "",
  });

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const message = useSelector((state) => state.content.message);
  const [alert, setAlert] = useState("");
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  // const handleChangeUrl = (e, i) => {
  //   const list = [...inputList];
  //   list[i][e.target.name] = e.target.value;
  //   setInputList(list);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postContent(token, input));
  };

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (message.status === 200) {
      setAlert(message.message);
    }
  }, [message]);

  return (
    <>
      <Row>
        <Col md="3">
          <Sidebar />
        </Col>
        <Col md="9">
          <Container className="mt-4 mb-2 video-content-add-container">
            {message.status === 200 ? (
              <Alert color="success" isOpen={visible} toggle={onDismiss}>
                {alert}
              </Alert>
            ) : (
              ""
            )}

            <Form onSubmit={handleSubmit}>
              <Row>
                <FormGroup>
                  <Label for="exampleEmail">Title</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name={`title`}
                    placeholder="Title"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="ml-4">
                  <Label for="exampleEmail">Image</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="image"
                    placeholder="Image"
                    type="text"
                  />
                </FormGroup>
              </Row>
              <FormGroup className="col-md-4">
                <Label for="exampleText">Description</Label>
                <Input
                  onChange={(e) => handleChangeInput(e)}
                  type="textarea"
                  name="description"
                  id="exampleText"
                />
              </FormGroup>
              <Row>
                <FormGroup>
                  <Label for="exampleEmail">Time</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="time"
                    placeholder="Time"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="ml-4">
                  <Label for="exampleEmail">Equipment</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="equipment"
                    placeholder="Time"
                    type="text"
                  />
                </FormGroup>
              </Row>

              <Row>
                <FormGroup tag="fieldset" row>
                  <legend className="col-form-label col-sm-2">Gender</legend>
                  <Col sm={10}>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="gender"
                        id="radio2-option1"
                        value="male"
                        onChange={(e) => handleChangeInput(e)}
                      />
                      <Label check for="radio2-option1">
                        Male
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="gender"
                        id="radio2-option2"
                        value="female"
                        onChange={(e) => handleChangeInput(e)}
                      />
                      <Label check for="radio2-option2">
                        Female
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup tag="fieldset" row className="ml-4">
                  <legend className="col-form-label col-sm-2">Intensity</legend>
                  <Col sm={10}>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="intensity"
                        id="radio2-option1"
                        value="1"
                        onChange={(e) => handleChangeInput(e)}
                      />
                      <Label check for="radio2-option1">
                        1
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="intensity"
                        id="radio2-option2"
                        value="2"
                        onChange={(e) => handleChangeInput(e)}
                      />
                      <Label check for="radio2-option2">
                        2
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="intensity"
                        id="radio2-option2"
                        value="3"
                        onChange={(e) => handleChangeInput(e)}
                      />
                      <Label check for="radio2-option2">
                        3
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Row>

              <Row>
                <FormGroup>
                  <Label for="exampleEmail">Url 1</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="url1"
                    placeholder="Url 1"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="ml-4">
                  <Label for="exampleEmail">Time 1</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="time1"
                    placeholder="Time"
                    type="text"
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="exampleEmail">Url 2</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="url2"
                    placeholder="Url 2"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="ml-4">
                  <Label for="exampleEmail">Time 2</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="time2"
                    placeholder="Time 2"
                    type="text"
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="exampleEmail">Url 3</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="url3"
                    placeholder="Url 3"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="ml-4">
                  <Label for="exampleEmail">Time 3</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="time3"
                    placeholder="Time 3"
                    type="text"
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="exampleEmail">Url 4</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="url4"
                    placeholder="Url 4"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="ml-4">
                  <Label for="exampleEmail">Time 4</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="time4"
                    placeholder="Time 4"
                    type="text"
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="exampleEmail">Url 5</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="url5"
                    placeholder="Url 5"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="ml-4">
                  <Label for="exampleEmail">Time 5</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="time5"
                    placeholder="Time 5"
                    type="text"
                  />
                </FormGroup>
              </Row>

              <br />
              <Button outline color="success" className="col-md-4 mt-2 mb-2">
                Submit
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </>
  );
};
export default AddContent;
