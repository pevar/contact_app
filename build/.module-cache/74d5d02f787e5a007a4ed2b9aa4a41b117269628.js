/**
 * Created by cbartolini on 19/05/15.
 */

var React = require('react');

var ContactForm = React.createClass({displayName: "ContactForm",
    handleSubmit: function (e) {
        e.preventDefault();
        var firstName = React.findDOMNode(this.refs.firstName).value.trim();

        if (!firstName) {
            return;
        }
        this.props.onContactSubmit({firstName: firstName});
        React.findDOMNode(this.refs.firstName).value = '';
    },
    render: function () {

        return (
            React.createElement("form", {className: "contactForm", onSubmit: this.handleSubmit}, 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", null, "First Name"), 
                    React.createElement("input", {className: "form-control", type: "text", placeholder: "First name", ref: "firstName"})
                ), 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("input", {className: "submit", type: "submit", value: "Add"})
                )
            )
        );
    }
});
module.exports = ContactForm;