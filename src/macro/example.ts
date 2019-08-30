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
