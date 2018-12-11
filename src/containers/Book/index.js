import React from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Header from '@/components/Header';
import CardExpanded from '@/components/CardExpanded/index';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton/index';
import Wrapper from '@/components/Wrapper/index';

function Book({ isbn, books }) {
  return (
    <div>
      <Header/>
      <Container>
        <Head title="Home" />
        <Wrapper>
          <BackButton onBack={() => navigate('/')} />
          <CardExpanded book={books.find((book) => book.isbn === isbn)} />
        </Wrapper>
      </Container>
      <Footer/>
    </div>    
  );
}

const mapState = state => ({
  books: state.books,
});

export default connect(mapState)(Book);
