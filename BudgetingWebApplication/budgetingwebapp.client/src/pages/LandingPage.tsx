import { Button, Center, Stack, Text, Title, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Smiley from "../assets/smilyEmoji.png";


export default function LandingPage() {

const navigate = useNavigate();

  const handleStart = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isLoggedIn = !!user?.token;

    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }
  return (
    <Center h="85vh">
      <Stack align="center" gap="xl">
        <Stack align="center" gap="xs">
          <Image
          src={Smiley}
          alt="Smily Image"
          w={150}
          h={150}
          fit="contain"
        />

          <Title size={40} fw={900} style={{ whiteSpace: "nowrap" }}>
            Easy budgeting at your fingertips
          </Title>

          <Text fw={800} c="dimmed" tt="uppercase">
           Save time and money with our scan and save feature!
          </Text>
        </Stack>

        <Stack align="center" gap="md" w={350}>
          {/* Start Button */}
          <Button onClick={handleStart} size="lg" color="green" fullWidth>
            Start Budgeting
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}
