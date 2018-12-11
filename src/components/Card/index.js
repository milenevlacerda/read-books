import React from 'react';
import LogoTag from '@/assets/images/logo.png';
import LogoGoodReads from '@/assets/images/goodreads.png';
import ReactStars from 'react-stars'


export default function({ book, onClick }) {
  return <div className="cards-box" onClick={() => onClick(book.isbn)}>
      <div className="card">
        <div className="card-header">
          <img className="book-image" src={book.cover.url} alt="" />
        </div>

        <div className="card-content">
          <h3 className="card-title">{book.name}</h3>
          <p className="card-description">
            <strong className="description-item">Autor </strong>
            {book.author}
          </p>
          <p className="card-description">
            <strong className="description-item">Média das Avaliações</strong>
          </p>
          <div className="evaluation-box">
            <div className="box">
              <img src={LogoTag} alt="" className="logo" />
              <span className="grade">
                {(book.totalRatings / book.numRatings).toFixed(1)}
              </span>
              <div className="rating">
                <ReactStars
                  count={5}
                  value={Math.floor((book.totalRatings / book.numRatings))}
                  edit={false} />
              </div>
            </div>
            {book.goodreads ? <div className="box">
                <img src={LogoGoodReads} alt="" className="logo" />

                <span className="grade">
                  {Number(book.goodreads.average_rating).toFixed(1)}
                </span>
                <div className="rating">
                  <ReactStars
                      count={5}
                      value={Math.floor(Number(book.goodreads.average_rating))}
                      edit={false} />
                </div>
              </div> : null}
          </div>
        </div>
      </div>
    </div>;
}
