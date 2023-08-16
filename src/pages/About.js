import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

const About = () => {
    return (
        <div className='about'>
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla a, sed ab itaque magni nostrum ullam. Aperiam necessitatibus, inventore eligendi delectus quod fugit ipsum reprehenderit cupiditate porro nulla iste numquam deserunt impedit totam magnam voluptate sint, tempora voluptates repudiandae architecto? Nisi assumenda hic quod doloremque nemo enim accusamus voluptates molestias!</p>
            </div>
        </div>
    )
}

export default About
