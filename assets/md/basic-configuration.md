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
