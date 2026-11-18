# Back to PE Class

A fully populated original twelve-session adult movement experience, rendered as responsive HTML with React/Vite, CSS and TypeScript/JavaScript. This is an educational draft, not an approved commercial fitness release.

## Running
Use the project's existing Vite dev command (`npm run dev`) and build command (`npm run build`). The platform manages dependencies; no package manifest was modified. PDF generation dynamically imports jspdf. Other modules use react-router-dom, lucide-react, sonner, react-hook-form, zod, and @hookform/resolvers.

## Content and routes
- `src/constants/programme.ts`: all 12 sessions, warm-ups, ordered drills, cool-downs, reflections and six video slots.
- `src/constants/exercises.ts`: 18 complete original movement references, cues, setup, easier alternatives and stop notes.
- `src/constants/guide.ts`: welcome, safety, missed-day rules, practical food ideas, relaxation guidance, FAQs.
- `/`: classroom overview and resume-next-unfinished behavior.
- `/programme`, `/class/1` through `/class/12`: timetable and complete guided sessions.
- `/exercises`, `/videos`, `/wellness`: reference library, six playable original schematic guides, optional local video preview and breathing pause.
- `/tracker`, `/report-card`: private attendance, backup/restore/reset, and saved reflection with personal PDF export.
- `/guide`, `/workbook`, `/faq`, `/privacy`: safety handbook, complete source preview, A4/Letter PDF and one-day sample, practical scope/privacy notes.

## PDF workflow
Use My Workbook to choose A4 or US Letter and generate a full workbook or separately selected class-one sample. Real PDFs use searchable text from the canonical content records with deliberate margins, flow-based pagination, footers, and numbered pages. The full export includes all instructions and eighteen exercise entries. The sample includes only class one and its four referenced exercises plus orientation/tracker/report-card glimpses. No local media or private reflections appear in these exports. My Report Card separately exports saved personal reflections.

Browser print is a supplementary route; full source pages are shown in the workbook preview and print CSS expands the scroll container. Always inspect the actual generated PDF. Font tagging/PDF-UA, QR destinations, PDF reader tests, commercial QA approval and durable export history are not claimed.

## Persistence and privacy
Customer progress uses validated localStorage (`back-to-pe-class-progress-v1`), with visit-only fallback and warning when storage is unavailable. It is not a backend or synchronized customer account. Personal backups are JSON and can be restored with validation and confirmation. No health data, accounts, payments, analytics or emails are collected by application code. Google Fonts and Unsplash are external requests. Video file previews use browser blob URLs and release those URLs when closed.

## Media
Six original schematic SVG illustrations have play/pause/replay, sixty-second cue sequences, scrubbing and written alternatives. They are not filmed videos and not an exact form reference or professional review. A local MP4 or WebM can be opened with optional WebVTT captions to test native playback; this does not publish or verify it. Replace footage only with original or commercially licensed demonstrations, presenter releases, accurate captions/transcripts and professional approval. Five Facebook research-only files were not supplied and are not used.

## Commercial release gates
Obtain documented qualified review of the exact movement selection, durations, rest, sequence, modifications and safety wording. Nutrition requires appropriate review. Supply real support contacts, seller details, reviewed privacy/licence/refund terms, real Selar checkout and delivery verification. Test A4 and Letter PDFs, all media, mobile/accessibility, and the buyer journey. No active checkout is exposed until these requirements are resolved.

## Separate backend milestones
The original master specification's private CMS and passcode-only admin are NOT implemented by this customer-experience milestone. No client-side passcode comparison or fake protection is present. Implement durable versioned records, server-side passcode verification, authorization, rate limits, media storage and approved-only production export as a separate OnSpace Cloud milestone. Do not deploy a static mock admin as secure.

## Maintenance
Update canonical records and regenerate both paper sizes after every content change. Preserve old distributed PDFs outside the public preview. Export source via the platform before changes. Export customer progress separately when needed. No environment secrets or credentials are required by this preview. See docs/SOURCE_AUDIT.md, docs/REQUIREMENTS.md and docs/QA.md for truthful status.
