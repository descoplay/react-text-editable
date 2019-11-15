import React from 'react'

import EditableText from './EditableText'

class App extends React.Component {
    constructor () {
        super()

        this.state = {
            value: '#Valor inicial',
            editable: false,
            envelope: 'markdown',
        }

        this.onChange = this.onChange.bind(this,)
    }

    onChange (v,) {
        this.setState({ value: v, },)
    }

    render () {
        return (
            <EditableText
                value={this.state.value}
                editable={this.state.editable}
                envelope={this.state.envelope}
                onChange={this.onChange}
            />
        )
    }
}

export default App