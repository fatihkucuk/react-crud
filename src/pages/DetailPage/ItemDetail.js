import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import Loading from '../../components/Loading/Loading';
import { connect } from 'react-redux';
import * as actionCreators from './store/action-types';
import * as rootActionCreators from '../../store/action-types';
import { PAGE_MODE } from '../../constants';
const ItemDetail = (props) => {
  const [pageMode, setPageMode] = useState(
    !!props.match.params.id ? PAGE_MODE.UPDATE : PAGE_MODE.INSERT
  );

  useEffect(() => {
    props.setItem({ id: '', title: '', body: '' });
    if (pageMode === PAGE_MODE.UPDATE) {
      props.getItem(props.match.params.id);
    }
  }, []);

  const titleChangedHandler = (e) => {
    props.item.title = e.target.value;
    props.setItem(props.item);
  };

  const bodyChangedHandler = (e) => {
    props.item.body = e.target.value;
    props.setItem(props.item);
  };

  const navigateToListPage = () => {
    props.history.push('/item-list');
  };

  const addItemHandler = () => {
    const callback = () => {
      navigateToListPage();
    };
    props.postItem(props.item, callback);
  };

  const updateItemHandler = () => {
    const callback = () => {
      navigateToListPage();
    };
    props.setLoading(true);
    props.putItem(props.item, callback);
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
          value={props.item.title}></input>
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
          value={props.item.body}></textarea>
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
      {props.loading && <Loading />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.detailPageReducer.item,
    loading: state.rootReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItem: (id) => dispatch(actionCreators.getItem(id)),
    setItem: (item) => dispatch(actionCreators.setItem(item)),
    postItem: (item, callback) =>
      dispatch(actionCreators.postItem(item, callback)),
    putItem: (item, callback) =>
      dispatch(actionCreators.putItem(item, callback)),
    setLoading: (loading) => {
      dispatch(rootActionCreators.setLoading(loading));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
