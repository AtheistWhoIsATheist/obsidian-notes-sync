---
title: Zo_314dataset
created: 2025-12-26
updated:
tags:
  - 314dataset
  - zo
backlink: "[["
description:
---

[Run command]
{
  "stdout": "PROCESS.md\nREADME.md\ndata.duckdb\ndatapackage.json\ngenerate_schema.py\ningest/\nschema.yaml\nsource/\n",
  "stderr": "",
  "returncode": 0
}

[Create site]
{
  "local_port": 58285,
  "path": "/home/workspace/Sites/journal314-dataset-viz",
  "name": "journal314-dataset-viz",
  "entrypoint_output": "VITE_ZO_SITE_DEMO_VARIANT=data bun run dev\nService started, logging to /dev/shm/zosite-58285.log\n\nexit code: 0"
}

[Run command]
{
  "stdout": "/home/workspace/Sites/journal314-dataset-viz/docs/shadcncharts.md\n",
  "stderr": "",
  "returncode": 0
}

[Read file]
(opened Sites/journal314-dataset-viz/docs/shadcncharts.md)
# ShadCN/UI Charts Guide

A comprehensive guide to using charts in ShadCN/UI, built on top of [Recharts](https://recharts.org/).

## Table of Contents

- [Core Concepts](#core-concepts)
- [Chart Types](#chart-types)
  - [Area Charts](#area-charts)
  - [Bar Charts](#bar-charts)
  - [Line Charts](#line-charts)
  - [Pie Charts](#pie-charts)
  - [Radar Charts](#radar-charts)
  - [Radial Charts](#radial-charts)
- [Common Features](#common-features)
  - [Tooltips](#tooltips)
  - [Legends](#legends)
  - [Grids & Axes](#grids--axes)
- [Theming](#theming)
- [Accessibility](#accessibility)

---

## Core Concepts

### The ChartConfig

Every chart requires a `chartConfig` object that defines labels, colors, and optional icons for each data series:

```tsx
import { type ChartConfig } from "@/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig
```

**Important:** The chart color CSS variables (`--chart-1` through `--chart-5`) are already defined in oklch format in your theme's CSS. Use them directly with `var(--chart-N)` — do NOT wrap them in `hsl()`.

You can also define theme-aware colors:

```tsx
const chartConfig = {
  desktop: {
    label: "Desktop",
    icon: Monitor, // Optional lucide icon
    theme: {
      light: "#2563eb",
      dark: "#dc2626",
    },
  },
} satisfies ChartConfig
```

### Using Default Chart Colors

Your theme defines chart color variables (`--chart-1` through `--chart-5`) in CSS. To use these with `ChartConfig`:

1. **In the config**: Reference colors as `var(--chart-N)`
2. **In components**: Reference colors as `var(--color-dataKey)`

The `ChartContainer` automatically maps your config's color values to `--color-<dataKey>` CSS variables.

```tsx
// Define config with default chart colors
const chartConfig = {
  participants: {
    label: "Participants (M)",
    color: "var(--chart-1)",  // Uses your theme's first chart color
  },
} satisfies ChartConfig;

const costConfig = {
  snapCost: {
    label: "SNAP ($B)",
    color: "var(--chart-1)",  // First color
  },
  wicCost: {
    label: "WIC ($B)", 
    color: "var(--chart-2)",  // Second color
  },
} satisfies ChartConfig;

// In your chart, reference via var(--color-<dataKey>)
<ChartContainer config={chartConfig}>
  <AreaChart data={data}>
    <defs>
      <linearGradient id="fillParticipants" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="var(--color-participants)" stopOpacity={0.8} />
        <stop offset="95%" stopColor="var(--color-participants)" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <Area
      dataKey="participants"
      fill="url(#fillParticipants)"
      stroke="var(--color-participants)"
    />
  </AreaChart>
</ChartContainer>
```

For pie/donut charts where each slice needs a different color, define colors in both the config AND the data:

```tsx
const chartConfig = {
  value: { label: "Percent" },
  // Define each category's color
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
} satisfies ChartConfig;

// Data must include `fill` property for each slice
const data = [
  { name: "Chrome", value: 50, fill: "var(--color-chrome)" },
  { name: "Safari", value: 30, fill: "var(--color-safari)" },
  { name: "Firefox", value: 20, fill: "var(--color-firefox)" },
];
```

**Available default colors**: `--chart-1` through `--chart-5` are defined in your theme's CSS. Add more if needed:

```css
:root {
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
}
```

### The ChartContainer

All charts must be wrapped in `ChartContainer` with a minimum height:

```tsx
import { ChartContainer } from "@/components/ui/chart"

<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
  {/* Recharts components go here */}
</ChartContainer>
```

### Using Colors

Reference colors using CSS variables with the format `var(--color-KEY)`:

```tsx
// In components
<Bar dataKey="desktop" fill="var(--color-desktop)" />

// In data objects
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
]

// In Tailwind classes
<LabelList className="fill-[--color-desktop]" />
```

---

## Chart Types

### Area Charts

Basic area chart with single series:

```tsx
"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function AreaChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <AreaChart data={chartData} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="desktop"
          type="natural"
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
        />
      </AreaChart>
    </ChartContainer>
  )
}
```

#### Area Chart Variations

**Stacked Area Chart** - Multiple series stacked on top of each other:

```tsx
<Area dataKey="desktop" type="natural" stackId="a" fill="var(--color-desktop)" stroke="var(--color-desktop)" />
<Area dataKey="mobile" type="natural" stackId="a" fill="var(--color-mobile)" stroke="var(--color-mobile)" />
```

**Gradient Fill** - Using SVG gradients for a polished look:

```tsx
<AreaChart data={chartData}>
  <defs>
    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
      <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
    </linearGradient>
  </defs>
  <Area
    dataKey="desktop"
    fill="url(#fillDesktop)"
    stroke="var(--color-desktop)"
  />
</AreaChart>
```

**Curve Types** - Control the line interpolation:
- `type="natural"` - Smooth natural curve (default)
- `type="linear"` - Straight lines between points
- `type="step"` - Step function appearance

---

### Bar Charts

Basic vertical bar chart:

```tsx
"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function BarChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart data={chartData} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

#### Bar Chart Variations

**Horizontal Bar Chart** - Use `layout="vertical"` with YAxis:

```tsx
<BarChart data={chartData} layout="vertical">
  <XAxis type="number" hide />
  <YAxis
    dataKey="month"
    type="category"
    tickLine={false}
    axisLine={false}
    tickFormatter={(value) => value.slice(0, 3)}
  />
  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
</BarChart>
```

**Multiple Bar Series** - Side-by-side bars:

```tsx
<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
```

**Stacked Bar Chart** - Use the same `stackId`:

```tsx
<Bar dataKey="desktop" stackId="a" fill="var(--color-desktop)" radius={[0, 0, 4, 4]} />
<Bar dataKey="mobile" stackId="a" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
```

**Bar with Labels** - Add data labels on bars:

```tsx
import { LabelList } from "recharts"

<Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
  <LabelList
    position="top"
    offset={12}
    className="fill-foreground"
    fontSize={12}
  />
</Bar>
```

**Mixed/Negative Values** - Handle negative values with appropriate radius:

```tsx
<Bar dataKey="visitors" fill="var(--color-desktop)">
  {chartData.map((item) => (
    <Cell
      key={item.month}
      fill={item.visitors > 0 ? "var(--color-positive)" : "var(--color-negative)"}
    />
  ))}
</Bar>
```

---

### Line Charts

Basic line chart:

```tsx
"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function LineChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <LineChart data={chartData} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}
```

#### Line Chart Variations

**Line with Dots** - Show data points:

```tsx
<Line
  dataKey="desktop"
  type="natural"
  stroke="var(--color-desktop)"
  strokeWidth={2}
  dot={{ fill: "var(--color-desktop)" }}
  activeDot={{ r: 6 }}
/>
```

**Custom Dots** - Define custom dot styles:

```tsx
<Line
  dataKey="desktop"
  stroke="var(--color-desktop)"
  dot={({ cx, cy, payload }) => (
    <circle cx={cx} cy={cy} r={4} fill={payload.fill} />
  )}
/>
```

**Multiple Lines**:

```tsx
<Line dataKey="desktop" stroke="var(--color-desktop)" />
<Line dataKey="mobile" stroke="var(--color-mobile)" />
```

---

### Pie Charts

Basic pie chart:

```tsx
"use client"

import { Pie, PieChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
  other: { label: "Other", color: "var(--chart-5)" },
} satisfies ChartConfig


[Run command]
{
  "stdout": "{\n  \"name\": \"journal314-nihiltheism-dataset\",\n  \"title\": \"Journal314 Nihiltheism Dataset\",\n  \"resources\": [\n    {\n      \"path\": \"data.duckdb\",\n      \"name\": \"journal314_data\",\n      \"profile\": \"tabular-data-resource\"\n    }\n  ]\n}\n\n",
  "stderr": "",
  "returncode": 0
}

[Edit file fast]
{
  "name": "journal314-nihiltheism-dataset",
  "title": "Journal314 Nihiltheism Dataset",
  "sites": [
    "/home/workspace/Sites/journal314-dataset-viz"
  ],
  "resources": [
    {
      "path": "data.duckdb",
      "name": "journal314_data",
      "profile": "tabular-data-resource"
    }
  ]
}



[Run command]
{
  "stdout": "",
  "stderr": "ls: cannot access '/home/workspace/Sites/journal314-dataset-viz/src/data/': No such file or directory\n",
  "returncode": 2
}

[Run command]
{
  "stdout": "App.tsx\napp/\ncomponents/\nhooks/\nlib/\nmain.tsx\npages/\nstyles.css\n",
  "stderr": "",
  "returncode": 0
}

[Run command]
{
  "stdout": "",
  "stderr": "",
  "returncode": 0
}

[Run command]
{
  "stdout": "",
  "stderr": "",
  "returncode": 0
}

[Run command]
{
  "stdout": "",
  "stderr": "",
  "returncode": 0
}

[Run command]
{
  "stdout": "Dashboard.tsx\nHome.tsx\ndemos/\n",
  "stderr": "",
  "returncode": 0
}

The visualization site `journal314-dataset-viz` has been created and registered in the dataset's `datapackage.json`.

I have performed the following setup:
1.  **Site Creation**: Initialized a new site at `file 'Sites/journal314-dataset-viz'` using the `data` variant.
2.  **Registration**: Updated `file 'Journal314/Journal314 Datasets Training/journal314-dataset/datapackage.json'` to include the site's absolute path.
3.  **Data Export**: Extracted initial datasets for visualization:
    *   Top 10 thinkers by Nihiltheistic alignment (`top-thinkers-alignment.json`).
    *   High-level dataset metrics (`summary-metrics.json`).
4.  **Automation**: Created `file 'Sites/journal314-dataset-viz/scripts/generate-data.sh'` to easily refresh visualization data from the DuckDB source.

The site is currently running and accessible. What specific dimensions of the **Journal314** dataset would you like to explore or visualize? For example, we could:
*   Analyze the distribution of the **Nihiltheistic Quotient** across different philosophical traditions.
*   Map the relationship between **Melancholy Index** and **Hope Warrant Score**.
*   Visualize theme occurrences from the **thinker_theme_heatmap**.