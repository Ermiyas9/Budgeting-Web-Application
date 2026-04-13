import { Button, Center, Stack, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";


export default function LandingPage() {

const navigate = useNavigate();

  const handleStart = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const isLoggedIn = !!user;

    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };
  return (
    <Center h="85vh">
      <Stack align="center" gap="xl">
        <Stack align="center" gap="xs">
          <Title size={40} fw={900} style={{ whiteSpace: "nowrap" }}>
            Budgeting App
          </Title>

          <Text fw={800} c="dimmed" tt="uppercase">
            Track your expenses. Manage your money.
          </Text>
        </Stack>

        <Stack align="center" gap="md" w={350}>
          {/* Start Button */}
          <Button onClick={handleStart} size="lg" variant="filled" fullWidth>
            Start Budgeting
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}
