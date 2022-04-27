import React, {  createContext, useReducer } from 'react';
import { productReducer } from './Reducers';

import { faker } from '@faker-js/faker';
faker.seed(100)

export const product = createContext();

// product will be the name of our context or state

const Context = ({children}) => {
    const products = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.image(),
        ratings:faker.random.arrayElement([1,2,3,4,5]),
        brand:faker.random.arrayElement(['Levis','UCB','Loius Philip','Allen Solly','Basics','Arrow']),
        category:faker.random.arrayElement(['Tshirt','Shirt','Jeans','Trousers','Shorts','Casuals']),
    }));
    //console.log(products);

    const [productState, productDispatch] =useReducer(productReducer,{
        byRating:0,
        category:"",
        brand:"",
        searchQuery:"",
        price:"",
    });
  return (
    <product.Provider value={{products, productState, productDispatch}}>{children}</product.Provider>
  )
}

export default Context