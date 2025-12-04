# Typography System Documentation

## Overview
This portfolio website uses a consistent typography system based on your Figma design, featuring **Inter** (for body text and headings) and **Playfair Display** (for serif headings).

## Font Families

- **Heading Font**: Inter (substitute for General Sans)
- **Body Font**: Inter (substitute for Gambetta)
- **Serif Font**: Playfair Display (for decorative headings)

## Typography Scale (From Figma Design)

| Element | Size | Line Height | Weight | Usage |
|---------|------|-------------|--------|-------|
| H1      | 128px | 0.9 (90%)  | 600    | Main page titles |
| H2      | 68px  | 1.0 (100%) | 600    | Section headings |
| H3      | 48px  | 1.1 (110%) | 600    | Subsection titles |
| H4      | 32px  | 1.2 (120%) | 600    | Card titles |
| H5      | 20px  | 1.2 (120%) | 500    | Small headings |
| H6      | 16px  | 1.2 (120%) | 500    | Labels |
| Body    | 16px  | 1.5 (150%) | 400    | Paragraph text |
| Small   | 14px  | 1.5 (150%) | 400    | Small text |

## CSS Variables Available

### Font Families
```css
--font-heading: 'Inter'
--font-body: 'Inter'
--font-serif: 'Playfair Display'
```

### Font Sizes
```css
--text-h1: 128px
--text-h2: 68px
--text-h3: 48px
--text-h4: 32px
--text-h5: 20px
--text-h6: 16px
--text-base: 16px
--text-sm: 14px
--text-xs: 12px
```

### Line Heights
```css
--leading-h1: 0.9
--leading-h2: 1
--leading-h3: 1.1
--leading-h4: 1.2
--leading-h5: 1.2
--leading-h6: 1.2
--leading-normal: 1.5
```

## Helper Classes

You can use these pre-built classes for consistent typography:

```html
<!-- Headings -->
<h1 class="typography-h1">Large Heading (128px)</h1>
<h1 class="typography-h1-serif">Large Serif Heading (Playfair Display)</h1>
<h2 class="typography-h2">Section Heading (68px)</h2>
<h3 class="typography-h3">Subsection (48px)</h3>
<h4 class="typography-h4">Card Title (32px)</h4>
<h5 class="typography-h5">Small Heading (20px)</h5>
<h6 class="typography-h6">Label (16px)</h6>

<!-- Body Text -->
<p class="typography-body">Regular paragraph text (16px)</p>
<p class="typography-body-sm">Small text (14px)</p>
```

## Rules & Best Practices

### ✅ DO:
1. **Use CSS Variables** for font sizes and line heights
   ```css
   font-size: var(--text-h2);
   line-height: var(--leading-h2);
   ```

2. **Use Helper Classes** for consistent typography
   ```html
   <h1 class="typography-h1">Heading</h1>
   ```

3. **Use Inter for all body text and headings** (unless specifically using serif)

4. **Maintain proper hierarchy**: H1 → H2 → H3 → H4 → H5 → H6

5. **Keep line-heights consistent** with the design system

### ❌ DON'T:
1. **Don't use Tailwind font-size classes** (text-xl, text-2xl, etc.) unless absolutely necessary
   - These override the design system

2. **Don't use Tailwind font-weight classes** unless specifically needed
   - The typography system handles weights

3. **Don't use Tailwind line-height classes** unless specifically needed
   - The typography system handles line-heights

4. **Don't use custom fonts** outside of Inter and Playfair Display

5. **Don't hardcode font sizes** - always use CSS variables

## Examples from Your Website

### HomePage - Hero Section
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl">
  <span className="block">Mahendiran</span>
  <span className="block text-indigo-600">Sindhu.</span>
</h1>
```

### ProjectsPage - Section Heading
```tsx
<h1 className="text-5xl md:text-6xl">
  My <span className="font-bold">Work</span>
</h1>
```

### AboutPage - Body Text
```tsx
<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
  Your journey description...
</p>
```

## Responsive Typography

For responsive designs, use CSS clamp() or Tailwind responsive classes:

```tsx
<!-- Responsive heading using Tailwind -->
<h1 className="text-3xl md:text-5xl lg:text-7xl">
  Responsive Heading
</h1>

<!-- Or use CSS with clamp -->
<h1 style={{ fontSize: 'clamp(3rem, 5vw, 8rem)' }}>
  Fluid Heading
</h1>
```

## Inter Font Weights Available
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (Semibold)
- 700 (Bold)

## Playfair Display Font Weights Available
- 400 (Regular)
- 500 (Medium)
- 600 (Semibold)
- 700 (Bold)

## Current Implementation Status

✅ All fonts loaded via Google Fonts
✅ CSS variables defined in `/styles/globals.css`
✅ Helper classes available
✅ Base body font set to Inter
✅ Typography scale matches Figma design (H1: 128px, H2: 68px, etc.)
✅ Consistent indigo color scheme across all pages
✅ Responsive typography on all pages

## Need to Update Typography?

1. Open `/styles/globals.css`
2. Modify the CSS variables under `:root`
3. Changes will automatically apply across the entire website
