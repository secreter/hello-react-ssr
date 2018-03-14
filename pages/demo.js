/**
 * Created by pengchaoyang on 2018/3/14
 */
const React = require('react')
const ReactDOM = require('react-dom')

class Demo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount () {

    }

    render () {
        return (
            <div id="test">
                11
            </div>

        )
    }

    handleClick = () => {
        alert(1)
    }
}

module.exports = Demo
