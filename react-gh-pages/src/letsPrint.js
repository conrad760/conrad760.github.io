import React from 'react';

export const letsPrint = () => (
  <body>
    
    <div class='blurb'>
        <h1>Let's Print</h1>
        <p>
            So if you got here because you want to print on the Monoprice Mini
            V2 3d-printer you are in the right place!
        </p>
        <h2>Stuff you might need to make things</h2>
        <ul>
            <li>
                A place to get the Things &#123;
                <a href='https://www.thingiverse.com/'>Thingiverse</a> &#125;
            </li>
            <li>
                A tool to convert the Things to gcode &#123;
                <a href='https://ultimaker.com/software/ultimaker-cura'>
                    CURA
                </a>
                &#125;
            </li>
            <li>
                Something to transfer the Thing to the Printer &#123; SD Card or
                micro-USB &#125;
            </li>
            <li>
                Maybe a tool to make your own things! &#123;
                <a href='https://www.autodesk.com/products/fusion-360/students-teachers-educators'>
                    Fusion360
                </a>
                &#125;
            </li>
        </ul>

        <h4>TL;DR</h4>
        <p>
            Find something you like on thinkiverse and use Cura to convert the
            3d model to gcode. Make sure to select Monoprice Mini V2 as the
            printer. Save it to the sd card in the side of the printer and thats
            it!
        </p>
        <h1>How To Print Something</h1>
        <p>
            First step is finding something to print if you have something in
            mind search it up on 
            <a href='https://www.thinkiverse.com/'>Thingiverse</a> if you can't
            find it there and you have some free time consider making it
            yourself. There are lots of great tools out there but the one I use
            is
            <a href='https://www.autodesk.com/products/fusion-360/students-teachers-educators'>
                Fusion360.
            </a>
        </p>
        <p>
            Next we need a program to convert the 3d file to the gcode that the
            printer will read. This can also let us position the item on the
            printer and set up the speeds and infill for the object. I have
            always found
            <a href='https://ultimaker.com/software/ultimaker-cura'>
                Ultimaker Cura
            </a>
            to be the simplest solution. It is important that when setting the
            printer to select the Monoprice Mini V2.
        </p>
        <p></p>
    </div>
  </body>
);

export default letsPrint;
