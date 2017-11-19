"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({

    render: function() {
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">

                <a className="navbar-brand" href="#">React JS</a>
              </div>
              <ul className="nav navbar-nav">
              <li><Link to='app'>Home</Link></li>
              <li><Link to='Author'>Author</Link></li>
              <li> <Link to='About'>About</Link></li>
                {/* <li><a href="#">Home</a></li>
                <li><a href="#Author">Author</a></li>
                <li><a href="#About">About</a></li>  */}
                 
              </ul>
            </div>
          </nav>
        

        );
    }
});

module.exports = Header;