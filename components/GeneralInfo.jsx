import { useState } from 'react';
import Group from './Group';
import EditButton from './EditBt';

export default function GeneralInfo({submittedData, setSubmittedData}) {
  const [data, setData] = useState({ name: '', email: '', phone: '' });
  const [shown, setShown] = useState(true);

  function handleChange(e) {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData(data);
    setData({name: '', email: '', phone: ''});
  }

  function toggleForm() {
    setShown(!shown)
  }

  function edit() {
    setData(submittedData);
    setShown(true);
  }

  return (
    <div className='container'>
      <h2>General Information 
        <EditButton onClick={edit}></EditButton>
        <label className="containerToggle">
          <input readOnly checked={shown} type="checkbox" onClick={toggleForm}/>
          <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="chevron-down"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
        </label>
      </h2>
      {shown && (
        <form className='general-info' onSubmit={handleSubmit}>
          <Group label='Name: ' name='name' value={data.name} onChange={handleChange} />
          <Group label='Email: ' name='email' type='email' value={data.email} onChange={handleChange} />
          <Group label='Phone: ' name='phone' type='number' value={data.phone} onChange={handleChange} />
          <button type="submit">Accept</button>
        </form>
      )}
    </div>
  )
}
