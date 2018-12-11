import React from 'react';
import CapaLivro from '@/assets/images/2018.10-aberto-ineditos.jpg';
import LogoTag from '@/assets/images/logo.png';
import LogoGoodReads from '@/assets/images/goodreads.png';
import Rating from '@/assets/images/rating.png';

export default function({ book }) {
  return (
    <div>
      <div className="card-expanded-box">
        <div className="card-expanded">
          <div className="card-header">
            <img className="book-image" src={CapaLivro} alt="" />
          </div>

          <div className="card-content">
            <h3 className="card-title">{book.name}</h3>

            <div className="book-details">
              <p className="card-description">
                <strong className="description-item">Autora </strong>
                Keren Dionne
            </p>
              <p className="card-description">
                <strong className="description-item">Edição </strong>
                08/2018
            </p>
              <p className="card-description">
                <strong className="description-item">Curador </strong>
                Milene V. Lacerda
            </p>
              <p className="card-description">
                <strong className="description-item">Nº de Páginas </strong>
                240 Páginas
            </p>
              <p className="card-description">
                <strong className="description-item">Nº de Páginas </strong>
                240 Páginas
            </p>
              <p className="card-description">
                <strong className="description-item">
                  Nº de Avaliações TAG{' '}
                </strong>
                40 Avaliações
            </p>
              <p className="card-description">
                <strong className="description-item">
                  Nº de Avaliações GoodReads{' '}
                </strong>
                30 Avaliações
            </p>
            </div>

            <div className="rating-box">
              <p className="card-description">
                <strong className="description-item rating-item">
                  Média das Avaliações
              </strong>
              </p>
            </div>

            <div className="evaluation-box">
              <div className="box">
                <img src={LogoTag} alt="" className="logo" />
                <span className="grade">5,0</span>
                <img className="rating" src={Rating} alt="" />
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
    </div>
  );
};