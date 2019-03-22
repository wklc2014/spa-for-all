var game_config = {
  id: 'game',
  width: 400,
  height: 400,
  background: '#eee',
  cloumn: {
    color: '#000',
  }
};
var column_config = {
  width: 50,
  height: 50,
};

var floor_config = {
  height: 50,
  bottom: 0,
}


var dom = document.getElementById(game_config.id);

Crafty.init(game_config.width, game_config.height, dom).background(game_config.background);


var column_one = Crafty
  .e('2D, Canvas, Color')
  .attr({
    x: 0,
    y: game_config.height - floor_config.height - column_config.height,
    w: column_config.width,
    h: column_config.height,
  })
  .color(game_config.cloumn.color);

var floor = Crafty
  .e('2D, Canvas, Color')
  .attr({
    x: 0,
    y: game_config.height - floor_config.height - floor_config.bottom,
    w: game_config.width,
    h: floor_config.height,
  })
  .color(game_config.cloumn.color);

var cir = new Crafty.circle(10, 10, 10);
console.log('cir>>>', cir);