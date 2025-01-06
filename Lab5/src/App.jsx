import React, { useState } from 'react';
import './App.css';

// Exercise 1: Simple Click Button
const ClickButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="component-section">
      <h3>Exercise 1.1: Simple Click Button</h3>
      <button onClick={handleClick}>ClickMe</button>
      {isClicked && <p>Clicked</p>}
    </div>
  );
};

// Exercise 1: Toggle Button
const ToggleButton = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className="component-section">
      <h3>Exercise 1.2: Toggle Button</h3>
      <button onClick={handleClick}>ClickMe</button>
      {clickCount % 2 === 1 ? <p>Clicked</p> : <p>Not Clicked</p>}
    </div>
  );
};

// Exercise 1: Multi-Button App
const MultiButtonApp = () => {
  const [lastClickedButton, setLastClickedButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setLastClickedButton(buttonNumber);
  };

  return (
    <div className="component-section">
      <h3>Exercise 1.3: Multi-Button App</h3>
      <button onClick={() => handleButtonClick(1)}>Button1</button>
      <button onClick={() => handleButtonClick(2)}>Button2</button>
      <button onClick={() => handleButtonClick(3)}>Button3</button>
      {lastClickedButton && <p>Button #{lastClickedButton} was clicked</p>}
    </div>
  );
};

// Exercise 1: Counter
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="component-section">
      <h3>Exercise 1.4: Counter</h3>
      <h1>{count}</h1>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </div>
  );
};

// Exercise 2: Display Table
const DisplayTab = ({ table }) => {
  return (
    <div className="component-section">
      <h3>Exercise 2.1: Display Table</h3>
      <ul>
        {table.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Exercise 2: Numbered Table Display
const DisplayNumberedTab = ({ table }) => {
  return (
    <div className="component-section">
      <h3>Exercise 2.2: Numbered Table Display</h3>
      <ul>
        {table.map((item, index) => (
          <li key={index}>Element {index + 1} is: {item}</li>
        ))}
      </ul>
    </div>
  );
};

// Exercise 2: Removable List
const RemovableList = ({ initialTable }) => {
  const [table, setTable] = useState(initialTable);

  const handleItemClick = (indexToRemove) => {
    setTable(prevTable => prevTable.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="component-section">
      <h3>Exercise 2.3: Removable List</h3>
      <ul>
        {table.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exercise 3: User Management
const UserManagement = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setUsers([...users, { username, password }]);
      setUsername('');
      setPassword('');
    }
  };

  const handleDelete = (indexToRemove) => {
    setUsers(users.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="component-section">
      <h3>Exercise 3: User Management</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exercise 4: Dynamic Div Creator
const DynamicDivCreator = () => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && width && color) {
      setDivs([...divs, { height, width, color }]);
      setHeight('');
      setWidth('');
      setColor('');
    }
  };

  return (
    <div className="component-section">
      <h3>Exercise 4: Dynamic Div Creator</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          placeholder="Height (px)" 
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Width (px)" 
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input 
          type="color" 
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Create Div</button>
      </form>

      <div>
        {divs.map((div, index) => (
          <div 
            key={index} 
            style={{
              height: `${div.height}px`, 
              width: `${div.width}px`, 
              backgroundColor: div.color,
              margin: '10px'
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const table1 = ["hello", "world", "from", "react"];
  const table2 = ["another", "list", "of", "elements"];

  return (
    <div className="App">
      <h1>React Lab Exercises</h1>
      
      {/* Exercise 1 Components */}
      <ClickButton />
      <ToggleButton />
      <MultiButtonApp />
      <Counter />

      {/* Exercise 2 Components */}
      <DisplayTab table={table1} />
      <DisplayNumberedTab table={table1} />
      <RemovableList initialTable={table2} />

      {/* Exercise 3 Component */}
      <UserManagement />

      {/* Exercise 4 Component */}
      <DynamicDivCreator />
    </div>
  );
}

// Optional CSS for better layout
const styles = `
.App {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.component-section {
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
}

button {
  margin: 5px;
  padding: 5px 10px;
}

input {
  margin: 5px;
  padding: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #eee;
}
`;

// Create a <style> tag for CSS
const styleTag = document.createElement('style');
styleTag.textContent = styles;
document.head.appendChild(styleTag);

export default App;