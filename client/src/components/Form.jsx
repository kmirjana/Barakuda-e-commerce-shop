
import PropTypes from 'prop-types';

function FormRow({type, name,labelText ,defaultValue}) {
  return (
    <div className='form-row'>
          <label htmlFor={name} className="form-label" >
            {labelText || name}
          </label>
          <input type={type} id={name} name={name} className="form-input" defaultValue={defaultValue || " "} required/>
        </div>
  )
}

FormRow.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default FormRow;
