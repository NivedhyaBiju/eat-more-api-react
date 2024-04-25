import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar className="bg bg-dark" expand='lg'>
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home" className='d-flex align-items-center'>
            <img style={{width:'15%', height:'auto'}} className='p-3' src="https://i.postimg.cc/d0KBwDvb/pngtree-white-chef-hat-hat-cartoon-material-png-png-image-4680511-removebg-preview.png" alt="" />
            <h3 className='text-primary m-0 m1-2'>Eat-More <i class="fa-solid fa-utensils"></i></h3>
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
