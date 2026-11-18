# Implementation tracker

Status date: 17 November 2026. Implemented means code exists; it does not mean runtime, device, PDF, clinical or commercial QA was performed.

| Area | Status | Evidence / remaining work |
|---|---|---|
| Template/source audit | Implemented | docs/SOURCE_AUDIT.md; missing PDFs/ZIP/media marked missing |
| Responsive customer website and routing | Implemented | src/components/layout; src/App.tsx; runtime/device checks pending |
| Twelve complete original sessions | Implemented | src/constants/programme.ts; Session/SessionExercises; qualified review required |
| Complete movement library | Implemented | 18 original records, setup, steps, modifications, stop cues |
| Welcome and safety | Implemented | GUIDE records; Guide; session safety acknowledgement |
| Practical general nutrition | Implemented | WELLNESS; requires appropriate professional review |
| Breathing and relaxation | Implemented | quiet-breath; BreathingPause; no forced breathing ratios |
| Optional per-session timer | Implemented | warm-up, work/rest twice, cool-down, pause/skip/reset |
| Attendance/resume | Implemented | validated browser storage; no streak/reset on gaps |
| Report card and completion | Implemented | optional reflection form; private saved answers and PDF |
| Personal progress backup/restore | Implemented | schema validation; confirmations; local-only scope |
| Six original illustrated playable cue guides | Implemented | MovementIllustration/VideoPlayer; not filmed demonstrations |
| Native video playback + captions | Implemented | local MP4/WebM preview and VTT; not uploaded/published |
| Original/licensed filmed video deliverables | Awaiting owner input | six actual files, rights, releases, captions, transcripts and review |
| Full A4/Letter and sample PDF generator | Implemented | jspdf dynamic export from canonical records; real file QA pending |
| PDF visual inspection and accessibility compliance | Not started | no runtime/PDF viewing tools available; no PDF-UA claim |
| Separate secure passcode-only owner CMS | Not started | intentionally no insecure client-side gate; Cloud setup required |
| Durable content/media persistence | Not started | browser progress is not a production content backend |
| Draft/publish/version/rollback/rights server gates | Not started | requires protected canonical backend |
| Stable approved video PDF links | Awaiting owner input | no approved destination supplied; unverified media excluded |
| Contact/seller details | Awaiting owner input | not fabricated |
| Selar checkout and delivery | Awaiting owner input | no active checkout/price or invented verified status |
| Formal legal/refund/privacy review | Awaiting owner input | factual preview notice only |
| Qualified fitness review | Awaiting owner input | exact session/exercise version must be reviewed |
| Commercial release | Blocked | review, footage if promised, legal/support, store delivery and QA |
| Optional future 24-day extension | Not started | not advertised as available |
