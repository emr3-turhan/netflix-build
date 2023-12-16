import React, {useState,useEffect } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

function Nav() {

  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    }
    else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])


  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img 
            onClick={() => navigate('/')}
            className='nav__logo'
            src="https://images.squarespace-cdn.com/content/v1/5f92457e465b83228c8a6942/1603428151619-44KEDB5JRLLEIJI5BV3P/netflix+logo.png" 
            alt=""
            />

            <img
            onClick={() => navigate('/profile')}
            className='nav__avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            />
        </div>
    </div>
  )
}

export default Nav