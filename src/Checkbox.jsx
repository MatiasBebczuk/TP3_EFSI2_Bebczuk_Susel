function Checkbox({ischecked, setChecked}){
    return (
        <input
            type="checkbox"
            id={Math.random()}
            className="form-check-input"
            onChange={() => setChecked(!ischecked)}
            checked={ischecked}
        />
    );
}

export default Checkbox;