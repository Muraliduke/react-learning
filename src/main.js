'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

//history location use Router.history.location
Router.run(routes, Router.HistoryLocation, function(Handler){
    React.render(<Handler/>, document.getElementById('app'));
}); 



  


// //MIGRATED to NEW routng
// // var Home = require('./components/homePage');
// // var About = require('./components/about/aboutPage');
// // var Header = require('./components/common/header');
// // var Author = require('./components/authors/authorPage');
// // Demo Routing starts here
// (function(win){
// "use strict";
// //ROUTING NORMAL
//     // var App = React.createClass({
//     //     render: function(){
//     //         var Child; 
     
//     //         switch(this.props.route){
//     //             case 'About':
//     //             Child = About;
//     //             break;
//     //             case 'Author':
//     //             Child = Author;
//     //             break;
//     //             default:
//     //             Child = Home;
//     //         }
//     //         return (
//     //             <div className='container'>
//     //                 <Header />
//     //                 <Child />
//     //             </div>
    
//     //         );    
    
//     //     } 
//     // });
    
//     function render(){
//         var route = win.location.hash.substr(1);
//         console.log(route);
//         React.render(<App route={route}/>, document.getElementById('app'));
//     }
//     win.addEventListener('hashchange', render);
//     render();
//     //Demo Routing Ends here
    
    


// })(window);

//React.render(<Home/>, document.getElementById('app'));