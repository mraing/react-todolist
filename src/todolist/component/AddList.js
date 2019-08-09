import React, { Component, Fragment } from 'react'

class AddList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() { 
    return (
      <Fragment>
        {
          this.props.list.map((item,index) => {
            return (
              <div key={index+item}>{index}. - {item}</div>
            )
          })
        }
      </Fragment>
    )
  }
}
 
export default AddList