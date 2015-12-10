var React = require('react');
var ThumbnailList = require('./ThumbnailList');

var options = {
  thumbnailData: [
    {
      title: 'Sent',
      number: 30,
      header: 'Learn React',
      description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
      imageUrl: 'https://cdn.auth0.com/blog/react-js/react.png'
    },
    {
      title: 'Sent',
      number: 31,
      header: 'Learn React',
      description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
      imageUrl: 'https://cdn.auth0.com/blog/react-js/react.png'
    },
    {
      title: 'Sent',
      number: 32,
      header: 'Learn React',
      description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
      imageUrl: 'https://cdn.auth0.com/blog/react-js/react.png'
    }
  ]
}

// Render the class
var element = React.createElement(ThumbnailList, options);

// add the created element to the body
React.render(element, document.querySelector(".target"));
