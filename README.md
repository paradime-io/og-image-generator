# Paradime OG Image Service

An edge function that generates dynamic Open Graph images using your brand background.

## Usage

```
GET /api/og?title=Your+Page+Title
```

Returns a 1200×630 PNG with the paradime.io background and your title overlaid in Space Grotesk 64px, vertically centred and left-aligned.

---

## Deploying to Vercel

### Prerequisites
- [Node.js](https://nodejs.org) 18+
- [Vercel CLI](https://vercel.com/cli): `npm i -g vercel`
- A free [Vercel account](https://vercel.com/signup)

### Step-by-step

**1. Clone / set up the project**
```bash
# If starting fresh, create a git repo
git init
git add .
git commit -m "Initial OG service"
```

**2. Install dependencies**
```bash
npm install
```

**3. Test locally**
```bash
vercel dev
# Visit: http://localhost:3000/api/og?title=Hello+World
```

**4. Deploy to Vercel**
```bash
vercel --prod
```

On first run, the CLI will ask:
- **Set up and deploy?** → Yes
- **Which scope?** → Your personal account or team
- **Link to existing project?** → No (creates a new one)
- **Project name** → e.g. `paradime-og`
- **In which directory is your code?** → `./` (current directory)

After deploy, you'll get a URL like:
```
https://paradime-og.vercel.app/api/og?title=Hello+World
```

**5. (Optional) Add a custom domain**

In the Vercel dashboard → your project → Settings → Domains, add e.g. `og.paradime.io`.

---

## Using in your app

In Next.js metadata:
```tsx
export async function generateMetadata({ params }) {
  return {
    openGraph: {
      images: [`https://paradime-og.vercel.app/api/og?title=${encodeURIComponent(params.title)}`],
    },
  };
}
```

In any HTML:
```html
<meta property="og:image" content="https://paradime-og.vercel.app/api/og?title=My+Page" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://paradime-og.vercel.app/api/og?title=My+Page" />
```

---

## File structure

```
├── api/
│   └── og.tsx          ← Edge function
├── public/
│   └── og-image-bg.png ← Background image (your brand asset)
├── package.json
├── tsconfig.json
└── vercel.json
```

## Customisation tips

- **Font weight**: Change `fontWeight` in `og.tsx` (400 = regular, 700 = bold)
- **Text colour**: Change `color` in the `<span>` style
- **Left padding**: Adjust `paddingLeft` (currently `80px`)
- **Right cutoff**: Adjust `paddingRight` to control how close text gets to the gradient