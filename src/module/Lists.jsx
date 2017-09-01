import React from 'react';


const Lists = ({ match }) => (
    <div>
        <h3>{match.params.ListsId}</h3>
    </div>
)

export default Lists;