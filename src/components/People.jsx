import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context';
import Loader from './Loader';


function People() {
  const [people, setPeople] = useState([]);
  
  useEffect(()=>{
    const fetchPeople = async ()=>{
      const res = await fetch("https://www.swapi.tech/api/people");
      const data = await res.json();
      console.log('people', data)
      setPeople(data.results)
    }
    fetchPeople();
  }, [])

  const trackContext = useContext(Context);

  return (
   
    <section className='Container'>
      { people.length > 0 ? (
          people.map((el, key) => {
            return (
              <Card Key={key} className='container-item'style={{ width: '18rem' }}>
          <Card.Img variant="top" src= { `/People/${el.name}.jpeg` } alt='' />
              <Card.Body>
                <Card.Title>{ el.name }</Card.Title>
                <Card.Text className="item-description">
                  {el.id}
                </Card.Text>
                <Card className='button-container'>
                  <Link
                    variant='primary' 
                    className='learn' 
                    to={ `/people/${el.uid}` }>
                      Learn More
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


export default People;



