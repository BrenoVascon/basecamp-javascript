function mapSemThis(arr) {
  arr.map(function (item) {
    return item * 2;
  });
}

const num = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

console.log(nums);


/* 

const maçã = {
  value: 2,
}

const laranja = {
  value: e,
}

function mapComthis(arr, thisArg) {
  return arr.map(function(item){
  return item * this.value;
  }, thisArg);
};

const nums = [1, 2];

console.log(mapComThis(nums, maçã);

console.log('this -> maçã', mapComthis(nums, maçã));

console.log('this -> laranja', mapComthis(nums, maçã)); */