import React ,{useContext} from 'react'
import { Container, Navbar,FormControl,Nav, Dropdown, Badge } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {product} from '../Context/Context'


const Header = () => {
    const {productState:{
        byRating,category,brand,searchQuery,sort
    },productDispatch} = useContext(product);
  return (
      
    <Navbar  variant="dark" style={{height:80 , 
    backgroundColor:"rgb(38, 110, 5)"}}>
    <Container>
    <Navbar.Brand >
        <Link to="/">Shopping</Link>
    </Navbar.Brand>
    <Navbar.Text className="search">
        <FormControl
         style={{width:500}}
         placeholder="Search a product"
         className="m-auto"
         onChange={(e)=>{
            productDispatch({
                type:"FILTER_BY_SEARCH",
                payload:e.target.value
            })
        }}
        />
    </Navbar.Text>
    <Nav>
        <Dropdown alignRight>
        <Dropdown.Toggle variant="light">
         <FaShoppingCart color="black" fontSize="25px"/>
         
        </Dropdown.Toggle>
        <Dropdown.Menu style={{minWidth:370}}>
            <span style={{paddimg:10}}>Cart is empty!</span>
        </Dropdown.Menu>
        </Dropdown>
    </Nav>
    
    </Container>
  </Navbar>
    
  )
}

export default Header