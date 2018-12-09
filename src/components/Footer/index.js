import React from 'react';
import Logo from '@/assets/images/curadoria_full_white.png';
import BackToTop from '@/assets/images/back-top.png';
import Container from '@/components/Container';

export default function () {
  return ( 
    <footer class="footer">
      <Container>
        <div class="footer-logo">
          <img src={Logo} alt="" />
        </div>

        <div class="footer-phrase">
          <strong>TAG</strong> Livros
        </div>

        <div class="footer-top">
          <img src={BackToTop} alt="" className="back-to-top"/>
        </div>
      </Container>
    </footer>
  );
};