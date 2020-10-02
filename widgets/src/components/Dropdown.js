import React, {useState} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {

    const [open, setOpen] = useState(false);

    const renderedOptions = options.map(option => {
        if(option === selected){
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.title}
            </div>
        )
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a flower</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : '' }`}>
                    <i className="dropdown icon"/>
                    <div className="text">{selected.title}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;