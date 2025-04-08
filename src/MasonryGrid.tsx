import type { FC } from 'react';
import { uniqueId } from 'lodash';
import cn from 'classnames';

import { useMasonrizeItems } from './hooks/useMasonrizeItems';

import { CELL_KEY_PREFIX, COL_KEY_PREFIX } from './constants';
import type { MasonryGridProps } from './interfaces';
import styles from './masonry.module.scss';

const MasonryGrid: FC<MasonryGridProps> = (props) => {
  const { masonryRef, cols, masonryItems } = useMasonrizeItems(props);

  return (
    <div
      ref={masonryRef}
      className={cn(styles.masonryGrid, styles[`masonryGrid_${cols}`], {
        [styles.masonryGrid_visible]: !!masonryItems.length,
      })}
    >
      {!!masonryItems.length &&
        masonryItems.map(
          (col) =>
            !!col.length && (
              <div key={uniqueId(COL_KEY_PREFIX)} className={styles.flexCol}>
                {col.map((Item) => (
                  <div key={uniqueId(CELL_KEY_PREFIX)} className={styles.cell}>
                    <Item />
                  </div>
                ))}
              </div>
            ),
        )}
    </div>
  );
};

export { MasonryGrid };
