# Half-Baked React Compendium

### Learning Objectives
- Identify how to stop a `useEffect` hook from running infinitely
- Identify when a fetch call is not being awaited when using async/await
- Correctly updating the state within useEffect
- Identify when a hook is called conditionally
- Add a key to react to correctly render properties

### Live Example

[Half-Baked Alchemy Compendium](https://half-baked-alchemy-compendium.netlify.app/)

### Description
For this assignment you'll be hunting down some bad code inside of our compendium.

There are a few different bugs preventing our code from being rendered properly, as well as some bad practices mixed in. The issues you will be looking for include:

 - A `useEffect` hook that won't stop running
 - Function calls that are not sending back the data expected
 - A number of bad practices that we need to fix. We need to ensure we are following the recommended React guidelines and free our consoles from errors

You'll start in the `Compendium.jsx` file to begin fixing the issues.
### Acceptance Criteria
 - Users should be able to see a list of pokemon
 - Users should be able to search a specific pokemon
 - Users should be able to filter pokemon by type
 - Users should have no errors in the console

### Rubric

| Tasks                                                                                | Points |
| ------------------------------------------------------------------------------------ | ------ |
| Stop the 1 `useEffect` hook from running infinitely                                  | 2      |
| Fix the 2 function calls not being awaited                                           | 2      |
| Fix the subtle error with the 1 `useEffect` call                                     | 1      |
| Find 1 component that is rendering elements with a `key` missing and add a `key`     | 2      |
| Find the 3 places state is being updated incorrectly                                 | 2      |
| Identify the 1 `useEffect` hook being called conditionally                           | 1      |
