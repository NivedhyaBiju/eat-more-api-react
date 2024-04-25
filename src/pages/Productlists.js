import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Productlists() {
  const [recipe, setRecipe] = useState([])
  const fetchData = async () => {
    const result = await axios.get('https://dummyjson.com/recipes')
    setRecipe(result.data.recipes);
  }
  useEffect(() => {
    fetchData()
  }, {})
  console.log(recipe);
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <img style={{width:'50%'}} className='m-5' src="https://i.postimg.cc/J7fcbKdN/kisspng-cook-food-chef-restaurant-clip-art-5afb2306d3dda4-3684743315264079428678-removebg-preview.png" alt="" />
          </Col>
          <Col lg={6} className='p-4'>
            <h2 style={{marginTop: '25%'}}>Delivering deliciousness at your fingertips with <span className='text-primary'>Eat-More <i class="fa-solid fa-utensils"></i></span></h2>
          </Col>
        </Row>
      </Container>
      
      {
        recipe.length>0?
        <div className='p-5'>
        <Row>
          {
            recipe.map(i => (
              <Col lg={3} md={4} sm={6} className='p-3'>
                <Link to={`/single-view/${i.id}`} style={{textDecoration:'none'}}>
                <Card style={{ width: '100%' }} className='mt-5 shadow'>
                  <Card.Img className='p-2' src={i.image} />
                  <Card.Body>
                    <Card.Title className='text-secondary'>
                      <h5>{i.name}</h5>
                    </Card.Title>
                    <Card.Text>
                      <h6>Prep-Time-Minutes : {i.prepTimeMinutes}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h6>Cook-Time-Minutes : {i.cookTimeMinutes}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h5>Cuisine : {i.cuisine}</h5>
                    </Card.Text>
                    <Card.Text>
                      <h5>Meal-Type : {i.mealType}</h5>
                    </Card.Text>
                    <Card.Text>
                      <h6>Rating : 
                        <span className={i.rating>4?'text-success':i.rating>3?'text-warning':'text-danger'}>{i.rating} <i class="fa-solid fa-star"></i></span>
                        </h6>
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
              </Col>
            ))
          }
        </Row>
      </div>
      :
      <div className='text-center p-5 m-5'>
        <i class="fa-solid fa-spinner fa-spin fa-4x"></i>
      </div>
      }    
</div>
  )
}

export default Productlists
