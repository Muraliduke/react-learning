"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var List = require('./authorList');

var Author = React.createClass({

    getInitialState: function(){
        return {
            authors: []
        };
            
    
    },

   componentDidMount: function(){
       if(this.isMounted()){
        this.setState({authors: AuthorApi.getAllAuthors()});

       }
      

   },

    render: function() {
      
          
        return (
            <List authors={this.state.authors}/>

        );
    }
});

module.exports = Author;