import React from 'react';
import Logo from '@/assets/images/curadoria_full_white.png';
import BackToTop from '@/assets/images/back-top.png';
import Container from '@/components/Container';

export default function () {
  return ( 
    <footer className="footer">
      <Container>
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>

        <div className="footer-phrase">
          <strong>TAG</strong> Livros
        </div>

        <div className="footer-top">
          <img src={BackToTop} alt="" className="back-to-top"/>
        </div>
      </Container>
    </footer>
  );
};