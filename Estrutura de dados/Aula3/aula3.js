var number = [90,70,50,80,60,85];
number.push(5,6,7);
number.unshift(2,3,4);
number.splice(3,0,500);
number.pop();
number.shift();
console.log(number);

function adicionar(array,n){
	array.push(n)
};
adicionar(number,75)
console.log(number);