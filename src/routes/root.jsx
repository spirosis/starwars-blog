import { NavItems } from '../Data/Nav.jsx';
import { useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Context } from '../Context';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

export const Root = () => {
    const [activeLink, setActiveLink] = useState('Characters');
    const [favoriteActive, setFavoriteActive] = useState(false);
    const trackContext = useContext(Context);
    return (
      //Favorites section
        <>
        <Navbar expand='lg' className='bg-body-tertiary'>
          <Container>
          {/* Navigation section */}
          <div className='root'>
            <nav className='side-bar'>
              <h1>StarWars</h1>
              <Nav className='nav-items'>
                {NavItems.map((elem, key) => {
                  return (
                    <Nav.Link
                      key={key}
                      onClick={() => setActiveLink(elem.item)}
                      className={activeLink === elem.item ? 'active-link' : null} 
                    > 
                      <Link to={elem.route}>{elem.item}</Link>
                    </Nav.Link>
                  );
                })}
              </Nav>
            </nav>
          </div>

          <div className='browse'>  
            <Navbar.Brand>StarWars</Navbar.Brand>
            <div
              className='drop-down'

              onMouseOver={() => setFavoriteActive(true)}
              onMouseLeave={() => setFavoriteActive(false)}
            >
              <span>{trackContext.favoriteItems.length}</span>
              
              <NavDropdown title='Favs' id='basic-nav-dropdown'
                className={`drop-menu ${favoriteActive ? null : 'hidden'}`}
                onMouseOver={() => setFavoriteActive(true)}
                onMouseLeave={() => setFavoriteActive(false)}
              >
                {trackContext.favoriteItems.length > 0 ? (
                  trackContext.favoriteItems.map((item, key) => (
                    <div className='favorite-name' key={key}>
                      <p>{item.name}</p>
                      <button
                        onClick={() => {
                          trackContext.removeFavorite(item),
                            console.log('removing', item);
                        }}
                      >
                        🗑️
                      </button>
                    </div>
                  ))
                ) : (
                  <p>empty</p>
                )}
              </NavDropdown>
            </div>
          </div>
          </Container>
        </Navbar>
        <div>
          <Outlet />
        </div>
      </>
    );
};