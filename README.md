# Welcome 👋

This is an example expo app created for a take home assignment.

## Get started locally (Recommended)

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

Kindly test the app in android or ios. It has some issues with scrolling on web.

## Get started expo snack

Kindly select expo version v48.0.0, and fix dependency issues as suggested by expo snack IDE.

## UI

The interface consists of a scrollable list. As you scroll more users will be fetched from the BE and displayed in the list.

You can use the Filter by Country to fetch filtered users based on the input.

You can use the Sort By toggle button to either sort the list in ascending or descending order. By default the data is fetched in ascending order.

## Assumptions

The user count is in millions on production. Hence end of the list will never be reached by scrolling.

## Challenges

To get scrolling to work on both mobile and web when developing locally. Scrolling on web still does not work.

To get it to work on expo snack. eg. had to remove absolute imports because it was not working on expo snack.

## Time

Took approx 1.5 hours to write code and approx 30 mins to make it work on expo snack.
