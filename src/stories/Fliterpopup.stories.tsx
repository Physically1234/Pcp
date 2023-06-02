import type { Meta, StoryObj } from '@storybook/react';
import Fliterpopup from '../components/Fliterpopup';

const meta: Meta<typeof Fliterpopup> = {
  title: 'examples/Fliterpopup',
  component: Fliterpopup,
};

export default meta;

type Story = StoryObj<typeof Fliterpopup>;

export const Primary: Story = {}