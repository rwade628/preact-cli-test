import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../../redux/util';
import reduce from '../../redux/reducers';
import * as actions from '../../redux/actions';
import TodoItem from './todo-item';
import style from './style';

@connect(reduce, bindActions(actions))
export default class Todo extends Component {
	addTodos = () => {
		const { text } = this.state;
		this.setState({ text: '' });
		this.props.addTodo(text);
		return false;
	};

	removeTodo = (todo) => {
		this.props.removeTodo(todo);
	};

	updateText = (e) => {
		this.setState({ text: e.target.value });
	};

	render({ todos }, { text }) {
		return (
			<div id="todo" class={style.todo}>
				<form onSubmit={this.addTodos} action="javascript:">
					<input value={text} onInput={this.updateText} placeholder="New ToDo..." />
				</form>
				<ul>
					{ todos.map(todo => (
						<TodoItem key={todo.id} todo={todo} onRemove={this.removeTodo} />
					)) }
				</ul>
			</div>
		);
	}
}