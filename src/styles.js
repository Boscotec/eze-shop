import styled from 'styled-components';

export const ProductGridBox = styled.div`
    display: grid;
    justify-content: space-between;
    align-items: center; 
    grid-template-columns: ${({ width }) => `repeat(auto-fit, minmax(${width}, 1fr))`};
    grid-gap: 1em;
`;

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2px 0;
    background-color: #1E242F;
    padding: 16px;
    border-radius: ${({ radius }) => radius || null};
    width: ${({ width }) => width || null};
`;

export const ProductImage = styled.img`
    width: ${({ width }) => width || '102px'};
    height: ${({ height }) => height || '102px'};
    margin-top: ${({ top }) => top || 0};
    margin-bottom: 4px;
    object-fit: cover;
    padding: 0;
`;

export const ProductName = styled.div`
    font-size: 12px;
    line-height: 18px;
    margin-top: 8px;
    color: #C5C6C9;
    font-weight: 700;
`;

export const ProductAmount = styled.div`
    font-size: 16px;
    line-height: 21px;
    color: #FFFFFF;
    font-weight: 700;
`;

export const ProductText = styled.div`
    font-size: 10px;
    line-height: 16px;
    color: #C1C2C5;
    font-weight: 400;
`;

export const Text = styled.div`
    font-size: 8px;
    line-height: 14px;
    margin-top: 5px;
    color: #C5C6C9;
    font-weight: 400;
`;

export const Button = styled.button`
    display: inline-block;
    background-color: #017EE5;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    height: 30px;
    width: 60px;
    margin: ${({ margin }) => margin || null};
    color: #C5C6C9;;
    cursor: pointer;
    outline: none;
    border: none;
    -webkit-tap-highlight-color: transparent;

    &:focus::after {
        display: block;
    }

    &:disabled {
        opacity: 0.5;
    }
`;       