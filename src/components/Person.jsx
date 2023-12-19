import Card from 'react-bootstrap/Card';
import  React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';


function Person() {
  const [person, setPerson] = useState(null);
  const param = useParams();

  useEffect(()=>{
    const fetchPerson = async ()=>{
      const res = await fetch(`https://www.swapi.tech/api/people/${param.personId}`);
      const data = await res.json();
      setPerson(data.result)
      console.log('person', data)
    }
    fetchPerson();
  }, [])

  return (
   
    <section className='Container'>
      { person ? (
    
        <Card  className='container-item d-flex justify-content-center'style={{ width: '37rem' }}>
        <Card.Img variant="top" src= { `/People/${person.properties.name}.jpeg` } alt='' />
        <Card.Body className='col-12'>
            <Card.Title className='d-flex col-6'>Name: { person.properties.name }</Card.Title>
            <Card.Text className="person-description">
              Description: {person.description}
            </Card.Text>
            <Card.Text className="person-mass">
                <Card.Title>Mass:</Card.Title>
                <p>{person.properties.mass}</p>
            </Card.Text>
            <Card.Text className='person-height'>
                <Card.Title>Height:</Card.Title>
                <p>{person.properties.height}</p>   
            </Card.Text>
            <Card.Text className='person-hair_color'>
                <Card.Title>Hair Color:</Card.Title>
                <p>{person.properties.hair_color}</p>  
            </Card.Text>
            <Card.Text className='person-skin_color'>
                <Card.Title>Skin Color:</Card.Title>
                <p>{person.properties.skin_color}</p>  
            </Card.Text>
            <Card.Text className='person-eye_color'>
                <Card.Title>Eye Color:</Card.Title>
                <p>{person.properties.eye_color}</p>  
            </Card.Text>
            <Card.Text className='person-birth_year'>
                <Card.Title>Birth Year:</Card.Title>
                <p>{person.properties.birth_year}</p>  
            </Card.Text>
            <Card.Text className='person-gender'>
                <Card.Title>Gender:</Card.Title>
                <p>{person.properties.gender}</p>  
            </Card.Text>
            <Card.Text className='person-homeworld'>
                <Card.Title>Comeworld:</Card.Title>
                <p>{person.properties.homeworld}</p>  
            </Card.Text>

        </Card.Body>
        </Card>
    ) : (
    <Loader/>
    )} 
    </section>
      
  );
};


export default Person;



