<p align="center">
  <img src="logo.png" width="50%" />
</p>

## Overview

- Typesafe, with helpful type inference
- Expressive API
- Supports predicates and not patterns for complex cases
- Tiny bundle footprint (`~7.4 kB`)

## Status

_react-matchez_ is in the early stages of development, and there might be a few
breaking changes here as I figure out how to:

- address some pattern matching principles (e.g. exhaustiveness)
- improve the overall type-safety
- simplify its API
- reduce its bundle size

## Documentation

- [Overview](#overview)
- [Status](#status)
- [Documentation](#documentation)
- [Inspirations](#inspirations)

## Inspirations

This library has been heavily inspired by:

- [ts-pattern](https://github.com/gvergnaud/ts-pattern): A great library by
  [Gabriel Vergnaud](https://github.com/gvergnaud) that not only inspired the
  core and the APIs of `react-matchez` but is also used by our internals.

- [Daggy](https://github.com/fantasyland/daggy): A great library from the
  [Fantasy Land](https://github.com/fantasyland) universe that brings sum types
  to JavaScript. Using its `taggedSum` and `cata` methods, you can get really a
  really interesting taste of pattern matching.

- [ECMAScript pattern matching proposal](https://github.com/tc39/proposal-pattern-matching):
  This proposal briefly covers what the JSX syntax would look like. Even though
  `react-matchez` didn't quite use it as an inspiration, it was still an
  interesting reference.
