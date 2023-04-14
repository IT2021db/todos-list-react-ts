import React from "react";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { ParagraphStyled } from "../paragraphStyled";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Dorota Borowska"
      body={
        <>
          <div>
            <ParagraphStyled>
              <strong>Na codzień zajmuję się inżynierią elektroniczną.</strong>{" "}
              Praca tym zawodzie, jak i wielu podobnych, wymaga intensywnego
              myślenia i skupienia uwagi przez wiele godzin w ciągu dnia.
              Dlatego w takich wypadkach bardzo cenna jest{" "}
              <em>umiejętność dobrego wypoczywania</em> i chociaż na jakiś czas
              odsunięcia od siebie wszelkich problemów. Można na przykład
              uprawiać sport lub chodzić na spacery.
              <br />
              <strong>Ja natomiast polubiłam ogród.🌿</strong> Kiedy tylko mogę,
              przebywam pośród kwiatów i innych roślin. 🍓 Towarzystwo zieleni
              daje mi ukojenie i uspokojenie. Pracując w ogrodzie mam też
              zapewnioną gimnastykę i ruch na świeżym powietrzu. Uwielbiam
              przyglądać się jak rosną moje krzewy, zioła ☘️ i jak rozwijają
              swoje pąki kwiaty. 🌺
            </ParagraphStyled>
          </div>
        </>
      }
    />
  </Container>
);

export default AuthorPage;
