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
            <img className="book-image" src={book.cover.url} alt="" />
          </div>

          <div className="card-content">
            <h3 className="card-title">{book.name}</h3>

            <div className="book-details">
              <p className="card-description">
                <strong className="description-item">Autor </strong>
                <p>{book.author}</p>
            </p>
              <p className="card-description">
                <strong className="description-item">Edição </strong>
                <p>{book.edition}</p>
            </p>
              <p className="card-description">
                <strong className="description-item">Curador </strong>
                <p>{book.curator}</p>
            </p>
              <p className="card-description">
                <strong className="description-item">Nº de Páginas </strong>
                <p>{book.pages} Páginas</p>
            </p>
            <p className="card-description">
                <strong className="description-item">
                  Nº de Avaliações TAG{' '}
                </strong>
                <p>{book.totalRatings} Avaliações</p>
            </p>
            {book.goodreads ? <p className="card-description">
                <strong className="description-item">
                  Nº de Avaliações GoodReads{' '}
                </strong>
                <p>{book.goodreads.ratings_count}</p> Avaliações
            </p> : null}
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

              {book.goodreads ? <div className="box">
                <img src={LogoGoodReads} alt="" className="logo" />
                <span className="grade">5,0</span>
                <img className="rating" src={Rating} alt="" />
              </div> : null}
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};