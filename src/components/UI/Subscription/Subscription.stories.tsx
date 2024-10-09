import { Large as LargeInput } from "../Input/Input.stories";
import { Meta } from "@storybook/react";
import { PrimaryButton } from "../Button/Button.stories";

export default {
  title: 'form/Subscription'
} satisfies Meta


export const PrimarySubscription = () => (
  <>
    <LargeInput />
    <PrimaryButton/>
  </>
)
