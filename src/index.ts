import { test_test_ImplementationA } from './macro/__generated__/test';

function test() {
  let foo: test_test_ImplementationA = {
    __typename: 'ImplementationA',
    field: 10,
    someOtherFieldA: 'abc#xyz'
  };

  let definitelyNumber = 0 + foo.field; // should be possible
}

test();
