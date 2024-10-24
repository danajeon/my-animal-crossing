import { Card, Button } from 'react-bootstrap';

export const VillagersCard = ({ name, personality, image, url }) => {
    const handleButtonClick = () => {
        window.open(url, '_blank');
    };

    return (
        <Card id="villagersCard">
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Title>{name}</Card.Title>
            <Card.Text>Personality: {personality}</Card.Text>
            <Button variant="light" onClick={handleButtonClick}>View Wiki</Button>
        </Card>
    )
}
