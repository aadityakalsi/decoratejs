# decorate

Decorate is a small library for providing simple utilities to decorate objects and create interfaces.

Any object can be made:

a. createinterface: Creates an object with methods with names from the Array of strings provided as input. Returns an object with said methods, and an implementation that raises an 'UnimplementedException' with the same name as that of the method.
b. loggable: Adds a log on every invocation for all functions in the input object.
c. profilable: Adds a log of time taken for every invocation for all functions in the input object.

[![Build Status](https://secure.travis-ci.org/user/decorate.png?branch=master)](http://travis-ci.org/user/decorate)


## Installation

Install with npm:

```
npm install --save decorate
```


## API

### decorate()


## Testing

From the repo root:

```
npm install
npm test
```
