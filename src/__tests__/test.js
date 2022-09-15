const assert = require('assert');
const expect = require('chai').expect;
const filterFn = require('../../lib/filter');
const mapFn = require('../../lib/map');
const findFn = require('..//../lib/find');
const concatFn = require('../../lib/concat');
const pipeFn = require('../../lib/pipe');
describe('Tests', function () {
  it('filterFn', () => {
    expect(
      filterFn([
        'spray',
        'limit',
        'elite',
        'exuberant',
        'destruction',
        'present',
      ])
    ).deep.to.equal(['exuberant', 'destruction', 'present']);
  });
  it('mapFn', function () {
    expect(mapFn(['spray', 'limit'])).deep.to.equal([
      { id: 0, name: 'spray' },
      { id: 1, name: 'limit' },
    ]);
  });
  it('findFn', function () {
    expect(
      findFn(
        [
          { id: 0, name: 'spray' },
          { id: 1, name: 'limit' },
        ],
        1
      )
    ).to.deep.equal({ id: 1, name: 'limit' });
  });
  it('concatFn', function () {
    expect(
      concatFn(
        ['spray', 'limit', 'elite'],
        ['exuberant', 'destruction', 'present']
      )
    ).deep.to.equal([
      'spray',
      'limit',
      'elite',
      'exuberant',
      'destruction',
      'present',
    ]);
  });
  it('pipeFn', function () {
    expect(
      pipeFn(['spray', 'limit', 'elite', 'exuberant', 'destruction'])
    ).deep.to.equal([
      { id: 0, name: 'exuberant' },
      { id: 1, name: 'destruction' },
    ]);
  });
});
