import React from 'react'

const Header = (props) => {
    console.log('in header');
    return (
        <div>
            {props.name}
        </div>
    );
}

export default Header