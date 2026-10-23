import { useId, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type SchematicVariant =
  'records-governance' | 'production-monitoring' | 'digital-factory' | 'energy-mobile';

interface SchematicFigureProps {
  variant: SchematicVariant;
  /** Accessible description, e.g. "Abstract diagram of a monitoring dashboard layout". */
  title: string;
  caption?: string;
  className?: string;
}

/*
 * Abstract blueprint-style diagrams for confidential company projects, one per project.
 * They name the modules each product has (from its brief) without depicting any real
 * interface or data: rings, bars and timelines are illustrative, never values.
 * Colors come from tokens so both themes work.
 */
const stroke = 'var(--border-strong)';
const fillMuted = 'var(--surface-muted)';
const fillSurface = 'var(--surface)';
const accent = 'var(--accent)';
const accentSubtle = 'var(--accent-subtle)';
const muted = 'var(--text-muted)';

interface DiagramProps {
  arrowId: string;
}

function Box({
  x,
  y,
  w,
  h,
  fill = fillSurface,
  dashed = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  fill?: string;
  dashed?: boolean;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={4}
      fill={fill}
      stroke={stroke}
      strokeDasharray={dashed ? '4 4' : undefined}
    />
  );
}

/** Placeholder text line. */
function Line({ x, y, w, fill = stroke }: { x: number; y: number; w: number; fill?: string }) {
  return <rect x={x} y={y} width={w} height={6} rx={3} fill={fill} />;
}

/** Tiny mono caption that names a module; never shows data. */
function Label({
  x,
  y,
  children,
  anchor = 'start',
  color = muted,
  size = 9,
}: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: 'start' | 'middle' | 'end';
  color?: string;
  size?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={color}
      fontSize={size}
      letterSpacing="0.08em"
      style={{ fontFamily: 'var(--font-mono)' }}
    >
      {children}
    </text>
  );
}

/** Progress ring; `fraction` only sets the shape, it is not a reported value. */
function Ring({
  cx,
  cy,
  r,
  width,
  fraction,
}: {
  cx: number;
  cy: number;
  r: number;
  width: number;
  fraction: number;
}) {
  const circumference = 2 * Math.PI * r;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={fillMuted} strokeWidth={width} />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={accent}
        strokeWidth={width}
        strokeLinecap="round"
        strokeDasharray={`${circumference * fraction} ${circumference}`}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
    </g>
  );
}

/* C1 — data lifecycle: lifecycle stages, classified records with permissions, approval
   workflow and job status. */
