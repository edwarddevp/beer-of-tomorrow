This is the e-commerce sit of the company beer-of-tomorrow

## Tools

- Typescript
- ReactJs
- NextJs
- Chakra-ui (framework de estilos)
- Redux / React-Redux
- Jest / React Testing Library
- leaflet

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the e-commerce home page.

## The site has four pages

- Home
- Cart
- Beer Page
- About Us

## Theme 

Theme colors, shadows and fonts can be modified by editing their respective files inside the theme folder

## Structure

- In the main _app container the redux provider and the chakra-ui provider are imported to be used in all pages.
- Each page has its own container, the page is used just to fetch data using getStaticProps or getServerSideProps, the container contains the page structure aand components
- There is a folder named Commons inside the components folder that holds all reusable components
- Reducers and actions are saved in their respective folder, actionTypes are saved inside constants
- Each component will have its own style file called styles.ts inside its folder if needed.
- Tests are saved inside \_\_test\_\_ folder

## Test

To run test run the command

```bash
npm test
```

To run test coverage run the command

```bash
npm test-coverage
```