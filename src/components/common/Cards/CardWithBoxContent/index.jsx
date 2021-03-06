import React from 'react';
import ShopNowBtn from '../../Buttons/ShopNowBtn/ShopNowBtn';
import style from './style.module.scss';
const CardWithBoxContent = ({ item }) => {
  return (
    <div className="position-relative">
      <div>
        <img src={item.image} width="100%" alt={item.title} />
      </div>
      <div className={style.cardBoxContent}>
        <h3 className="text-center">{item.title}</h3>
        <p className={`text-center ${style.description}`}>{item.description}</p>
        <ShopNowBtn btnClass="bg-black color-white mx-auto" text="Shop Now" />
      </div>
    </div>
  );
};

export default CardWithBoxContent;
