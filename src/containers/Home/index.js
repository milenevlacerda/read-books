import React from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

const Home = props => (
  <div>
    <Header />
    <Container>
      <Head title="Home" />
      {props.books.map(book => {
        return <Card book={book} key={book.objectId} onClick={(isbn) => navigate(`/book/${isbn}`)}/>;
      })}
    </Container>
    <Footer />
  </div>
);

const mapState = state => ({
  books: state.books,
});

export default connect(mapState)(Home);
