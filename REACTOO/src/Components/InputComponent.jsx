import React, { useState} from "react";

const InputDynamic = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>Pseudo : {value}</p>
        </div>
    );
};

export default InputDynamic