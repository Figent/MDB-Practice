function countChar(val) {
var len = val.value.length;
if (len <= 1){
    $('#charNum').text(len + " character")
}else if(len >= 2 && len <= 10){
    $('#charNum').text(len + " characters");
}else{
    val.value = val.value.substring(0, 10);
}
};