function RecordsGovernance({ arrowId }: DiagramProps) {
  const stages = ['CREATE', 'CLASSIFY', 'RETAIN', 'DISPOSE'];
  const tags = ['PII', 'FINANCE', 'HR', 'LEGAL', 'PII'];
  return (
    <>
      {stages.map((stage, i) => {
        const x = 20 + i * 117;
        const active = i === 1;
        return (
          <g key={stage}>
            <rect
              x={x}
              y={20}
              width={96}
              height={30}
              rx={15}
              fill={active ? accentSubtle : fillSurface}
              stroke={active ? accent : stroke}
            />
            <Label x={x + 48} y={38.5} anchor="middle" color={active ? accent : muted}>
              {stage}
            </Label>
            {i < stages.length - 1 && (
              <path
                d={`M${x + 99} 35 H${x + 112}`}
                stroke={accent}
                strokeWidth={1.5}
                markerEnd={`url(#${arrowId})`}
              />
            )}
          </g>
        );
      })}

      <Box x={20} y={66} w={288} h={214} />
      <rect x={20} y={66} width={288} height={30} rx={4} fill={fillMuted} stroke={stroke} />
      <Label x={32} y={85}>
        RECORDS
      </Label>
      <rect x={150} y={74} width={92} height={14} rx={7} fill={fillSurface} stroke={stroke} />
      <circle cx={160} cy={81} r={3} fill="none" stroke={stroke} />
      <rect x={250} y={74} width={46} height={14} rx={3} fill={accent} opacity={0.3} />
      {tags.map((tag, i) => {
        const y = 96 + i * 36.8;
        const highlighted = i === 1;
        return (
          <g key={i}>
            {i > 0 && <line x1={20} y1={y} x2={308} y2={y} stroke={stroke} opacity={0.6} />}
            <rect x={32} y={y + 13} width={10} height={10} rx={2} fill="none" stroke={stroke} />
            <Line x={52} y={y + 15} w={70 + (i % 3) * 18} />
            <rect
              x={184}
              y={y + 11}
              width={62}
              height={15}
              rx={7.5}
              fill={highlighted ? accentSubtle : fillMuted}
              stroke={highlighted ? accent : stroke}
            />
            <Label
              x={215}
              y={y + 21.5}
              anchor="middle"
              size={7.5}
              color={highlighted ? accent : muted}
            >
              {tag}
            </Label>
            {/* Permission lock */}
            <rect
              x={270}
              y={y + 17}
              width={12}
              height={9}
              rx={1.5}
              fill={fillMuted}
              stroke={stroke}
            />
            <path
              d={`M273 ${y + 17} v-3 a3 3 0 0 1 6 0 v3`}
              fill="none"
              stroke={highlighted ? accent : stroke}
            />
          </g>
        );
      })}

      <Box x={322} y={66} w={146} h={134} />
      <Label x={334} y={85}>
        APPROVAL
      </Label>
      <line x1={342} y1={110} x2={342} y2={178} stroke={stroke} />
      {[
        { y: 110, state: 'done', w: 74 },
        { y: 144, state: 'active', w: 92 },
        { y: 178, state: 'next', w: 60 },
      ].map(({ y, state, w }) => (
        <g key={y}>
          <circle
            cx={342}
            cy={y}
            r={8}
            fill={state === 'active' ? accentSubtle : fillSurface}
            stroke={state === 'active' ? accent : stroke}
            strokeWidth={state === 'active' ? 2 : 1}
            strokeDasharray={state === 'next' ? '3 3' : undefined}
          />
          {state === 'done' && (
            <path d={`M338 ${y} l3 3 l5 -6`} fill="none" stroke={muted} strokeWidth={1.5} />
          )}
          <Line x={358} y={y - 3} w={w} fill={state === 'active' ? accent : stroke} />
        </g>
      ))}

      <Box x={322} y={212} w={146} h={68} />
      <Label x={334} y={231}>
        JOB STATUS
      </Label>
      <rect x={334} y={242} width={122} height={8} rx={4} fill={fillMuted} stroke={stroke} />
      <rect x={334} y={242} width={78} height={8} rx={4} fill={accent} />
      <Line x={334} y={260} w={56} />
    </>
  );
}

type MachineState = 'run' | 'idle' | 'stop';

const machineTimeline: readonly (readonly [number, MachineState])[][] = [
  [
    [0.45, 'run'],
    [0.12, 'idle'],
    [0.43, 'run'],
  ],
  [
    [0.2, 'run'],
    [0.18, 'stop'],
    [0.32, 'run'],
    [0.3, 'idle'],
  ],
  [
    [0.62, 'run'],
    [0.1, 'idle'],
    [0.28, 'run'],
  ],
];

