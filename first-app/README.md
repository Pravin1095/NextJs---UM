This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


My Notes:

Git Links :

https://github.com/mschwarzmueller/nextjs-course-code/tree/zz-nextjs-summary-extra-files

Create a project:
Command : npm create-next-app@latest
Start command : npm run dev

React Server Components :

NextJs works on React server components which means the pages are rendered only on the server and never on the client. The page.js file inside app is example for this. We have put "Executing..." in console but you can see that it comes from server and not from client.

File Based Routing
In File Based routing under the app folder create a folder and create a file page.js (Naming page.js is mandatory as it creates new route). Now search for http://localhost:3000/awesome, you'll get the output coded in page.js file.

SSR : 

In nextjs components are loaded in server side itself and are provided to browser so page loading is fast here and SEO is achieved as when user searches for any content in our page our page shows up as content is already loaded in server search engine crawlers fetches them and displays our page. Whereas in React only apps a part of html file is sent to browser and from there React builds the page and hence sometimes our page will be loaded and then comes up

Navigating between pages:

In NextJs when we navigate to a different page by clicking any link, then we get to the new page that is already pre rendered on the server and then client side receives and renders the to be rendered HTML code. This is possible by using Link component imported from next/link. If we use <a> tag then we go out of single page application and hard reload of page happens from server side. Whenever we click refresh icon in browser and if we see cross icon then it indicates hard reload of page

