# dumpster

Super stupid demo for capped collections, tailable cursor and live monitoring in Firefox.

# Setup

1. Create `dumpster` db

2. Create log capped collection
 

        db.createCollection( "log", { capped: true, size: 100000 } )


3. Install all crap

        npm install
        bower install

4. Run the app 

        /usr/local/bin/node bin/www
   
   
5. Run data generators (you can open several consoles, or use screen sessions)

        php generator.php
 
6. Goto http://localhost:3000/
