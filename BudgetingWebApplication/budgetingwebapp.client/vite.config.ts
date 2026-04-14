import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import mkcert from "vite-plugin-mkcert"

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "")
	const serverUrl = env.VITE_SERVER_URL

	return {
		server: {
             port: 5174,
    strictPort: true,
			host: true,
			proxy: {
				"/api": {
					target: serverUrl,
					changeOrigin: true,
					secure: false, // Vital: ignores SSL certificate issues during local dev
				},
			},
		},
		plugins: [react(), mkcert()],
	}
})
