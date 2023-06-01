import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Contact from '../components/Contact';

const meta: Meta<typeof Contact> = {
  title: 'examples/Contact',
  component: Contact,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Contact>;

//exporting primary varient of button
export const contact: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Contact",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}