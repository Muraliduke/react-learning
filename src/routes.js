"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name='app' path='/' handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name='Author' handler={require('./components/authors/authorPage')}/>
        <Route name='About' handler={require('./components/about/aboutPage')}/>
        <NotFoundRoute handler={require('./components/NotFoundComponent')} />
        <Redirect from='about-us' to='About'/>
        <Redirect from='Awthor' to='Author'/>
        <Redirect from='Awthor/*' to='Author'/>  
    </Route>

);


module.exports = routes;