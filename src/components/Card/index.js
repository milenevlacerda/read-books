import React from 'react';
import CapaLivro from '@/assets/images/2018.10-aberto-ineditos.jpg';
import LogoTag from '@/assets/images/logo.png';
import LogoGoodReads from '@/assets/images/goodreads.png';
import Rating from '@/assets/images/rating.png';

export default function() {
  return (
    <div className="cards-box">
      <div className="card">
        <div className="card-header">
          <img className="book-image" src={CapaLivro} alt="" />
        </div>

        <div className="card-content">
          <h3 className="card-title">A Filha do Rei do Pântano</h3>
          <p className="card-description">
            <strong className="description-item">Autora </strong>
            Keren Dionne
          </p>
          <p className="card-description">
            <strong className="description-item">Média das Avaliações</strong>
          </p>
          <div className="evaluation-box">
            <div className="box">
              <img src={LogoTag} alt="" className="logo" />
              <span className="grade">5,0</span>
              <img className="rating" src={Rating} alt=""/>
            </div>
            <div className="box">
              <img src={LogoGoodReads} alt="" className="logo" />
              <span className="grade">5,0</span>
              <img className="rating" src={Rating} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};