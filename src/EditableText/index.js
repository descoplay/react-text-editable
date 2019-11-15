import React from 'react'
import { Input, } from 'element-react'

import 'element-theme-default'

import Markdown from 'markdown-to-jsx'

class EditableText extends React.Component {
    constructor (_props,) {
        super()

        this.state = {
            value: _props.value,
            editable: _props.editable,
            envelope: _props.envelope,
            component: _props.component,
        }

        this.onChange = _props.onChange
    }

    componentWillReceiveProps (_props,) {
        this.setState({
            value: _props.value,
            editable: _props.editable,
            envelope: _props.envelope,
            component: _props.component,
        },)
    }

    render () {
        if (this.state.editable) {
            return (<Input value={this.state.value} onChange={this.onChange} />)
        }

        if (this.state.component) {
            const Component = this.state.component

            return (<Component>{this.state.value}</Component>)
        }

        switch (this.state.envelope) {
            case 'i': return (<i>{this.state.value}</i>)
            case 'u': return (<u>{this.state.value}</u>)
            case 'b': return (<b>{this.state.value}</b>)
            case 'div': return (<div>{this.state.value}</div>)
            case 'pre': return (<pre>{this.state.value}</pre>)
            case 'markdown': return (<Markdown>{this.state.value}</Markdown>)
            case 'span':
            default: return (<span>{this.state.value}</span>)

        }

    }
}

export default EditableText