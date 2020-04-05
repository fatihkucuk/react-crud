import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ItemCard from './ItemCard/ItemCard';
import Loading from '../../components/Loading/Loading';
import './ItemList.css';
import { connect } from 'react-redux';
import * as actionCreators from './store/action-types';
import * as rootActionCreators from '../../store/action-types';

const ItemList = (props) => {
  useEffect(() => {
    props.getItems();
  }, []);

  const onDelete = (id) => {
    props.deleteItem(id);
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
    getItems: () => dispatch(actionCreators.getItems()),
    setItems: (items = []) => dispatch(actionCreators.setItems(items)),
    deleteItem: (id) => dispatch(actionCreators.deleteItem(id)),
    setLoading: (loading = true) =>
      dispatch(rootActionCreators.setLoading(loading)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ItemList));
