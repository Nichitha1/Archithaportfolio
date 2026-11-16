---
name: Obsidian Sentinel
colors:
  surface: '#0b1325'
  surface-dim: '#0b1325'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e1f'
  surface-container-low: '#131b2d'
  surface-container: '#171f32'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3448'
  on-surface: '#dbe2fb'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dbe2fb'
  inverse-on-surface: '#283043'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#c7fff0'
  on-secondary: '#00382f'
  secondary-container: '#00f2d1'
  on-secondary-container: '#006a5a'
  tertiary: '#c7c8ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#a7a9ff'
  on-tertiary-container: '#2b29bb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#26fedc'
  secondary-fixed-dim: '#00dfc1'
  on-secondary-fixed: '#00201a'
  on-secondary-fixed-variant: '#005144'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0b1325'
  on-background: '#dbe2fb'
  surface-variant: '#2d3448'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets Enterprise SAP Security Architects, CISOs, SecOps Engineers, and Compliance Directors who oversee mission-critical ERP landscapes. The UI must project absolute architectural authority, calm operational vigilance, and surgical precision. 

The aesthetic is a calibrated hybrid of **High-Tech Minimalism** and **Tactical Glassmorphism**:
- Ultra-deep, multi-tiered midnight canvas that minimizes visual fatigue during incident response and compliance auditing.
- Deliberate, high-intent luminescence: luminescent cyber-blue and hyper-teal are deployed strictly for authorization indicators, threat status markers, and interactive pivots—never as decorative excess.
- Precision framing via crisp micro-borders and subtle translucent backdrops, evoking aerospace command interfaces and mission-critical telemetry consoles.
- Clear structural division between human-readable administrative copy and technical SAP execution parameters (T-Codes, authorization objects, user buffers).

## Colors

The palette operates in a default dark state, architected around deep midnight-slate substrates and precise tactical accents:

- **Base Canvas (`#070b14`)**: Root application backdrop. Pure low-wavelength obsidian to eliminate eye strain in SOC environments.
- **Surface Elevation 1 (`#0d1527`)**: Primary card, panel, and sidebar container base.
- **Surface Elevation 2 (`#131f37`)**: Interactive containers, raised modal cards, and selected state backdrops.
- **Primary Accent (`#38bdf8` - Cyber Blue)**: Focus rings, primary action surfaces, active navigation anchors, and SAP authorization vector links.
- **Secondary Accent (`#00f5d4` - Hyper Teal)**: System health, pristine SAP audit benchmarks, verified integrity hashes, and live telemetry indicators.
- **Tertiary Accent (`#6366f1` - Quantum Indigo)**: Deep security analysis flags, role hierarchy visualizations (PFCG roles), and secondary analytic scopes.
- **Semantic Signals**:
  - Critical/Breach: `#f43f5e` (SU53 authorization failures, SOD conflicts).
  - Warning/Drift: `#fbbf24` (Unapplied critical SNOTEs, emergency firecall sessions).
  - Subdued Text/Muted UI: `#64748b` for secondary labels, `#94a3b8` for standard body copy, `#f8fafc` for maximum legibility headlines.

## Typography

Typography establishes an instant operational boundary between executive narrative and underlying technical runtime:

- **Display & Headlines (Plus Jakarta Sans)**: Delivers a clean, authoritative executive profile with precise geometry. Used for dashboard overviews, vulnerability category titles, and executive risk scores.
- **Interface & Narrative Body (Inter)**: Built for neutral, highly legible documentation, forensic analysis reports, and multi-line audit narratives.
- **Technical & Security Data (JetBrains Mono)**: Mandatory for all SAP T-Codes (e.g., `SU01`, `PFCG`, `SM21`, `ST01`), security authorization objects (e.g., `S_TABU_DIS`, `S_DEVELOP`), CVE identifiers, raw hash sums, and log timestamps.

Letter-spacing on uppercase monospace labels is deliberately open (+0.08em) to ensure instant visual parsing across dense forensic data tables.

## Layout & Spacing

The layout model is anchored by a structured 12-column responsive fluid grid designed to support dense analytical readouts and expansive enterprise audit trees:

- **Desktop (1280px+)**: 12-column grid, 1.5rem gutters, 2rem canvas margins. Content panels default to dense multi-pane splits (e.g., 3-col tree hierarchy, 6-col forensic inspection panel, 3-col contextual telemetry).
- **Tablet (768px - 1279px)**: 8-column grid, 1rem gutters, 1.5rem outer canvas margins. Multi-pane telemetry panels collapse into tabbed segment views.
- **Mobile (< 768px)**: 4-column grid, 1rem gutters, 1rem outer margin. Layout reflows strictly to a single-column operational stack; lateral table data relies on pinned freeze-columns for T-Code and status markers.

Rhythm is strictly mathematical on a 4px/8px incremental rhythm (`space-xs` through `space-xl`). Data grid row heights are systematically compressed to 36px/40px to prioritize vertical data density.

## Elevation & Depth

