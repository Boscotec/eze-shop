import React from 'react';

import { ProductGridBox } from '../../styles';
import { Product } from '../product';

export const ProductList = ({ data, size }) => {
    return (
        <ProductGridBox width={size.width}>
            {data &&
                data.map((item, index) => (
                    <Product 
                        key={index} 
                        data={item} 
                        size={size}
                    />
                ))}
        </ProductGridBox>
    );
};