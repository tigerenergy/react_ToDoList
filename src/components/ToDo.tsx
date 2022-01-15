import { IToDo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';

function ToDo({ text ,category, id }: IToDo) 
{ 
  const setToDos = useSetRecoilState(toDoState)
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) =>
  {
    const{ currentTarget:{name}, } = event
    setToDos((oldToDos) =>
      { 
        const targetIndex = oldToDos.findIndex(toDo => toDo.id === id )
        const oldTodo = oldToDos[targetIndex]
        const newTodo = { text , id , category: name }
        console.log('replace the to do in the index', targetIndex , 'with' , newTodo)
        return oldToDos
      })
  }

  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && <button name='DOING' onClick={onClick}>DOING</button>}
      {category !== 'TO_DO' && <button name='TO_DO' onClick={onClick}>TODO</button>}
      {category !== 'DONE' && <button name='DONE' onClick={onClick}>DONE</button>}
    </li>
  )
}

export default ToDo