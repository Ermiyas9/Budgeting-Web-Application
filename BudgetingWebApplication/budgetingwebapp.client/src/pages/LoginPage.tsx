import { useState } from "react";
import { Button, Center, Stack, TextInput, PasswordInput, Title, Text } from "@mantine/core";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    // here i will add the login logic later on, for now it will just navigate to homepage
    const handleLogin = () => {
        // i might change this later when i impeleting google login. 
        if (email === "" || password === "") {
            alert("Please enter email and password.");
            return;
        }   
    };

  return (
     <Center h="85vh">
      <Stack w={320} align="center" gap="lg">
        <Title order={2}>Budgeting App</Title>
        <Text c="dimmed">Login to continue</Text>

        <TextInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        // this i will change it with google login latoer on. 
        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </Center>
  );
}