/* C2 — factory monitoring: OEE, camera live and playback, equipment alarms, machine states. */
function ProductionMonitoring() {
  const stateFill: Record<MachineState, string> = { run: accent, idle: fillMuted, stop: stroke };
  return (
    <>
      <Box x={20} y={20} w={140} h={132} />
      <Ring cx={90} cy={86} r={40} width={10} fraction={0.72} />
      <Label x={90} y={90} anchor="middle" color="var(--text)" size={12}>
        OEE
      </Label>

      <Box x={172} y={20} w={296} h={168} />
      {[
        [182, 30],
        [324, 30],
        [182, 96],
        [324, 96],
      ].map(([x = 0, y = 0], i) => (
        <g key={i}>
          <rect x={x} y={y} width={134} height={58} rx={3} fill={fillMuted} stroke={stroke} />
          <path d={`M${x + 61} ${y + 20} v18 l15 -9 z`} fill={i === 0 ? accent : stroke} />
          {i === 0 && (
            <>
              <circle cx={x + 12} cy={y + 12} r={3} fill={accent} />
              <Label x={x + 20} y={y + 15} color={accent} size={8}>
                LIVE
              </Label>
            </>
          )}
        </g>
      ))}
      <line x1={182} y1={172} x2={458} y2={172} stroke={stroke} strokeWidth={2} />
      {[
        [182, 70],
        [270, 110],
        [400, 40],
      ].map(([x = 0, w = 0]) => (
        <rect key={x} x={x} y={169} width={w} height={6} rx={2} fill={accent} opacity={0.35} />
      ))}
      <circle cx={332} cy={172} r={6} fill={fillSurface} stroke={accent} strokeWidth={2} />

      <Box x={20} y={164} w={140} h={116} />
      <Label x={32} y={183}>
        ALARMS
      </Label>
      {[accent, stroke, fillMuted].map((fill, i) => {
        const y = 200 + i * 26;
        return (
          <g key={y}>
            <circle cx={38} cy={y + 3} r={5} fill={fill} stroke={stroke} />
            <Line x={50} y={y} w={84 - i * 14} />
          </g>
        );
      })}

      <Box x={172} y={200} w={296} h={80} />
      <Label x={184} y={218}>
        MACHINE STATE
      </Label>
      {machineTimeline.map((segments, row) => {
        const y = 228 + row * 16;
        let x = 214;
        return (
          <g key={row}>
            <Label x={184} y={y + 8} size={8}>
              {`M${row + 1}`}
            </Label>
            {segments.map(([fraction, state], i) => {
              const width = 242 * fraction;
              const segment = (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={width - 2}
                  height={10}
                  rx={2}
                  fill={stateFill[state]}
                  stroke={state === 'idle' ? stroke : undefined}
                  opacity={state === 'run' ? 0.6 : 1}
                />
              );
              x += width;
              return segment;
            })}
          </g>
        );
      })}
    </>
  );
}

/** Isometric block standing on ground point (x, y): footprint half-width s, height h. */
function IsoBlock({
  x,
  y,
  s,
  h,
  selected = false,
}: {
  x: number;
  y: number;
  s: number;
  h: number;
  selected?: boolean;
}) {
  const top = `${x},${y - h - s / 2} ${x + s},${y - h} ${x},${y - h + s / 2} ${x - s},${y - h}`;
  const left = `${x - s},${y - h} ${x},${y - h + s / 2} ${x},${y + s / 2} ${x - s},${y}`;
  const right = `${x},${y - h + s / 2} ${x + s},${y - h} ${x + s},${y} ${x},${y + s / 2}`;
  const edge = selected ? accent : stroke;
  return (
    <g strokeLinejoin="round">
      <polygon points={left} fill={fillMuted} stroke={edge} />
      <polygon points={right} fill={selected ? accentSubtle : fillSurface} stroke={edge} />
      <polygon points={top} fill={selected ? accentSubtle : fillSurface} stroke={edge} />
    </g>
  );
}

/* C3 — paper mill: 3D / 360° digital factory, OEE (availability, performance, quality),
   shared time range and statistics. */
