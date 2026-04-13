import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import { MantineProvider } from "@mantine/core"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
     <MantineProvider defaultColorScheme="light">
        <App />
      </MantineProvider>
		</BrowserRouter>
	</StrictMode>
)
