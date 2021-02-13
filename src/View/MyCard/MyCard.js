import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './MyCard.scss'



const MyCard = (props) => {
  return (
    <div   >
      <Card  className="my-card" style={{borderRadius:'0px'}} >
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody className="my-card-body" >
          <div>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${" "}{props.price}</CardSubtitle>
          </div>
          <Link className="buy-now-btn hvr-sweep-to-right" >  {props.button} </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyCard;
