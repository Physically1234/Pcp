import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Sendinstructions from '../components/Send_instructions';

const meta: Meta<typeof Sendinstructions> = {
  title: 'examples/Sendinstructions',
  component: Sendinstructions,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Sendinstructions>;

//exporting primary varient of button
export const Send_instructions: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Send Instructions",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}