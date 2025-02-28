import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './Redux/addSlice';

function App() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.add.items);

  const handleAddTask = () => {
    if (!task.trim()) return;
    const uniqueId = Math.floor(Math.random() * 1000) + 1;
    const newTask = [uniqueId, task];
    dispatch(addItem(newTask));
    setTask('');
  };

  const handleDeleteTask = (id) => {
    dispatch(removeItem(id));
  };

  const toggleComplete = (e) => {
    const taskText = e.target.nextElementSibling;
    taskText.style.textDecoration = e.target.checked ? 'line-through' : 'none';
    taskText.style.opacity = e.target.checked ? '0.6' : '1';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-yellow-300 p-8">
      <div className="w-full max-w-2xl bg-red-800 p-8 rounded-2xl shadow-2xl border border-yellow-400">
        <h1 className="text-3xl font-extrabold text-center mb-6">🚀 To-Do App</h1>

        <div className="flex space-x-3">
          <input
            type="text"
            className="w-full p-3 border border-yellow-400 bg-black text-yellow-300 rounded-lg focus:ring-4 focus:ring-yellow-500 transition-all"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder=" Add a new To-Do..."
          />
          <button
            className="bg-yellow-500 px-5 py-3 rounded-xl font-semibold text-black hover:bg-red-500 hover:text-white transition-all"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {tasks.map((item) => (
            <div key={item[0]} className="flex justify-between items-center bg-black p-4 rounded-lg shadow-md transition-all hover:shadow-yellow-500">
              <div className="flex items-center space-x-3">
                <input type="checkbox" onClick={toggleComplete} className="accent-yellow-500 w-5 h-5" />
                <h1 className="text-lg font-semibold">{item[1]}</h1>
              </div>
              <button
                className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500 transition-all"
                onClick={() => handleDeleteTask(item[0])}
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
