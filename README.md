###Prerequisites
Md.js only has one dependency, jQuery. You can download it from github: [development](https://github.com/Qkyrie/md.js/releases/download/1.0.0/md.js) or [minified](https://github.com/Qkyrie/md.js/releases/download/1.0.0/md.min.js)

#Documentation

We'll start off with the very basics of the configuration. This configuration will check every tag in your dom for the **mdjs** class.
If found, it will fetch the file from the **data-md-file** attribute, convert it to valid html and insert it into the body of the tag.

By default, the processor will look for our md-file in **assets/md/\***

###Basic Configuration

	<div class="mdjs" data-md-file="including.md" ></div>
	
	<script src="assets/js/md.min.js"></script>
	<script type="application/javascript">
	    Mdjs().init();
	</script>

###Load on specific Element

If we don't process the entire page and just want to load our markdown into one of our elements, we can use the *on* method provided on our mdjs
object.

	<div id="documentation" data-md-file="including.md" ></div>
	
	...
    Mdjs().on($("#documentation"));
    ...


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
    
