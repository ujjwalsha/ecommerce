import React from 'react'
import Image_1 from '../../assets/Products/Product-1.png';
import Image_2 from '../../assets/Products/Product-2.png';
import Image_3 from '../../assets/Products/Product-3.png';
import Image_4 from '../../assets/Products/Product-4.png';
import Image_5 from '../../assets/Products/Product-5.png';
import Image_6 from '../../assets/Products/Product-6.png';
import Image_7 from '../../assets/Products/Product-7.png';
import Image_8 from '../../assets/Products/Product-8.png';
import Image_9 from '../../assets/Products/Product-9.png';
import Image_10 from '../../assets/Products/Product-10.png';
import Logo from '../../assets/Logo/logo.png';
import './herosection.css';

const Herosection = () => {
    const products = [
        { id: 1, src: Image_1, alt: 'Biryani Masala', idName: 'product1' },
        { id: 2, src: Image_2, alt: 'Iron Man', idName: 'product2' },
        { id: 3, src: Image_3, alt: 'Spider-Man', idName: 'product3' },
        { id: 4, src: Image_4, alt: 'Black Widow', idName: 'product4' },
        { id: 5, src: Image_5, alt: 'Hawkeye', idName: 'product5' },
        { id: 6, src: Image_6, alt: 'Hulk', idName: 'product6' },
        { id: 7, src: Image_7, alt: 'Thor', idName: 'product7' },
        { id: 8, src: Image_8, alt: 'Moon Knight', idName: 'product8' },
        { id: 9, src: Image_9, alt: 'Moon Knight', idName: 'product9' },
        { id: 10, src: Image_10, alt: 'Moon Knight', idName: 'product10' },
      ];
    
      return (
        <div className="container-3D">
          <div className="box"><img src={Logo} alt="" className='logo' />
            {products.map((product) => (
              <span key={product.id} style={{ '--i': product.id }}>
                <img src={product.src} alt={product.alt} id={product.idName} />
              </span>
            ))}
          </div>
        </div>
  )
}

export default Herosection