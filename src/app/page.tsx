import { UsersPage } from "@/components/users/UsersPage";

// Deshabilita la generación estática para esta página
export const dynamic = 'force-dynamic';

export default function Home() {
  return <UsersPage />;
}