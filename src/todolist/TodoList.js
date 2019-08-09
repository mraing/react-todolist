import React, { Component, Fragment } from 'react'
import AddList from './component/AddList'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      list: []
    }

    this.WatchInput = this.WatchInput.bind(this)
    this.SaveData = this.SaveData.bind(this)
    // this.DelData = this.DelData.bind(this)
  }

  render() { 
    return (
      <Fragment>
        <div>
          <input
            type="text"
            onChange={this.WatchInput}
            // 将自身变成一个参数，传递给 this.inputA,所以能在下面找到那个 this.inputA 属性
            ref={(input)=>{this.inputA=input}}
            value={this.state.inputValue}
          />
          <button onClick={this.SaveData}>增加</button>
        </div>
        <AddList list={this.state.list}/>
      </Fragment>
    )
  }

  // 监听输入框的值
  WatchInput () {
    this.setState({
      inputValue: this.inputA.value
    })
  }

  // 保存数据
  SaveData () {
    this.setState({
      list: [
        ...this.state.list,
        this.state.inputValue
      ],
      inputValue: ''
    })
  }

  //删除方法
  DelData (index) {
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
}
 
export default TodoList