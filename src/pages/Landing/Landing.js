import React from 'react';
import HeroGrid from '../../components/pages/landing/Hero-grid/HeroGrid';
import Slider from '../../components/common/Sliders/Slider';
import ExtraordinaryEssentials from '../../components/pages/landing/ExtraordinaryEssentials';
import BestSellingProducts from '../../components/pages/landing/BestSellingProducts/BestSellingProducts';
import {
  body,
  categorySlider,
  cardsData,
  mainSlider,
} from '../../mockdata.json';
import TopBrand from '../../components/pages/landing/RecentlyViewSection/TopBrand';
import OneImageBanner from '../../components/pages/landing/Banners/OneImageBanner';
import CardLayout from '../../components/pages/landing/CardLayout';

import VideoPlayer from '../../components/pages/landing/VideoPlayer/VideoPlayer';
import Instagram from '../../components/pages/landing/Instagram/Instagram';

function Landing() {
  return (
    <>
      <div>
        <Slider
          items={mainSlider}
          slidesToShow={1}
          className="mainSlider1"
          render={(item) => <img width="100%" src={item.src} alt="" />}
        />
        <HeroGrid />
        <Slider
          className="categoriesSlider"
          items={categorySlider}
          bgImageUrl="./assets/images/categSlider-bg.png"
          bgImage
          slidesToShow={6}
          header={['Shop By', 'Category']}
          render={(item) => (
            <div className="text-center d-flex-all-center flex-column">
              <div>
                <img src={item.src} width="100%" alt="" />
              </div>
              <div>
                <span>{item.text}</span>
              </div>
            </div>
          )}
        />
        <BestSellingProducts products={body.productList} />
        <VideoPlayer />
        <CardLayout data={cardsData} />
        <ExtraordinaryEssentials products={body.extraordinarySlider} />
        <OneImageBanner img="./assets/images/springSummerBanner.png" />
        <TopBrand />
        <Instagram products={body.instaProducts} />
      </div>
    </>
  );
}

export default Landing;
