pretty-print
============

Print formatted data to the the command line.

## Install

```
npm install pretty-print --save
```

## Usage

###Object

**Options**

* ` padding ` - extra padding after the object key

```javascript
var print = require('pretty-print');
var options = {
  padding: 3
};

print({
  key: 'value'
  longerKey: 'value'
}, options);

// outputs
//
// key        value
// longerKey  value
```

### Array of objects

**Options**

* ` padding ` - extra padding after the object key
* ` key ` - name of the value to use as the list key
* ` value ` - name of value to use as the list value

```javascript
var print = require('pretty-print');
var options = {
  padding: 3,
  key: 'name',
  value: 'height'
};

printy([
  {
    name: 'guy',
    height: 'short',
  },
  {
    name: 'girl',
    height: 'short'
  }
], options);

// outputs:
//
// guy:   short
// girl:  short
```

### Array of strings or numbers

```javascript
var print = require('pretty-print');

print(['val1', 'val2', 'val3']);

// outputs:
//
//  val1
//  val2
//  val3
```
