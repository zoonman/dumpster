# dumpster

Super stupid demo for capped collections, tailable cursor and live monitoring in Firefox.

# Setup

1. Create `dumpster` db

2. Create log capped collection

   db.createCollection( "log", { capped: true, size: 100000 } )
