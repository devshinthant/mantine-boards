import { AreaChart } from "@mantine/charts"
import {
  Card,
  Flex,
  Group,
  SimpleGrid,
  Text,
  rem,
  useMantineColorScheme,
} from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import SnapshotFilter from "./SnapShotFilter"

export default function ReportSnapshot() {
  const { colorScheme } = useMantineColorScheme()
  return (
    <Card w="100%" h="100%" shadow="sm" p="xl" radius={6}>
      <Card.Section>
        <Group justify="space-between">
          <Flex direction="column" gap={4} align="start">
            <Text size="lg" fw={600}>
              Reports Snapshot
            </Text>
            <Text fz={12}>Demographic properties of your customer</Text>
          </Flex>

          <DatePickerInput
            styles={{
              input: {
                border: `${rem(1)} solid var(--mantine-color-gray-5)`,
              },
              placeholder: {
                color: "var(--mantine-color-gray-6)",
              },
            }}
            size="xs"
            placeholder="Select Date"
          />
        </Group>
      </Card.Section>

      <Card.Section my={30}>
        <SimpleGrid w="100%" cols={4}>
          <SnapshotFilter
            title="All User"
            value={10234}
            bg={"var(--mantine-color-gray-3)"}
            circleColor={"var(--mantine-color-dark-3)"}
            active
          />
          <SnapshotFilter
            title="Event Count"
            value={536}
            bg={"var(--mantine-color-orange-6)"}
            circleColor="var(--mantine-color-orange-2)"
            active={false}
          />
          <SnapshotFilter
            title="Conversations"
            value={21}
            bg={"var(--mantine-color-green-6)"}
            circleColor="var(--mantine-color-green-2)"
            active={false}
          />
          <SnapshotFilter
            title="New Users"
            value={3321}
            bg={"var(--mantine-color-blue-6)"}
            circleColor="var(--mantine-color-blue-2)"
            active={false}
          />
        </SimpleGrid>
      </Card.Section>

      <Card.Section w="100%" h="100%">
        <AreaChart
          withDots={false}
          w="100%"
          h="100%"
          textColor={colorScheme === "dark" ? "white" : "black"}
          fillOpacity={0.6}
          curveType="bump"
          gridColor="rgba(119,136,153,0.3)"
          strokeDasharray={9}
          data={data}
          strokeWidth={3}
          dataKey="date"
          yAxisProps={{ domain: [0, 100] }}
          series={[
            {
              name: "Apples",
              color:
                colorScheme === "light"
                  ? "rgb(60, 60, 60)"
                  : "rgb(255,255,255)",
            },
          ]}
        />
      </Card.Section>
    </Card>
  )
}

const data = [
  {
    date: "Jan",
    Apples: 31,
  },
  {
    date: "Feb",
    Apples: 200,
  },
  {
    date: "March",
    Apples: 28,
  },
  {
    date: "April",
    Apples: 100,
  },
  {
    date: "May",
    Apples: 42,
  },
  {
    date: "June",
    Apples: 109,
  },
  {
    date: "July",
    Apples: 100,
  },
  {
    date: "Aug",
    Apples: 45,
  },
  {
    date: "Sep",
    Apples: 89,
  },

  {
    date: "Oct",
    Apples: 100,
  },
  {
    date: "Nov",
    Apples: 23,
  },
  {
    date: "Dec",
    Apples: 67,
  },
]
