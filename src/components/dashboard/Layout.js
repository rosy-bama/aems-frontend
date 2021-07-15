import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GeneralNav from '..';
import { ROUTE_LINKS } from '../../utils/routing';

function Layout({ isOwner = false, isHR = false, isEmployee = false, children }) {
    const navs = ROUTE_LINKS.DASHBOARD;

    useEffect(() => {
        const nav = document.querySelector('#HOME');
        nav.classList.add('active');
    }, []);

    return (
        <div>
            <GeneralNav getStarted={false} footer={false}>
                <div className='aems--dashboard-container'>
                    <div className='dashboard'>
                        <div className='dashboard-layout flex'>
                            <div className='dashboard-nav-container'>
                                <div className='nav-bars'>
                                    <nav>
                                        <ul className='navs'>
                                            {Object.keys(navs).map((nav) => {
                                                return (
                                                    <Link to={navs[nav]} id={nav} key={nav}>
                                                        <li>{nav}</li>
                                                    </Link>
                                                );
                                            })}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className='dashboard-content'>
                                <div className='dashboard-title pd-l-20 pd-r-20 pd-t-10 pd-b-10'>Dashboard</div>
                                <div className='content pd-20'>{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </GeneralNav>
        </div>
    );
}

export default Layout;
