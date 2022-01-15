import { IToDo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';


const food = ['pizza', 'mango' , 'kimchi', 'kimbab']
const front = ['pizza']
const back = ['kimchi', 'kimbab']
const finalPart = [...front , '감' , ...back]

console.log(finalPart)

function ToDo({ text ,category, id }: IToDo) 
{ 
  const setToDos = useSetRecoilState(toDoState)
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) =>
  {
    const{ currentTarget:{name}, } = event
    setToDos((oldToDos) =>
      { 
        const targetIndex = oldToDos.findIndex(toDo => toDo.id === id )
        const oldToDo = oldToDos[targetIndex]
        const newToDo = { text , id , category: name as any}
        return [
          ...oldToDos.slice(0 , targetIndex),
          newToDo,...oldToDos.slice(targetIndex + 1) 
        ]
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