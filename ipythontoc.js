//Modified from https://kmahelona.github.io/ipython_notebook_goodies/ipython_notebook_toc.js

/*Step 1: Add a markdown cell at the top of your notebook with the following:
<h1 id="tocheading">Table of Contents</h1>
<div id="toc"></div>

Step 2: Add a code cell anywhere in the notebook with the following:

%%javascript
$.getScript('https://kmahelona.github.io/ipython_notebook_goodies/ipython_notebook_toc.js')
*/

// Builds a <ul> Table of Contents from all <headers> in DOM
function createTOC(){
    var toc = "";
    var level = 0;
    var levels = {}
    $('#toc').html('');

    $(":header").each(function(i){
	    if (this.id=='tocheading'){return;}
        
	    titleText = this.innerHTML;
	    openLevel = this.tagName[1];
		
	    if (levels[openLevel]){
		levels[openLevel] += 1;
	    } else{
		levels[openLevel] = 1;
	    }

	    if (openLevel > level) {
		toc += (new Array(openLevel - level + 1)).join('<ul class="toc">');
	    } else if (openLevel < level) {
		toc += (new Array(level - openLevel + 1)).join("</ul>");
		for (i=level;i>openLevel;i--){levels[i]=0;}
	    }

	    level = parseInt(openLevel);


	    if (this.id==''){this.id = this.innerHTML.replace(/ /g,"-")}
	    var anchor = this.id;
        
		toc += '<li><a href="#' + anchor + '">' +  levels[openLevel].toString() + '. ' + titleText
		+ '</a></li>';      
		
		if (level == '1'){			
			if (document.getElementById(anchor).nextSibling.innerHTML == null){			 
			 document.getElementById(anchor).insertAdjacentHTML('afterend', '<a href="#toc">[top]</a>');
			}					
		}		
	});
    
    if (level) {
	toc += (new Array(level + 1)).join("</ul>");
    }

    $('#toc').append(toc);

};

// Executes the createToc function
setTimeout(function(){createTOC();},100);
