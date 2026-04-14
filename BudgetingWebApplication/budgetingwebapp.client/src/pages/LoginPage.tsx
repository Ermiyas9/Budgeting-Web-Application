import { useGoogleLogin } from "@react-oauth/google";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Button, Group } from "@mantine/core";


// this is the google auth URL i will get for each user and send it to the backend for login or registration
const GoogleUserInfoURL = "https://www.googleapis.com/oauth2/v1/userinfo";

// this is the backedn url for login using googgle . 
const LoginUsingGoogleURL = `${import.meta.env.VITE_SERVER_URL}/api/auth/LoginUsingGoogleURL`;

export default function LoginPage() {
 const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(GoogleUserInfoURL, {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });

        // here i will get the user data from google and parse it and send it individually for backend. 
        const userData = await response.json();
        const fullEmail = userData.email;

        // here i will parse the email and get the username so that will be the unchanged username and unique for each user.
        const userName = parseEmailUsername(fullEmail);
        const googleSubject = userData.sub;
        const photoUrl = userData.picture;

        const backendResponse = await fetch(LoginUsingGoogleURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullemail: fullEmail,
            username: userName,
            googleSubject,
            photoUrl,
          }),
        });

        const loginTime = Date.now();
        const loginData = await backendResponse.json();

        localStorage.setItem("user", JSON.stringify({ ...loginData, loginTime }));

        // if login is successful then user can navigate to home page.
        navigate("/home");
      } catch (error) {
        console.error("Google login failed:", error);
      }
    },
    onError: () => console.log("Login Failed"),
  });

  return (
 <Group mt="xl" align="center" justify="center">
      <Button
        fullWidth
        variant="light"
        leftSection={<IconBrandGoogleFilled size={16} />}
        onClick={() => login()}
      >
        Sign in with Google
      </Button>
    </Group>
  );
}


function parseEmailUsername(email: string): string {
	if (!email) return ""
	return email.split("@")[0]
}