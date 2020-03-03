import React from 'react'
import './app.css'
import 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import'bootstrap/dist/css/bootstrap.min.css'
import Main from '../components/templates/main'
import Logo from '../components/templates/logo/logo'
import Nav from '../components/templates/nav-bar/nav'
import Footer from '../components/templates/footer/footer'




export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title={"Início"} subtitle={"Projeto crud cod3r "}>
            <div className="display-4">
                Bem Vindo!
            </div>
            <hr />
            <p className="mb-0">Sistema básico para CRUD simples usando JSON SERVER</p>
        </Main>
        <Footer />

    </div>