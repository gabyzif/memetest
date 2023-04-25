import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    onClose: () => {},
    score: 0
  }
};
