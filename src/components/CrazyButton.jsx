import React from 'react'
import PropTypes from 'prop-types'

class CrazyButton extends React.PureComponent {
    static propTypes = {
        text: PropTypes.string
    }

    static defaultProps = {
        text: 'Hello world'
    }

    constructor(props) {
        super(props)

        console.log('boom')
    }

    render() {
        return (
            <div>
                <button>{this.props.text}</button>
            </div>
        )
    }
}

export default CrazyButton
