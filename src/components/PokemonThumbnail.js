import React from 'react';
import { Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const PokemonThumbnail = ({id,name,image,type}) => {

    const bgcolor = `thumb-container ${type}`

    return (
        <div>
            <Col style={{ padding: '30px' }} >
                <Card className={bgcolor}>
                    <CardText>
                    <small className="text-muted">#0{id}</small>
                    </CardText>
                    <CardImg alt={name} src={image} top width="50%" height="250px" />
                    <CardBody>
                        <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle> 
                        <small className="text-muted">Type: {type}</small>
                    </CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}

export default PokemonThumbnail
