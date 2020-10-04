var centerx = 750;
var centery = 1800;

var blob1 = createBlob({
    element: document.querySelector("#path-h-1"),
    numPoints: 10,
    centerX: centerx,
    centerY: centery,
    minRadius: 300,
    maxRadius: 325,
    minDuration: 1,
    maxDuration: 2
  });
  
  var blob2 = createBlob({
    element: document.querySelector("#path-h-2"),
    numPoints: 5,
    centerX: centerx,
    centerY: centery,
    minRadius: 200,
    maxRadius: 225,
    minDuration: 0.75,
    maxDuration: 1.75
  });
  
  var blob3 = createBlob({
    element: document.querySelector("#path-h-3"),
    numPoints: 10,
    centerX: centerx,
    centerY: centery,
    minRadius: 400,
    maxRadius: 425,
    minDuration: 1,
    maxDuration: 2
  });

  var blob4 = createBlob({
    element: document.querySelector("#path-h-4"),
    numPoints: 10,
    centerX: centerx,
    centerY: centery,
    minRadius: 500,
    maxRadius: 525,
    minDuration: 1,
    maxDuration: 2
  });

  var blob5 = createBlob({
    element: document.querySelector("#path-h-5"),
    numPoints: 13,
    centerX: centerx,
    centerY: centery,
    minRadius: 600,
    maxRadius: 625,
    minDuration: 1,
    maxDuration: 2
  });

  var blob6 = createBlob({
    element: document.querySelector("#path-h-6"),
    numPoints: 13,
    centerX: centerx,
    centerY: centery,
    minRadius: 700,
    maxRadius: 725,
    minDuration: 1,
    maxDuration: 2
  });

  var blob7 = createBlob({
    element: document.querySelector("#path-h-7"),
    numPoints: 13,
    centerX: centerx,
    centerY: centery,
    minRadius: 800,
    maxRadius: 825,
    minDuration: 1,
    maxDuration: 2
  });


  
  // To show the points
  // createDots([blob1, blob2, blob3, blob4, blob5, blob6]);
  
  function createBlob(options) {
     
    var points = [];  
    var path = options.element;
    var slice = (Math.PI * 2) / options.numPoints;
    var startAngle = random(Math.PI * 2);
    
    var tl = new TimelineMax({
      onUpdate: update
    });  
    
    for (var i = 0; i < options.numPoints; i++) {
      
      var angle = startAngle + i * slice;
      var duration = random(options.minDuration, options.maxDuration);
      
      var point = {
        x: options.centerX + Math.cos(angle) * options.minRadius,
        y: options.centerY + Math.sin(angle) * options.minRadius
      };   
      
      var tween = TweenMax.to(point, duration, {
        x: options.centerX + Math.cos(angle) * options.maxRadius,
        y: options.centerY + Math.sin(angle) * options.maxRadius,
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });
      
      tl.add(tween, -random(duration));
      points.push(point);
    }
    
    options.tl = tl;
    options.points = points;
    
    function update() {
      path.setAttribute("d", cardinal(points, true, 1));
    }
    
    return options;
  }
  
  // Cardinal spline - a uniform Catmull-Rom spline with a tension option
  function cardinal(data, closed, tension) {
    
    if (data.length < 1) return "M0 0";
    if (tension == null) tension = 100;
    
    var size = data.length - (closed ? 0 : 1);
    var path = "M" + data[0].x + " " + data[0].y + " C";
    
    for (var i = 0; i < size; i++) {
      
      var p0, p1, p2, p3;
      
      if (closed) {
        p0 = data[(i - 1 + size) % size];
        p1 = data[i];
        p2 = data[(i + 1) % size];
        p3 = data[(i + 2) % size];
        
      } else {
        p0 = i == 0 ? data[0] : data[i - 1];
        p1 = data[i];
        p2 = data[i + 1];
        p3 = i == size - 1 ? p2 : data[i + 2];
      }
          
      var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
      var y1 = p1.y + (p2.y - p0.y) / 6 * tension;
  
      var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
      var y2 = p2.y - (p3.y - p1.y) / 6 * tension;
      
      path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
    }
    
    return closed ? path + "z" : path;
  }
  
  function random(min, max) {
    if (max == null) { max = min; min = 0; }
    if (min > max) { var tmp = min; min = max; max = tmp; }
    return min + (max - min) * Math.random();
  }
  
  
  
  
  
  function createDots(blobs) {
    
    var dotContainer = document.querySelector("#dot-container");
    var checkBox = document.querySelector("#show-points");
    var showPoints = true;
    var points = [];
    var dots = [];
    
    blobs.forEach(function(blob) {        
      blob.points.forEach(function(point) {      
        
        var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("r", 4);
        dot.setAttribute("class", "dot");
        dotContainer.appendChild(dot);
        dots.push(dot);
        points.push(point);      
      });
    });
    
    onChange();
    checkBox.addEventListener("change", onChange);
    TweenLite.ticker.addEventListener("tick", update);
    
    function onChange() {
      showPoints = checkBox.checked; 
      dotContainer.style.setProperty("visibility", showPoints ? "visible" : "hidden");
    }
    
    function update() {
      
      if (!showPoints) {
        return;
      }
      
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        dots[i].setAttribute("transform", "translate(" + p.x + "," + p.y + ")");
      }
    }
  }
  
  