Visual hierarchy uses a tactical stacking order of deep obsidian surfaces, low-contrast cyan-tinted borders, and calibrated backdrop blurs rather than heavy drop shadows:

- **Substrate Level (Background)**: `#070b14` flat root canvas.
- **Tier 1 (Panels & Data Grids)**: `#0d1527` with a structural border of `1px solid rgba(56, 189, 248, 0.08)`. Zero ambient shadow to maintain strict planar clarity.
- **Tier 2 (Floating Cards, Inspector Flyouts, Dropdowns)**: Translucent surface using `rgba(19, 31, 55, 0.85)` backed by `backdrop-filter: blur(12px)` and a crisp perimeter border of `1px solid rgba(56, 189, 248, 0.20)`. Subtle ambient shadow: `0 8px 32px -4px rgba(0, 0, 0, 0.6)`.
- **Tier 3 (Active Threat Alerts, Dialogs, Floating Terminals)**: `#131f37` framed with an outer glow: `box-shadow: 0 0 24px -2px rgba(56, 189, 248, 0.18), 0 16px 40px -8px rgba(0, 0, 0, 0.8)` and a border of `1px solid rgba(56, 189, 248, 0.45)`.
- **Status Aura (Focused / Interactive Elements)**: Active focus states emit a zero-distance outer ring: `0 0 0 1px #38bdf8, 0 0 12px rgba(56, 189, 248, 0.35)`.

## Shapes

The design system adopts a **Soft (Level 1)** geometric contour language:

- **Standard Elements (0.25rem / 4px)**: Default input fields, data cells, code chips, standard buttons, and telemetry list items. The minimal radius communicates precision tooling and structural rigor.
- **Cards & Modals (`rounded-lg` / 8px)**: Primary operational cards, flyouts, and modal panels. 
- **Large Overlays (`rounded-xl` / 12px)**: Root layout frame divisions and primary dashboard widgets.
- **Pill Exception (Full Round / 9999px)**: Reserved strictly for live status badges (e.g., `ACTIVE`, `FAILED`, `MONITORED`), threat score indicators, and compact filter toggles.

## Components

### Buttons
- **Primary Cyber Action**: `#38bdf8` background with `#070b14` bold text. Subtle inner top highlight `inset 0 1px 0 rgba(255, 255, 255, 0.25)`. On hover, elevates with a teal glow (`box-shadow: 0 0 16px rgba(56, 189, 248, 0.4)`).
- **Secondary Ghost**: Transparent background, `1px solid rgba(56, 189, 248, 0.25)` border, `#f8fafc` text. Hover transitions to background `rgba(56, 189, 248, 0.08)` and border `#38bdf8`.
- **Destructive/Revoke Action**: `rgba(244, 63, 94, 0.1)` background with `1px solid rgba(244, 63, 94, 0.3)` border and `#f43f5e` text.

### Badges & Status Pills
- **Geometry**: Pill-shaped (9999px radius), padding `2px 8px`, `label-caps` typography.
- **Status Variants**:
  - *Compliant / Active*: Background `rgba(0, 245, 212, 0.1)`, text `#00f5d4`, border `1px solid rgba(0, 245, 212, 0.3)`. Includes an animated 6px pulse dot.
  - *Critical Breach / SOD Conflict*: Background `rgba(244, 63, 94, 0.1)`, text `#f43f5e`, border `1px solid rgba(244, 63, 94, 0.35)`.
  - *SNOTE Pending*: Background `rgba(251, 191, 36, 0.1)`, text `#fbbf24`, border `1px solid rgba(251, 191, 36, 0.3)`.

### SAP T-Code & Parameter Chips
- Styled in `code-md` typography. Background `#070b14`, border `1px solid rgba(56, 189, 248, 0.2)`, text `#38bdf8`, padding `2px 6px`, radius `4px`. Interactive chips reveal inline execution parameters or SU24 authorization links on hover.

### Form Inputs & Code Fields
- **Background**: `#070b14` inset.
- **Border**: `1px solid rgba(148, 163, 184, 0.2)`. 
- **Focus**: Border shifts to `#38bdf8`, accompanied by an ambient field glow: `box-shadow: 0 0 8px rgba(56, 189, 248, 0.25)`.
- **Monospace Text Inputs**: Used for transaction code execution bars, authorization object string lookups, and regex audit filters.

### Cards & Telemetry Containers
- Structured with `#0d1527` surface or frosted `rgba(13, 21, 39, 0.8)`. Outer frame defined by a `1px` border using `rgba(56, 189, 248, 0.1)`.
- Optional top indicator line: `1px` gradient border across the top edge shifting from `#38bdf8` to `transparent`.

### Specialized Domain Components
- **SU53 Authorization Trace Matrix**: Dense tabular data view pairing SAP field names, authorization objects, and return codes (`RC=0`, `RC=4`) with color-coded risk flags.
- **Emergency Access (Firefighter) Session Counter**: High-prominence telemetry badge with dynamic countdown clock, active ST01 trace indicators, and live reviewer sign-off states.