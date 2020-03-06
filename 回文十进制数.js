let getResult = function(){
    let ret = 11;
    let  isCircle =  function(str){
        for(let i = 0,len = str.length;i < Math.floor(len/2);i ++){
            if(str[i] !== str[len - 1 - i]){
                return false;
            }
        }
        return true;
    }
    while(true){
        if([ret.toString(2),ret.toString(8),ret.toString(10)].every((v)=>{return isCircle(v);})){
            break;
        }else{
            ret ++;
        }
    }
    return ret;
}
console.log(getResult());
