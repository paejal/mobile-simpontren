import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/elements/ErrorBoundary';
import MainBase from './components/Layouts/Main/MainBase';
import Pages from './pages';

const App = ({ store }) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainBase><Outlet /></MainBase>} >
              <Route element={<Pages.Home/>} exact path="/" />
              <Route element={<Pages.Home />} path="/home" />
              <Route element={<Pages.List />} path="/list" />
              <Route element={<Pages.Details />} exact path="/details/:id" />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default hot(App);

App.propTypes = {
  store: PropTypes.object.isRequired,
};
