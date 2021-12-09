# expenses tracker [![CI](https://github.com/InnoWave-Tech/expenses-tracker-react/actions/workflows/deploy.yml/badge.svg)](https://github.com/InnoWave-Tech/expenses-tracker-react/actions/workflows/deploy.yml)

This application was developed to help user manage their expenses. It offers the following features:

1. Tracking of common expense sources Transportation, Housing, Food and Amenities
2. Tracking of total expenses and total budget
3. Updating of used money
4. Creation of custom expense sources

<hr>

The following bugs have been opened:

1. Total values on home page do not reflect actual total when custom expenses are added

   - Steps to reporduce:
     1. Go to Homepage and take note of total values
     2. Go to expenses page
     3. Create new custom expense with any budget value and name
     4. Add to Used money in the new custom expense by clicking Pencil and then saving
     5. Go back to Home page
     6. Total values are not reflecting the sum totals. **Expected**: total values should reflect the sum totals

2. Custom expenses do not give overage feedback

   - Steps to reporduce:
     1. Go to expenses page
     2. Create new custom expense with any budget value and name
     3. Add to Used money with a value bigger than the budget specified in previous step
     4. Percentage in title is still black even though it has passed 100%. **Expected**: When in overage (passed 100%) title should show percentage in red

3. User can create expense with empty values which breaks created block
   - Steps to reporduce:
     1. Go to expenses page
     2. Create new custom expense with empty name and budget
     3. Created block has "NaN" percentage and empty title, adding to Used money changes percentage to "Infinity". **Expected**: User shouldn't be able to create empty expense
