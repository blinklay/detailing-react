import Container from "../Container/Container";
import FooterList from "./FooterList";
import InfoBlock from "./InfoBlock";

export default function Footer() {
  return (
    <footer className="bg-header p-20 mt-20 relative">
      <Container>
        <div className="flex items-center gap-4 justify-between">
          <InfoBlock />

          <FooterList />
        </div>
      </Container>

      <div className=" absolute bottom-0 left-0 text-[16px] p-2 opacity-[0.3] w-[100%] text-center">
        © 2024 Detailing-buz | All rights reserved Detailing-buz
      </div>
    </footer>
  );
}
