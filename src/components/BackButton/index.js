import React from 'react';
import BackArrow from '@/assets/images/back-arrow.png';

export default function() {
  return (
    <button class="back-button">
      <img src={BackArrow} alt="" className="back-arrow"/>
      <span>Voltar</span>  
    </button>
  );
};


