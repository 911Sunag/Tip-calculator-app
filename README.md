# Tip-calculator-app
HTML-CSS-Vanilla JavaScript

# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshots/Screenshot%202025-11-28%20at%2015-18-16%20Frontend%20Mentor%20Tip%20calculator%20app.png)
![](./screenshots/Screenshot%202025-11-28%20at%2015-19-07%20Frontend%20Mentor%20Tip%20calculator%20app.png)
![](./screenshots/Screenshot%202025-11-28%20at%2015-19-25%20Frontend%20Mentor%20Tip%20calculator%20app.png)
![](./screenshots/Screenshot%202025-11-28%20at%2015-19-25%20Frontend%20Mentor%20Tip%20calculator%20app.png)
![](./screenshots/Screenshot%202025-11-28%20at%2015-20-16%20Frontend%20Mentor%20Tip%20calculator%20app.png)
![](./screenshots/Screenshot%202025-11-28%20151933.png)
![](./screenshots/Screenshot%202025-11-28%20151835.png)


### Links

- Live Site URL:(https://tip-calculator-app-iota-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

```js
function calculate(){

    if (!people || people <= 0){
        tipAmountSpan.textContent = "$00.00";
        total.textContent = "$00.00";
        return;
    }

    const tipPerPerson = (bill * tipPercent) / people;
    const totalPerPerson = (bill + (bill * tipPercent)) / people;

    tipAmountSpan.textContent = formatCurrency(tipPerPerson);
    total.textContent = formatCurrency(totalPerPerson);
}
```
## Author
- Frontend Mentor - [@911Sunag](https://www.frontendmentor.io/profile/911Sunag)

