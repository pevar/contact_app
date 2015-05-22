/**
 * Created by cbartolini on 19/05/15.
 */

var React = require('react');

var Contact = React.createClass({
    render: function() {
        return (
            <div className="contact">
                <h2 className="contactFirstName">
                    {this.props.firstName}
                </h2>
            </div>
        );
    }
});
module.exports = Contact;