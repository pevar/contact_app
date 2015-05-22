/**
 * Created by cbartolini on 19/05/15.
 */

var React = require('react');

var ContactForm = React.createClass({
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
            <form className="contactForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control" type="text" placeholder="First name" ref="firstName"/>
                </div>
                <div className="form-group">
                    <input className="submit" type="submit" value="Add"/>
                </div>
            </form>
        );
    }
});
module.exports = ContactForm;