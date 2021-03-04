import React, { useState, useEffect } from "react";
// import Navbar from "../../components/Navbar1";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col, Table, Button } from "reactstrap";
import Sidebar from "../../components/Sidebar";
import { getContent } from "../../redux/Action/contentAction";

const AdminContent = () => {
  useEffect(() => {
    document.title = "Add Content";
  }, []);

  const history = useHistory();
  const contents = useSelector((state) => state.content.content);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContent(token));
  }, [dispatch, token]);
  console.log("contents =>", contents);

  return (
    <>
      <Row>
        <Col md="3">
          <Sidebar />
        </Col>
        <Col className="mt-5" md="9">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Workout Name</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contents.map((content, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{content.title}</td>
                  <td>{content.gender}</td>
                  <td>
                    <Button
                      onClick={() => history.push(`add-content/${content._id}`)}
                      outline
                      color="primary"
                      className="mr-1"
                    >
                      <i class="fas fa-plus-circle"></i>
                    </Button>
                    <Button outline color="warning" className="mr-1">
                      <i class="fas fa-edit"></i>
                    </Button>
                    <Button outline color="danger" className="mr-1">
                      <i class="fas fa-trash-alt"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};
export default AdminContent;
