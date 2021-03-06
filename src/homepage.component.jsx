import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATT</h1>
                    <span className='subtitle'>VIS NÅ</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JAKKER</h1>
                    <span className='subtitle'>VIS NÅ</span>
                </div>
                <h1>DU ER SØT</h1>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>STRØMPER</h1>
                    <span className='subtitle'>VIS NÅ</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MENN</h1>
                    <span className='subtitle'>VIS NÅ</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>KVINNER</h1>
                    <span className='subtitle'>VIS NÅ</span>
                </div>
            </div>
        </div>
    </div>
    
);

export default HomePage;