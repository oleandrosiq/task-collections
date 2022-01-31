import { useState, forwardRef, useImperativeHandle, useCallback, HTMLAttributes } from 'react';  
import { defaultColors } from '../../styles/Colors';

import { Container, ItemColor } from './styles';

export interface PaletteColorsHandles {
  getColorSelect: () => string;
  resetColorSelect: () => string;
};

function PaletteColorsBase({ }, ref) {
  const [colorSelect, setColorSelect] = useState<string>('purple');

  const getColorSelect = useCallback(() => {
    return colorSelect;
  }, [colorSelect]);

  const resetColorSelect = useCallback(() => {
    setColorSelect('purple');
  }, []);

  useImperativeHandle(ref, () => {
    return {
      getColorSelect,
      resetColorSelect
    }
  });

  return (
    <Container ref={ref}>
      { defaultColors.map(color => (
        <ItemColor 
          key={color}
          onClick={() => setColorSelect(color)}
          border={color}
          color={colorSelect === color ? color : null}
        />
      )) }
    </Container>
  );
}

export const PaletteColors = forwardRef(PaletteColorsBase);