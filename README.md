<p align="center">
  <img src="logo.png" />
</p>

# Introduction

## Overview

- Typesafe, with helpful type inference
- Expressive API
- Supports predicates and not patterns for complex cases
- Tiny bundle footprint

## Why Pattern Matching

Pattern matching consists of specifying patterns to which some data should conform, then checking to see if it does, and de-constructing the data according to those patterns.

This is implemented out of the box in languages like Haskell, Rust, and Elixir and has proven to be more powerful and less verbose than imperative alternatives (`if`/`else`/`switch` statements), especially when branching on complex data structures.

## Why react-match

Unfortunately, Javascript and TypeScript weren’t designed with pattern matching in mind. Fortunately, there are some great initiatives to address it, e.g.:

- [Daggy](https://github.com/fantasyland/daggy) gives you the ability to define a type and values of this type (sum types) that you can then pattern match to declare an action depending on the value of this type.

- [ts-pattern](https://github.com/gvergnaud/ts-pattern) gives you exhaustive pattern matching with great type inference; being 100% tailored to bring declarative code branching to JavaScript/TypeScript—by the way, this library was some heavy inspiration to our API.

- Last but not least, there's even a [TC39 proposal](https://github.com/tc39/proposal-pattern-matching) from 2017 to add pattern matching to the EcmaScript specification.

Even though there are some interesting efforts in bringing pattern matching at a language level, what we lack are React/JSX abstractions for this.

React itself shifted our mindsets from imperatively manipulating the DOM to declaratively expressing what the DOM should look like for a given state. So it's only fair we take this even further with declarative render branching.

Unfortunately, most of the existing alternatives (like [react-pattern-matching](https://github.com/joshblack/react-pattern-matching) or [react-pattern-match](https://github.com/tkh44/react-pattern-match)) lack features, have poor/zero typing, and are unmaintained.

What we have, though, are domain-specific matching/branching solutions, for example:

- [react-router](https://github.com/remix-run/react-router): Declarative matching for routes
- [react-device-detect](https://github.com/duskload/react-device-detect): Declarative matching for device type
- [react-matches](https://github.com/souporserious/react-matches): Declarative matching for media queries

> **react-match** then comes as a first-class-React, generic, strongly-typed, solution that you can use to build your own domain-specific matching solutions—and reduce drastically the `if`/`else`/`switch` boilerplate from your components.

# API

## `Match`

### Overview

- This component is the wrapper for the matching cases.
- The only required prop is its `children`.
- Valid `children` for it are only: `With`, `When`, and `Otherwise`.
- If you plan on having `With` cases, then you need to pass a `value` prop.
- If you use the `otherwise` prop, then don't use the `Otherwise` component as children.

### Props

| Name                  | Type                      | Default value | Description                                                                                               |
| --------------------- | ------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| value                 | Shape                     |               | Entry point to create a pattern-matching expression.                                                      |
| children _(required)_ | \_MatchChildren&lt;Shape> |               | The patterns the `value` prop should match. Can be represented as `With`, `When`, and `Otherwise`.        |
| otherwise             | Element                   |               | A default value to be used if nothing matches. If used, then the `Otherwise` component should be omitted. |
| firstMatch            | boolean                   |               | Indicates whether anything that matches should render or only the first match.                            |

## Otherwise

### Overview

- This component represents your default/fallback state; meaning its children represent what's going to be rendered when nothing matches your previous `When`/`With` assertions.
- Shouldn't be used if you've already passed the `otherwise` prop to its `Match` parent.
- Shouldn't be used more than once within one `Match` parent.

### Props

| Name                  | Type      | Default value | Description                                                              |
| --------------------- | --------- | ------------- | ------------------------------------------------------------------------ |
| children _(required)_ | ReactNode |               | Any node to be rendered when nothing matches `With` and `When` siblings. |
