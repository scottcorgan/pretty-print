var print = require('../');

var data = {
  one: '1',
  two: '2',
  three: '3',
  four: '4'
};

// var data = [{
//   name: 'name1',
//   desc: 'desc1'
// },
// {
//   name: 'name2',
//   desc: 'desc2'
// }];


// var data = ['name1', 'name2'];

print(data, {
  padding: 3,
  key: 'name',
  value: 'desc'
});