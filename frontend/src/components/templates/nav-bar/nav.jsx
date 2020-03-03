import React from 'react'
import './nav.css'


export default props =>
    <aside className="menu-area">
        <nanv className="menu">
            <a href={'#/'}>
                <i className="fa fa-home"> Início</i>
            </a>
            <a href={'#/users'}>
                <i className="fa fa-users"> Usuários</i>
            </a>

        </nanv>
    </aside>