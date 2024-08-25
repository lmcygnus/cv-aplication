import {useState}  from 'react';
import Group from './Group';
import { v4 as uuidv4 } from 'uuid';
import Trash from './Trash-icon';
import EditButton from './EditBt';

export default function PracticalExperience({submittedData, setSubmittedData}) {
  const [data, setData] = useState({ companyName:'', position: '', responsibilities: '' , date:'' });
  const [shown, setShown] = useState(false);
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(editId) {
      setSubmittedData(submittedData.map(entry => entry.id === editId ? { ...data, id: editId } : entry));
      setEditId(null);
    } else {
      setSubmittedData([...submittedData, {...data, id: uuidv4()}]);
    }
    setData({companyName: '', position: '', responsibilities: '', date: ''})
  }

  function toggleForm() {
    setShown(!shown);
  }

  function handleDelete(id) {
    setSubmittedData(submittedData.filter((entry) => entry.id !== id));
  }

  function handleEdit(entry) {
    setData(entry); 
    setEditId(entry.id);
    setShown(true); 
  }

  return (
    <div className='container'>
      <h2>
        Practical Experience 
        <label className="containerToggle">
          <input readOnly checked={shown} type="checkbox" onClick={toggleForm}/>
          <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="chevron-down"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
        </label>
      </h2>
      {shown && (
        <form className='practical-experience' onSubmit={handleSubmit}>
          <Group label='Company: ' name='companyName' value={data.companyName} onChange={handleChange} />
          <Group label='Position: ' name='position' value={data.position} onChange={handleChange} />
          <label htmlFor="responsibilities">Responsibilities:</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            value={data.responsibilities}
            onChange={handleChange}
          />
          <Group label='Date: ' name='date' value={data.date} onChange={handleChange} />
          <button type='submit'>Accept</button>
        </form>
      )}
      {submittedData.length > 0 && (
        <div>
          {submittedData.map((entry) => (
            <div key={entry.id} className='entry'>
              <h2>{entry.position}</h2>
              <EditButton onClick={() => handleEdit(entry)}></EditButton>
              <Trash onClick={() => handleDelete(entry.id)}></Trash>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
