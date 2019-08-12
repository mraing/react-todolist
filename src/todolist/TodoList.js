import React, { Component, Fragment } from 'react'
import AddList from './component/AddList'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      list: []
    }

    this.watchInput = this.watchInput.bind(this)
    this.saveData = this.saveData.bind(this)
    this.delData = this.delData.bind(this)
  }

  render() { 
    return (
      <Fragment>
        <div>
          <input
            type="text"
            onChange={this.watchInput}
            // 将自身变成一个参数，传递给 this.inputA,所以能在下面找到那个 this.inputA 属性
            ref={(input)=>{this.inputA=input}}
            value={this.state.inputValue}
          />
          <button onClick={this.saveData}>增加</button>
        </div>
        <AddList
          list={this.state.list}
          delfunc={this.delData}
        />
      </Fragment>
    )
  }

  // 监听输入框的值
  watchInput () {
    this.setState({
      inputValue: this.inputA.value
    })
  }

  // 保存数据
  saveData () {
    this.setState({
      list: [
        ...this.state.list,
        this.state.inputValue
      ],
      inputValue: ''
    })
  }

  //删除方法
  delData (index) {
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
}
 
export default TodoList