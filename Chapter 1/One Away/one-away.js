exports.oneAway = function(first,second){
  var oneEditReplace = function(first, second){
    var flag = false;

    for(var i=0; i < first.length; i++){
      if(first[i] !== second[i]){
        if(flag){
          return false;
        }
        flag = true;
      }
    }
    return true;
  }

  var oneEditInsert = function(first,second){
    var pointerFirst = 0;
    var pointerSecond = 0;

    while(pointerFirst < first.length){
      if(first[pointerFirst] !== second[pointerSecond]){
        pointerSecond ++;
        if(pointerFirst + 1 > pointerSecond){
          return false;
        }
      }
      pointerFirst++;
      pointerSecond++;
    }

    return true;
  }

  var oneEditAway = function(first,second){
    if(first.length === second.length){
      return oneEditReplace(first,second);
    } else if(first.length + 1 === second.length){
      return oneEditInsert(first,second);
    } else if(first.length === second.length + 1){
      return oneEditInsert(second,first);
    }
    return false;
  }

  return oneEditAway(first,second);
}
