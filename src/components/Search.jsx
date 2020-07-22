import React, {useState} from 'react';
import {Transition} from "react-transition-group";

const Search = ({onSearch, isLoaded}) => {
    const [value, setValue] = useState('');

    const handleValueChanges = (e) => {
        setValue(e.target.value)
    }

    const callOnSearch = (e) => {
        e.preventDefault();
        onSearch(value);
    }

    return (
        <>
            <Transition
                in={isLoaded}
                timeout={1000}
            >
                {state => (
                    <div className={`search-wrap ${state}`}>
                        <input onChange={handleValueChanges} value={value} type="text" placeholder='Enter city'/>
                        <button onClick={callOnSearch}>Find</button>
                    </div>
                )}
            </Transition>
        </>
    );
};

export default Search;