import React from 'react';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Header/>
      <Container>
        <Head title="Home" />
        <Card/>
      </Container>
      <Footer/>
    </div>    
  );
}
