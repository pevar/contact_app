/**
 * Created by cbartolini on 19/05/15.
 */

var React = require('react');
var ContactList = require('./ContactList.react');
var ContactForm = require('./ContactForm.react');



var ContactBox = React.createClass({displayName: "ContactBox",
    _setAuthenticationHeaders: function(request) {
        request.setRequestHeader("X_USERNAME", 'admin');
        request.setRequestHeader("X_PASSWORD", 'admin');
    },
    loadContactsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            beforeSend: this._setAuthenticationHeaders,
            success: function (data) {
                this.setState({data: data.results});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleContactSubmit: function (comment) {
        var comments = this.state.data;
        var newContacts = comments.concat([comment]);
        this.setState({data: newContacts});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            contentType: "application/json",
            beforeSend: this._setAuthenticationHeaders,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        this.loadContactsFromServer();
        // setInterval(this.loadContactsFromServer, this.props.pollInterval);
    },
    render: function () {
        return (
            React.createElement("div", {className: "contactBox"}, 
                React.createElement("h1", null, "Contacts"), 
                React.createElement(ContactList, {data: this.state.data}), 
                React.createElement(ContactForm, {onContactSubmit: this.handleContactSubmit})
            )
        );
    }
});

module.exports = ContactBox;