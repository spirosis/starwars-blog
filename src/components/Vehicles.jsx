import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context';
import Loader from './Loader';

function Vehicles() {
  
  const [vehicles, setVehicles] = useState([]);
  
  useEffect(()=>{
    const fetchVehicles = async ()=>{
      const res = await fetch("https://www.swapi.tech/api/vehicles");
      const data = await res.json();
      console.log('vehicles', data)
      setVehicles(data.results)
    }
    fetchVehicles();
  }, [])

  const trackContext = useContext(Context);

  return (
   
    <section className='Container'>
      { vehicles.length > 0 ? (
          vehicles.map((el, key) => {
            return (
              <Card Key={key} className='container-item'style={{ width: '18rem' }}>
              <Card.Img variant="top" src= { `/Vehicles/${el.name}.jpg` } alt='' />
              <Card.Body>
                <Card.Title>{ el.name }</Card.Title>
                <Card.Text className="item-description">
                  {el.id}
                </Card.Text>
                <Card className='button-container'>
                  <Link
                    variant='primary' 
                    className='learn' 
                    to={ `/vehicles/${el.uid}` }>
                      More Info
                  </Link>
                  <Button
                          className='star'
                          onClick={() => trackContext.addFavorite(el)}
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
};

export default Vehicles;