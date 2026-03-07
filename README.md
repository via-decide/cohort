# Alchemist Series — Remotion Pipeline

## Quick Start

```bash
tar -xzf alchemist-remotion.tar.gz
cd alchemist-remotion
npm install

# Open Remotion Studio (preview all 10 episodes)
npm run start

# Render a single episode
ts-node --esm render.ts V01

# Render specific episodes
ts-node --esm render.ts V01 V03 V08

# Render all 10 episodes
ts-node --esm render.ts --all

# List available IDs
ts-node --esm render.ts --list
```

## Project Structure

```
alchemist-remotion/
├── production.json          ← Source of truth (branching map, scripts, overlays)
├── render.ts                ← CLI renderer (bundle once, render N videos)
├── src/
│   ├── index.ts             ← registerRoot entry point
│   ├── Root.tsx             ← One Composition per video (V01–V10)
│   ├── VideoFromJson.tsx    ← Scene dispatcher — reads production.json
│   ├── types.ts             ← Full TypeScript interface matching JSON schema
│   ├── theme.ts             ← Brand palette, style map, position map
│   ├── components/
│   │   ├── Background.tsx   ← Dark gradient base + grain overlay
│   │   ├── OptionCard.tsx   ← Spring-animated decision card (A/B/C/D)
│   │   └── Wordmark.tsx     ← Series wordmark + repo tag
│   ├── scenes/
│   │   ├── IntroScene.tsx   ← Card flip entrance animation
│   │   ├── TalkingHeadScene.tsx  ← Founder camera placeholder + overlays
│   │   ├── StoryScene.tsx   ← Mixed narration / b-roll / three-beat text
│   │   ├── RepoScene.tsx    ← Animated highlight boxes over code block
│   │   ├── DiagramScene.tsx ← SVG path-draw architecture diagram
│   │   ├── DecisionScene.tsx ← The branching decision UI (hero scene)
│   │   └── OutroScene.tsx   ← Branch previews + subscribe CTA
│   └── utils/
│       ├── overlay.tsx      ← Resolves text_overlays from JSON → positioned elements
│       └── springs.ts       ← useSpring / useFadeIn helpers
└── renders/                 ← Output directory (created on first render)
```

## How the JSON drives the video

Every scene in `production.json` has:
- `type` → mapped to a scene component in `VideoFromJson.tsx`
- `start_frame` → Sequence `from` prop (absolute frame offset)
- `duration_frames` → Sequence `durationInFrames`
- `text_overlays[]` → Each has `{text, style, position, appear_frame}`
  - `style` is looked up in `theme.ts → STYLES`
  - `position` is looked up in `theme.ts → POSITIONS`
  - `appear_frame` is the absolute video frame when it fades in

## Adding real footage

Replace the talking-head placeholder in `TalkingHeadScene.tsx`:

```tsx
// Replace the placeholder div with:
import { Video } from "remotion";
<Video src={staticFile(`footage/${video.id}_hook.mp4`)} />
```

Drop your OBS recordings in `public/footage/` named `V01_hook.mp4` etc.

## Branching map (routing table for web player)

```js
const ROUTES = production.branching_map.edges;
// On option select:
const nextId = ROUTES[currentVideoId][selectedOption]; // "V01" + "A" → "V02"
```

## Frame math (verified)
- 30 fps × 240 seconds = **7200 frames** per video
- Scene budget: INTRO(90) + HOOK(600) + STORY(1800) + REPO(1500) + DIAGRAM(1200) + DECISION(1200) + OUTRO(810) = 7200 ✓
