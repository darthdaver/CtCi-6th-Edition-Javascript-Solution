const assert = require('chai').assert;
const checkIsUnique = require('../Chapter 1/Is Unique/is-unique.js').checkIsUnique;
const checkPermutation = require('../Chapter 1/Check Permutation/check-permutation.js').checkPermutation;
const checkPermutationRefinement = require('../Chapter 1/Check Permutation/check-permutation-refinement.js').checkPermutationRefinement;
const URLfy = require('../Chapter 1/URLfy/URLfy.js').URLfy;
const palindromePermutation = require('../Chapter 1/Palindrome Permutation/palindrome-permutation.js').palindromePermutation;
const oneAway = require('../Chapter 1/One Away/one-away.js').oneAway;

describe('Chapter 1', function(){
  describe('Is unique', function(){
    it('String with unique characters', function(){
      assert.isTrue(checkIsUnique('padle'), 'Padle is unexpectedly considered a word with duplicates');
    });
    it('String with not unique characters', function(){
      assert.isNotTrue(checkIsUnique('apple'), 'Apple is unexpectedly considered a word with all unique characters');
    });
  });

  describe('Check Permutation', function(){
    it('Strings with different length', function(){
      assert.isNotTrue(checkPermutation('hello','helloandgoodbye'),'Unexpectedly, the strings are considered one the permutation of the other');
    });
    it('Strings with same length, but in which the one is not a permutation of the other', function(){
      assert.isNotTrue(checkPermutation('hello','apple'), 'Unexpectedly, the strings are considered one the permutation of the other');
    });
    it('String with same length, in which the one is a permutation of the other', function(){
      assert.isTrue(checkPermutation('hello','olleh'), 'Unexpectedly, the strings are not considered one the permutation of the other');
    });
  });

  describe('Check Permutation Refinement', function(){
    it('Strings with different length', function(){
      assert.isNotTrue(checkPermutationRefinement('hello','helloandgoodbye'),'Unexpectedly, the strings are considered one the permutation of the other');
    });
    it('Strings with same length, but in which the one is not a permutation of the other', function(){
      assert.isNotTrue(checkPermutationRefinement('hello','apple'), 'Unexpectedly, the strings are considered one the permutation of the other');
    });
    it('String with same length, in which the one is a permutation of the other', function(){
      assert.isTrue(checkPermutationRefinement('hello','olleh'), 'Unexpectedly, the strings are not considered one the permutation of the other');
    });
  });

  describe('URLfy', function(){
    it('Strings without blank spaces', function(){
      assert.strictEqual(URLfy('Hellomynameissuperpippo'),"Hellomynameissuperpippo",'Unexpected behaviour');
    });
    it('Strings with blank spaces', function(){
      assert.strictEqual(URLfy('  Hello my name is super pippo  '), '%20%20Hello%20my%20name%20is%20super%20pippo%20%20','Unexpected behaviour');
    });
  });

  describe('Palindrome Permutation', function(){
    it('Palindrome string', function(){
      assert.isTrue(palindromePermutation('super mega       iper repiagem    rep us'),'Unexpected behaviour');
    });
    it('Not Palindrome string', function(){
      assert.isNotTrue(palindromePermutation('astalavistavisto che asta'),'Unexpected behaviour');
    });
  });

  describe('One Away', function(){
    it('One Edit Insert', function(){
      assert.isTrue(oneAway('pale','ple'),'Unexpected behaviour');
    });
    it('One Edit Insert', function(){
      assert.isTrue(oneAway('pale','pales'),'Unexpected behaviour');
    });
    it('One Edit Replace', function(){
      assert.isTrue(oneAway('pale','bale'),'Unexpected behaviour');
    });
    it('Illegal Edit Insert', function(){
      assert.isNotTrue(oneAway('pale','palette'),'Unexpected behaviour');
    });
    it('Illegal Edit Insert', function(){
      assert.isNotTrue(oneAway('palette','pale'),'Unexpected behaviour');
    });
    it('Illegal Edit Replace', function(){
      assert.isNotTrue(oneAway('pale','bake'),'Unexpected behaviour');
    });
  });
});
