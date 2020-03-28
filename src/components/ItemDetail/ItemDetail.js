import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import axios from 'axios';
import Loading from '../Loading/Loading';

const ItemDetail = (props) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [pageMode, setPageMode] = useState(
    !!props.match.params.id ? 'Update' : 'Insert'
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pageMode === 'Update') {
      setLoading(true);
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
        )
        .then((res) => {
          const item = res.data;
          setId(item.id);
          setTitle(item.title);
          setBody(item.body);
          setLoading(false);
        })
        .catch((err) => {
          alert(err);
          setLoading(false);
        });
    }
  }, []);

  const titleChangedHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyChangedHandler = (e) => {
    setBody(e.target.value);
  };

  const addItemHandler = () => {
    const item = {
      title,
      body,
    };
    setLoading(true);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', item)
      .then((res) => {
        props.history.push('/item-list');
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  const updateItemHandler = () => {
    const updatedItem = {
      id,
      title,
      body,
    };
    setLoading(true);
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedItem)
      .then((res) => {
        props.history.push('/item-list');
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  return (
    <div className="ItemDetail">
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-item"
          id="title"
          type="text"
          placeholder="Title"
          onChange={titleChangedHandler}
          value={title}></input>
      </div>
      <div className="form-group">
        <label>Body</label>
        <textarea
          className="form-item"
          id="body"
          type="text"
          rows="5"
          placeholder="Body"
          onChange={bodyChangedHandler}
          value={body}></textarea>
      </div>
      <div className="form-group">
        {pageMode === 'Insert' ? (
          <button className="button" onClick={addItemHandler}>
            Add
          </button>
        ) : (
          <button className="button" onClick={updateItemHandler}>
            Update
          </button>
        )}
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default ItemDetail;
