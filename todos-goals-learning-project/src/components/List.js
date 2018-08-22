import React from 'react'

export function List(props) {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}