import { useState } from 'react';
import './App.css';
import { configureWeb3Modal } from './connection/index';
import useDetails from './hooks/useDetails';
import useGetDetails from './hooks/useGetDetails';

configureWeb3Modal();

function App() {
  const [name, setName] = useState("teejay");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("male");

  const handleDetails = useDetails(name, age, sex);
  const details = useGetDetails();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDetails();
  };

  return (
    <div className="app-container">
      <w3m-button />

      <form className="details-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Sex</label>
          <input
            type="text"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          />
        </div>
        <button className="submit-button" type="submit">Set</button>
      </form>

      <div className="details-container, none">
        {details ? (
          details.map((item, index) => (
            <div key={index} className="details-item">
              <h3>Name: {item.name}</h3>
              <h3>Age: {Number(item.age)}</h3>
              <h3>Sex: {item.sex}</h3>
            </div>
          ))
        ) : (
          <p className='none'>No details found</p>
        )}
      </div>
    </div>
  );
}

export default App;
