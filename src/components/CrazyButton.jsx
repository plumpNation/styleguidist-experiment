import React from 'react'
import PropTypes from 'prop-types'

class CrazyButton extends React.PureComponent {
    static propTypes = {
        text: PropTypes.string
    }

    render() {
        return (
            <div>
                <button>{this.props.text || this.props.children}</button>
            </div>
        )
    }
}

export default CrazyButton
