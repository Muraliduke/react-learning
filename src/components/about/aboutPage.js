"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            console.log(transition);
            console.log(callback)
            if(confirm("Do you want to visit this page")){
                callback();
            }
            // if(confirm("Do you want to visit this page")){
            //     transition.abort();
            // }
            // else{
            //     callback();
            // }

        },
        willTransitionFrom: function(transition, component){
            console.log(transition);
            console.log(component)
            if(!confirm("Do you want to leave this page")){
                transition.abort();
            }
            // if(confirm("Do you want to visit this page")){
            //     transition.about();
            // }
            // else{
            //     callback();
            // }

        }

    },
    render: function() {
        return (
            <h2>This is About Page</h2>
        

        );
    }
});

module.exports = About;