function DigitalFactory({ arrowId }: DiagramProps) {
  const oee: readonly (readonly [string, number])[] = [
    ['A', 0.82],
    ['P', 0.68],
    ['Q', 0.9],
  ];
  return (
    <>
      <Box x={20} y={20} w={300} h={260} />
      <Label x={32} y={39}>
        DIGITAL FACTORY · 3D / 360°
      </Label>
      <polygon
        points="50,190 170,130 290,190 170,250"
        fill={fillMuted}
        stroke={stroke}
        strokeLinejoin="round"
      />
      {[0.25, 0.5, 0.75].map((t) => (
        <g key={t} stroke={stroke} opacity={0.5}>
          <line x1={50 + 120 * t} y1={190 - 60 * t} x2={170 + 120 * t} y2={250 - 60 * t} />
          <line x1={50 + 120 * t} y1={190 + 60 * t} x2={170 + 120 * t} y2={130 + 60 * t} />
        </g>
      ))}
      <IsoBlock x={118} y={190} s={26} h={34} />
      <IsoBlock x={182} y={162} s={22} h={52} selected />
      <IsoBlock x={236} y={198} s={24} h={26} />
      {/* Paper rolls leaving the line */}
      {[150, 176].map((x) => (
        <g key={x}>
          <circle cx={x} cy={226} r={10} fill={fillSurface} stroke={stroke} />
          <circle cx={x} cy={226} r={3.5} fill={fillMuted} stroke={stroke} />
        </g>
      ))}
      {/* Selection pin over the highlighted machine */}
      <path
        d="M182 74 a9 9 0 0 1 9 9 c0 7 -9 15 -9 15 s-9 -8 -9 -15 a9 9 0 0 1 9 -9 z"
        fill={accent}
      />
      <circle cx={182} cy={83} r={3} fill={fillSurface} />
      {/* 360° orbit */}
      <path
        d="M58 120 C100 66 254 64 296 112"
        fill="none"
        stroke={accent}
        strokeWidth={1.5}
        strokeDasharray="4 4"
        markerEnd={`url(#${arrowId})`}
      />

      <Box x={336} y={20} w={132} h={30} />
      {['D', 'W', 'M'].map((range, i) => (
        <g key={range}>
          {i === 1 && (
            <rect x={381} y={24} width={42} height={22} rx={3} fill={accent} opacity={0.3} />
          )}
          <Label x={358 + i * 44} y={39} anchor="middle" color={i === 1 ? accent : muted}>
            {range}
          </Label>
        </g>
      ))}

      <Box x={336} y={62} w={132} h={108} />
      <Label x={348} y={80}>
        OEE
      </Label>
      {oee.map(([letter, fraction], i) => (
        <g key={letter}>
          <Ring cx={362 + i * 40} cy={116} r={14} width={5} fraction={fraction} />
          <Label x={362 + i * 40} y={152} anchor="middle">
            {letter}
          </Label>
        </g>
      ))}

      <Box x={336} y={182} w={132} h={98} />
      <Label x={348} y={200}>
        STATISTICS
      </Label>
      <line x1={348} y1={266} x2={456} y2={266} stroke={stroke} />
      {[28, 40, 22, 48, 34, 44, 52].map((h, i) => (
        <rect
          key={i}
          x={350 + i * 15}
          y={266 - h}
          width={9}
          height={h}
          rx={1.5}
          fill={i === 6 ? accent : fillMuted}
          stroke={i === 6 ? accent : stroke}
        />
      ))}
    </>
  );
}

/* C4 — energy management: the mobile app (my part) in front of the web app, both on one
   backend; consumption and cost chart, assets and alarms. */
