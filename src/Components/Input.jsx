export function Input(props) {
  return (
    <div className="input-field">
      <input
        type="text"
        placeholder={props.placeholder}
        required
      />
      {props.icon}
    </div>
  );
}
