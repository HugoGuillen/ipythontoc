# ipythontoc
Create a table of contents for a iPython notebook and adds a "[top]" link to every level 1 header.

## Usage
Step 1: Add a markdown cell at the top of your notebook with the following:
```html
<h1 id="tocheading">Table of Contents</h1>
<div id="toc"></div>
```

Step 2: Add a code cell anywhere in the notebook with the following:
```javascript
%%javascript
$.getScript('https://raw.githubusercontent.com/HugoGuillen/ipythontoc/master/ipythontoc.js')
```
