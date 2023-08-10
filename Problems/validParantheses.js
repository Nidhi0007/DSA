// var isValid = function(s) {
//     var stack = [];
//     var len = s.length;
//     var map = {
//       '(': ')',
//       '[': ']',
//       '{': '}'
//     };
//     for (var i = 0; i < len; i++) {
//       if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
//         stack.pop();
//         console.log("stack",map[stack[stack.length - 1]], s[i])
//       } else {
//         console.log("stack",map[stack[stack.length - 1]], s[i])
//         stack.push(s[i]);
//         console.log("else",stack)
//       }
//     }
//     return stack.length === 0;
//   };


function isValid(s){
  var map={
    '{':'}',
    '[':']',
    '(':')'
  }
  let stack=[]

  for(let i=0;i<s.length;i++){
    if(stack.length> 0 && map[stack[stack.length-1]]===s[i]){
      stack.pop()
    }else{
      stack.push(s[i])
    }
  }
  return stack.length==0

}
console.log(isValid("{}"))