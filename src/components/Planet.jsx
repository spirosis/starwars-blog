import Card from 'react-bootstrap/Card';
import  React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';


function Planet() {
  const [planet, setPlanet] = useState(null);
  const param = useParams();

  useEffect(()=>{
    const fetchPlanet = async ()=>{
      const res = await fetch(`https://www.swapi.tech/api/planets/${param.planetId}`);
      const data = await res.json();
      setPlanet(data.result)
      console.log('planet', data)
    }
    fetchPlanet();
  }, [])

  return (
   
    <section className='Container'>
      { planet ? (
    
        <Card  className='container-item d-flex justify-content-center'style={{ width: '37rem' }}>
        <Card.Img variant="top" src= { `/Planets/${planet.properties.name}.jpeg` } alt='' />
        <Card.Body className='col-12'>
            <Card.Title className='d-flex col-3'>Name: { planet.properties.name }</Card.Title>
            <Card.Text className="item-description">
              Body Type: {planet.description}
            </Card.Text>
            <Card.Text className="item-weather">
                <Card.Title>Type of Weather:</Card.Title>
                <p>{planet.properties.climate}</p>
            </Card.Text>
            <Card.Text className='item-diameter'>
                <Card.Title>Diameter:</Card.Title>
                <p>{planet.properties.diameter}</p>   
            </Card.Text>
            <Card.Text className='item-gravity'>
                <Card.Title>Gravity:</Card.Title>
                <p>{planet.properties.gravity}</p>  
            </Card.Text>
            <Card.Text className='item-orbital'>
                <Card.Title>Orbital_period:</Card.Title>
                <p>{planet.properties.orbital_period}</p>  
            </Card.Text>
            <Card.Text className='item-population'>
                <Card.Title>Population:</Card.Title>
                <p>{planet.properties.population}</p>  
            </Card.Text>
            <Card.Text className='item-rotation'>
                <Card.Title>Rotation Period:</Card.Title>
                <p>{planet.properties.rotation_period}</p>  
            </Card.Text>
            <Card.Text className='item-surface_water'>
                <Card.Title>Surface Water:</Card.Title>
                <p>{planet.properties.surface_water}</p>  
            </Card.Text>
            <Card.Text className='item-terrain'>
                <Card.Title>Terrain:</Card.Title>
                <p>{planet.properties.terrain}</p>  
            </Card.Text>

        </Card.Body>
        </Card>
    ) : (
    <Loader/>
    )} 
    </section>
      
  );
};


export default Planet;



