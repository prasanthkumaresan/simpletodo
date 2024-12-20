import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {userTodo: initialTodosList}

  deleteTodo = uniqueNo => {
    const {userTodo} = this.state
    const filteredTodo = userTodo.filter(each => each.id !== uniqueNo)
    this.setState({
      userTodo: filteredTodo,
    })
  }

  render() {
    const {userTodo} = this.state
    return (
      <div className="container">
        <div className="bg-container">
          <h1 className="header">Simple Todos</h1>
          <ul>
            {userTodo.map(each => (
              <TodoItem
                todo={each}
                key={each.id}
                uniqueNo={each.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
