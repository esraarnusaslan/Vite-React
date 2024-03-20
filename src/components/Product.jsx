import React from 'react';

function Product({ productName, price }) {
    // const { productName, price } = props;
    return (
        <div>
            <div>Products</div>
            <div>
                <div>Products Name : {productName}</div>
                <div>Products Price: {price}</div>
            </div>
            <hr></hr>
        </div>
    );
}

export default Product;
