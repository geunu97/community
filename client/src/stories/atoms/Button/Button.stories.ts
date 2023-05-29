import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
};

export default meta;
export type Story = StoryObj<typeof Button>;

/* Color */
export const PrimaryColor: Story = {
  name: 'Color: Primary',
  args: {
    color: 'primary',
    label: 'Button',
  },
};
export const SecondaryColor: Story = {
  name: 'Color: Secondary',
  args: {
    color: 'secondary',
    label: 'Button',
  },
};
export const BlackColor: Story = {
  name: 'Color: Black',
  args: {
    color: 'black',
    label: 'Button',
  },
};
export const SuccessColor: Story = {
  name: 'Color: Success',
  args: {
    color: 'success',
    label: 'Button',
  },
};
export const WarningColor: Story = {
  name: 'Color: Warning',
  args: {
    color: 'warning',
    label: 'Button',
  },
};
export const DangerColor: Story = {
  name: 'Color: Danger',
  args: {
    color: 'danger',
    label: 'Button',
  },
};

/* Style */
export const OutlinedStyle: Story = {
  name: 'Style: Outlined',
  args: {
    style: 'outlined',
    label: 'Button',
  },
};
export const InlineStyle: Story = {
  name: 'Style: Inline',
  args: {
    style: 'inline',
    label: 'Button',
  },
};
export const GhostStyle: Story = {
  name: 'Style: Ghost',
  args: {
    style: 'ghost',
    label: 'Button',
  },
};

/* Size */
export const SmallSize: Story = {
  name: 'Size: Small',
  args: {
    size: 'small',
    label: 'Button',
  },
};
export const MediumSize: Story = {
  name: 'Size: Medium',
  args: {
    size: 'medium',
    label: 'Button',
  },
};
export const LargeSize: Story = {
  name: 'Size: Large',
  args: {
    size: 'large',
    label: 'Button',
  },
};

/* Shape */
export const SqureShape: Story = {
  name: 'Shape: Squre',
  args: {
    shape: 'squre',
    label: 'Button',
  },
};
export const CircleShape: Story = {
  name: 'Shape: Circle',
  args: {
    shape: 'circle',
    label: 'Button',
  },
};

/* Disabled */
export const Disabled: Story = {
  name: 'Disabled: True',
  args: {
    disabled: true,
    label: 'Button',
  },
};
