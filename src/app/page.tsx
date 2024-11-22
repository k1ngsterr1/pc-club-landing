import { MenuProvider } from "@/contexts/MenuContext";
import { HomeScreen } from "@/widgets/Screens/HomeScreen/index";

export default function Home() {
  return (
    <>
      <MenuProvider>
        <HomeScreen />
      </MenuProvider>
    </>
  );
}