# 🧸 ToySquad – Scroll-Driven Hero Section (Scrollytelling)

## ACT AS
A world-class **Creative Developer (Awwwards-level)** specializing in **Next.js 14, Framer Motion, Tailwind CSS**, and **scroll-driven product storytelling** using **HTML5 Canvas**.

---

## PROJECT CONTEXT
The **ToySquad** website is already built using:
- Next.js (App Router)
- Tailwind CSS
- Framer Motion

A hero section already exists.

Your task is to **refactor the hero section only** to showcase a **kids electric toy jeep car** using a **scroll-linked image sequence animation** that smoothly rotates the product **360°** as the user scrolls.

This hero must feel:
- Premium
- Playful
- Clean
- E-commerce ready
- Performance-first

---

## CORE MECHANIC
As the user scrolls down the page, a **sticky canvas** plays an **image sequence** of the toy car rotating smoothly, creating a cinematic product reveal.

---

## TECH STACK (MANDATORY)
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Rendering:** HTML5 Canvas (no Three.js)

---

## VISUAL DIRECTION & COLORS

### Background & Blending
- Use a **light / studio white background**
- The page background **must exactly match** the image sequence background
- Canvas edges must be invisible
- No dark mode

### Color Palette
- Background: `#F7F8FA` (or eye-drop from image)
- Headings: `text-slate-900`
- Body text: `text-slate-600`
- Accent / CTA: soft blue or purple aligned with ToySquad branding

### Typography
- Inter or SF Pro
- Large, bold headings
- Friendly, modern, kid-safe aesthetic
- Clean spacing and hierarchy

---

## PRODUCT DETAILS
- Kids electric **toy jeep car**
- Off-road inspired design
- Chunky tires, visible details
- Product must:
  - Stay centered
  - Maintain the same scale across all frames
  - Rotate only (no camera movement)

---

## IMPLEMENTATION DETAILS

### 1. Sticky Canvas Section

Create a component:


**Layout rules:**
- Wrapper height: `h-[400vh]`
- Inside wrapper:
  - `<canvas>` is `sticky`
  - `top-0`
  - `h-screen w-full`
- Canvas content centered horizontally and vertically
- No camera movement

---

### 2. Scroll → Frame Logic

- Load **40 image frames** (exported via Whisk / Ezgif) On Public folder ( toycar-frames )
- Naming convention:

- Use `useScroll` from Framer Motion
- Map scroll progress:

- Draw the active frame to the canvas on scroll
- Use smooth interpolation (no stutter, no flicker)

---

### 3. Story Text Overlays

Text should fade/slide subtly and never overpower the product.

#### 0% Scroll – Intro (Centered)
**Heading**

**Subtext**

---

#### 30% Scroll – Feature 1 (Left aligned)
**Heading**

**Subtext**


---

#### 60% Scroll – Feature 2 (Right aligned)
**Heading**


**Subtext**


---

#### 90% Scroll – CTA (Centered)

**Heading**

**CTA Button**


### 4. Mobile Behavior
- Canvas uses `object-contain`
- No cropping
- Text stacks vertically
- Reduce scroll height to `h-[300vh]`

---

### 5. Polish & Performance
- Preload all image frames before scroll starts
- Display a subtle loading spinner while loading
- Use `requestAnimationFrame` for canvas rendering
- Avoid layout shifts
- Target 60fps

---

## OUTPUT REQUIREMENTS
Generate or refactor:
- `page.tsx` (hero integration only)
- `ToyCarScroll.tsx`
- Minimal Tailwind updates if required

DO NOT:
- Rebuild the entire site
- Change routing or layout structure
- Add heavy 3D libraries

---

## FINAL GOAL
A **premium, scroll-driven hero section** for ToySquad that:
- Showcases the toy jeep with a smooth 360° rotation
- Blends perfectly into the background
- Feels modern, playful, and conversion-focused
- Looks Awwwards-quality
