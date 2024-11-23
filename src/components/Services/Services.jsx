import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";
import ServicesList from "../ServicesList/ServicesList";
import AllLink from "./AllLink";

export default function Services() {
  return (
    <div className="mt-20">
      <Container>
        <SectionHeader>УСЛУГИ ДЕТЕЙЛИНГ ЦЕНТРА</SectionHeader>
        <ServicesList />
        <AllLink />
      </Container>
    </div>
  );
}
