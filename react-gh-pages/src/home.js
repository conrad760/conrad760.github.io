import React from 'react';

const home = () => (
    <>
        <nav>
            {/* <ul>
                <!--<li><a href="/">Home</a></li>-->
                <!--TODO-->
                <!--<li><a href="/about">About</a></li>-->
                <!--<li><a href="/cv">CV</a></li>-->
                <!--<li><a href="/blog">Blog</a></li>-->
            </ul> */}
        </nav>
        <div class='container'>
            <div className='App'>
                <div class='blurb'>
                    <h1>Welcome to my website!</h1>
                    <p>Please take a minute to look around.</p>
                </div>
            </div>
        </div>
        <footer>
            <ul>
                <li>
                    <a href='mailto:conradlparker@gmail.com'>email</a>
                </li>
                <li>
                    <a href='https://github.com/conrad760'>
                        github.com/conrad760
                    </a>
                </li>
            </ul>
        </footer>
    </>
);
export default home;
