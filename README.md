# dumpster

[![Join the chat at https://gitter.im/zoonman/dumpster](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/zoonman/dumpster?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Little demo for capped collections, tailable cursor and live monitoring in Firefox.

# Setup

1. Create `dumpster` db

2. Create log capped collection
 

        db.createCollection( "log", { capped: true, size: 100000 } )


3. Install all crap

        npm install
        bower install

4. Run the app 

        /usr/local/bin/node bin/www
   
   
5. Run data generators (you can open several consoles, or use `screen` sessions)

        php generator.php

You can run several generators in the same console (add ampersand to the end of command):

        php generator.php &


6. Goto http://localhost:3000/
