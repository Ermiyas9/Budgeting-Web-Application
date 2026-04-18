import { Card, Text, Title, Button, Stack, Group, Box, Center } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  CameraIcon,
  UploadIcon,
  PlusIcon,
  GaugeIcon,
  HomeIcon,
  SettingsIcon,
  BarChart3Icon
} from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  const spent = 1800;
  const budget = 2500;
  const percent = (spent / budget) * 100;

  return (
    <Center mt="xl">
      <Stack w={600} gap="xl">

        {/*the fiollowing bbtns either we will make them to take us to page or just input quiery for the backend 
        right now just for UI only  */}
        <Card shadow="sm" radius="md" p="lg">
          <Stack align="center" gap="md">
            <Title order={2}>${spent} / ${budget}</Title>

            {/* Custom Segmented Gauge */}
            <Box
              w="100%"
              style={{
                display: "flex",
                height: 22,
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <Box w={`${Math.min(percent, 60)}%`} bg="green" />
              <Box w={`${percent > 60 ? Math.min(percent - 60, 25) : 0}%`} bg="yellow" />
              <Box w={`${percent > 85 ? percent - 85 : 0}%`} bg="red" />
            </Box>

            <Text c="dimmed" size="sm">
              You’re under budget by ${budget - spent}
            </Text>
          </Stack>
        </Card>

        {/* Action Tiles */}
        <Stack gap="md">
          <Button
            size="lg"
            variant="light"
            fullWidth
            leftSection={<BarChart3Icon size={22} />}
            onClick={() => navigate("/dashboard")}
          >
            View Dashboard
          </Button>

          <Button
            size="lg"
            variant="light"
            fullWidth
            leftSection={<GaugeIcon size={22} />}
            onClick={() => navigate("/budget")}
          >
            Set Budget & Income
          </Button>

          <Button
            size="lg"
            variant="light"
            fullWidth
            leftSection={<CameraIcon size={22} />}
            onClick={() => navigate("/scan")}
          >
            Scan Receipt
          </Button>

          <Button
            size="lg"
            variant="light"
            fullWidth
            leftSection={<UploadIcon size={22} />}
          >
            Upload E‑Receipt
          </Button>

          <Button
            size="lg"
            variant="light"
            fullWidth
            leftSection={<PlusIcon size={22} />}
            onClick={() => navigate("/add-expense")}
          >
            Add Expense
          </Button>
        </Stack>

        {/* Bottom Navigation */}
        <Group
          justify="space-around"
          w="100%"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            padding: "14px 0",
            borderTop: "1px solid #ddd",
            background: "white",
          }}
        >
          <Stack align="center" gap={2}>
            <HomeIcon size={20} />
            <Text size="xs">Home</Text>
          </Stack>

          <Stack align="center" gap={2}>
            <BarChart3Icon size={20} />
            <Text size="xs">Dashboard</Text>
          </Stack>

          <Stack align="center" gap={2}>
            <GaugeIcon size={20} />
            <Text size="xs">Budget</Text>
          </Stack>

          <Stack align="center" gap={2}>
            <SettingsIcon size={20} />
            <Text size="xs">Settings</Text>
          </Stack>
        </Group>
      </Stack>
    </Center>
  );
}
