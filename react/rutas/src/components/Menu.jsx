import { Link, NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <ul className="menu">

            <li>
                <NavLink to="/" exact activeStyle={{ fontSize: '50px' }}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={{
                    pathname: '/info',
                    hash: '#main',
                    search: '?page=4'
                }}>Info</NavLink>
            </li>

            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    );
}