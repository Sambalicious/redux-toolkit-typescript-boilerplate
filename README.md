This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Using redux toolkit

1. yarn add axios @reduxjs/toolkit react-redux
2. create app folder inside the src folder and create "features" folder and 'store' file inside it
3. file in the features folder corresponds to the state to be created ie. slice e.g userSlice for list of users
4. configure the store and pass the necessary reducer in the store file
5. import the Provider and use it to wrap the whole app
6. type the state and dispatch action in the store file
7. expose a hook to be used throughout the app that has types from point 6 above i.e useAppSelector and useAppDispatch.
8. check the root index.tsx file on the usage

extras
-use extraReducer property when fetching async data together with createAsyncThunk as seen in users slice/reducer file

-make sure you export the reducers as default export and the actions as named exports
