/*
 * StringBuilder constructor definition.
 * We need a function that implements an append method and a function that
 * creates the corresponding string from the Array
 *
 */

function StringBuilder(value){
  this.str = new Array("");
  this.append(value);
}

StringBuilder.prototype.append = function(value){
  if(value){
    this.str.push(value);
  }
}

StringBuilder.prototype.clear = function(){
  this.str.length = 1;
}

StringBuilder.prototype.toString = function(){
  return this.str.join('');
}

exports.StringBuilder = StringBuilder;
