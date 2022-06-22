function jsonFinder(obj,req){
    //Find index of specific object using findIndex method.    
    return obj.findIndex((obj => obj.id == req.params.id));
}
module.exports = jsonFinder;
