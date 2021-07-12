import './app.css';
// import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';
function App() {
  const [selected, setSelected] = useState([]);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <div className="App">
      <div className="main">
        <div className="tags-main">
          <h3>Tags</h3>
          <span>Select time for your event</span>
          <CreatableSelect
            isMulti
            name="colors"
            value={selected}
            onChange={(val) => setSelected(val)}
            options={options}
            className={`basic-multi-select ${selected.length ? "selected" : ""}`}
            classNamePrefix="select"
            placeholder="Add Tags"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}

export default App;
