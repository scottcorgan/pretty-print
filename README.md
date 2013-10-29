pretty-print
============

Print formatted data to the the command line.

## Install

```
npm install pretty-print --save
```

## Usage

####Object

```javascript
var prettyPrint = require('pretty-print');

prettyPrint.object({
  key: 'value'
  longerKey: 'value'
});

// outputs:
//
// key:        value
// longerKey:  value
```

#### Array

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
```
