import React, { useRef } from 'react';
import styles from './product.module.scss';
import Slider from '../../components/common/Sliders/Slider';
import { body } from "../../mockdata.json";
import ProductDetails from "../../components/pages/product/ProductDetails/ProductDetails";
import AdditionalProductDetails from '../../components/pages/product/AdditionalProductDetails/AdditionalProductDetails';

const Product = (props) => {
    const refContainer = useRef();

    const previous = () => refContainer.current.slickPrev();
    const next = () => refContainer.current.slickNext();

    return (
        <div>
            <div className={`${styles.product} gap-12 d-flex p-12 justify-content-center`}>
                <div className={styles.slider}>
                    <Slider
                        className="productDetailsSlider"
                        items={body.productList}
                        slidesToShow={1}
                        render={(item) => (
                            <div className="text-center d-flex-all-center flex-column">
                                <div>
                                    <img src={item.src} width="100%" alt="" />
                                </div>
                            </div>
                        )}
                    />
                </div>
                <ProductDetails />
            </div>
            <AdditionalProductDetails sections={body.additionalProductDetails}/>
        </div>
    )

}

export default Product;