import { Stack } from "@mantine/core"
import type { MetaFunction } from "@remix-run/node"
import HeaderHero from "~/layouts/HeaderHero"
import PreviewDashboards from "~/layouts/PreviewDashboards"

export const meta: MetaFunction = () => {
  return [
    { title: "Mantine Boards" },
    {
      name: "Mantine Boards",
      content:
        "A feature-rich dashboard UI built using Mantine and powered by RemixJS.",
    },
  ]
}

export default function Index() {
  return (
    <Stack gap={0}>
      <HeaderHero />
      <PreviewDashboards />
    </Stack>
  )
}