function EnergyMobile() {
  return (
    <>
      <Box x={20} y={34} w={240} h={186} />
      <rect x={20} y={34} width={240} height={22} rx={4} fill={fillMuted} stroke={stroke} />
      <Label x={32} y={49}>
        WEB
      </Label>
      {[32, 108, 184].map((x) => (
        <g key={x}>
          <Box x={x} y={66} w={64} h={36} fill={fillMuted} />
          <Line x={x + 8} y={76} w={30} />
          <rect x={x + 8} y={88} width={40} height={6} rx={2} fill={accent} opacity={0.3} />
        </g>
      ))}
      <Box x={32} y={112} w={216} h={96} />
      <polyline
        points="44,190 80,170 116,178 152,146 188,156 236,128"
        fill="none"
        stroke={stroke}
        strokeWidth={2}
      />

      {/* Shared backend */}
      <path d="M164 220 V246" stroke={stroke} strokeDasharray="3 4" />
      <path d="M292 264 H214" stroke={stroke} strokeDasharray="3 4" />
      <path d="M114 252 V274 A50 6 0 0 0 214 274 V252" fill={fillSurface} stroke={stroke} />
      <ellipse cx={164} cy={252} rx={50} ry={6} fill={fillSurface} stroke={stroke} />
      <Label x={164} y={272} anchor="middle" size={8}>
        ONE BACKEND
      </Label>

      <rect
        x={292}
        y={14}
        width={126}
        height={272}
        rx={16}
        fill={fillSurface}
        stroke={accent}
        strokeWidth={1.5}
      />
      <rect x={339} y={22} width={32} height={4} rx={2} fill={stroke} />
      <Label x={306} y={48} color="var(--text)">
        ENERGY
      </Label>
      <path d="M402 34 l-8 12 h6 l-3 10 l9 -13 h-6 z" fill={accent} />
      <Box x={304} y={58} w={102} h={98} fill={fillMuted} />
      <Label x={312} y={74} size={7.5}>
        kWh · COST
      </Label>
      {[22, 34, 18, 40, 28, 46, 36].map((h, i) => (
        <rect
          key={i}
          x={312 + i * 13}
          y={146 - h}
          width={8}
          height={h}
          rx={1.5}
          fill={accent}
          opacity={i === 5 ? 0.9 : 0.35}
        />
      ))}
      <polyline
        points="316,112 329,104 342,116 355,96 368,106 381,90 394,98"
        fill="none"
        stroke={muted}
        strokeWidth={1.25}
        strokeDasharray="3 2"
      />
      {['ASSET', 'ASSET', 'ALARM'].map((kind, i) => {
        const y = 166 + i * 30;
        return (
          <g key={y}>
            <Box x={304} y={y} w={102} h={24} />
            <circle
              cx={316}
              cy={y + 12}
              r={4}
              fill={i === 2 ? accent : fillMuted}
              stroke={stroke}
            />
            <Label x={326} y={y + 15.5} size={7.5} color={i === 2 ? accent : muted}>
              {kind}
            </Label>
            <Line x={366} y={y + 9} w={30} />
          </g>
        );
      })}
      <line x1={292} y1={260} x2={418} y2={260} stroke={stroke} />
      {[318, 344, 370, 396].map((x, i) => (
        <circle key={x} cx={x} cy={273} r={3.5} fill={i === 0 ? accent : stroke} />
      ))}
    </>
  );
}

const variants: Record<SchematicVariant, (props: DiagramProps) => ReactNode> = {
  'records-governance': RecordsGovernance,
  'production-monitoring': ProductionMonitoring,
  'digital-factory': DigitalFactory,
  'energy-mobile': EnergyMobile,
};

export function SchematicFigure({ variant, title, caption, className }: SchematicFigureProps) {
  const Diagram = variants[variant];
  const uid = useId().replace(/[^\w-]/g, '');
  const gridId = `schematic-grid-${uid}`;
  const arrowId = `schematic-arrow-${uid}`;
  return (
    <figure className={cn('overflow-hidden rounded-md border border-border bg-bg', className)}>
      <svg viewBox="0 0 488 300" role="img" aria-label={title} className="block h-auto w-full">
        <defs>
          <pattern id={gridId} width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M16 0H0V16" fill="none" stroke="var(--border)" strokeWidth={0.5} />
          </pattern>
          <marker
            id={arrowId}
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M0 0L8 4L0 8Z" fill={accent} />
          </marker>
        </defs>
        <rect width="488" height="300" fill={`url(#${gridId})`} />
        <Diagram arrowId={arrowId} />
      </svg>
      {caption && (
        <figcaption className="label-mono border-t border-border px-4 py-2.5 text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
