import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function Reviews() {
  return (
    <div className="mt-20">
      <Container>
        <SectionHeader
          style={{
            textAlign: "center",
          }}
        >
          Отзывы о нашей работе
        </SectionHeader>

        <div
          style={{
            marginTop: "40px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "560px",
            height: "800px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <iframe
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #e6e6e6",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
            src="https://yandex.ru/maps-reviews-widget/145932083659?comments"
            title="Отзывы Яндекс Карты"
          ></iframe>
          <a
            href="https://yandex.ru/maps/org/deteyling_on_ru/145932083659/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#b3b3b3",
              fontSize: "10px",
              fontFamily: "YS Text, sans-serif",
              position: "absolute",
              bottom: "8px",
              width: "100%",
              textAlign: "center",
              left: "0",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              padding: "0 16px",
              boxSizing: "border-box",
            }}
          >
            Детейлинг-он.ру на карте Москвы и Московской области — ЯндексКарты
          </a>
        </div>
      </Container>
    </div>
  );
}
