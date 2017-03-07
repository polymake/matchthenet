var active;
var centers;
// mapping from divs to imgs
var children;
var parents;
// where the drag started
var netorigins;
var dropzones = document.getElementsByClassName("dropzone");
var borders;

function resetDragging() {
  active = {};
  centers = {};
  // mapping from divs to imgs
  children = {netbox0: 'net0', netbox1: 'net1', netbox2: 'net2', netbox3: 'net3', netbox4: 'net4'};
  parents = {net0: 'netbox0', net1: 'netbox1', net2: 'netbox2', net3: 'netbox3', net4: 'netbox4'}
  // where the drag started
  netorigins = {};
  borders=0;
  for (var i=0; i<dropzones.length; i++){
    var net = document.getElementById(children[dropzones[i].id]);
    dropzones[i].appendChild(net);
    net.style.webkitTransform =
    net.style.transform =
      'translate(0px, 0px)';
    net.setAttribute('data-x', 0);
    net.setAttribute('data-y', 0);
  }
}

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    max: 1,
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      // keep them in the corresponding row during the draggin
      restriction: "#netsRow",
      endOnly: false,
      // allow a bit overlap and some more to the top
      elementRect: { top: 1, left: 0.5, bottom: 0.5, right: 0.5 }
    },
    snap: {
      // snap when releasing
      endOnly: true,
      // always snap
      range: Infinity,
      // relative to center!
      relativePoints: [
        { x: 0.5, y: 0.5 }
      ],
      // allow snapping back to the start point
      targets: [],
    },
    // enable autoScroll
    autoScroll: true,

    onstart: function (event) {
		dragHint.style.display = 'none';
      var startDiv = parents[event.target.id];
      //console.log("onstart: " + event.target.id + " -- " + startDiv);
      active[event.target.id]=event.interactable;
      netorigins[event.target.id] = startDiv;
      var rect = interact.getElementRect(document.getElementById(startDiv));
      centers[startDiv] = {
        x: rect.left + rect.width  / 2,
        y: rect.top  + rect.height / 2
      }
      // record center point when starting the very first a drag
      event.interactable.draggable({
        snap: {
          targets: [ {x: centers[startDiv].x, y: centers[startDiv].y} ]
        }
      });
      borders++;
      if (borders == 1) {
        for (var i=0; i<dropzones.length; i++){
          dropzones[i].classList.add('over');
        }
      }
    },
    // call this function on every dragmove event
    onmove: dragMoveListener,
    onend: function (event) {
      //console.log("onend: " + event.target.id);
      netorigins[event.target.id] = 0;
      active[event.target.id]=0;
    },
  });

  // keep the target under the cursor and store the translation
  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

