## READ First

## Note

I tried to do as much as I can by the given data.

## Note:

I used Google auth so make sure you have all the required keys to make the project run succesfully in your local environment.

## console.cloud.google

1. Setup your credentials and the consent here are some steps to take.

# Authorized JavaScript Origins

URI 1\*
http:localhost:3000

# Authorized Redirect URIs

http:localhost:3000
http:localhost:3000/api/auth/callback/google

This urls above is important to make the code work especially the authetication by users.

Also use the generated client secret and cleint id keys within your .env file.

I have kept the env file for example purposes so that the required fields can be filled.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
