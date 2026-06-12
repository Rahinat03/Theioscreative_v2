# FAVICON SETUP INSTRUCTIONS

## Current Issue
Your current favicon is in `.jpg` format, which is incorrect. Favicons should be in `.ico` or `.png` format.

**Current file**: `assets/images/favicon.jpg`
**Status**: ❌ Incorrect format

## Required Favicon Files

You need to create the following favicon files from your logo:

### Required Files:
1. `favicon.ico` (16x16, 32x32, 48x48 multi-resolution)
2. `favicon-16x16.png` (16x16)
3. `favicon-32x32.png` (32x32)
4. `apple-touch-icon.png` (180x180)
5. `android-chrome-192x192.png` (192x192)
6. `android-chrome-512x512.png` (512x512)

## How to Create Favicons

### Option 1: Use Online Generator (Easiest - 5 minutes)

1. **Go to**: https://realfavicongenerator.net/
2. **Upload**: Your logo (`TC_logo.png`)
3. **Generate**: All required favicon files
4. **Download**: ZIP file with all favicons
5. **Extract**: Files to your website root directory

### Option 2: Use Favicon.io (Alternative)

1. **Go to**: https://favicon.io/
2. **Upload**: Your logo image
3. **Download**: Generated package
4. **Extract**: To website root

### Option 3: Manual Creation (Advanced)

Use image editing software (Photoshop, GIMP, etc.):

1. Open `TC_logo.png`
2. Create square versions at each required size
3. Export as PNG (transparent background recommended)
4. Use online tool to convert to `.ico`: https://convertico.com/

## File Placement

Place all favicon files in the **root directory** (same level as index.html):

```
/theioscreative/
  ├── index.html
  ├── favicon.ico                    ← HERE
  ├── favicon-16x16.png              ← HERE
  ├── favicon-32x32.png              ← HERE
  ├── apple-touch-icon.png           ← HERE
  ├── android-chrome-192x192.png     ← HERE
  ├── android-chrome-512x512.png     ← HERE
  ├── site.webmanifest               ✓ CREATED
  └── assets/
      └── images/
          ├── TC_logo.png
          └── favicon.jpg            ← DELETE THIS
```

## HTML Code to Add

After creating the favicon files, add this code to the `<head>` section of **ALL** HTML files (index.html, about.html, services.html, contact.html):

```html
<!-- Favicons -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#306460">
```

Replace the current line in each HTML file:
```html
<!-- REMOVE THIS: -->
<link rel="icon" type="image/png" href="assets/images/favicon.jpg" />

<!-- REPLACE WITH THE CODE ABOVE -->
```

## Quick Checklist

- [ ] Generate favicon files using online tool
- [ ] Download all 6 favicon files
- [ ] Place files in website root directory
- [ ] Delete old `assets/images/favicon.jpg`
- [ ] Update `<head>` in index.html
- [ ] Update `<head>` in about.html
- [ ] Update `<head>` in services.html
- [ ] Update `<head>` in contact.html
- [ ] Test by viewing site in browser
- [ ] Check browser tab for favicon

## Testing

After implementation, test:

1. **Desktop**: Open website, check browser tab for icon
2. **Mobile**: Add to home screen, check icon
3. **Validator**: Use https://realfavicongenerator.net/favicon_checker

## Troubleshooting

**Favicon not showing?**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Try incognito/private browsing
- Check file paths are correct
- Verify files are in root directory (not /assets/)

**Mobile icon not showing?**
- Check `apple-touch-icon.png` is 180x180px
- Check `android-chrome-*.png` files exist
- Verify `site.webmanifest` is in root

## Status

- ✅ `site.webmanifest` created
- ⏳ Favicon image files need to be created
- ⏳ HTML files need to be updated

## Next Steps

1. Visit https://realfavicongenerator.net/
2. Upload your TC_logo.png
3. Download the generated package
4. Follow placement instructions above
5. Update HTML files with new favicon code

**Estimated Time**: 10-15 minutes
