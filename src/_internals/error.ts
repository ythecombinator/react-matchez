export const exceptions = {
  match: {
    no_children: `<Match> was provided with no children. Valid children are either <With> or <When> components.`,
    no_otherwise: `<Match> was provided with no otherwise case. A valid otherwise case should be provided using the <Otherwise> component.`,
    multiple_otherwise: `<Match> was provided with multiple otherwise cases.`,
    invalid_children: `<Match> was provided with invalid children. Valid children are: <With>, <When> or <Otherwise>.`,
  },
  with: {
    no_shape: `<With> was provided with no shape props to be matched.`,
    no_children: `<With> was provided with no children to be rendered.`,
  },
  exact: {
    no_shape: `<Exact> was provided with no shape props to be matched.`,
    no_children: `<Exact> was provided with no children to be rendered.`,
  },
  when: {
    no_predicate: `<When> was provided with no predicate prop.`,
    no_children: `<When> was provided with no children to be rendered.`,
  },
  otherwise: {
    no_children: `<Otherwise> was provided with no children to be rendered.`,
  },
};

export const invariant = (condition: boolean, exception: string) => {
  if (condition) {
    throw new Error(`react-matchez invariant violation: ${exception}`);
  }
};
