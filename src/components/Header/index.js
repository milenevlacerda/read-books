import React from 'react';
import Container from '@/components/Container';
import Logo from '@/assets/images/curadoria_full_white.png';
import SearchIcon from '@/assets/images/search.png';


export default function() {
  return (
    <div className="header">
      <div className="header-images">
        <Container>
          <div className="flex">
            <div className="header-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="search-icon">
              <img src={SearchIcon} alt="" />
            </div>
          </div>
        </Container>        
      </div>
      <div className="header-banner"/>
      <div className="header-title">
        <Container>
          <h1 className="title">Livros Disponíveis</h1>
        </Container>
      </div>
    </div>
  )
};