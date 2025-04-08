# Masonry Grid (React)

## Install

```bash
  npm i responsive-masonry-grid
```

or

```bash
yarn add responsive-masonry-grid
```

## Setup

- pakage uses css-modules, so it must be configured in your project

## Usage

- items should be an array of propless components

```tsx
  import { MasonryGrid } from 'responsive-masonry-grid';

  <MasonryGrid items={[React.FC, React.FC, ..., React.FC]} gap={24} />
```

## Example screenshot

<div align="center">
  <img src="/screens/image1.jpg">
</div>
