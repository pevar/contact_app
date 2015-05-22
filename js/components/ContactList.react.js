/**
 * Created by cbartolini on 19/05/15.
 */
var React = require('react');
var Contact = require('./ContactItem.react');

var ContactList = React.createClass({
    render: function () {
        var contactNodes = this.props.data.map(function (contact) {
            return (
                <Contact firstName={contact.firstName}/>
            );
        });
        return (
            <div className="contactList">
                {contactNodes}
            </div>
        );
    }
});
module.exports = ContactList;