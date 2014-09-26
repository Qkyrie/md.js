
###Different file directory
As said before, the processor will look for our md-file in **assets/md/\***. However, should we want to place our markdown files in another 
folder, we can use the *baseUrl* to define a different folder.

    Mdjs({
        baseUrl: 'files/markdown/' /*note the ending slash*/
    }).init();
   

###Debugging
We provided some basic logging you could use as part of your debugging process. The debugger will write to the default
browser console, if there is one available (browser compatibility issues).

    Mdjs({
       debug: true
    }).init();
    
###Live Update
As part of our own documentation, we often felt the need to refresh our page to see our changes. No more!

    Mdjs({
       liveUpdate: true
    }).init();
    
This will refetch and update our documentation every 5 seconds. Should you want a different interval, you can use the following
configuration.

    Mdjs({
       liveUpdate: true,
       interval: 1000 /* in milliseconds */
    }).init();
    