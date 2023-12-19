import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context';
import Loader from './Loader';

function Planets() {
  const [planets, setPlanets] = useState([]);
  const trackContext = useContext(Context);

  useEffect(()=>{
    const fetchPlanets = async ()=>{
      const res = await fetch("https://www.swapi.tech/api/planets");
      const data = await res.json();
      console.log('planets', data)
      setPlanets(data.results)
    }
    fetchPlanets();
  }, [])

  return (
    <section className='Container'>
    { planets.length > 0 ? (
        planets.map((elem, key) => {
          return (
            <Card Key={key} className='container-item'style={{ width: '18rem' }}>
            <Card.Img variant="top" src= { `/Planets/${elem.name}.jpeg` } alt='' />
            <Card.Body>
              <Card.Title>{ elem.name }</Card.Title>
              <Card className='button-container'>
                <Link
                  variant='primary' 
                  className='learn' 
                  to={ `/planets/${elem.uid}` }>
                    Learn More
                </Link>
                <Button
                        className='star'
                        onClick={() => trackContext.addFavorite(elem)}
                      >★
                </Button>
              </Card>
            </Card.Body>
        </Card>
          )
      })
    ) : (
      <Loader/>
    )} 
  </section>
    
);
}

export default Planets;
