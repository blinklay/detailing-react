import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";
import AdvantagesItem from "./AdvantagesItems";

export default function Advantages() {
  return (
    <div className="mt-20">
      <Container>
        <SectionHeader
          style={{
            textAlign: "center",
          }}
        >
          Преимущества
        </SectionHeader>
      </Container>

      <div className="bg-header mt-10">
        <Container>
          <div className="grid grid-cols-3 gap-5 pt-10 pb-10">
            <AdvantagesItem
              title="Сроки и цены"
              text="Фиксированные цены на работы, не меняются в процессе"
              url="./icons/time.png"
              delay={1}
            />
            <AdvantagesItem
              title="Качественные расходные материалы"
              text="Премиальные полировочные пасты и химия для химчистки салона"
              url="./icons/materials.png"
              delay={2}
            />
            <AdvantagesItem
              title="Гарантия от 6 месяцев"
              text="Выполняем работу сами и поэтому можем дать хорошую гарантию"
              url="./icons/guarantee.png"
              delay={3}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
