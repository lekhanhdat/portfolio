import { useId, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type SchematicVariant = 'dashboard-grid' | 'data-table-workflow' | 'mobile-web-pair';

interface SchematicFigureProps {
  variant: SchematicVariant;
  /** Accessible description, e.g. "Abstract diagram of a monitoring dashboard layout". */
  title: string;
  caption?: string;
  className?: string;
}

/*
 * Abstract blueprint-style diagrams for confidential company projects.
 * They express structure (modules, data flow) without depicting any real interface.
 * Colors come from tokens so both themes work.
 */
const stroke = 'var(--border-strong)';
const fillMuted = 'var(--surface-muted)';
const fillSurface = 'var(--surface)';
const accent = 'var(--accent)';

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

function Bars({ x, y, w }: { x: number; y: number; w: number }) {
  return (
    <g>
      {[0.55, 0.85, 0.4].map((ratio, i) => (
        <rect key={i} x={x} y={y + i * 10} width={w * ratio} height={4} rx={2} fill={stroke} />
      ))}
    </g>
  );
}

function DashboardGrid() {
  return (
    <>
      <Box x={20} y={20} w={80} h={260} fill={fillMuted} />
      {[44, 68, 92, 116].map((y) => (
        <rect key={y} x={32} y={y} width={52} height={6} rx={3} fill={stroke} />
      ))}
      {[120, 240, 360].map((x) => (
        <g key={x}>
          <Box x={x} y={20} w={108} h={60} />
          <rect x={x + 12} y={34} width={36} height={4} rx={2} fill={stroke} />
          <rect x={x + 12} y={50} width={60} height={14} rx={2} fill={accent} opacity={0.35} />
        </g>
      ))}
      <Box x={120} y={96} w={228} h={184} />
      <polyline
        points="136,240 172,210 204,222 240,170 276,186 312,140 332,150"
        fill="none"
        stroke={accent}
        strokeWidth={2}
      />
      <line x1={136} y1={256} x2={332} y2={256} stroke={stroke} />
      <Box x={360} y={96} w={108} h={88} />
      <circle cx={414} cy={140} r={26} fill="none" stroke={stroke} strokeWidth={8} />
      <path d="M414 114 A26 26 0 0 1 438 150" fill="none" stroke={accent} strokeWidth={8} />
      <Box x={360} y={196} w={108} h={84} />
      <Bars x={372} y={212} w={84} />
    </>
  );
}

function DataTableWorkflow({ arrowId }: DiagramProps) {
  return (
    <>
      <Box x={20} y={20} w={300} h={260} />
      <rect x={20} y={20} width={300} height={36} rx={4} fill={fillMuted} stroke={stroke} />
      <rect x={36} y={34} width={120} height={8} rx={4} fill={stroke} />
      <rect x={252} y={30} width={52} height={16} rx={3} fill={accent} opacity={0.35} />
      {[72, 108, 144, 180, 216].map((y, i) => (
        <g key={y}>
          <line x1={20} y1={y + 26} x2={320} y2={y + 26} stroke={stroke} />
          <rect x={36} y={y + 6} width={12} height={12} rx={2} fill="none" stroke={stroke} />
          <rect x={60} y={y + 9} width={90 + (i % 3) * 20} height={6} rx={3} fill={stroke} />
          <rect
            x={232}
            y={y + 7}
            width={56}
            height={10}
            rx={5}
            fill={i === 1 ? accent : fillMuted}
            opacity={i === 1 ? 0.4 : 1}
            stroke={stroke}
          />
        </g>
      ))}
      {[
        { y: 40, active: false },
        { y: 130, active: true },
        { y: 220, active: false },
      ].map(({ y, active }, i) => (
        <g key={y}>
          <Box x={372} y={y} w={96} h={44} dashed={!active} />
          <circle
            cx={392}
            cy={y + 22}
            r={7}
            fill={active ? accent : fillMuted}
            stroke={active ? accent : stroke}
          />
          <rect x={408} y={y + 19} width={44} height={6} rx={3} fill={stroke} />
          {i < 2 && (
            <line x1={420} y1={y + 44} x2={420} y2={y + 90} stroke={stroke} strokeDasharray="3 4" />
          )}
        </g>
      ))}
      <path d="M320 152 H372" stroke={accent} strokeWidth={2} markerEnd={`url(#${arrowId})`} />
    </>
  );
}

function MobileWebPair() {
  return (
    <>
      <Box x={20} y={30} w={300} h={220} />
      <rect x={20} y={30} width={300} height={24} rx={4} fill={fillMuted} stroke={stroke} />
      {[36, 128, 220].map((x) => (
        <g key={x}>
          <Box x={x} y={70} w={84} h={50} fill={fillMuted} />
          <rect x={x + 10} y={82} width={40} height={4} rx={2} fill={stroke} />
          <rect x={x + 10} y={96} width={56} height={12} rx={2} fill={accent} opacity={0.3} />
        </g>
      ))}
      <Box x={36} y={136} w={268} h={98} />
      <polyline
        points="52,214 100,190 148,200 196,160 244,172 288,150"
        fill="none"
        stroke={accent}
        strokeWidth={2}
      />
      <rect x={372} y={20} width={96} height={190} rx={14} fill={fillSurface} stroke={stroke} />
      <rect x={404} y={28} width={32} height={4} rx={2} fill={stroke} />
      {[48, 92, 136].map((y) => (
        <g key={y}>
          <Box x={384} y={y} w={72} h={36} fill={fillMuted} />
          <rect x={392} y={y + 10} width={40} height={4} rx={2} fill={stroke} />
          <rect x={392} y={y + 20} width={28} height={6} rx={2} fill={accent} opacity={0.35} />
        </g>
      ))}
      <path
        d="M320 150 C346 150 346 120 372 120"
        fill="none"
        stroke={stroke}
        strokeDasharray="3 4"
      />
      <Box x={150} y={262} w={200} h={28} dashed />
      <rect x={196} y={273} width={108} height={6} rx={3} fill={stroke} />
      <path
        d="M170 250 V262 M420 210 V276 H350"
        fill="none"
        stroke={stroke}
        strokeDasharray="3 4"
      />
    </>
  );
}

const variants: Record<SchematicVariant, (props: DiagramProps) => ReactNode> = {
  'dashboard-grid': DashboardGrid,
  'data-table-workflow': DataTableWorkflow,
  'mobile-web-pair': MobileWebPair,
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
