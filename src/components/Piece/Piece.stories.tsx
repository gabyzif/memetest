import type { Meta, StoryObj } from '@storybook/react';
import Piece from './Piece';

const meta: Meta<typeof Piece> = {
  title: 'atoms/Piece',
  component: Piece,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Piece>;

export const Primary: Story = {
  args: {
    src: 'https://picsum.photos/200/300',
    alt: 'random image',
    number: '1'
  }
};

export const Guessed: Story = {
  args: {
    src: 'https://picsum.photos/200/300',
    alt: 'random image',
    guess: true
  }
};
