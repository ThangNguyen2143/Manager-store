import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container className="my-8">
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

          <div>
            <div className="mt-8 p-2.5 border rounded-t-xl bg-[#3cf]">
              <h1 className="mx-2 text-2xl">Best Sale</h1>
            </div>

            <CardGroup>
              <Card className="Body rounded-t-none ">
                <Card.Img variant="top" src="https://cdn0.fahasa.com/media/catalog/product/8/9/8934974164623.jpg" />
                <Card.Body>
                  <Card.Title>Một Đời Quản Trị( tái bản 2019)</Card.Title>

                  <p>
                    <span className="price">200.000</span>
                  </p>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted ">Đã bán</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_187337.jpg" />
                <Card.Body>
                  <Card.Title>Một Đời Quản Trị( tái bản 2019)</Card.Title>

                  <p>
                    <span className="price">200.000</span>
                  </p>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted ">Đã bán</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_187337.jpg" />
                <Card.Body>
                  <Card.Title>Một Đời Quản Trị( tái bản 2019)</Card.Title>

                  <p>
                    <span className="price">200.000</span>
                  </p>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted ">Đã bán</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn0.fahasa.com/media/catalog/product/z/4/z4409080559449_0043977dc459a92541ca14289f3b7793.jpg"
                />
                <Card.Body>
                  <Card.Title>Một Đời Quản Trị( tái bản 2019)</Card.Title>

                  <p>
                    <span className="price">200.000</span>
                  </p>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted ">Đã bán</small>
                </Card.Footer>
              </Card>
              <Card className="rounded-t-none">
                <Card.Img
                  variant="top"
                  src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtrestoryfull_15432016_044349.jpg"
                />
                <Card.Body>
                  <Card.Title>Một Đời Quản Trị( tái bản 2019)</Card.Title>

                  <p>
                    <span className="price">200.000</span>
                  </p>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted ">Đã bán</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
          <div className="mt-8 sm:flex">
            <Card className="mx-5 w-60">
              <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
              <Card.Body>
                <Card.Title className="flex">
                  Tiểu Thuyết <i class="fa-solid fa-chevron-right text-right "></i>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="mx-5 w-60">
              <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
              <Card.Body>
                <Card.Title className="flex">
                  Card Title <i class="fa-solid fa-chevron-right text-right "></i>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="mx-5 w-60">
              <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
              <Card.Body>
                <Card.Title className="flex">
                  Card Title<i class="fa-solid fa-chevron-right text-right "></i>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="mx-5 w-60">
              <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
              <Card.Body>
                <Card.Title className="flex">
                  Card Title<i class="fa-solid fa-chevron-right text-right "></i>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="mx-5 w-60">
              <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
              <Card.Body>
                <Card.Title className="flex">
                  Card Title <i class="fa-solid fa-chevron-right text-right "></i>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="mx-5 w-60">
              <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
              <Card.Body>
                <Card.Title className="flex">
                  Card Title<i class="fa-solid fa-chevron-right text-right "></i>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="mx-5 w-60">
              <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
              <Card.Body>
                <Card.Title className="flex">
                  Card Title<i class="fa-solid fa-chevron-right text-right "></i>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Container>

        <Footer></Footer>
      </div>
    );
  }
}
