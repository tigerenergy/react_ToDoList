import { useRecoilState, useRecoilValue } from 'recoil'
import { toDoSelector, categoryState , Categories } from '../atoms'
import CreateToDo from './CreateToDo'
import ToDo from './ToDo'

function ToDoList() 
{
  const toDos = useRecoilValue(toDoSelector)
  const [category , setCategory] = useRecoilState(categoryState)
  const onInput = (event:React.FormEvent<HTMLSelectElement>) =>
  {
    setCategory(event.currentTarget.value as any)
  }
  return (
    <div>
      <h1>TODOLIST</h1>
        <hr />
            <select value={category} onInput={onInput}>
              <option value={Categories.TO_DO}>TODO</option>
              <option value={Categories.DOING}>DOING</option>
              <option value={Categories.DONE}>DONE</option>
            </select>
      <CreateToDo />
      {toDos?.map(toDo => <ToDo key={toDo.id}{...toDo}/>)}
    </div>
  )
}
export default ToDoList