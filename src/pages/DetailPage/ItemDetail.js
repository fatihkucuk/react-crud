import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import Loading from '../../components/Loading/Loading';
import { PAGE_MODE } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { getItem, setItem, postItem, putItem } from './store/actions';

const ItemDetail = (props) => {
  const dispatch = useDispatch();

  const [pageMode, setPageMode] = useState(
    !!props.match.params.id ? PAGE_MODE.UPDATE : PAGE_MODE.INSERT
  );

  const item = useSelector((state) => state.detailPageReducer.item);
  const loading = useSelector((state) => state.rootReducer.loading);

  useEffect(() => {
    dispatch(setItem({ id: '', title: '', body: '' }));
    if (pageMode === PAGE_MODE.UPDATE) {
      dispatch(getItem(props.match.params.id));
    }
  }, []);

  const titleChangedHandler = (e) => {
    item.title = e.target.value;
    dispatch(setItem(item));
  };

  const bodyChangedHandler = (e) => {
    item.body = e.target.value;
    dispatch(setItem(item));
  };

  const navigateToListPage = () => {
    props.history.push('/item-list');
  };

  const addItemHandler = () => {
    const callback = () => {
      navigateToListPage();
    };
    dispatch(postItem(item, callback));
  };

  const updateItemHandler = () => {
    const callback = () => {
      navigateToListPage();
    };
    dispatch(putItem(item, callback));
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
          value={item.title}></input>
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
          value={item.body}></textarea>
      </div>
      <div className="form-group">
        {pageMode === PAGE_MODE.INSERT ? (
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
