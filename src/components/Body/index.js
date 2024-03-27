import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Body() {
  return (
    <Container>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner3.png" alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="BodySale">
        <h1>Best Sale</h1>
        <CardGroup>
          <Card className="Body">
            <Card.Img variant="top" src="https://cdn0.fahasa.com/media/catalog/product/8/9/8934974164623.jpg" />
            <Card.Body>
              <Card.Title>Một Đời Quản Trị( tái bản 2019)</Card.Title>
              <p>
                <span class="priceSale">150.000đ </span>
                <span class="sale "> -25%</span>
              </p>
              <p>
                <span class="price">200.000</span>
              </p>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Đã bán</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_187337.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn0.fahasa.com/media/catalog/product/z/4/z4409080559449_0043977dc459a92541ca14289f3b7793.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtrestoryfull_15432016_044349.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </Container>
  );
}

export default Body;
