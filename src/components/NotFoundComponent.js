"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var NotFound = React.createClass({

    render: function() {
        return (
            <div>
            <h2>OOps!! Something went wrong</h2>
            <p>Page Not found</p>
            <Link to='app'>Back to Home</Link>
            </div>

        );
    }
});

module.exports = NotFound;