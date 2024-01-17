import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
	const [value, setValue] = useState('');

	const onChange = useCallback(e => {
		setValue(e.target.value);
	}, []);

	const onSubmit = useCallback( // onSubmit 이벤트 => 인풋에서 enter 눌러도 발생 / onClick => 인풋에서 onKeyPress 이벤트를 통해 enter를 감지하는 로직을 따로 작성해야 함 
		e => { 
			onInsert(value);
			setValue('') // value 초기화

			// submit 이벤트는 브라우저에서 새로고침 발생시킴
			// 이를 방지하기 위해 아래 함수 호출
			e.preventDefault();
		},
		[onInsert, value],
	);

	return (
		<form className='TodoInsert' onSubmit={onSubmit}>
			<input 
				placeholder='할 일을 입력하세요'
				value={value}
				onChange={onChange}	
			/>
			<button type='submit'>
				<MdAdd />
			</button>
		</form>
	)
}

export default TodoInsert;