import {Link}  from 'react-router-dom';

export function Welcome() {
    return (
        <div>
            <h1>Benvenuto!</h1>
            <Link to="/counter">Counter</Link>
        </div>
    )
}