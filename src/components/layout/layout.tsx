import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Footer from './footer/footer';
import Header from './header/header';
import Home from '../home/home';
import './layout.css';

function Layout() {
    return (
        <BrowserRouter>
            <section className="layout">
                <header>
                    <Header />
                </header>

                <main>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Redirect from="*" to='/' exact />
                    </Switch>
                </main>

                <footer>
                    <Footer />
                </footer>
            </section>
        </BrowserRouter>
    );
}

export default Layout;
