const TextField = ({ label, inputProps, onChange, value }) => {

    return(
        <div className="text-field">
            <label>{label}</label>
            <input
                type="text" 
                {...inputProps} 
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default TextField;