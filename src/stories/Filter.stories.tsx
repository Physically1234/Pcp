import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Filter from "../components/Filter"; 

const meta: Meta<typeof Filter> = {
  title: 'examples/Filter',
  component: Filter,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Filter>;

//exporting primary varient of button
export const filter: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Filter",
    childrens: "ABCD"
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}