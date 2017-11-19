"use strict";

var React = require('react');

var List = React.createClass({

    render: function() {
        var createAuthorRow = function(author){
            console.log(author);
            return (
                <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>
            );

          };

        return (
            <div>
            <h2>This is Author Page</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
            </div>
        

        );
    }
});

module.exports = List;