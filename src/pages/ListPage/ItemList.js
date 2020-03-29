import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ItemCard from './ItemCard/ItemCard';
import Loading from '../../components/Loading/Loading';
import './ItemList.css';
import { connect } from 'react-redux';
import * as actionCreators from './store/action-types';
import * as rootActionCreators from '../../store/action-types';

const ItemList = (props) => {
  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    props.setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        props.setItems(res.data);
        props.setLoading(false);
      })
      .catch((err) => {
        props.setLoading(false);
        alert(err);
      });
  };

  const onDelete = (id) => {
    props.setLoading(true);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        const filteredItems = props.items.filter((item) => item.id !== id);
        props.setItems(filteredItems);
        props.setLoading(false);
      })
      .catch((err) => {
        props.setLoading(false);
        alert(err);
      });
  };

  const itemList = props.items.map((item) => {
    return <ItemCard key={item.id} item={item} onDelete={onDelete}></ItemCard>;
  });

  return (
    <div className="ItemList">
      {itemList}
      {props.loading && <Loading />}
      {!props.loading && itemList.length === 0 && (
        <p className="not-found-text">No Item Found</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.listPageReducer.items,
    loading: state.rootReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: (items = []) => dispatch(actionCreators.setItems(items)),
    setLoading: (loading = true) =>
      dispatch(rootActionCreators.setLoading(loading)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ItemList));
