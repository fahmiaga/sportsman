import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar1";
import { Row, Col } from "reactstrap";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      <Row>
        <Sidebar />
        <Col md="6">ini Dashboard</Col>
      </Row>
    </>
  );
};
export default AdminDashboard;
