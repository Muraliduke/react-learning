"use strict";

var React = require('react');

var Home = React.createClass({

    render: function() {
        return (
            <div className='jumbotron'>
                <h1>Home Page</h1>
                <p>Designing web app using React Js</p>
            </div>

        );
    }
});

module.exports = Home;