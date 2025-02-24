

const FormRow = ({ type, name, defaultValue, labelText, onChange }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input type={type} id={name} name={name}
                className="form-input" defaultValue={defaultValue || ''}
                onChange={onChange} required></input>

        </div>
    )
}

export default FormRow