const CheckBox = (props) => {
    return (
        <div className="form-check">
            <input
                id={props.id}
                className="form-check-input"
                type="checkbox"
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                checked={props.checked}
            />
            <label className="form-check-label" htmlFor={props.id}>
                {props.title}
            </label>
        </div>
    )
}

export default CheckBox;