# The Wheel of Seasons

> *The year turns, a wheel of light and hue, each month a color, each color a mood.*  
> *From Winter’s frozen reds to Fall’s golden sigh, the site shifts, mirroring time’s quiet stride.*

## Overview

The Wheel of Seasons is a minimalist web project that paints a site with monthly color themes, reflecting the natural cadence of the year. January’s stark Winter palette fades into February’s thawing purples, blooms into April’s vibrant Spring blues, ignites in July’s Summer greens, and settles into October’s Fall ambers. In-between months blend these peaks through RGB-linear interpolation, creating a seamless chromatic journey. Using CSS variables and JavaScript to detect the current month, the site’s hues shift dynamically, offering a pure exploration of color as time’s storyteller.

Designed for simplicity, this repository focuses solely on the monthly CSS transitions, deployable to BigRock hosting via cPanel’s Git integration. It’s a canvas where code meets nature’s rhythm, a handcrafted artifact for creators who see seasons in hex codes.

## Features

- **Monthly Color Themes**: Twelve unique palettes, with peak seasons (January, April, July, October) and interpolated transitions for in-between months.
- **Dynamic Theme Switching**: JavaScript detects the current month and updates CSS variables for headers, backgrounds, and text.
- **Lightweight Design**: Minimal HTML and CSS, using variables for seamless style shifts.
- **cPanel Deployment**: Configured for BigRock hosting with `.cpanel.yml` for easy updates.
- **Extensible**: Add animations or new palettes by editing `_css/monthly.css` or `_js/scripts.js`.

## Project Structure

```
wheel-of-seasons/
├── index.html          # Minimal HTML with dynamic theme loader
├── _css/
│   └── monthly.css     # CSS with variables for monthly themes
├── _js/
│   └── scripts.js      # JavaScript for month-based theme switching
├── _img/
│   └── logo.jpg        # Optional logo (100px wide)
├── .cpanel.yml         # cPanel deployment configuration
└── README.md           # This poetic guide
```

## Essence of the Transitions

Each month paints the site with a unique mood, its colors a verse in the year’s poem:

- **January (Peak Winter)**: Stark reds (`#e51e77`) and blues (`#1e75c8`), a frozen hush where shadows linger long.
- **February (Winter → Spring, 1/3)**: Purples emerging (`#a23b9b`, `#e6b9d7`), like crocuses piercing snow’s edge.
- **March (Winter → Spring, 2/3)**: Softening blues (`#6059c0`, `#cdbeeb`), buds swelling in misty dawn.
- **April (Peak Spring)**: Vibrant skies and lavenders (`#1e77e5`, `#b4c3ff`), life bursting in coral accents (`#c87591`).
- **May (Spring → Summer, 1/3)**: Blues greening (`#3b9ba2`, `#b4d7b4`), warmth teasing the breeze.
- **June (Spring → Summer, 2/3)**: Lush verdure (`#59c060`, `#b4eb69`), the sun’s promise blooming bold.
- **July (Peak Summer)**: Electric greens (`#77e51e`, `#b4ff1e`) and magentas (`#ae75c8`), heat shimmering endlessly.
- **August (Summer → Fall, 1/3)**: Greens warming to yellows (`#9bc01e`, `#cdf850`), fruits heavy on the vine.
- **September (Summer → Fall, 2/3)**: Oranges deepening (`#c09b1e`, `#e6f282`), leaves whispering rest.
- **October (Peak Fall)**: Earthy ambers (`#e5771e`, `#ffecb4`), the world’s golden sigh under teal skies (`#75c8ae`).
- **November (Fall → Winter, 1/3)**: Reds creeping in (`#e5593b`, `#ffd9b9`), winds carrying winter’s breath.
- **December (Fall → Winter, 2/3)**: Rosy glows (`#e53b59`, `#ffc6be`), fireside tales before the freeze.

> *Each hue a moment, each month a breath, the Wheel spins colors through time’s quiet depth.*

## Monthly Palettes

