import React, { Component, Fragment } from 'react'

class AddList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    console.log('nextProps', nextProps)
    console.log('props.list', this.props.list)
    return nextProps.list !== this.props.list
	} 

  render() { 
    return (
      <Fragment>
        <ul>
          {
            this.props.list.map((item,index) => {
              return (
                <li key={index+'item'} onClick={this.delData.bind(this, index)}>{index} - {item}</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  // 绑定删除方法
  delData (index) {
    this.props.delfunc(index)
  }
}
 
export default AddList