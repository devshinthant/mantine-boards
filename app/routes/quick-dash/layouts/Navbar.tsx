import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Image,
  Progress,
  ScrollArea,
  Stack,
  Switch,
  Text,
  TextInput,
  UnstyledButton,
  rem,
} from "@mantine/core"
import { Link, useLocation } from "@remix-run/react"
import {
  ArrangeHorizontalSquare,
  ArrowRight2,
  DirectboxNotif,
  Home2,
  Layer,
  LinkSquare,
  SearchNormal1,
} from "iconsax-react"
import Figma from "~/assets/logos/figma.svg"
import Framer from "~/assets/logos/framer.svg"
import Webflow from "~/assets/logos/webflow.svg"
import { MantineLogoRounded } from "~/components/MantineLogoRounded"
import { MantineLogoText } from "~/components/MantineLogoText"
import ThemeSwitch from "../components/ThemeSwitch"
import classes from "./styles/Navbar.module.css"

export default function Navbar() {
  return (
    <Stack w="100%" justify="space-between" h="100%">
      <Group w="100%" align="center" justify="space-between">
        <MantineLogoText size={30} color="accent" />
        <Switch
          styles={{
            root: {
              height: "100%",
            },
            body: {
              height: "100%",
            },
            track: {
              cursor: "pointer",
              height: "100%",
              minWidth: rem(26),
              width: rem(20),
            },
            thumb: {
              "--switch-track-label-padding": "-1px",
              height: "90%",
              width: rem(12),
              borderRadius: rem(3),
              insetInlineStart: "var(--switch-thumb-start, 1px)",
            },
          }}
          h={22}
          radius={4}
          defaultChecked
        />
      </Group>

      <TextInput
        w="100%"
        radius="md"
        leftSection={<SearchNormal1 size={18} />}
        placeholder="Search"
        classNames={{
          input: classes.searchInput,
        }}
        rightSection={
          <Badge radius={4} size="xs" variant="light">
            /
          </Badge>
        }
      />

      {/* Navlinks */}
      <ScrollArea scrollbarSize={10}>
        {navlinks.map((navlink) => {
          return (
            <Flex key={navlink.id} direction="column" align="start" gap={14}>
              <Text
                className={classes.navTitle}
                fz={12}
                fw={500}
                tt="uppercase"
              >
                {navlink.title}
              </Text>
              <Flex w="100%" gap={6} direction="column" align="start">
                {navlink.links.map(({ id, icon: Icon, title, link }) => {
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const { pathname } = useLocation()
                  const isActive = pathname === link
                  return (
                    <Link
                      data-active={isActive}
                      className={classes.navlink}
                      to={link}
                      key={id}
                    >
                      <Icon size={18} variant={isActive ? "Bold" : "Bulk"} />
                      <Text className={classes.nav_title}>{title}</Text>
                    </Link>
                  )
                })}
              </Flex>
            </Flex>
          )
        })}
      </ScrollArea>
      {/* Navlinks */}

      <Divider w="100%" />

      {/* App Links */}
      <Flex gap={14} w="100%" direction="column" align="start">
        <Text className={classes.navTitle} fz={12} fw={500} tt="uppercase">
          App
        </Text>
        <Flex w="100%" gap={10} direction="column" align="start">
          <Flex align="center" gap={10} pl={0}>
            <Box className={classes.appImageContainer}>
              <Image w="100%" h="100%" src={Webflow} />
            </Box>
            <Text className={classes.nav_title}>Webflow</Text>
          </Flex>
          <Flex align="center" gap={10} pl={0}>
            <Box bg="black" className={classes.appImageContainer}>
              <Image w="100%" h="80%" src={Framer} />
            </Box>
            <Text className={classes.nav_title}>Framer</Text>
          </Flex>
          <Flex align="center" gap={10} pl={0}>
            <Box className={classes.appImageContainer}>
              <Image w="100%" h="100%" src={Figma} />
            </Box>
            <Text className={classes.nav_title}>Figma</Text>
          </Flex>
        </Flex>
      </Flex>
      {/* App Links */}

      <Flex direction="column" align="start" gap={14}>
        <Box className={classes.plan}>
          <Flex w="100%" direction="column" align="center" gap={2}>
            <Box className={classes.planLogoContainer}>
              <MantineLogoRounded color="accent" size={24} />
            </Box>
            <Text fw={600} fz={13} c="white">
              View + Event Limit
            </Text>
            <Text fz={10} fw={500} c="white">
              {Number(225948).toLocaleString()}/
              {Number(500000).toLocaleString()} Monthly Limit
            </Text>
            <Progress
              w="100%"
              value={30}
              color="var(--mantine-color-orange-4)"
            />
          </Flex>

          <Flex w="100%" direction="column" align="center" gap={10}>
            <Button className={classes.learnMore} radius="xl" fullWidth>
              <Text fw={500} fz={11} lts={-0.2}>
                Learn More
              </Text>
            </Button>
            <UnstyledButton className={classes.upgradePlan}>
              <Text fw={500} fz={11} lts={-0.2}>
                Upgrade Plan
              </Text>
              <ActionIcon size={30} bg="white" variant="subtle" radius="xl">
                <ArrowRight2 size={16} color="black" />
              </ActionIcon>
            </UnstyledButton>
          </Flex>
        </Box>
        <ThemeSwitch />
      </Flex>
    </Stack>
  )
}

const navlinks = [
  {
    id: 1,
    title: "Navigation",
    links: [
      {
        id: 1,
        icon: Home2,
        title: "Dashboard",
        link: "/quick-dash",
      },
      {
        id: 2,
        icon: Layer,
        title: "CMS",
        link: "/quick-dash/cms",
      },
      {
        id: 3,
        icon: DirectboxNotif,
        title: "Forms",
        link: "/quick-dash/forms",
      },
      {
        id: 4,
        icon: LinkSquare,
        title: "Clicks",
        link: "/quick-dash/clicks",
      },
      {
        id: 5,
        icon: ArrangeHorizontalSquare,
        title: "Split Testing",
        link: "/quick-dash/split-testing",
      },
    ],
  },
]
