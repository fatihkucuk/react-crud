import ItemList from './components/ItemList/ItemList';
import ItemDetail from './components/ItemDetail/ItemDetail';

const routes = [
  {
    path: '/item-list',
    component: ItemList,
  },
  {
    path: '/add-new-item',
    component: ItemDetail,
  },
  {
    path: '/update-item/:id',
    component: ItemDetail,
  },
];

export default routes;
