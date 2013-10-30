var expect = require('chai').expect;

var decoratejs = require('../decoratejs.js');

describe('decoratejs()', function () {
    it('Check exports', function () {
        expect(true).to.equal('loggable' in decoratejs);
        expect(true).to.equal('profilable' in decoratejs);
        expect(true).to.equal('createinterface' in decoratejs);
    });
    it('Check loggable', function () {
        var foo = { propA : 1, methodA : function() { return 1; }, methodB : function(a,b) { return a + b; } };
        var loggableFoo = decoratejs.loggable(foo);
        // force a new line for tidiness
        console.log(' ');
        expect(foo.propA).to.equal(loggableFoo.propA);
        expect(foo.methodA()).to.equal(loggableFoo.methodA());
        expect(foo.methodB(1, 2)).to.equal(loggableFoo.methodB(1, 2));
    });
    it('Check profilable', function () {
        var foo = { propA : 1, methodA : function() { return 1; }, methodB : function(a,b) { return a + b; } };
        var profilableFoo = decoratejs.profilable(foo);
        // force a new line for tidiness
        console.log(' ');
        expect(foo.propA).to.equal(profilableFoo.propA);
        expect(foo.methodA()).to.equal(profilableFoo.methodA());
        expect(foo.methodB(1, 2)).to.equal(profilableFoo.methodB(1, 2));
    });
    it('Check profilable and loggable', function () {
        var foo = { propA : 1, methodA : function() { return 1; }, methodB : function(a,b) { return a + b; } };
        var profilableFoo = decoratejs.profilable(foo);
        var loggableFoo = decoratejs.loggable(profilableFoo);
        // force a new line for tidiness
        console.log(' ');
        expect(foo.propA).to.equal(loggableFoo.propA);
        expect(foo.methodA()).to.equal(loggableFoo.methodA());
        expect(foo.methodB(1, 2)).to.equal(loggableFoo.methodB(1, 2));
    });
    it('Check createinterface', function () {
        var fooIfaceList = ['methodA','methodB'];
        var fooInterface = decoratejs.createinterface(fooIfaceList);
        // force a new line for tidiness
        for (var methodname in fooIfaceList) {
            expect(methodname in fooInterface).to.equal(true);
        }
    });
});
