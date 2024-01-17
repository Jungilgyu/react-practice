import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
	return (
		<div className='TodoTemplate'>
			<div className='app-title'>일정관리</div>
			<div className=' content'>{children}</div>
			
		</div>

	)
}

export default TodoTemplate;

// 1. {children}은 React에서 특별한 prop으로서 컴포넌트의 시작 태그와 끝 태그 사이에 전달된 내용을 나타냄. 