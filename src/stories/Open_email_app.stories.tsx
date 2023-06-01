import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import OpenEmailApp from '../components/Open_email_app';

const meta: Meta<typeof OpenEmailApp> = {
  title: 'examples/OpenEmailApp',
  component: OpenEmailApp,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof OpenEmailApp>;

//exporting primary varient of button
export const openEmailApp: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Open Email App",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}