function flipother(event, child, div){
  //console.log("flipping: " + child + " to " + div);
  if (active[child]) {
    event.draggable.draggable({
      snap: {
        targets: [ {x: centers[div].x, y: centers[div].y} ]
      }
    });
  } else {
    var node = document.getElementById(child);
    var x = (centers[div].x - centers[node.parentNode.id].x);
    var y = (centers[div].y - centers[node.parentNode.id].y);
    node.style.webkitTransform =
    node.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';
    node.setAttribute('data-x', x);
    node.setAttribute('data-y', y);
  }
}

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '.draggable',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.50,

  // listen for drop related events:
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    var rect = interact.getElementRect(document.getElementById(dropzoneElement.id));
    centers[dropzoneElement.id] = {
      x: rect.left + rect.width  / 2,
      y: rect.top  + rect.height / 2
    }
    // set new snap position
    event.draggable.draggable({
      snap: {
        targets: [ {x: centers[dropzoneElement.id].x, y: centers[dropzoneElement.id].y} ]
      }
    });

    var otherdiv = parents[draggableElement.id];
    var otherchild = children[dropzoneElement.id];
    //console.log("dragenter: " + event.relatedTarget.id + " into " + event.target.id + " -- others: " + otherchild + " " +otherdiv);
    // feedback the possibility of a drop by translating the other
    if (otherchild != draggableElement.id) {
      
      flipother(event,otherchild,otherdiv);

      children[otherdiv] = otherchild;
      parents[otherchild] = otherdiv;
      children[dropzoneElement.id] = draggableElement.id;
      parents[draggableElement.id] = dropzoneElement.id;
    }
  },
  ondragleave: function (event) {
    // reset snap positions
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    var otherdiv = netorigins[draggableElement.id];
    if (!otherdiv) {
      // this should not happen so better skip this event
      //console.log("skipping dragleave: " + event.relatedTarget.id + " into " + event.target.id);
      return;
    }
    event.draggable.draggable({
      snap: {
        targets: [ {x: centers[otherdiv].x, y: centers[otherdiv].y} ]
      }
    });
    var otherchild = children[otherdiv];
    //console.log("dragleave: " + event.relatedTarget.id + " into " + event.target.id + " -- others: " + otherchild + " " +otherdiv);
    // translate back
    if (otherchild != draggableElement.id) {

      flipother(event,otherchild,dropzoneElement.id);

		updateMappings(draggableElement, dropzoneElement, otherchild, otherdiv);
    }
  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    var otherdiv = draggableElement.parentNode.id;
    if (dropzoneElement.childNodes.length != 1) {
      console.warn("matchthenet: internal error");
      return;
    }
    var otherchild = dropzoneElement.childNodes[0].id;
    //console.log("drop: " + event.relatedTarget.id + " into " + event.target.id + " -- others: " + otherchild + " " +otherdiv);
    // now we reset the transformation and exchange the img nodes
    if (otherchild != draggableElement.id) {
      var otherchildnode = document.getElementById(otherchild);
      var otherdivnode = document.getElementById(otherdiv);
		resetAndExchange(draggableElement,dropzoneElement,otherchildnode,otherdivnode);
    }
    borders--;
    if (borders <= 0) {
      borders = 0;
      for (var i=0; i<dropzones.length; i++){
        dropzones[i].classList.remove('over');
      }
    }
  },
});

function updateMappings(draggableElement, dropzoneElement, otherchildid, otherdivid){
  children[otherdivid] = draggableElement.id;
  parents[otherchildid] = dropzoneElement.id;
  children[dropzoneElement.id] = otherchildid;
  parents[draggableElement.id] = otherdivid;
}

function resetAndExchange(draggableElement,dropzoneElement,otherchildnode,otherdivnode){
  var otherchild = dropzoneElement.childNodes[0].id;
  var otherdiv = draggableElement.parentNode.id;
  // hide while moving
  var x = 0;
  var y = 0;
  if (Object.keys(centers).length > 0){
    if (active[otherchild]) {
      x += parseFloat(otherchildnode.getAttribute('data-x'));
      y += parseFloat(otherchildnode.getAttribute('data-y'));
      x += (centers[otherchildnode.parentNode.id].x - centers[otherdiv].x);
      y += (centers[otherchildnode.parentNode.id].y - centers[otherdiv].y);
    } else {
      if (otherdiv != parents[otherchild]) {
        x += centers[parents[otherchild]].x - centers[otherdiv].x;
        y += centers[parents[otherchild]].y - centers[otherdiv].y;
      }
    }
  }
  otherdivnode.appendChild(otherchildnode);
  otherchildnode.style.webkitTransform =
    otherchildnode.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';
  otherchildnode.setAttribute('data-x', x);
  otherchildnode.setAttribute('data-y', y);
  draggableElement.style.webkitTransform =
    draggableElement.style.transform =
    'translate(' + 0 + 'px, ' + 0 + 'px)';
  draggableElement.setAttribute('data-x', 0);
  draggableElement.setAttribute('data-y', 0);
  dropzoneElement.appendChild(draggableElement);
}
