# decorate

Decorate is a small library for providing simple utilities to decorate objects and create interfaces.

[![Build Status](https://secure.travis-ci.org/user/decorate.png?branch=master)](http://travis-ci.org/user/decorate)


## Installation

Install with npm:

```
npm install --save decorate
```


## API

### decoratejs
#### decoratejs.createinterface(['methodA', 'methodB', ...])
Creates an object with methods with names from the Array of strings provided as input. Returns an object with said methods, and an implementation that raises an 'UnimplementedException' with the same name as that of the method.
#### decoratejs.loggable(obj)
Creates a new object that is returned which adds a log on every invocation for all functions in the input object.
#### decoratejs.profilable(obj)
Creates a new object that is returned which adds a log of time taken for every invocation for all functions in the input object.



## Testing

From the repo root:

```
npm install
npm test
```
