import React from 'react';

export default ({ author, children, ...props}) => (
    <blockquote>
        <p>
            {children}
        </p>
        <p style={{marginLeft: '2rem'}}>&ndash; {author} </p>
    </blockquote>
);
