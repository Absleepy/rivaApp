import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../../LazyImage/Image';
import styles from './product.module.scss';

const ProductCard = ({ product }) => {
  const [color, setColor] = useState('');

  const { id, src, name, wasPrice, nowPrice } = product;
  return (
    <div key={id} className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image src={src} />
      </div>
      <div className={styles.actionContainer}>
        <div>
          <span className="material-icons-outlined font-light-black">
            favorite_border
          </span>
        </div>
        <div>
          <span className="material-icons-outlined font-light-black">
            search
          </span>
        </div>
        <div>
          <span className="material-icons-outlined font-light-black">
            shopping_cart
          </span>
        </div>
      </div>
      <div className={styles.productName}>{name}</div>
      <div className={styles.productPrice}>
        <div className={styles.was}>Was {wasPrice}$</div>
        <div className={styles.now}>Now {nowPrice}$</div>
      </div>
      <div className={styles.productColors}>
        <div className={`${styles.color} ${styles.color_red}`}></div>
        <div className={`${styles.color} ${styles.color_oranage}`}></div>
        <div className={`${styles.color} ${styles.color_blue}`}></div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

ProductCard.defaultProps = {
  products: {},
};

export default ProductCard;
