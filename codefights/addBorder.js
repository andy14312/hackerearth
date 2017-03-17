function addBorder(picture) {
    var length = picture[0].length;
    var border = "*".repeat(length+2);
    var picture2 = picture.map(function(el){
        return "*"+el+"*";
    });
    picture2.push(border);
    picture2.unshift(border);
    return picture2;
}

console.log(addBorder(["abc","ded"]));