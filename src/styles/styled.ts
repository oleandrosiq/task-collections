import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  utils: {
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    })
  }
});