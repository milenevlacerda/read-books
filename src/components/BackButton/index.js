import React from 'react';
import BackArrow from '@/assets/images/back-arrow.png';

export default function({ onBack }) {
  return (
    <button class="back-button" onClick={() => onBack()}>
      <img src={BackArrow} alt="" className="back-arrow"/>
      <span>Voltar</span>  
    </button>
  );
};


