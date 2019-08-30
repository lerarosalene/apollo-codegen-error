**Intended outcome:**
```ts
export interface test_test_ImplementationA {
  __typename: "ImplementationA";
  field: number;
  someOtherFieldA: string;
}
```
**Actual outcome:**
```ts
export interface test_test_ImplementationA {
  __typename: "ImplementationA";
  field: number | null;
  someOtherFieldA: string;
}
```
**How to reproduce the issue:**
Run `apollo client:codegen` against this schema:
```graphql
interface Interface {
  field: Float # Optional
}

type ImplementationA implements Interface {
  field: Float! # Required
  someOtherFieldA: ID!
}

type ImplementationB implements Interface {
  field: Float # Optional
  someOtherFieldB: Foo!
}

type Query {
  test: Interface!
}

enum Foo { Bar } # for globalTypes
```
query:
```ts
const gql = String.raw;
const EXAMPLE = gql`
  query test {
    test {
      field
      ... on ImplementationA {
        someOtherFieldA
      }
      ... on ImplementationB {
        someOtherFieldB
      }
    }
  }
`;

export default EXAMPLE;

```
Or clone https://github.com/Eva-Rosalene/apollo-codegen-error and run `npm ci && npm test`

**Versions**
```bash
$ apollo -v
apollo/2.18.0 linux-x64 node-v10.13.0
```
