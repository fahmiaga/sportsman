import React, { useState, useEffect } from "react";
// import Navbar from "../../components/Navbar1";
import {
  Container,
  FormGroup,
  Input,
  Label,
  Form,
  Button,
  Row,
  Col,
} from "reactstrap";
import Sidebar from "../../components/Sidebar";

const AddContent = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  const url = "url";
  const timer = "timer";
  const title = "title";
  const [number, setNumber] = useState(1);

  const [inputList, setInputList] = useState([
    {
      [title + number]: "",
      [url + number]: "",
      [timer + number]: "",
    },
  ]);

  const handleChange = (e, i) => {
    const list = [...inputList];
    list[i][e.target.name] = e.target.value;
    setInputList(list);
  };

  const handleAddInput = () => {
    setInputList([
      ...inputList,
      { [title + number]: "", [url + number]: "", [timer + number]: "" },
    ]);
    setNumber(number + 1);
  };
  const handleRemoveInput = (i) => {
    const list = [...inputList];
    list.splice(i, 1);
    setInputList(list);
  };
  console.log(inputList);
  return (
    <>
      <Row>
        {/* <Navbar /> */}
        <Col md="3">
          <Sidebar />
        </Col>
        <Col md="9">
          <Container className="mt-4 mb-2">
            <Form>
              {inputList.map((inp, i) => {
                return (
                  <>
                    <FormGroup>
                      <Label for="exampleEmail">Title</Label>
                      <Input
                        onChange={(e) => handleChange(e, i)}
                        // name="title"
                        name={`title${number}`}
                        // value={inp.title}
                        placeholder="Title"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">URL</Label>
                      <Input
                        onChange={(e) => handleChange(e, i)}
                        // value={inp.url}
                        name={`url${number}`}
                        type="text"
                        placeholder="URL"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Timer</Label>
                      <Input
                        onChange={(e) => handleChange(e, i)}
                        // value={inp.timer}
                        name={`timer${number}`}
                        type="text"
                        placeholder="Timer"
                      />
                    </FormGroup>
                    {inputList.length !== 1 && (
                      <Button
                        outline
                        color="danger"
                        className="mr-2 ml-1  "
                        onClick={() => handleRemoveInput(i)}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>
                    )}
                    {inputList.length - 1 === i && (
                      <Button
                        outline
                        color="primary"
                        onClick={() => handleAddInput(i)}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    )}
                  </>
                );
              })}
              <Button outline color="success" className="col mt-2 mb-2">
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
