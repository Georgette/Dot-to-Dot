var React = require('react')
var Dot = require('./dot-game.js')

function getState () {
    return {}
}

var Page = React.createClass({

    render: function () {
        var props = {x:10, y:10}
        return (
            <Dot {...props}></Dot>
        )
    },
})

module.exports = Page
