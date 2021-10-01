import React from 'react';

import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;

    margin-top: 76px;
`;

const Card = styled.div`
    display: grid;
    width: 100%;
    gap: 10px;
`;

const CardImagePlaceHolder = styled.div`
    width: 100%;
    height: 100px;
`;

const SkeletonCard = () => {
    return (
        <List>
            {Array(9)
                .fill()
                .map((_item, index) => (
                    <Card key={index}>
                        <CardImagePlaceHolder>
                            <Skeleton width={`100%`} height={`100%`} />
                        </CardImagePlaceHolder>
                        <Skeleton width={`90%`} height={10} />
                    </Card>
                ))}
        </List>
    );
};

export default SkeletonCard;