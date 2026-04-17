import { Button } from "@mantine/core"
import { ScanIcon } from "lucide-react"
import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      {/* header we willl cchange this page later on */}
      <header
        style={{
          padding: "10px 20px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h2 style={{ margin: 0 }}>Budgeting Pal</h2>

       <Button
          variant="outline"
          color="white"
          bg="green"
          leftSection={<ScanIcon size={24} />}
        >
          Scan
        </Button>


        <nav style={{ display: "flex", gap: "15px" }}>
          <Link to="/">Landing</Link>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      {/* Page content */}
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  )
}
