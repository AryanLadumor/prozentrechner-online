# German SEO Conversion - Implementation Plan

## Overview
Converting prozentrechner-online.com from English to German as primary language with full SEO optimization for keyword "prozentrechner" (301K monthly searches in Germany).

## ✅ Completed Tasks

### 1. i18n Infrastructure Setup
- ✅ Configured Astro i18n with `de` as default locale, `en` as secondary
- ✅ Created `src/i18n/index.ts` with comprehensive translation strings
- ✅ Created `src/i18n/routes.ts` with German SEO-friendly URLs
- ✅ Updated `astro.config.mjs` with i18n configuration

### 2. Core Layout & Components
- ✅ Updated `Layout.astro` with:
  - Dynamic language detection
  - Hreflang markup (de, en, x-default)
  - Language-aware meta tags
  - Proper HTML lang attribute
- ✅ Updated `Header.astro` with:
  - Translated navigation (Hauptrechner, Rabatt, MwSt, Dreisatz, etc.)
  - Language switcher component
  - Localized routes
- ✅ Created `LanguageSwitcher.astro` component
- ✅ Updated `Footer.astro` with full German/English translations

### 3. Homepage Implementation
- ✅ Created German homepage at `/` (index.astro)
  - Optimized for "prozentrechner" keyword
  - German content: "Prozentrechner Online - Sofort & Präzise"
  - German trust pill, descriptions, CTAs
  - Euro currency references
  - German FAQ content with MwSt examples
- ✅ Created English homepage at `/en/index.astro`
  - Uses translation system
  - Proper alternate URLs

### 4. German SEO-Friendly Routes
Mapped from English to German URLs:
- `/discount-calculator` → `/rabattrechner`
- `/vat-calculator` → `/mehrwertsteuerrechner`
- `/rule-of-three-calculator` → `/dreisatz-rechner`
- `/percentage-difference` → `/prozentuale-differenz`
- `/salary-raise-calculator` → `/gehaltsrechner`
- `/percentage-formula` → `/prozentrechner-formel`

## 🚧 Next Steps (To Complete)

### 5. Create German Calculator Pages
Need to create the following German route pages:

```
src/pages/
├── rabattrechner.astro (German discount calculator)
├── mehrwertsteuerrechner.astro (German VAT with 19% MwSt)
├── dreisatz-rechner.astro (German rule of three)
├── prozentuale-differenz.astro (German percentage difference)
├── gehaltsrechner.astro (German salary calculator)
└── prozentrechner-formel.astro (German formulas page)
```

### 6. Create English Calculator Pages
Need to create English versions under `/en/`:

```
src/pages/en/
├── discount-calculator.astro
├── vat-calculator.astro
├── rule-of-three-calculator.astro
├── percentage-difference.astro
├── salary-raise-calculator.astro
└── percentage-formula.astro
```

### 7. Update Calculator Components
Update these components to accept `lang` prop and use Euro for German:
- `src/components/calculators/MainPercentageCalc.astro`
- `src/components/calculators/DiscountCalc.astro`
- `src/components/calculators/VatCalc.astro` (default to 19% for German)
- `src/components/calculators/RuleOfThreeCalc.astro`
- `src/components/calculators/PercentageDiffCalc.astro`
- `src/components/calculators/SalaryCalc.astro`

### 8. SEO Enhancements
- Add German keywords from research into meta descriptions
- Update Schema.org structured data with German translations
- Add more German long-tail keyword content
- Create German-specific examples (Euro amounts, MwSt 19%)

### 9. Content Optimization
Based on keyword research, add content for:
- prozentrechner dreisatz (3.6K searches)
- prozentrechner formel (18.1K searches)
- prozentrechner online (14.8K searches)
- prozentrechner euro (1.6K searches)
- prozentrechner mit rechenweg (320 searches)
- prozentrechner rabatt (260 searches)

### 10. Technical SEO
- Generate sitemap with proper hreflang annotations
- Add robots.txt with sitemap reference
- Ensure all internal links use localized routes
- Add German Open Graph tags
- Test hreflang implementation

## Keyword Integration Strategy

### Primary Keywords (High Volume)
1. **prozentrechner** (301K) - Homepage H1, title
2. **prozentrechner online** (14.8K) - Homepage subtitle
3. **prozentrechner formel** (18.1K) - Formulas page
4. **prozentrechner mit formel** (18.1K) - Formulas page variant

### Secondary Keywords (Medium Volume)
5. **prozentrechner dreisatz** (3.6K) - Dedicated page
6. **prozentrechner taschenrechner** (2.4K) - Body content
7. **prozentrechner euro** (1.6K) - Throughout (currency examples)
8. **prozentrechner rechner** (1.3K) - Navigation/CTAs

### Long-tail Keywords (Lower Volume, High Intent)
- prozentrechner mit rechenweg (320) - Featured in all calculators
- prozentrechner rabatt (260) - Discount calculator
- prozentrechner mehrwertsteuer (70) - VAT calculator with 19%
- prozentrechner gehalt (90) - Salary calculator

## Implementation Commands

To complete the conversion, run:

```bash
# Create all German calculator pages
# Create all English calculator pages under /en/
# Update calculator components with i18n support
# Build and test
npm run build
npm run preview
```

## Testing Checklist
- [ ] German homepage loads at `/`
- [ ] English homepage loads at `/en`
- [ ] Language switcher works bidirectionally
- [ ] All German routes are SEO-friendly (no /de prefix)
- [ ] All English routes have /en prefix
- [ ] Hreflang tags are present on all pages
- [ ] Currency shows € for German, $ for English
- [ ] MwSt defaults to 19% for German
- [ ] All navigation links use correct localized routes
- [ ] Schema.org structured data is language-aware
