import TodoListItem from './TodoListItem';
import './TodoListItem.scss';
// SCSS 파일을 현재 파일에서 불러오는(import) 구문입니다. 

const TodoList = ({ todos, onRemove, onToggle }) => {
	return (
		<div className='TodoList'>
			{todos.map(todo => (
				<TodoListItem 
					todo={todo} 
					key={todo.id} 
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
};

export default TodoList;