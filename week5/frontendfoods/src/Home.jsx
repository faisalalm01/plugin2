import React, { Component } from 'react';
import {Navbar,Nav,Form,Button,FormControl,Carousel, Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
    <Link to="/">
         <Navbar.Brand>Foods</Navbar.Brand>
    </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link>
        <Link to="/">Home</Link>
    </Nav.Link>
    <Nav.Link>
    <Link to="/profile">Profile</Link>
    </Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="jagung3.jpg"/>
    <Carousel.Caption>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  <br></br>


<CardDeck>
  <Card>
    <Card.Img variant="top" src="nasigoreng.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="satekambing.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="sateayam.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>
        )
    }
}
