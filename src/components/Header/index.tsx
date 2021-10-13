import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container, HeaderButtons, Favorites, FavoritesIcon, Cart, CartIcon } from "../../components/Header/style";


const Header: React.FC = () => {

    const length = useSelector((state:any) => state.cart.data.length)
    console.log(length);
    return(
    <Container>
        <p>Pokemon API <b>IZA</b> | React</p>
      <HeaderButtons>
       
        <Favorites>
          <FavoritesIcon/>
        </Favorites>
        <NavLink to="/cart">
          <Cart>
            {/* <CartIcon/> */}
            {length}
          </Cart>
        </NavLink>
        
      </HeaderButtons>
    </Container>
    );
} 

export default Header;