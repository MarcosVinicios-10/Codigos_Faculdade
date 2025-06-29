let usuarios = [{nome:'João',idade:20},{nome:'Maria',idade:22},{nome:'Pedro',idade:18},{nome:'Carla',idade:25}];
let maior_21 = usuarios.filter((x)=>{return x.idade>21});
console.log(maior_21);