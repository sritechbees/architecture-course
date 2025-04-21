import React from 'react';
import ModernArchitectural from '@/pages/modern_architectural/definition';
import LimitedOffer from './limited_offer';

function Offer() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 gap-10 p-10">
      <ModernArchitectural />
      <LimitedOffer />
    </div>
  );
}

export default Offer;
