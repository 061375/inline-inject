# inline-inject
A bookmarklet to grab CSS from stylesheets and inject into HTML as inline for enewsletters

## About
One of my jobs is to create enewsletters to be released using Constant Contact. While templates are provided they often are limited and clients want their design to reflect their vision. Not to mention there are tables injected further limiting the capability and control over the email, so I often opt to simply write the newsletter from the ground-up in HTML. Because email clients (and their quirks) vary on an even broader scale than browsers do (even today) and because stylesheets are often ignored. I always over code them with inline styles and old school HTML.

In order to acheive this easily I used to create a stylesheet that would then be parsed and injected using PHP. This was a bit clunky as I would always have to add variables to be injected. example: <p style="<?=$p?>">lorem ipsum</p>.

It worked, but I wanted somethign faster and more reliable.

So, I wrote a javascript bookmarklet that grabs the calculated css for element on a page, then injects the style into the correct tags and then spits out the HTML as a textarea for copy and pasting. (simple). Now I can build the  email like any other web-page and the css will be inline. Thus reducing gotchas in Outlook express etc...

### Usage
In the root find a file bookmarklet.js. Simply copy the contents of this file. In Google Chrome or (Firefox) create a bookmark. Give the bookmark whatever title you desire. For the URL paste the code.

Navigate to your email HTML and click the new bookmarklet.

A textarea should be injected into the page at the 9999 z-index.

Copy and paste the code.

NOTE: This probably works in other browsers but, there is no real need to support them.

### 