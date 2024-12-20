import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo, uniqueNo} = props
  const {title} = todo
  const onDelete = () => {
    deleteTodo(uniqueNo)
  }
  return (
    <li className="listContainer">
      <p className="para">{title}</p>
      <button className="del" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
