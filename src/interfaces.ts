import type { ElementType } from 'react';

export interface MasonryGridProps {
  /** set of React.FC */
  items?: ElementType[];
  /** grid gap */
  gap?: number;
  /** grid element's min-width, affects rerenders on container resize */
  elementMinWidth?: number;
  /** rerender delay on container resize */
  rerenderSpeed?: number;
}
