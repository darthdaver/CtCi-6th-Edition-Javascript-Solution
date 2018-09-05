const chai = require('chai');
const checkIsUnique = require('../Chapter 1/Is Unique/is-unique.js').checkIsUnique;
const checkPermutation = require('../Chapter 1/Check Permutation/check-permutation.js').checkPermutation;
const checkPermutationRefinement = require('../Chapter 1/Check Permutation/check-permutation-refinement.js').checkPermutationRefinement;
const badURLfy = require('../Chapter 1/URLfy/badURLfy.js').badURLfy;
const URLfy = require('../Chapter 1/URLfy/URLfy.js').URLfy;
const isPalindrome = require('../Chapter 1/Palindrome Permutation/is-palindrome-personal-interpretation.js').isPalindrome;
const palindromePermutation = require('../Chapter 1/Palindrome Permutation/palindrome-permutation.js').palindromePermutation;
const oneAway = require('../Chapter 1/One Away/one-away.js').oneAway;
const stringCompressionPI = require('../Chapter 1/String Compression/string-compression-personal-interpretation.js').stringCompressionPI;
const stringCompression = require('../Chapter 1/String Compression/string-compression.js').stringCompression;
const rotateMatrix = require('../Chapter 1/Rotate Matrix/rotate-matrix.js').rotateMatrix;

describe('Chapter 1', function(){
  describe('Is unique', function(){
    it('String with unique characters', function(){
      chai.assert.isTrue(checkIsUnique('padle'), 'Padle is unexpectedly considered a word with duplicates');
    });
    it('String with not unique characters', function(){
      chai.assert.isNotTrue(checkIsUnique('apple'), 'Apple is unexpectedly considered a word with all unique characters');
    });
  });

  describe('Check Permutation', function(){
    it('Strings with different length', function(){
      chai.assert.isNotTrue(checkPermutation('hello','helloandgoodbye'),'Unexpectedly, the strings are considered one the permutation of the other');
    });
    it('Strings with same length, but in which the one is not a permutation of the other', function(){
      chai.assert.isNotTrue(checkPermutation('hello','apple'), 'Unexpectedly, the strings are considered one the permutation of the other');
    });
    it('String with same length, in which the one is a permutation of the other', function(){
      chai.assert.isTrue(checkPermutation('hello','olleh'), 'Unexpectedly, the strings are not considered one the permutation of the other');
    });
  });

  describe('Check Permutation Refinement', function(){
    it('Strings with different length', function(){
      chai.assert.isNotTrue(checkPermutationRefinement('hello','helloandgoodbye'),'Unexpectedly, the strings are considered one the permutation of the other');
    });
    it('Strings with same length, but in which the one is not a permutation of the other', function(){
      chai.assert.isNotTrue(checkPermutationRefinement('hello','apple'), 'Unexpectedly, the strings are considered one the permutation of the other');
    });
    it('String with same length, in which the one is a permutation of the other', function(){
      chai.assert.isTrue(checkPermutationRefinement('hello','olleh'), 'Unexpectedly, the strings are not considered one the permutation of the other');
    });
  });

  describe('Bad URLfy', function(){
    it('Strings without blank spaces', function(){
      chai.assert.strictEqual(badURLfy('Hellomynameissuperpippo'),"Hellomynameissuperpippo",'Unexpected behaviour');
    });
    it('Strings with blank spaces', function(){
      chai.assert.strictEqual(badURLfy('  Hello my name is super pippo  '), '%20%20Hello%20my%20name%20is%20super%20pippo%20%20','Unexpected behaviour');
    });
  });

  describe('URLfy', function(){
    it('Strings without blank spaces', function(){
      chai.assert.strictEqual(URLfy('Hellomynameissuperpippo'),"Hellomynameissuperpippo",'Unexpected behaviour');
    });
    it('Strings with blank spaces', function(){
      chai.assert.strictEqual(URLfy('  Hello my name is super pippo  '), '%20%20Hello%20my%20name%20is%20super%20pippo%20%20','Unexpected behaviour');
    });
  });

  describe('Is Palindrome', function(){
    it('Palindrome string', function(){
      chai.assert.isTrue(isPalindrome('super mega       iper repiagem    rep us'),'Unexpected behaviour');
    });
    it('Not Palindrome string', function(){
      chai.assert.isNotTrue(isPalindrome('astalavistavisto che asta'),'Unexpected behaviour');
    });
  });

  describe('Palindrome Permutation', function(){
    it('Palindrome string', function(){
      chai.assert.isTrue(palindromePermutation('super mega    rep us   iper  repiagem '),'Unexpected behaviour');
    });
    it('Not Palindrome string', function(){
      chai.assert.isNotTrue(palindromePermutation('astalavistavisto che asta'),'Unexpected behaviour');
    });
  });

  describe('One Away', function(){
    it('One Edit Insert', function(){
      chai.assert.isTrue(oneAway('pale','ple'),'Unexpected behaviour');
    });
    it('One Edit Insert', function(){
      chai.assert.isTrue(oneAway('pale','pales'),'Unexpected behaviour');
    });
    it('One Edit Replace', function(){
      chai.assert.isTrue(oneAway('pale','bale'),'Unexpected behaviour');
    });
    it('Illegal Edit Insert', function(){
      chai.assert.isNotTrue(oneAway('pale','palette'),'Unexpected behaviour');
    });
    it('Illegal Edit Insert', function(){
      chai.assert.isNotTrue(oneAway('palette','pale'),'Unexpected behaviour');
    });
    it('Illegal Edit Replace', function(){
      chai.assert.isNotTrue(oneAway('pale','bake'),'Unexpected behaviour');
    });
  });

  describe('String Compression', function(){
    it('Compression Personal interpretation', function(){
      chai.assert.strictEqual(stringCompressionPI('dddabcdaabefedaabbcc'),'d5a5b4c3e2f1','Unexpected behaviour');
    });
    it('Compression', function(){
      chai.assert.strictEqual(stringCompression('dddabcdaabefedaabbcc'),'d3a1b1c1d1a2b1e1f1e1d1a2b2c2','Unexpected behaviour');
    });
  });

  describe('Rotate matrix', function(){
    it('Not Square Matrix', function(){
      var matrix = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12]];
      rotateMatrix(matrix);
      chai.expect(rotateMatrix(matrix)).to.eql([[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12]]);
    });
    it('Rotate Matrix', function(){
      var matrix = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, 16]];
      chai.expect(rotateMatrix(matrix)).to.eql([[13, 9, 5, 1],[14, 10, 6, 2],[15, 11, 7, 3],[16, 12, 8, 4]]);
    });
  })
});
