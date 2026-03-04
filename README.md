# OG Image Generator

Dynamic Open Graph image generator for Paradime, powered by `@vercel/og`.

## Usage

```
GET /api/og?title=What+We+Shipped+%2300&f1=Feature+1&f2=Feature+2&f3=Feature+3
```

### Query params

| Param   | Required | Description          |
| ------- | -------- | -------------------- |
| `title` | No       | Heading text (defaults to "What We Shipped") |
| `f1`    | No       | Feature 1            |
| `f2`    | No       | Feature 2            |
| `f3`    | No       | Feature 3            |

### Example meta tag

```html
<meta property="og:image" content="https://og-image-generator-paradime.vercel.app/api/og?title=What+We+Shipped+%2301&f1=dbt+Core+Upgrades&f2=New+Lineage+View&f3=Faster+Builds" />
```

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000/api/og?title=Hello+World` to preview.

## Deploy

```bash
vercel --prod --scope paradime
```
