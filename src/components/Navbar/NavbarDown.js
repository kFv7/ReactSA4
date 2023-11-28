import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/https://www.instagram.com/">Instagram</Nav.Link>
        </Nav.Item>
        <Nav.Link href="/https://www.facebook.com/">Facebook</Nav.Link>
        <Nav.Link href="/https://www.x.com/">X</Nav.Link>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            jAlugou
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Direitos reservados</p>
      <Nav className="justify-content-end" activeKey="/home">
      </Nav>
    </>
  );
}

export default AlignmentExample;