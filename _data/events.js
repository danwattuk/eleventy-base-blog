
	const EleventyFetch = require("@11ty/eleventy-fetch");

	module.exports = async function() {
	let url = 
	"https://cdn.contentful.com/spaces/o4a3mj8e5uk7/environments/master/entries?access_token=JMjjWUnbLWj1mPNSbuwcTawGS7TRJMum0nWZmYEfuXA&content_type=event&order=-fields.date"	
	  /* This returns a promise */
	  return EleventyFetch(url, {
		duration: "1s", // save for 1 day
		type: "json"    // we’ll parse JSON for you
	  })
	  //.entries.map(fields=>fields);
	};