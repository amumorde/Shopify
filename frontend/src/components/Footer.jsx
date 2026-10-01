import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <Container>
        <Row >
          <Col className='text-center py-2'>
            
            <strong className='log1'>S</strong><span className='log2'>hopify &copy; {currentYear}</span>
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
