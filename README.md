# Xinyuehong — Self-Service Kiosk Manufacturer

Source of **[xinyuehongtech.com](https://xinyuehongtech.com/)** — the website of Shenzhen Xinyuehong Information Technology Co., Ltd., a manufacturer of self-service kiosk terminals and the industrial computers that run them.

**Live site: https://xinyuehongtech.com/**

## What we build

| Range | Examples |
|---|---|
| Self-service terminals | Self-ordering, self-payment, self check-in, ticketing, information and wall-mounted kiosks |
| Industrial computers | Fanless box PCs, panel PCs, Android embedded boards, wall-mount touch panels |
| OEM / ODM | Cabinet design, module integration, branding, certification support, small-batch production |

Minimum order quantity is one unit for standard builds. Standard lead time is 15 days from deposit and approved drawing inside our standard module set.

## About this repository

This repo is the **static production site**: hand-written HTML, one stylesheet, about 100 lines of vanilla JavaScript. There is no build step, no framework and no server-side code — the files are served directly by GitHub Pages behind Cloudflare.

```
index.html                     home page
self-service-terminals/        19 model pages + category listing
industrial-pc/                 4 platform pages + category listing
products/                      6 application categories
industries/                    hospital / banking / government guides
saudi-arabia/                  market page (SABER, Arabic UI, freight)
news/                          buying guides and technical articles
assets/                        css, js, images (WebP with JPEG fallback)
sitemap.xml  robots.txt  llms.txt
```

Every page carries its own title, meta description, canonical URL, Open Graph tags and JSON-LD (`Organization`, `WebSite`, `BreadcrumbList`, and `Product` / `FAQPage` / `Article` where relevant).

## Running it locally

There is nothing to install. Any static file server works:

```bash
python -m http.server 8000
```

Note that pages declare `<base href="https://xinyuehongtech.com/">`, so relative links resolve against the production domain. To preview locally, rewrite that tag to `http://127.0.0.1:8000/` first.

## Deployment

- `main` branch → GitHub Pages → `xinyuehongtech.com` (custom domain via `CNAME`)
- Cloudflare proxy in front for HSTS, HTTP/3 and edge caching
- Asset URLs carry a `?v=` query string; bump it whenever an image, CSS or JS file changes

## Contact

- Website: https://xinyuehongtech.com/
- Email: sales@xinyuehongtech.com
- Phone: +86 139 2749 8231
- Address: No. 38 Tian'an Road, Bantian Community, Longgang District, Shenzhen, Guangdong, China
