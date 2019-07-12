$(document).ready(function(){
  $.ajax({
    url: './data/beijing.json',
    success: function(resp) {
      
      var response = [
        {
          "content": [
            {
              "line_name": "地铁16号线(西苑-北安河)",
              "line_uid": "df70782f9677438a373a71e9",
              "pair_line_uid": "1c7438e02ac59124f5c59c83",
              "stops": [
                {
                  "is_practical": 0,
                  "name": "西苑",
                  "uid": "81b778513892613204fef57e",
                  "x": 12946436.16,
                  "y": 4838955.12
                }
              ]
            }
          ]
        }
      ]
       
      var oCanvas = document.getElementById('canvas'); 
      var stage = new JTopo.Stage(oCanvas);
      var scene = new JTopo.Scene(stage);
      scene.background = './images/bg.jpg';
      
      var env = {
        canvas: canvas,
        stage: stage,
        scene: scene,
      }
      
      // var node = new JTopo.Node('hello world');
      // node.setLocation(409, 269);
      // env.scene.add(node);
      
      
      initNode(response, env);
    }
  })
})

function initNode(data, env) {
  for (var lines in data.content) {
    var stops = lines.stops;
    for (var stop in stops) {
      var node_name = stop.uid;
      var node_name = stop.name;
      var node_pos_x = stop.x;
      var node_pos_y = stop.y;
      var node = new JTopo.Node(node_name);
      node.setLocation(409, 269);
      env.scene.add(node);
    }
  }
}