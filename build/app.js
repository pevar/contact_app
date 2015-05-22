var React = require('react');



//var ContactList = require('./components/ContactList.react');
//var ContactForm = require('./components/ContactForm.react');

var ContactBox = require('./components/ContactBox.react');
var OutlineStartingData = require('../data/OutlineStartingData');
var OutlineWebAPIUtils = require('./utils/OutlineWebAPIUtils');



OutlineStartingData.init();
OutlineWebAPIUtils.getAllNodes();


// Main
React.render(
    React.createElement(ContactBox, {url: "http://127.0.0.1:8000/contacts/", pollInterval: 20000}),
    // <ContactBox url="data/contacts.json" pollInterval={10000} />,
    document.getElementById('content')
);