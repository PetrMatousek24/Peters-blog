---
coverImage: "https://loremflickr.com/1600/900/typescript,programming"
title: "TypeScript Patterns I Reuse in React Projects"
date: "2026-01-14"
author: "Petr Matoušek"
description: "Type-safe props, utility types, and practical habits that reduce bugs early."
---

TypeScript becomes most useful when it protects domain rules, not only component props.

I rely on discriminated unions for UI states like loading, success, and error. This removes ambiguous states and forces rendering logic to handle every case.

For shared data models, I keep API response types close to the data layer and export narrowed view models for components. This prevents UI code from depending on fields it should not control.

The goal is not perfect typing everywhere. The goal is catching costly mistakes before runtime while keeping development speed high.
