import { Button } from "@mantine/core"
import { ScanIcon } from "lucide-react"
import { Outlet, Link } from "react-router-dom"

export default function Layout() {

  {/* this is to hide the scan icon if the user is not logged in */  }
  const user = JSON.parse(localStorage.getItem("user") || "null")
  const isLoggedIn = !!user
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

        {/* Only show Scan button if logged in */}
        {isLoggedIn && (
          <Button
            variant="outline"
            color="white"
            bg="green"
            leftSection={<ScanIcon size={24} />}
          >
            Scan
          </Button>
        )}


        <nav style={{ display: "flex", gap: "15px" }}>
          <Link to="/">Landing</Link>
          <Link to="/home">Home</Link>

          {/* if user logged in then show logout button otherwise show login button */}
          {!isLoggedIn && <Link to="/login">Login</Link>}
          {isLoggedIn && <Link to="/logout">Logout</Link>}
        </nav>
      </header>

      {/* Page content */}
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  )
}