| Month | Header BG | BG2 BG | Footer BG | Body BG | Body Text | Footer Text |
|-------|-----------|--------|-----------|---------|-----------|-------------|
| January | `#e51e77` | `#ffb4c3` | `#1e75c8` | `#2b5a3d` | `#1e75c8` | `#e51e77` |
| February | `#a23b9b` | `#e6b9d7` | `#5675b5` | `#537c6f` | `#5675b5` | `#a23b9b` |
| March | `#6059c0` | `#cdbeeb` | `#8f75a3` | `#7b9fa1` | `#8f75a3` | `#6059c0` |
| April | `#1e77e5` | `#b4c3ff` | `#c87591` | `#a3c2d4` | `#c87591` | `#1e77e5` |
| May | `#3b9ba2` | `#b4d7b4` | `#bf75a3` | `#9b8fab` | `#b35c7e` | `#3b9ba2` |
| June | `#59c060` | `#b4eb69` | `#b675b5` | `#935d82` | `#9f436c` | `#59c060` |
| July | `#77e51e` | `#b4ff1e` | `#ae75c8` | `#8b2b5a` | `#8b2b5a` | `#77e51e` |
| August | `#9bc01e` | `#cdf850` | `#926293` | `#835f76` | `#7a314a` | `#76db4e` |
| September | `#c09b1e` | `#e6f282` | `#764f5f` | `#7c9392` | `#6a373a` | `#75d17e` |
| October | `#e5771e` | `#ffecb4` | `#5a3d2b` | `#75c8ae` | `#5a3d2b` | `#75c8ae` |
| November | `#e5593b` | `#ffd9b9` | `#464f5f` | `#5ca388` | `#464f5f` | `#9a8f9b` |
| December | `#e53b59` | `#ffc6be` | `#326293` | `#437e62` | `#326293` | `#bf5689` |

## Prerequisites

- **Local Development**:
  - Visual Studio Code or similar IDE
  - Modern web browser
  - Git installed
  - Node.js (optional, for local server: `npm install -g http-server`)
- **Hosting**:
  - BigRock account with cPanel
  - GitHub repository (public or private)
  - SSH key for private repos (optional)

## Setup Instructions

### Local Development

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/wheel-of-seasons.git
   cd wheel-of-seasons
   ```
2. **Run Locally**:
   - Use a local server:
     ```bash
     http-server -p 8000
     ```
     Or Python:
     ```bash
     python -m http.server 8000
     ```
     Open `http://localhost:8000` in your browser.
3. **Test Themes**:
   - Open `index.html` and verify the current month’s palette (edit `scripts.js` to force a month for testing).
4. **Customize Colors**:
   - Edit `_css/monthly.css` variables or update `_js/scripts.js` palettes.

### Deployment to BigRock

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add September’s palette"
   git push origin main
   ```
2. **Set Up SSH Keys (Private Repos)**:
   - In cPanel: `Security > SSH Access > Manage SSH Keys > Generate a New Key`.
   - Use `id_rsa` (no passphrase), authorize, and add public key to GitHub: `Settings > SSH and GPG keys`.
3. **Clone in cPanel**:
   - In cPanel: `Files > Git Version Control > Create Repository`.
   - Enable “Clone a Repository” with SSH URL: `git@github.com:your-username/wheel-of-seasons.git`.
   - Set path: `/home/yourusername/public_html/seasons`.
   - Click `Create`.
4. **Deploy**:
   - Use `.cpanel.yml`:
     ```yaml
     ---
     deployment:
       tasks:
         - export DEPLOYMENT_PATH=/home/yourusername/public_html/seasons
         - /bin/cp -r * $DEPLOYMENT_PATH
     ```
   - In `Git Version Control > Manage`, click “Deploy HEAD commit”.
5. **Verify**:
   - Visit `yourdomain.com/seasons` to see the current month’s theme.

## Usage

- **Theme Switching**: `scripts.js` auto-detects the month; test manually by overriding `getMonth()`.
- **Styling**: Adjust `_css/monthly.css` variables for new effects (e.g., transitions, gradients).
- **Updating**: Commit to GitHub and deploy via cPanel.

## Notes

- **Focus on Color**: This repository omits storytelling features, centering on CSS transitions. Pair with a separate story site if desired.
- **Accessibility**: Ensure contrast ratios meet WCAG (e.g., `#1e77e5` on `#ffffff` is safe; test `#b4c3ff` on `#a3c2d4`).
- **Enhancements**: Add CSS animations (e.g., `transition: background-color 0.5s`) for smoother shifts.
- **SEO**: Add meta tags in `index.html`:
  ```html
  <meta name="description" content="A dynamic site with monthly seasonal color themes.">
  <meta name="keywords" content="seasonal themes, css transitions, dynamic colors">
  ```

## Troubleshooting

- **Theme Not Switching**: Check `scripts.js` for correct month detection (`new Date().getMonth() + 1`) and CSS variable application.
- **Deployment Fails**: Confirm `.cpanel.yml` path and permissions (644 for files, 755 for directories) in cPanel’s File Manager.
- **Color Clashes**: Use a color picker (e.g., Coolors) to tweak hues for contrast.

## Contributing

> *Shift a hue, spin the Wheel, let the seasons’ colors reveal.*

- Suggest new palettes or animations via GitHub issues.
- Enhance `scripts.js` for preview modes or dynamic controls.
- Test transitions on different devices for responsiveness.

## License

MIT License. Let the Wheel of Seasons spin freely, a gift from creators to creators.

> *On September 6, 2025, the site glows in September’s amber, a bridge from Summer’s fire to Fall’s rest. What hue will you paint next?*