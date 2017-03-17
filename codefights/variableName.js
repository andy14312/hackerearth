function variableName(name) {
    var reg = new RegExp("^([a-z|A-Z|_])([a-z|A-Z|0-9|_]*)$")
    return reg.test(name);
}

console.log(variableName("y5u_ty"))