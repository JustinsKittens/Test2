let stage = new blockLike.Stage();
let sprite = new blockLike.Sprite();

sprite.addTo(stage);
sprite.whenFlag( function() {
  this.say('I am alive');
});
