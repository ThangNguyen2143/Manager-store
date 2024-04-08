import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Body from '~/components/Body';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}
