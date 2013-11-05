pretty-print
============

Print formatted data to the the command line.

## Install

```
npm install pretty-print --save
```

## Usage

### print(array, [options]);

####Object

```javascript
var print = require('pretty-print');

print({
  key: 'value'
  longerKey: 'value'
});

// outputs
//
// key        value
// longerKey  value
```

#### Array of objects

```javascript
var prettyPrint = require('pretty-print');

pretttyPrint.array([
  {
    name: 'guy',
    height: 'short',
  },
  {
    name: 'girl',
    height: 'short'
  }
], 'name', 'height');

// outputs:
//
// guy:   short
// girl:  short
```
