/* eslint-disabled strict */
var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jQuery');
var App = React.createClass({
    render: function(){
        
        return (
            <div className='container'>
                <Header />
                <RouteHandler />
            </div>

        );    

    } 
});

module.exports = App;