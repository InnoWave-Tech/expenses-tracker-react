# expenses tracker [![CI](https://github.com/InnoWave-Tech/expenses-tracker-react/actions/workflows/deploy.yml/badge.svg)](https://github.com/InnoWave-Tech/expenses-tracker-react/actions/workflows/deploy.yml)

## Table of contents
  * [Tech stack](#tech-stack)
  * [Structure](#structure)
  * [Local setup](#local-setup)
  * [Summary](#summary)
  * [Issues](#issues)

## Tech stack

- [React](https://reactjs.org/)
   - [ContextAPI](https://reactjs.org/docs/context.html)
- [Nextjs](https://nextjs.org/)
- [TailwindCss](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)

## Structure 

`pages/` Contain declaratation for all page routes

`src/context/Expenses.js` Manages application global state
   - Collections for custom and default expenses are **declared** here along with the functions  for mutations

`src/views/HomeView.js` Contains homepage markup, totals ammounts for budget and expenses **are calculated here** 

`src/components/views/ExpensesView.js`Contains expenses page markup, widgets for each expense are managed here
   - New expenses are added here, check **line 37**
   - Used amounts are added to here, check **line 36 to line 45**
   - Custom epenses and default expenses render separately
      - Custom expenses markup on **line 56-86**
      
`src/components/CustomExpenseForm.js` This form is used to add new expenses
   - DOM inserted by `src/components/views/ExpensesView.js`

`src/components/UsedExpenseForm.js` This form is used to update expenses
    - DOM inserted by `src/components/views/ExpensesView.js`
## Local setup

1. Clone
2. Install dependencies
3. Run project
   - `npm run build` & `npm run start` to run built project **WITHOUT HOT RELOAD**
   - `npm run dev` to run project **WITH HOT RELOAD** 
    
## Summary
This application was developed to help user manage their expenses. It offers the following features:

1. Tracking of common expense sources Transportation, Housing, Food and Amenities
2. Tracking of total expenses and total budget
3. Updating of used money
4. Creation of custom expense sources that functionally should be similar to the default common expenses

<hr>


## Issues
The following bugs have been opened:

1. Total values on home page do not reflect actual total when custom expenses are added

   - Steps to reproduce:
     1. Go to Homepage and take note of total values
     2. Go to expenses page
     3. Create new custom expense with any budget value and name
     4. Add to Used money in the new custom expense by clicking Pencil and then saving
     5. Go back to Home page
     6. Total values are not reflecting the sum totals. **Expected**: total values should reflect the sum totals

2. Custom expenses do not give overage feedback

   - Steps to reproduce:
     1. Go to expenses page
     2. Create new custom expense with any budget value and name
     3. Add to Used money with a value bigger than the budget specified in previous step
     4. Percentage in title is still black even though it has passed 100%. **Expected**: When in overage (passed 100%) title should show percentage in red

3. User can create expense with empty values which breaks created block
   - Steps to reproduce:
     1. Go to expenses page
     2. Create new custom expense with empty name and budget
     3. Created block has "NaN" percentage and empty title, adding to Used money changes percentage to "Infinity". **Expected**: User shouldn't be able to create empty expense
