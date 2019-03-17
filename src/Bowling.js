function Bowling() {
  this._rolls = []
  this._result = 0
  this._rollIndex = 0
  this._frameIndex = 0
}

Bowling.prototype.roll = function(pinsDown) {
  this._rolls.push(pinsDown);
  console.log(this._rolls)
}

Bowling.prototype.score = function() {
  for (this._frameIndex = 0; this._frameIndex < 10; this._frameIndex ++) {

    if (this.isSpare()) {
      this._result += this.spareScoring();
    } else {
        this._result += this.basicScoring();
      }
  this._rollIndex += 2;
  }
  return this._result
  console.log(this._result)
}

Bowling.prototype.isSpare = function() {
    return this._rolls[this._rollIndex] + this._rolls[this._rollIndex + 1] == 10
}

Bowling.prototype.spareScoring = function() {
    return this._result += this._rolls[this._rollIndex] + this._rolls[this._rollIndex + 1] + this._rolls[this._rollIndex + 2];
}

Bowling.prototype.basicScoring = function() {
  return this._rolls[this._rollIndex] + this._rolls[this._rollIndex + 1];
}
