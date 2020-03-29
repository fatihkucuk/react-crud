import ItemList from './pages/ListPage/ItemList';
import ItemDetail from './pages/DetailPage/ItemDetail';

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
