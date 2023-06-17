const validAnagram=(s,t)=>{

if(s.length!==t.length){
    return false
}
let aSplit=s.split("").sort().join("")
let tSplit=t.split("").sort().join("")
if(tSplit===aSplit){
    return true
}else{
    return false
}
}

console.log(validAnagram("cara","arc"))