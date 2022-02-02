---
id: get_pattern_match
title: getPatternMatch
sidebar_label: getPatternMatch
---

## Overview

- This function is a typing helper and returns typed versions of the components
  API—so that you don't have to manually type `With`, `When`, etc. each time you
  use them.
- It takes either:
  - a **regular parameter**: `value`. This alternative is ideal when you want
    the `Shape` to be inferred.
  - a **type parameter**: `Shape`. This alternative is ideal when you have an
    `interface`/`type` for your `Shape` and you just want to pass them.
