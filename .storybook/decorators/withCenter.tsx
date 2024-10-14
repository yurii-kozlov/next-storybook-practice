import React from 'react'
import { StoryFn } from "@storybook/react";
import { Center } from "../../src/components/UI/decorators/Center";

export const withCenter = (Story: StoryFn<any>) => <Center><Story/></Center>