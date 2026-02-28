---
coverImage: "https://loremflickr.com/1600/900/css,frontend"
title: "Keeping Tailwind CSS Components Clean"
date: "2025-11-03"
author: "Petr Matoušek"
description: "Simple conventions I use to keep utility-first styling readable as projects grow."
---

Tailwind is fast to write, but it can become noisy without a structure.

I group classes in the same order every time: layout, spacing, typography, color, and interaction states. This makes reviews faster because teammates know exactly where to look.

For repeated UI pieces like cards and buttons, I extract class strings into small style helpers or lightweight components. I avoid over-abstraction at first, but once duplication appears in three places, I refactor.

I also design with states early: hover, focus, loading, and disabled. Handling these states from the beginning prevents awkward redesigns later.
