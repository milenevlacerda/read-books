import React from 'react';
import LogoTag from '@/assets/images/logo.png';
import LogoGoodReads from '@/assets/images/goodreads.png';
import Rating from '@/assets/images/rating.png';
import RatingColored from '@/assets/images/rating-colored.png';

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
                <div className="stars"></div>
                <div className="stars"></div>
                {/* <img src={Rating} alt="" /> */}
                {/* <img src={RatingColored} alt="" width={`${((book.totalRatings / book.numRatings) * 100) / 5}%`} /> */}
              </div>
            </div>
            {book.goodreads ? <div className="box">
                <img src={LogoGoodReads} alt="" className="logo" />

                <span className="grade">
                  {Number(book.goodreads.average_rating).toFixed(1)}
                </span>
                <img className="rating" src={Rating} alt="" />
              </div> : null}
          </div>
        </div>
      </div>
    </div>;
}
