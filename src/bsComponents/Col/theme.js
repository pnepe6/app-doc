import { assertAscending, assertStartAtZero } from 'bootstrap-styled-mixins/lib/variables';
import { allowFalseValue } from '../theme/utils';
/**
 * BOOTSTRAP THEME COL
 *
 * this file is not meant to be used and must be kept as original
 * @param userTheme
 */
export const makeTheme = (userTheme = {}) => {
  /* eslint dot-notation: 'off', new-cap: 'off' */
  // Variables
  //
  // Copy settings from this file into the provided `_custom.scss` to override
  // the Bootstrap defaults without modifying key, versioned files.
  const v = {};
  const u = userTheme;
  // all var must be grouped in a named theme
  v['_name'] = u['_name'] || 'bootstrap-styled';
  // Options
  //
  // Quickly modify global styling by enabling or disabling optional features.
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);

  // Grid breakpoints
  //
  // Define the minimum dimensions at which your layout will change,
  // adapting to different screen sizes, for use in media queries.

  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  };
  assertAscending(v['$grid-breakpoints'], '$grid-breakpoints');
  assertStartAtZero(v['$grid-breakpoints']);

  // Grid columns
  //
  // Set the number of columns and specify the width of the gutters.

  v['$grid-columns'] = u['$grid-columns'] || '12';
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base'],
  };

  return Object.assign({}, u, v);
};

export default makeTheme();
