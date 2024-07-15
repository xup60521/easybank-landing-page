# **Frontend Mentor** Challenge **\- Easybank landing page**

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN "https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN").

## Table of contents

-   [Overview](#overview)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
        -   [Entrance animation](#entrance-animation)
-   [Resources](#resources)

## Overview

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size

-   See hover states for all interactive elements on the page

Links:

-   GitHub Repo: <https://github.com/xup60521/easybank-landing-page>

-   Website: <https://xup60521.github.io/easybank-landing-page/>

```bash
# install dependencies
pnpm install
# start dev server
pnpm run dev
```

## My process

### Built with

-   React (powered by vite)

-   TailwindCSS

-   framer-motion

### What I learned

#### Entrance animation

It’s not required, though. In order to make the page look prettier, I decided to implement the animation when entering the viewport.

`framer-motion` has a built-in solution.

```tsx
<motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
>
    {/* ... */}
</motion.div>
```

When the element enters the viewport, the animation triggers. In this case, it creates a fade-in animation in the upwards direction.

## Resources

-   TailwindCSS Docs - <https://tailwindcss.com/docs>

-   Google font - <https://fonts.google.com>

-   framer-motion docs - <https://www.framer.com/motion/>
