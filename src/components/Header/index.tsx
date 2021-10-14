import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container, HeaderButtons, Favorites, FavoritesIcon, Cart, CartIcon, CountCart, Home, HomeIcon } from "../../components/Header/style";

interface Props {
  city: any;
}

const Header: React.FC = () => {

    const length = useSelector((state:any) => state.cart.data.length)
    const lengthFavorite = useSelector((state:any) => state.favorite.data.length)
  
    const [location, setLocation] = useState("");

    useEffect(() => {
      axios.get<Props>(`http://ip-api.com/json/`).then((res) => setLocation(res.data.city)).catch(console.log)
    }, []);
  
    return(
    <Container>
        <h6>Pokemon API <b>IZA</b> | React</h6>
        <p>{location}</p>
      <HeaderButtons>

        <NavLink to="/" style={{color: "red"}}>
          <Home>
            <HomeIcon/>
          </Home>
        </NavLink>

        <NavLink to="/favorites" style={{color: "red"}}>
          {lengthFavorite > 0 ?
                  <CountCart>
                    <h6>
                      {lengthFavorite}
                    </h6>
                  </CountCart>
                  :
                  null
            }
          <Favorites>
            <FavoritesIcon/>
          </Favorites>
        </NavLink>

        <NavLink to="/cart" style={{color: "red"}}>
        {length > 0 ?
              <CountCart>
                <h6>
                  {length}
                </h6>
              </CountCart>
              :
              null
        }
          <Cart>
            <CartIcon/>
          </Cart> 
        </NavLink>
        
      </HeaderButtons>
    </Container>
    );
} 

export default Header;