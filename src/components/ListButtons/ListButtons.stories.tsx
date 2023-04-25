import type { Meta, StoryObj } from '@storybook/react';
import ListButtons from './ListButtons';

const meta: Meta<typeof ListButtons> = {
  title: 'molecules/listButtons',
  component: ListButtons,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof ListButtons>;

export const Primary: Story = {
  args: {
    categories: [
      { name: 'test', score: '89' },
      { name: 'test2', score: '89' }
    ]
  }
};

//export const LoggedOut: Story = {};
