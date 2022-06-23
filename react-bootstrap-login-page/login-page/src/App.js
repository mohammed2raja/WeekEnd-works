import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Admin Login</h1>
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
        <Form className="rounded p-4 p-sm-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="success col-12" type="submit">
            Login
          </Button>
        </Form>
        </Col>
      </Row>
      <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 Mohammed Raja. All Rights Reserved.</h6>
    </Container>
  );
}

export default App;
