function indexar(obj){
    var temp = {};
    
    for(var i=0;i<obj.length;i++){
        temp[i+1] = obj[i];
    };
    return temp;
};


const usuarios = [
    {id:1,nome:"Ana"},
    {id:2,nome:"Bruno"},
    {id:3,nome:"Carla"}
];

console.log(indexar(usuarios));