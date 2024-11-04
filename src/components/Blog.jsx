import { useState } from 'react';
import Card from './Card';

const Blog = () => {
  const [card, setCard] = useState([
    {
      id: 1,
      image: "../../1.jpg",
      date: "12/14/2024",
      text: "Je fais le developpement d'appli mobile et aussi dans le graphisme(photoshop)"
    },
    
    {
      id: 1,
      image: "../../4.jpg",
      date: "12/14/2024",
      text: "Je fais le developpement d'appli mobile et aussi dans le graphisme(photoshop)"
    },
    {
      id: 1,
      image: "../../3.jpeg",
      date: "12/14/2024",
      text: "Je fais le developpement d'appli mobile et aussi dans le graphisme(photoshop)"
    }
  ])
  return (
    <div className="card-container">
      {
        card.map((card, index) => (
          <Card key={index} card={card} />
        ))
      }
    </div>
  );
};

export default Blog;
