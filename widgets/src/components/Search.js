import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Search = () => {
    const [term, setTerm] = useState('wikipedia');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);


    useEffect(() => {
        const timerId = setTimeout(() => {
            if(term){
                setDebouncedTerm(term);
            }
        }, 1000);

        return() => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() =>{
        const search = async() => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        };
        search();
    },[debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                     <a
                         className="ui button"
                         href={`https://en.wikipedia.org?curid=${result.pageid}`}
                     >
                         Read
                     </a>
                </div>
                <div className="content">
                    <div className="reader">
                        {result.title}
                    </div>
                    <div>
                        {result.snippet}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                        value={term}
                        className="input"
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
};

export default Search;