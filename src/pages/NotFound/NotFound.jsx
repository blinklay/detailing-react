import Container from "../../components/Container/Container";
import PagesHeader from "../../components/PagesHeader/PagesHeader";

export default function NotFound() {
  return (
    <div>
      <Container>
        <PagesHeader>
          Страница не найдена! <span className="text-accent">404</span>
        </PagesHeader>
      </Container>
    </div>
  );
}
