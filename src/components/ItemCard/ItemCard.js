import React from 'react';
import './ItemCard.css';
import { withRouter } from 'react-router-dom';
const ItemCard = (props) => {
  const updateHandler = () => {
    props.history.push(`/update-item/${props.item.id}`);
  };
  const deleteHandler = () => {
    props.onDelete(props.item.id);
  };
  return (
    <div className="ItemCard">
      <div className="button-container">
        <button onClick={updateHandler}>Update</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>

      <h3 className="title" title={props.item.title}>
        {props.item.title}
      </h3>
      <p className="body" title={props.item.body}>
        {props.item.body}
      </p>
    </div>
  );
};

export default withRouter(ItemCard);
