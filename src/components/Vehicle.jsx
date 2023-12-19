import Card from 'react-bootstrap/Card';
import  React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';


function Vehicle() {
  const [vehicle, setVehicle] = useState(null);
  const param = useParams();

  useEffect(()=>{
    const fetchVehicle = async ()=>{
      const res = await fetch(`https://www.swapi.tech/api/vehicles/${param.vehicleId}`);
      const data = await res.json();
      setVehicle(data.result)
      console.log('vehicle', data)
    }
    fetchVehicle();
  }, [])

  return (
   
    <section className='Container'>
      { vehicle ? (
    
        <Card  className='container-item d-flex justify-content-center'style={{ width: '37rem' }}>
        <Card.Img variant="top" src= { `/Vehicles/${vehicle.properties.name}.jpg` } alt='' />
        <Card.Body className='col-12'>
            <Card.Title className='d-flex col-3'>Name: { vehicle.properties.name }</Card.Title>
            <Card.Text className="vehicle-description">
              Description: {vehicle.description}
            </Card.Text>
            <Card.Text className="vehicle-model">
                <Card.Title>Model:</Card.Title>
                <p>{vehicle.properties.model}</p>
            </Card.Text>
            <Card.Text className='vehicle-vehicle_class'>
                <Card.Title>Vehicle Class:</Card.Title>
                <p>{vehicle.properties.vehicle_class}</p>   
            </Card.Text>
            <Card.Text className='vehicle-manufacturer'>
                <Card.Title>Manufacturer:</Card.Title>
                <p>{vehicle.properties.manufacturer}</p>  
            </Card.Text>
            <Card.Text className='vehicle-cost_in_credits'>
                <Card.Title>Cost in Credits:</Card.Title>
                <p>{vehicle.properties.cost_in_credits}</p>  
            </Card.Text>
            <Card.Text className='vehicle-length'>
                <Card.Title>Length:</Card.Title>
                <p>{vehicle.properties.length}</p>  
            </Card.Text>
            <Card.Text className='vehicle-crew'>
                <Card.Title>Crew:</Card.Title>
                <p>{vehicle.properties.crew}</p>  
            </Card.Text>
            <Card.Text className='vehicle-passengers'>
                <Card.Title>Passengers:</Card.Title>
                <p>{vehicle.properties.passengers}</p>  
            </Card.Text>
            <Card.Text className='vehicle-max_atmosphering_speed'>
                <Card.Title>Max Atmosphering Speed:</Card.Title>
                <p>{vehicle.properties.max_atmosphering_speed}</p>  
            </Card.Text>
            <Card.Text className='vehicle-cargo_capacity'>
                <Card.Title>Cargo Capacity:</Card.Title>
                <p>{vehicle.properties.cargo_capacity}</p>  
            </Card.Text>
            <Card.Text className='vehicle-consumables'>
                <Card.Title>Consumables:</Card.Title>
                <p>{vehicle.properties.consumables}</p>  
            </Card.Text>
            

        </Card.Body>
        </Card>
    ) : (
    <Loader/>
    )} 
    </section>
      
  );
};


export default Vehicle;



