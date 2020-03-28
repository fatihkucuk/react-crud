import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ItemCard from '../ItemCard/ItemCard';
import './ItemList.css';
import Loading from '../Loading/Loading';
const ItemList = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

  const onDelete = (id) => {
    setLoading(true);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

  const itemList = items.map((item) => {
    return <ItemCard key={item.id} item={item} onDelete={onDelete}></ItemCard>;
  });

  return (
    <div className="ItemList">
      {itemList}
      {loading && <Loading />}
      {!loading && itemList.length === 0 && (
        <p className="not-found-text">No Item Found</p>
      )}
    </div>
  );
};

export default withRouter(ItemList);
