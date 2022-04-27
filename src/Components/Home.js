import React, { useContext } from 'react'
import {product} from '../Context/Context'
import SingleProduct from './SingleProduct';
import './Styles.css'
import Filter from './Filter';

const Home = () => {
    const {products,productState:{byRating,category,brand,searchQuery,sort,price}} = useContext(product);
    //console.log(products)
    const sortedProducts =()=>{
        let sortedProducts = products;
        if(sort){
            sortedProducts = sortedProducts.sort((a,b)=>
                sort==='lowToHigh'?a.price-b.price : b.price-a.price
            );
        }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
              prod.name.toLowerCase().includes(searchQuery)
            );
          }
        if (byRating) {
            sortedProducts = sortedProducts.filter(
              (prod) => prod.ratings >= byRating
            );
          }
        if (category) {
            sortedProducts = sortedProducts.filter((prod) =>
              prod.category===category
            );
          }
        if (brand) {
            sortedProducts = sortedProducts.filter((prod) =>
              prod.brand===brand
            );
          }
        if(price){
           let choice= price.split("-");
           let lowerlimit = parseInt(choice[0]);
           let upperLimit = parseInt(choice[1]);
           sortedProducts = sortedProducts.filter((prod) => 
               prod.price > lowerlimit && prod.price <= upperLimit
           );
        }  
      
          
        return sortedProducts;
    };
    return (
      <div className='home'>
          <Filter />
          <div className='productsContainer'>
          {sortedProducts().map((prod)=>(
            <SingleProduct prod={prod} key={prod.id}/>
        ))}
    </div>
      </div>
    )
  }
  
  export default Home