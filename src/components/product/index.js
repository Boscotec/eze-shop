import React from 'react';

import FallbackProductImage from '../../assets/productImage.svg';
import { GridItem, ProductImage, ProductName, ProductText, Text, ProductAmount, Button } from '../../styles';
import { observer } from "mobx-react-lite"

export const Product = observer(({ data, size }) => {
    const { imgUrl, name, quantity, lowestAsk } = data || {};
    const { price, carrier, storageSize } = lowestAsk || {};

    return (
        <GridItem width={size.width} radius='2px'>
            <ProductImage
                src={imgUrl}
                alt="product"
                width={size.width}
                height={size.height}
                onError={(e) => {
                    e.target.src = FallbackProductImage;
                }}
            />
            <ProductName>{name || ''}</ProductName>
            <ProductText>{`${carrier || ''}${(carrier && storageSize) ? ' | ' : '' }${storageSize || ''}`}</ProductText>
            <Text>Unit price</Text>
            <ProductAmount>{`$ ${price}`}</ProductAmount>
            <ProductText>{`${quantity} Available`}</ProductText>

            <Button margin="16px 20px 0">BUY</Button>
        </GridItem>
    );
});