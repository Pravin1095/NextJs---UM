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

Thus, these are components that are rendered and converted to html in server and then send to the browser

File Based Routing
In File Based routing under the app folder create a folder and create a file page.js (Naming page.js is mandatory as it creates new route). Now search for http://localhost:3000/awesome, you'll get the output coded in page.js file.

SSR : 

In nextjs components are loaded in server side itself and are provided to browser so page loading is fast here and SEO is achieved as when user searches for any content in our page our page shows up as content is already loaded in server search engine crawlers fetches them and displays our page. Whereas in React only apps a part of html file is sent to browser and from there React builds the page and hence sometimes our page will be loaded and then comes up

Navigating between pages:

In NextJs when we navigate to a different page by clicking any link, then we get to the new page that is already pre rendered on the server and then client side receives and renders the to be rendered HTML code. This is possible by using Link component imported from next/link. If we use <a> tag then we go out of single page application and hard reload of page happens from server side. Whenever we click refresh icon in browser and if we see cross icon then it indicates hard reload of page

Dynamic Routes:

Add a closed bracket, named as placeholder (Eg : [slug], the page.js inside this will show same page for two routes, post-1 and post-2) and under that create your dynamic routes that will take you to the main route. 
NextJs also provides a special prop here which is a params so that we can know on which route we are currently

Difference between React and NextJs:

To understand exactly what "structuring on the server" means under the hood, we have to look at what a React component actually is.

When you write a React component, you use JSX (which looks like HTML, e.g., <div>Hello</div>). But browsers do not understand JSX.

Behind the scenes, every piece of JSX you write is converted into a standard JavaScript function call: React.createElement().

1. How Pure React structures components (On the Client)
When you run a pure React app, your server sends a JavaScript file containing thousands of these createElement commands.

The browser downloads the JS bundle.

The browser's engine executes React.createElement('div', ...) for your entire component tree.

React creates a massive JavaScript object layout in the browser's memory called the Virtual DOM.

Finally, React translates that Virtual DOM into real HTML elements and pushes them into the browser's actual DOM hierarchy.

Your user's phone or laptop CPU is doing all the heavy lifting to turn JavaScript code into visual boxes.

2. How Next.js structures components (On the Server)
In Next.js, yes—every server-rendered component is executed and structured on the server itself. Instead of forcing the user's browser to run all those React.createElement functions, the Next.js server runs them on its side first.

The Step-by-Step Server Process:
A request comes in for your homepage.

The Next.js server looks at your root component (e.g., layout.js). Inside it, it finds your sub-components: <Header />, <MainBanner />, and <Footer />.

The server executes the JavaScript for every single one of them in order. It resolves their states, loops through their arrays, and fetches any data they need (like layout properties from Amplience).

Instead of creating a Virtual DOM in a browser, Next.js compiles the final output into a single, continuous HTML string (a text file full of standard <div>, <h1>, and <p> tags).

The server sends that raw text stream down to the browser.

A Concrete Example
Imagine you have a component that loops through a list of navigation links fetched from a CMS:

JavaScript
// Nav.js
export default function Nav({ links }) {
  return (
    <nav>
      {links.map(link => <a key={link.id} href={link.url}>{link.label}</a>)}
    </nav>
  );
}
What the Client gets in Pure React:
The browser receives the raw instruction manual: "Hey browser, take this links array, run a .map() loop over it, generate anchor tags for each element, and then inject them into the page."

What the Client gets in Next.js:
The server has already executed the .map() loop. The browser receives zero logic. It just gets the final, fully evaluated text:

HTML
<nav>
  <a href="/home">Home</a>
  <a href="/shop">Shop</a>
  <a href="/about">About</a>
</nav>
Are all components structured on the server?
In modern Next.js (the App Router), by default, yes. Every component is a Server Component and gets structured on the server.

However, if a component needs browser-only features—like listening for window resizing, managing local UI toggle states (useState), or handling click events (onClick)—you mark the top of that file with the directive: "use client".

When Next.js sees "use client", it still pre-renders the initial structural HTML on the server so the user doesn't see a blank spot, but it leaves a note saying, "Leave this part flexible, because the browser needs to hook up interactive JavaScript to it later."
