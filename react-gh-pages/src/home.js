import React from 'react';

const home = () => (
    <>
 <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
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
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:conradlparker@gmail.com"> email</a></li>
                <li>
                    <i class="fa fa-github"></i>
                    <a href="https://github.com/conrad760"
                        > github.com/conrad760</a
                    >
                </li>
                <li>
                    <i class="fa fa-lock"></i>
                    <a href="./conradlparker.pgp"> PGP</a>
                </li>
            </ul>
        </footer>
    </>
);
export default home;
