import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        title: "Lithuanian",
        value: "lt"
    },
    {
        title: "Russian",
        value: "ru"
    },
    {
        title: "English",
        value: "en"
    }];

const Translate = () => {
    const [text, setText] = useState('google');
    const [language, setLanguage] = useState(options[0]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown
                label="Select a language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
};

export default Translate;