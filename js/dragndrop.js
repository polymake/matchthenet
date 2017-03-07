// copyright Loho, Lorenz, Joswig, Raber & polymake team

// the nets which can be draged and droped
var dragnets= document.querySelectorAll('.net');

// make the nets draggable
for (var i=0; i<dragnets.length; i++){
	dragnets[i].draggable = 'false';
}


function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}


function handleDragLeave(e) {
	// this / e.target is previous target element.
  this.classList.remove('over');  
}


function handleDragEnd(e) {
  // this/e.target is the source node.
  [].forEach.call(nets, function (net) {
    net.classList.remove('over');
  });
}

function setDragAndDropEventListeners(){
	[].forEach.call(dragnets, function(net) {
		net.ondragstart=handleDragStart;
		net.ondragenter=handleDragEnter;
		net.ondragover=handleDragOver;
		net.ondragleave=handleDragLeave;
		net.ondrop=handleDrop;
		net.ondragend=handleDragEnd;
	});
}
//setDragAndDropEventListeners();


var dragSrcEl = null;
function handleDragStart(e) {
		// Target (this) element is the source node.
		this.style.opacity = '0.1';

		dragSrcEl = this;
}

function handleDrop(e) {
  // this/e.target is current target element.

	// Stops some browsers from redirecting.
  if (e.stopPropagation) {
    e.stopPropagation();   }
	if(e.preventDefault) { e.preventDefault(); }

  // Don't do anything if dropping the same net we're dragging.
  if (dragSrcEl != this) {
		// switch the nets
		tmp = this.src; tmp2 = this.name;
		this.src = dragSrcEl.src;
		this.name = dragSrcEl.name;
		dragSrcEl.src = tmp;
		dragSrcEl.name = tmp2;
  }

  return false;
}
