import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import  { Provider } from "react-redux";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classes from './App.module.scss'

import store from "../store/store";

import PATH from "../pages/path";

import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";

const ItemResultsList = lazy(
  () =>
    import(
      /* webpackChunkName: "ItemResultsListComponent" */ "../pages/ItemResultsList/ItemResultsList"
    )
);
const ItemDetail = lazy(
  () =>
    import(
      /* webpackChunkName: "ItemDetailComponent" */ "../pages/ItemDetail/ItemDetail"
    )
);

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={PATH.HOME} exact component={ItemResultsList} />
            <Route path={PATH.ITEM_DETAIL} exact component={ItemDetail} />
            <Route path={PATH.ITEM_RESULTS_LIST} exact component={ItemResultsList} />
            <Redirect path="*" to ={PATH.HOME} />
          </Switch>
        </Suspense>
      </Router>
      {/* <div style={{position: "absolute"}}> */}
      <div className={classes.toastParenctContainer}>
        {/* este style es sólo para que no ocupe lugar en la grilla :) */}
        <ToastContainer/>
      </div>
      
    </Provider>
  );
}

export default App;
