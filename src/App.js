import './App.css';
import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

function App() {
  const [isCompletScreen, setIsCompletScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [completedtodo,setcompletedtodo]=useState([]);



  const handleAddTodo = () => {
    if (newTitle.trim() === '' || newDesc.trim() === '') {
      alert('Please enter both title and description');
      return;
    }

    let newtodo = {
      title: newTitle,
      desc: newDesc,
    };
    let updatedToArr = [...allTodos];
    updatedToArr.push(newtodo);
    setTodos(updatedToArr);

    localStorage.setItem('todolist', JSON.stringify(updatedToArr));

    // Clear the input fields
    setNewTitle('');
    setNewDesc('');
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1); // Correct usage to remove only one item
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleComplet=(index)=>{
    let now = new Date();
    let dd=now.getDate();
    let mm=now.getMonth()+1;
    let year=now.getFullYear();
    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();
    let completedtOn=dd+"-"+mm+"-"+year+"at"+h+":"+m+":"+s;
    let filterditem={
      ...allTodos[index],
      completedtOn:completedtOn
    }
    let udatedCompleteArr=[...completedtodo];
    udatedCompleteArr.push(filterditem);
    setcompletedtodo(udatedCompleteArr)
    handleDeleteTodo(index)
    localStorage.setItem('completedTodos', JSON.stringify(udatedCompleteArr));
  }

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedtodos = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo) {
      setTodos(savedTodo);
    }
    if(savedCompletedtodos){
      setcompletedtodo(savedCompletedtodos)
    }
  }, []);

  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrappers">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What's the task title?"
            ></input>
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="What's the task description?"
            ></input>
          </div>
          <div className="todo-input-item">
            <button type="button" onClick={handleAddTodo} className="primaryBtn">
              Add
            </button>
          </div>
          <div className="btn-area">
            <div className="todo-input-item">
              <button
                type="button"
                className={`secondaryBtn ${isCompletScreen === false && 'active'}`}
                onClick={() => setIsCompletScreen(false)}
              >
                Todo
              </button>
            </div>
            <div className="todo-input-item">
              <button
                type="button"
                className={`secondaryBtn ${isCompletScreen === true && 'active'}`}
                onClick={() => setIsCompletScreen(true)}
              >
                Completed
              </button>
            </div>
          </div>
        </div>

        <div className="todo-list">
          {isCompletScreen===false && allTodos.map((item, index) => (
            <div key={index} className="todo-list-item">
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <div>
                <AiOutlineDelete
                  className="icon"
                  onClick={() => handleDeleteTodo(index)}
                  title="Delete?"
                />
                <BsCheckLg className="check-icon" onClick={()=>handleComplet(index)}/>
              </div>
            </div>
          ))}

{isCompletScreen===true && completedtodo.map((item, index) => (
            <div key={index} className="todo-list-item">
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p><small>Completed om: {item.completedtOn}</small></p>
              </div>

              <div>
                <AiOutlineDelete
                  className="icon"
                  onClick={() => handleDeleteTodo(index)}
                  title="Delete?"
                />
               
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
