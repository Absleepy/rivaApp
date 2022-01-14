import React from 'react';
import ShopNowBtn from '../../../common/Buttons/ShopNowBtn/ShopNowBtn';
import style from './HeroGrid.module.scss';
const HeroGrid = () => {
  return (
    <div className={`${style.grid} container-90 max-width-1600 mx-auto`}>
      {/* <MainSlider className="gridSlider" /> */}
      <div className="position-relative">
        <div className={`${style.overlay} ${style.overlay1}`}>
          <a href="#" className={`${style.overlay} ${style.overlay1}`}>
            <div className={`${style.sliderTxt} text-center `}>
              <h2 className="color-white">SPRING COLLECTION</h2>
              <p className="color-white">
                Discover this week the latest pieces from our latest collection
                Spring summer 2021 Woman
              </p>
              <ShopNowBtn btnClass="mx-auto" text="Shop Now" />
            </div>
          </a>
        </div>
        <img src="./assets/images/gridGirl.png" width="100%" alt="" />
      </div>
      <div className={`d-grid ${style.gap25}`}>
        <div className="position-relative">
          <a href="#" className={`${style.overlay} ${style.overlay2}`}>
            <div className={style.trendyTxt}>
              <h2>Trendy Look</h2>
              <h2 className={style.redBgTxt}>For Every Day</h2>
            </div>
          </a>
          <div className="position-relative">
            <img src="./assets/images/trendGirl.png" width="100%" alt="" />
          </div>
        </div>
        <div className={style.col2Grid}>
          <div className="position-relative">
            <a href="#" className={`${style.overlay} ${style.overlay3}`}>
              <div className={`${style.sliderTxt} text-center `}>
                <h2 className="color-white">MOST WANTED</h2>
                <div>
                  <img
                    src="./assets/images/wave-border.png"
                    width="100px"
                    alt="Wanted"
                  />
                </div>
                <p className={style.yellowTxt}>MID-SEASON SLAE</p>
                <ShopNowBtn btnClass="mx-auto" text="Shop Now" />
              </div>
            </a>
            <img src="./assets/images/wantedGirl.png" width="100%" alt="" />
          </div>

          <div className="position-relative">
            <img src="./assets/images/fashionGirl.png" width="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
