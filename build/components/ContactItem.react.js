/**
 * Created by cbartolini on 19/05/15.
 */

var React = require('react');

var Contact = React.createClass({displayName: "Contact",
    render: function() {
        return (
            React.createElement("div", {className: "contact"}, 
                React.createElement("h2", {className: "contactFirstName"}, 
                    this.props.firstName
                )
            )
        );
    }
});
module.exports = Contact;