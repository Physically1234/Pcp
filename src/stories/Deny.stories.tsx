import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Deny from '../components/Deny';

const meta: Meta<typeof Deny> = {
  title: 'examples/Deny',
  component: Deny,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Deny>;

//exporting primary varient of button
export const deny: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Deny ",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}