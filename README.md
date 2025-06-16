# WhiskerWisdom

WhiskerWisdom is a fun web application that presents cat facts and pictures through animations and interactions. 

## Features

- Animated cat fact reveal
- Animated cat pictures
- Custom button interactions
- Walking paw print animation
- Responsive layout

## Techniques 

- **React**
- **Next.js**
- **Axios**
- **Anime.js** -> [animejs.com] (https://animejs.com/)
- `.env.local` file for secure API key handling

## APIs Used

- [Cat Fact API] https://catfact.ninja/ 
- [The Cat API] https://thecatapi.com/

## License

This project is licensed under the MIT License, for more details see the LICENSE file


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Setup

### Perequisites

- Node.js
- npm (comes with Node) or yarn

### Installation

1. Clone the repo:
```bash
git clone https://github.com/sfriholm/whiskerwisdom.git
cd whiskerwisdom
```
2. Create a .env.local file in the root directory with your The Cat API key:

NEXT_PUBLIC_KEY=your-actual-api-key

You can get your free API key at https://thecatapi.com/

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
