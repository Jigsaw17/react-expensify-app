import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
        <div className="container__content_page">
          <div className="box_content__left__container">
            <Header />
          </div>
          <div className="box_content__right__container">
            <Component {...props} />
           </div>
          </div>
        ) : (
            <Redirect to="/" /> 
        )
    )} /> 
);

const mapStateToProps = (props) => ({
    isAuthenticated: !!props.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)

