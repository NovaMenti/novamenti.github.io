# Design System Specification: The Ethereal Intelligence Framework

## 1. Overview & Creative North Star
**Creative North Star: "The Cognitive Prism"**

This design system rejects the "SaaS-in-a-box" aesthetic in favor of an immersive, high-fidelity environment that mirrors the complexity and clarity of advanced AI. We move beyond flat grids toward a "Cognitive Prism" philosophy: UI elements should feel like light passing through data—transparent, layered, and multi-dimensional. 

To break the "template" look, we employ **intentional asymmetry**. Hero sections should utilize large-scale `display-lg` typography offset against expansive negative space. Elements should overlap—a glassmorphic card partially obscuring a background gradient—to create a sense of depth and interconnectedness that a standard flat layout cannot achieve.

---

## 2. Colors & Atmospheric Depth
The palette is rooted in the deep void of space (`surface`), punctuated by the electric energy of intelligence (`primary`).

### The Palette
*   **Primary (`#00daf8`):** Use for critical focal points and "moments of intelligence."
*   **Surface Hierarchy:** 
    *   `surface` (#0b1326): The base canvas.
    *   `surface-container-low` (#131b2e): Secondary content areas.
    *   `surface-container-high` (#222a3d): Interactive elements and elevated cards.
*   **Accents:** `tertiary` (#c0c1ff) provides a soft, humanistic counterpoint to the high-tech blues.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Layout boundaries must be established solely through background tonal shifts. Use `surface-container-low` sections nested within a `surface` background. If contrast is needed, use the **Spacing Scale** (e.g., `16` or `20`) to create a clear "moat" of negative space rather than a physical line.

### The Glass & Gradient Rule
To achieve "visual soul," primary CTAs and hero backgrounds should utilize a linear gradient: `primary` (#00daf8) to `primary-container` (#009fb5) at a 135-degree angle. Floating panels must use **Glassmorphism**: 
*   **Fill:** `surface-container-highest` at 40% opacity.
*   **Effect:** `backdrop-filter: blur(20px)`.
*   **Edge:** A 1px "inner glow" using `outline-variant` at 15% opacity.

---

## 3. Typography
We utilize a dual-typeface system to balance technical authority with editorial sophistication.

*   **Display & Headline (Manrope):** Chosen for its geometric precision and modern "tech-editorial" feel. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) for high-impact statements.
*   **Body & Labels (Inter):** The workhorse of the system. Inter’s tall x-height ensures readability even in complex data environments.
*   **Hierarchy as Identity:** Use `title-lg` for card headers to establish immediate scanability. For labels, always use `label-md` in uppercase with +0.05em tracking to evoke a "instrument panel" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are forbidden. We define hierarchy through "The Layering Principle."

*   **Stacking Surfaces:** Instead of a shadow, place a `surface-container-lowest` (#060e20) card inside a `surface-container` (#171f33) parent. This creates a "recessed" look that feels more integrated into the software.
*   **Ambient Shadows:** If an element must float (e.g., a dropdown), use an ultra-diffused shadow: `box-shadow: 0 24px 48px -12px rgba(0, 218, 248, 0.08)`. Note the use of a tinted shadow (Primary) rather than black.
*   **The Ghost Border:** For high-density data where separation is vital, use `outline-variant` (#414755) at **10% opacity**. This provides a "suggestion" of a boundary without cluttering the visual field.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `rounded-md` (0.75rem). Text: `label-md` bold.
*   **Secondary:** Ghost style. Transparent fill with a `Ghost Border` (10% opacity `outline-variant`). On hover, transition to 10% `primary` opacity.
*   **Interaction:** Subtle scale-down (98%) on click to provide tactile feedback.

### Cards & Lists
*   **Rule:** No dividers. Use `spacing-4` (1rem) between list items. 
*   **Hover State:** Transition the background from `surface-container` to `surface-container-high`.
*   **Shape:** Always use `rounded-lg` (1rem) for containers to soften the "tech" edge and make the AI feel approachable.

### Input Fields
*   **Styling:** `surface-container-lowest` background with a `rounded-sm` corner. 
*   **Focus:** Do not use a heavy border. Use a 2px outer glow of `primary` with 20% opacity and change the text color of the `label-sm` to `primary`.

### AI Interaction Components (Signature)
*   **The Pulse:** For "Processing" states, use a soft radial gradient animation using `primary` and `surface-tint` that expands and contracts behind the content.
*   **Data Glass:** A custom container for AI-generated insights using the **Glassmorphism** rules, with a `tertiary` left-border accent (4px) to denote "AI-originated" content.

---

## 6. Do’s and Don'ts

### Do
*   **Do** use asymmetrical layouts where one side is heavy with `display-lg` text and the other is light glassmorphic cards.
*   **Do** rely on the `surface` tiering for all hierarchy.
*   **Do** use `backdrop-blur` generously on overlays to maintain context of the background.

### Don’t
*   **Don't** use 100% opaque, high-contrast borders (e.g., white or solid gray).
*   **Don't** use pure black (#000000). The darkest point is `surface-container-lowest` (#060e20).
*   **Don't** use standard "drop shadows" that look like they belong on a paper document.
*   **Don't** cram content. If in doubt, double the spacing using the `20` (5rem) token.