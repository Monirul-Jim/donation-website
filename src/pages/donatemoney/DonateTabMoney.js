// import React from 'react';

// const DonateTabMoney = ({product,onPriceClick }) => {
//     const {price}=product
//     console.log(price);
//     return (
//         <div className='py-4 px-8  mx-auto border border-slate-300'>
//         <button onClick={() => onPriceClick(price)}>$<span>{price}</span></button>
//     </div>
//     );
// };

// export default DonateTabMoney;

import React from 'react';

const DonateTabMoney = ({ product, onPriceClick }) => {
  // Check if 'product' is defined before destructuring 'price'
  if (!product) {
    return null; // or handle the case where 'product' is undefined
  }

  const { price } = product;
  console.log(price);

  return (
    <div className='py-4 px-8 mx-auto border border-slate-300'>
      <button onClick={() => onPriceClick(price)}>
        $<span>{price}</span>
      </button>
    </div>
  );
};

export default DonateTabMoney;
