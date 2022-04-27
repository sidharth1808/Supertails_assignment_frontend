import React, { useState, useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating';
import {product} from '../Context/Context'

const Filter = () => {
    const [rating,setRate] = useState(3);

    const {productState:{
        byRating,category,brand,sort,price
    },productDispatch} = useContext(product);
    // console.log(byRating,category,brand,sort);
  return (
    <div className='filters'>
        <span className='title'>
            Filter Products
        </span>
        <span>
            <Form.Check
              inline
              label="Price from lower to higher"
              name="group1"
              type="radio"
              id={'inline-1'}
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh",
                })
              }
              checked={sort === "lowToHigh" ? true : false}
              />
        </span>
        <span>
            <Form.Check
              inline
              label="Price from higher to lower"
              name="group1"
              type="radio"
              id={'inline-2'}
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }
              checked={sort === "highToLow" ? true : false}
            
            />
        </span>
        <span>
        <Form.Select 
        name="group1"
        value={category ? category : ""}
         onChange={(e) =>
            productDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: e.target.value,
            })
          }
         aria-label="Default select example">
          <option value="">Category</option>
          <option value="Tshirt">Tshirt</option>
          <option value="Shirt">Shirt</option>
          <option value="Jeans">Jeans</option>
          <option value="Trousers">Trousers</option>
          <option value="Shorts">Shorts</option>
          <option value="Casuals">Casuals</option>

        </Form.Select>
        </span>
        <span>
        <Form.Select 
         name="group1" 
         value={brand ? brand : ""}
         onChange={(e) =>
            productDispatch({
              type: "FILTER_BY_BRAND",
              payload: e.target.value,
            })
          }
         >
          <option value="">Brand</option>
          <option value="Levis">Levis</option>
          <option value="UCB">UCB</option>
          <option value="Loius Philip">Loius Philip</option>
          <option value="Allen Solly">Allen Solly</option>
          <option value="Basics">Basics</option>
          <option value="Arrow">Arrow</option>

        </Form.Select>
        </span>
        <span>
        <Form.Select 
         name="group1" 
         value={price ? price : ""}
         onChange={(e) =>
            productDispatch({
              type: "FILTER_BY_PRICE",
              payload: e.target.value,
            })
          }
         >
          <option value="">Price</option>
          <option value="0-200">0-200</option>
          <option value="200-600">200-600</option>
          <option value="600-800">600-800</option>
          <option value="800-1000">800-1000</option>
          

        </Form.Select>
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating</label>
            <Rating
             rating={byRating}
             onClick={(i) =>
             productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
             style={{ cursor: "pointer" }}
        />
        </span>

        <Button onClick={
            ()=>productDispatch({
                type:"CLEAR_FILTERS"
            })
        } variant="light">Clear Filters</Button>
        
    </div>
  )
}

export default Filter