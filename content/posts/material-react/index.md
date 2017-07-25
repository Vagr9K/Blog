---
title: "Material Design Framework comparison for React"
cover: "/covers/material-design.png"
date: "2017/07/25"
category: "web design"
tags:
    - react
    - material design
    - frameworks
---

Decided to use Material Design in a React based app? Don't want to reinvent the ~~wheel~~ framework?

It's time to choose a framework.

## Contestants

We are going to compare the 3 main MD React libraries:

* [Material UI](https://github.com/callemall/material-ui)
  * Uses inline styles ( JSS in the next release)
  * Wraps your root component with a theme provider
  * [Showcase](http://www.material-ui.com/#/discover-more/showcase)
* [React Toolbox](https://github.com/react-toolbox/react-toolbox)
  * Uses CSS Modules with SASS (CSSNext in the next release)
  * `react-css-themr` for theming
* [React MD](https://github.com/mlaursen/react-md)
  * Uses SASS for styling
  * Theming is done by setting global SASS variables
  * [Showcase](https://react-md.mlaursen.com/discover-more/showcases)

NOTE: The [official reference implementation of Material Design](https://github.com/material-components/material-components-web) provides React components, but due to it being in an early alpha stage, I will leave its comparision for the next time.

## Popularity

Poplarity doesn't necessarily show quality, but in reality of Open Source Software, projects that managed to get higher amount of traction are more likely to be maintained for a longer amount of time. Getting stuck with an abandonware is always a possible outcome, and we have to do everything to minimize it.

| Project       | Stars | Forks
|---------------|-------|------
| Material UI   | 27414 | 3523
| React Toolbox | 6680  | 797
| React MD      | 1186  | 109

Overall, all 3 projects are relatively popular, with Material UI leading the pack.

## Project activity and roadmaps

React MD is the most stable framework currently, featuring well planned releases that add new features with little to no breaking changes. You can clearly see the development progress by viewing [GitHub milestones](https://github.com/mlaursen/react-md/milestones).

Material UI is currently trying to release its first stable version, featuring JSS based styling. Judging by the [milestones](https://github.com/callemall/material-ui/milestones), it's safe to assume that the long awaited `v1` release will happen soon.

In contrary to Material UI, React Toolbox already has a stable `v1` release and the team behind it currently works on delivering version 2, that features CSSNext styling instead of SASS in `v1`. The `dev` branch containing `v2` source code is already the default on GitHub, but I was unable to find any specific milestones for the release.

## Features

Let's start by comparing provided components:

| Component/Project                | React MD         | React Toolbox   | Material UI     |
|----------------------------------|------------------|-----------------|-----------------|
| App Bar                          | Yes (Toolbar)    | Yes             | Yes             |
| Autocomplete                     | Yes              | Yes             | Yes             |
| Avatar                           | Yes              | Yes             | Yes             |
| Badge                            | Yes (1.1)        |                 | Yes             |
| Bottom Navigation                | Yes              |                 | Yes             |
| Button (FAB)                     | Yes              | Yes             | Yes             |
| Button (Flat)                    | Yes              | Yes             | Yes             |
| Button (Icon)                    | Yes              | Yes             | Yes             |
| Button (Raised)                  | Yes              | Yes             | Yes             |
| Card                             | Yes              | Yes             | Yes             |
| Checkbox                         | Yes              | Yes             | Yes             |
| Chip                             | Yes              | Yes             | Yes             |
| Dialog                           | Yes              | Yes             | Yes             |
| Divider                          | Yes              |                 | Yes             |
| Drawer                           | Yes              | Yes             | Yes             |
| Expansion Panel                  | Yes              |                 |                 |
| File Input                       | Yes              |                 |                 |
| Grid List                        |                  |                 | Yes             |
| Icons (FontIcon)                 | Yes              | Yes             | Yes             |
| Icons (SVG)                      |                  |                 | Yes             |
| Ink                              | Yes              | Yes (Ripple)    |                 |
| Layout                           | Yes (NavDrawer)  | Yes             |                 |
| Link                             |                  | Yes             |                 |
| List                             | Yes              | Yes             | Yes             |
| Media                            | Yes              | Yes (CardMedia) | Yes (CardMedia) |
| Menu                             | Yes              | Yes             | Yes             |
| Menu (Icon)                      | Yes              | Yes             | Yes             |
| Navigation                       |                  | Yes             |                 |
| Paper                            | Yes              |                 | Yes             |
| Picker (Date)                    | Yes              | Yes             | Yes             |
| Picker (Time)                    | Yes              | Yes             | Yes             |
| Progress (Circular)              | Yes              | Yes             | Yes             |
| Progress (Linear)                | Yes              | Yes             | Yes             |
| Progress (Refresh Indicator)     |                  |                 | Yes             |
| Radio                            | Yes              | Yes             | Yes             |
| Select Field                     | Yes              | Yes (Dropdown)  | Yes             |
| Slider                           | Yes              |                 | Yes             |
| Snackbar                         | Yes              | Yes             | Yes             |
| Stepper                          |                  |                 | Yes             |
| Subheader                        | Yes              | Yes             | Yes             |
| Switch                           | Yes              | Yes             | Yes             |
| Table                            | Yes (Data Table) | Yes             | Yes             |
| Tabs                             | Yes              | Yes             | Yes             |
| Text Field                       | Yes              | Yes (Input)     | Yes             |
| Toolbar                          | Yes              | Yes (App Bar)   | Yes             |
| Tootip                           | Yes              | Yes             |                 |
| Overall                          | 40               | 35              | 39              |

In most cases components provided by all 3 frameworks will be more then enough, even though React Toolbox is lagging behind.

It's worth noting that currently, only React MD has an integrated flexbox based grid system. Material UI will introduce a grid system in its `v1` version. It's also on the [wishlist](https://github.com/react-toolbox/react-toolbox/issues/626) of React Toolbox.

## Bundle sizes

This isn't a comparison that's supposed to prove anything. It's just providing some insight about library dependencies and their sizes. Just for fun.

To compare bundle sizes, I'm going to use [this project](https://github.com/Vagr9K/ReactMDSizeComparison). It consists of 3 different projects importing the whole library. All of them have identic webpack configuration with the exception of library specific parts.

NOTE: This comparison uses Material UI v1 Beta and React Toolbox v2 Betas.

Bundle sizes (includes React and ReactDOM):

| Project/Size  | JS                    | CSS                  | Total                  |
|---------------|-----------------------|----------------------|------------------------|
| React MD      | 305KB (76KB Gzipped)  | 91KB (12KB Gzipped)  | 396KB (88KB Gzipped)   |
| Material UI   | 443KB (117KB Gzipped) | N/A                  | 443KB (117KB Gzipped)  |
| React Toolbox | 474KB (121KB Gzipped) | 100KB (16KB Gzipped) | 574 KB (137KB Gzipped) |

Sizes of libraries before minfication:

| Project/Size  | JS before minification |
|---------------|------------------------|
| React MD      | 325KB                  |
| Material UI   | 585KB                  |
| React Toolbox | 765KB                  |

Full reports:

* React MD
  ```js
  react-dom: 512.14 KB (42.9%)
  react-md: 325.61 KB (27.3%)
  react: 68.4 KB (5.73%)
  react-motion: 52.53 KB (4.40%)
  fbjs: 29.39 KB (2.46%)
  create-react-class: 27.71 KB (2.32%)
  react-transition-group: 25.54 KB (2.14%)
  prop-types: 24.93 KB (2.09%)
  style-loader: 11.44 KB (0.958%)
  dom-helpers: 6.14 KB (0.514%)
  process: 5.29 KB (0.443%)
  raf: 2.88 KB (0.241%)
    performance-now: 1.04 KB (36.0%)
    <self>: 1.84 KB (64.0%)
  css-loader: 2.21 KB (0.185%)
  object-assign: 2.06 KB (0.172%)
  react-prop-types: 2.05 KB (0.172%)
  warning: 1.76 KB (0.148%)
  classnames: 1.08 KB (0.0901%)
  performance-now: 886 B (0.0725%)
  webpack: 509 B (0.0416%)
  chain-function: 476 B (0.0389%)
  <self>: 91.27 KB (7.64%)
  ```
* Material UI
  ```js
  material-ui: 585.66 KB (39.1%)
  react-dom: 512.14 KB (34.2%)
  react: 68.4 KB (4.56%)
  jss: 64.55 KB (4.31%)
  core-js: 58.54 KB (3.91%)
  fbjs: 29.39 KB (1.96%)
  create-react-class: 27.71 KB (1.85%)
  prop-types: 24.93 KB (1.66%)
  lodash: 15.58 KB (1.04%)
  react-transition-group: 12.16 KB (0.812%)
  jss-expand: 8.84 KB (0.590%)
  react-event-listener: 8.5 KB (0.568%)
  recompose: 8.49 KB (0.567%)
  dom-helpers: 8.12 KB (0.542%)
  babel-runtime: 6.74 KB (0.450%)
  css-vendor: 6.4 KB (0.427%)
  jss-default-unit: 5.53 KB (0.369%)
  process: 5.29 KB (0.353%)
  jss-global: 4.82 KB (0.322%)
  react-scrollbar-size: 3.97 KB (0.265%)
  jss-nested: 3.62 KB (0.241%)
  react-jss: 2.98 KB (0.199%)
  deepmerge: 2.79 KB (0.186%)
  keycode: 2.7 KB (0.180%)
  jss-extend: 2.48 KB (0.165%)
  object-assign: 2.06 KB (0.137%)
  jss-compose: 2 KB (0.134%)
  <self>: 14.19 KB (0.947%)
  ```
* React Toolbox
  ```js
  react-toolbox: 765.8 KB (47.5%)
  react-dom: 512.14 KB (31.8%)
  react: 68.4 KB (4.24%)
  core-js: 55.57 KB (3.45%)
  react-style-proptype: 31.89 KB (1.98%)
  fbjs: 29.39 KB (1.82%)
  create-react-class: 27.71 KB (1.72%)
  react-transition-group: 25.54 KB (1.58%)
  prop-types: 24.93 KB (1.55%)
  ramda: 21.25 KB (1.32%)
  react-css-themr: 15.65 KB (0.971%)
  style-loader: 11.44 KB (0.709%)
  dom-helpers: 6.14 KB (0.381%)
  process: 5.29 KB (0.328%)
  <self>: 11 KB (0.682%)
  ```

React MD is the clear "winner" here. That being said, the difference isn't that big if we consider the sizes of React and ReactDOM. If you care about bundle sizes and performance, you're probably going to use SSR and code splitting anyways.

## Conclusion

Nowadays, choosing a Material framework for React is not an issue of features, but of integration.

If you prefer don't being tied to a styling method, go with React MD. It integrates really well with pretty much everything. You can even use it in a project that uses CSS Modules, as long as you configure webpack to insert styles from `node_modules` to the global namespace. Mixing it with a CSS-in-JS soultion shouldn't be much of a problem either. Theming is also straightforward.

Unfortunately I can't say the same about the other two. React Toolbox has a habit of breaking webpack builds if you change any styling rule. Material UI means you are stuck with JSS. Even if you prefer CSS-in-JS, you'll still lose a lot of flexibility. Want to try non-JSS styled-components? Good luck with that.

It's also worth noting, that if you want a feature rich *stable* framework, then ReactMD is your only choice until Material UI v1 arrives.
