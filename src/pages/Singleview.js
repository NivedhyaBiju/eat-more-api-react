import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

function Singleview() {

  const [ingredients, setIngredients] = useState({})

  const params = useParams()
  // console.log(params.id);

  const singleData = async () => {
    const result = await axios.get(`https://dummyjson.com/recipes/${params.id}`)
    setIngredients(result.data);
  }

  useEffect(() => {
    singleData()
  }, [])

  console.log(ingredients);

  return (
    <div>
      <Row>
        {
          ingredients?
          <>
          <Col lg={6}>
          <img src={ingredients?.image} className='w-100 p-5' style={{ height: '700px' }} alt="" />
          </Col>
          <Col lg={6}>
          <h1 className='text-center text-secondary'>{ingredients?.name}</h1>
          <Container className='m-3'>
            <ListGroup className='py-5'>
              <h4>Ingredients:</h4>
              <ul>
                {ingredients?.ingredients && ingredients?.ingredients.map((ingredient, index) => (
                  <p key={index}>{index + 1}. {ingredient}</p>
                ))}
              </ul>
              <h4>Instructions:</h4>
              <ul>
                {ingredients?.instructions && ingredients?.instructions.map((ingredient, index) => (
                  <p key={index}>{index + 1}. {ingredient}</p>
                ))}
              </ul>
            </ListGroup>
          </Container>
        </Col>
        </>
        :
        <div className='text-center p-5 m-5'>
        <i class="fa-solid fa-spinner fa-spin fa-4x"></i>
        </div>
        }
      </Row>
    </div>
  )
}

export default Singleview
