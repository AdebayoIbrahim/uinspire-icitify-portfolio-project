# CSS Nesting Compatibility Guide

This project uses **CSS Nesting** to write cleaner and easier-to-maintain styles.

## Problem: Safari on iOS 15 Does Not Support CSS Nesting

If you open this project on Safari running on iOS 15, some styles may not work correctly because this browser version does not support nested CSS rules.

## Solution: Use the Provided `nonnested.css` File

We have created a separate CSS file called `nonnested.css` that contains the same styles but **without nesting**. This file works on browsers that do not support CSS nesting.

---

## How to Use the `nonnested.css` File — Step by Step

1. **Download or clone the repository** from GitHub if you haven't already.

2. **Locate the `nonnested.css` file** in the project folder.

3. **In your HTML file, replace the reference to your main CSS file** with the `nonnested.css` file **when testing or using Safari iOS 15**.

   For example, change this:

   ```html
   <link rel="stylesheet" href="index.css" />
   ```

   to this

   ```html
   <link rel="stylesheet" href="nonnested.css" />
   ```
