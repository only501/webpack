import React from 'react'
export default class Child1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: ''
    }
  }
  inputChange(event) {
    console.log('--------------------------',event)
    this.setState({
      msg: event.target.value
     
    })
   this.props.onChang(event.target.value)
  }

  render() {
    let { msg } = this.state
    return (
      <div>
        <input type="text" value={msg} onChange={this.inputChange.bind(this)}/>
      </div>
    )
  }
}
