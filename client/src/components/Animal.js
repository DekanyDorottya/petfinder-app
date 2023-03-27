import React from 'react';

export default function Animal({ animal }) {
    return (
        <>
            <div>{animal.name}</div>
            <div>{animal.type}</div>
            <div>{animal.gender}</div>
            <div>{animal.breeds.primary}</div>
        </>
    );
}
