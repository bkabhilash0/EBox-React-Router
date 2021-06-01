import React, { useContext } from 'react';
import { UserContext } from '../store/user-context';


const R2 = (props) => {
    const ctx = useContext(UserContext);
    return (
        <div>
            R2 Component Name = {ctx.name}
        </div>
    )
}

export default R2
