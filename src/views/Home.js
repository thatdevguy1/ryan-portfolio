import "./Home.css"
import React from "react";
import MyPic from "../assets/MyPic.jpg"

function Home() {
  return (
    <div class="container">
      <h1>Welcome to my website!</h1><br></br>
      <img  src={MyPic} width="240px" height="280px"/> <br></br><br></br>
      <h2>My name is Ryan , and I am a Full Stack Web Developer.</h2><br></br>
      <p> Prior to pursuing a career in web development, I worked as a Registered Massage Therapist, a professional wild food forager, and I also have a background in sales. The sales field of work was primary related to the technology sector. Namely inventory management systems, and solar energy systems. In addition to programming related skills, I have a diverse background and history of success within these other fields. Both the knowledge and skills acquired are transferable to any position. I have strong communication skills, time management abilities, and I am proficient in understanding the lingo of other professions. These attributes can aid in meeting a diverse range of peoples needs and project requirements. I am pursuing employment opportunities where I can apply these skills and abilities along with my capabilities as a web developer.</p><br></br>
      <p> Proficient in: HTML, CSS, BootStrap, JavaScript, JQuery, MySQL, MongoDB, Node.js, Express.js, React.js</p>
    </div>

  );
}

export default Home;