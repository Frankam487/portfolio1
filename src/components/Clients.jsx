import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientComponent from "./ClientComponent";
import { useState } from "react";

const Clients = () => {
    const [data, setData] = useState([
        {
            id: 1,
            image: '../../public/fr.jpg',
            title: 'Kamgang Frank',
            subtitle: 'Client',
            paragraph: 'jaime bcp ce que tu fais sur les reseaux sociaux je tenais vraiment a te remercier ....'
        },
        {
            id: 2,
            image: '../../public/images.jpeg',
            title: 'Marco luc',
            subtitle: 'Client',
            paragraph: 'Je te souhaite beaucoup de courage dans tes realisations'
        },
        {
            id: 3,
            image: '../../public/4.jpg',
            title: 'Kamgang Frank',
            subtitle: 'Client',
            paragraph: 'jaime bcp ce que tu fais sur les reseaux sociaux je tenais vraiment a te remercier ....'
        },
        {
            id: 4,
            image: '../../public/1.jpg',
            title: 'Kamdem Bruno',
            subtitle: 'Client',
            paragraph: 'jaime bcp ce que tu fais sur les reseaux sociaux je tenais vraiment a te remercier ....'
        }
    ])
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="clients">
            <div className="first-text">
                <h4>Testimonial</h4>
                <h1>C'que mes clients disent</h1>
            </div>
            <Carousel responsive={responsive}>
                {
                    data.map((data, index) => (
                        <ClientComponent key={index} title={data.title} subtitle={data.subtitle} paragraph={data.paragraph} image={data.image} />
                    ))
                }

            </Carousel>
        </div>
    );
};

export default Clients;
