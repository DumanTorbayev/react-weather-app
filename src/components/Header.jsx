import React, {memo} from 'react';
import {Transition} from "react-transition-group";

const Header = ({children, isLoaded}) => {

    return (
        <Transition
            in={isLoaded}
            timeout={1000}
        >
            {state => (
                <h2 className={`header-title ${state}`}>
                    {children}
                </h2>
            )}
        </Transition>


    );
};

export default memo(Header);