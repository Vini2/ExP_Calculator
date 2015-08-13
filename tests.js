QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


QUnit.test("Testing Plus function", function(assert) {
  assert.equal(5, plus(2, 3), "3 + 2 is 5");
});


QUnit.test("Testing Plus function with failing", function(assert) {
  assert.equal(5, plus(2, 2), "2 + 2 is 5");
});

QUnit.test("Testing minus function", function(assert) {
  assert.equal(3, minus(6, 3), "6 - 3 is 3");
});


QUnit.test("Testing minus function with failing", function(assert) {
  assert.equal(5, minus(3, 2), "3 - 2 is 5");
});

QUnit.test("Testing multiply function", function(assert) {
  assert.equal(18, multiply(6, 3), "6 * 3 is 18");
});

QUnit.test("Testing multiply function with failing", function(assert) {
  assert.equal(5, multiply(3, 2), "3 * 2 is 5");
});

QUnit.test("Testing divide function", function(assert) {
  assert.equal(2, divide(6, 3), "6 / 3 is 2");
});

QUnit.test("Testing divide function with failing", function(assert) {
  assert.equal(12, divide(4, 2), "4 / 2 is 12");
});






QUnit.test("Testing Divide function by 0", function(assert) {
  assert.equal('Division by zero error', divide(2, 0), "2 / 0 is Infinity");
});

QUnit.test("Testing Divide function by 0 with failing", function(assert) {
  assert.equal(2, divide(2, 0), "2 / 0 is 2");
});
