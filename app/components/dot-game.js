var React = require('react')

var Dot = React.createClass({
    render: function() {
        return (
            <circle cy={this.props.y} cx={this.props.x} r="5" stroke="#63ddca" strokeWidth="1" fill="#63ddca" />
        )
    }
})

module.exports = Dot
