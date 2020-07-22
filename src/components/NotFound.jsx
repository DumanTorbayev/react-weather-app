import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFrown} from "@fortawesome/free-solid-svg-icons";
import {Transition} from "react-transition-group";

const NotFound = ({isLoaded}) => {
    return (
        <>
            <Transition
                in={isLoaded}
                timeout={1000}
            >
                {state => (
                    <div className={`not-found-wrapper ${state}`}>
                        <div className='not-found-container'>
                            <FontAwesomeIcon icon={faFrown} />
                            <div>Sorry, the specified city was not found..</div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
};

export default NotFound;