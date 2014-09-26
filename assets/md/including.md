#Documentation

We'll start off with the very basics of the configuration. This configuration will check every tag in your dom for the **mdjs** class.
If found, it will fetch the file from the **data-md-file** attribute, convert it to valid html and insert it into the body of the tag.

By default, the processor will look for our md-file in **assets/md/\***