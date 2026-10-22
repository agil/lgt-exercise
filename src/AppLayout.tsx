import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";
import { Header } from "./components/Header.tsx";
import { Menu } from "./components/Menu.tsx";

export const AppLayout = () => {
  return (
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 250, breakpoint: 0 }}
        padding="md"
      >
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <Menu />
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
  )
}
