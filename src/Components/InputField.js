export default function InputField({ name, value, setValue }) {
    
    function handleChange(event) {
        setValue(event.target.value)
    }

  return (
    <>
      <label>{name}</label>
      <input type="text" name={name} value={value} onChange={handleChange} />
    </>
  );
}
