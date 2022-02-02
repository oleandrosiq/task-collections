import { useState, forwardRef, useImperativeHandle, useCallback, HTMLAttributes } from 'react';  
import { defaultColors } from '../../styles/Colors';
import { ColorData } from '../../types/collection';

import { Container, ItemColor } from './styles';

export interface PaletteColorsHandles {
  getColorSelect: () => ColorData;
  resetColorSelect: () => string;
};

interface PaletteColorsProps {
  defaultColor?: ColorData;
}

function PaletteColorsBase({ defaultColor = 'purple' }: PaletteColorsProps, ref) {
  const [colorSelect, setColorSelect] = useState<string>(defaultColor);

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