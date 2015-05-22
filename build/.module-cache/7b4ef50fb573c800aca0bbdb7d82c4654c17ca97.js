/**
 * Created by cbartolini on 19/05/15.
 */
var React = require('react');
var Contact = require('./ContactItem.react');

var ContactList = React.createClass({displayName: "ContactList",
    render: function () {
        var contactNodes = this.props.data.map(function (contact) {
            return (
                React.createElement(Contact, {firstName: contact.firstName})
            );
        });
        return (
            React.createElement("div", {className: "contactList"}, 
                contactNodes
            )
        );
    }
});
module.exports = ContactList;