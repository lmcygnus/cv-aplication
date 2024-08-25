export default function Group({label, value, onChange, name, type = 'text', placeholder = ''}) {
    return (
        <div className='input-group'>
            <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required />
        </div>
    );
};