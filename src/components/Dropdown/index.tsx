import React, { ReactElement } from 'react';

import { DropdownRoot, DropdownTrigger, DropdownMenuContent, DropdownMenuItem } from './styles';

interface OptionsData {
  label: string;
  handleOnClick: () => void;
};

interface DropdownProps {
  options: OptionsData[];
  icon: ReactElement;
};

export function Dropdown({ options, icon }: DropdownProps) {
  return (
    <DropdownRoot>
      <DropdownTrigger>
        {icon}
      </DropdownTrigger>
      { options.length > 0 && (
        <DropdownMenuContent sideOffset={6} side='left' data-side='top'>
          { options.map(option => (
            <DropdownMenuItem key={option.label + Math.random()} onClick={option.handleOnClick}>
              {option.label}
            </DropdownMenuItem>
          )) }
        </DropdownMenuContent>
      ) }
    </DropdownRoot>
  );
}