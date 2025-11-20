import React from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import {
  Container,
  PageHeading,
  MetaText,
  Section,
  SectionTitle,
  Paragraph,
  List
} from "./style";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <PageHeading>Política de Privacidade</PageHeading>
        <MetaText>Última atualização: Novembro 20, 2025</MetaText>

        <Section>
          <SectionTitle>1. Introdução</SectionTitle>
          <Paragraph>
            Bem-vindo à Plenna. Estamos comprometidos em proteger suas informações
            pessoais e seu direito à privacidade. Quando você visita nosso site e usa
            nossos serviços, você confia a nós suas informações pessoais. Levamos sua
            privacidade muito a sério.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Informações que Coletamos</SectionTitle>
          <Paragraph>
            Coletamos informações pessoais que você fornece voluntariamente ao se
            registrar no site ou ao entrar em contato conosco. As informações podem
            incluir:
          </Paragraph>

          <List>
            <li>Informações de Identificação Pessoal</li>
            <li>Informações de Pedido</li>
            <li>Dados do Navegador e do Dispositivo</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Como Utilizamos Suas Informações</SectionTitle>
          <Paragraph>
            Utilizamos suas informações para diversos propósitos comerciais, incluindo:
          </Paragraph>

          <List>
            <li>Processamento de pedidos e pagamentos</li>
            <li>Envio de comunicações de marketing</li>
            <li>Notificações administrativas</li>
            <li>Prevenção contra fraudes</li>
            <li>Melhoria do nosso site e serviços</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Compartilhamento e Divulgação de Dados</SectionTitle>
          <Paragraph>
            Podemos compartilhar seus dados com prestadores de serviços terceirizados
            que atuam em nosso nome, incluindo processadores de pagamento, provedores
            de hospedagem, serviços de envio de e-mails e parceiros de análise.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>5. Cookies e Tecnologias de Rastreamento</SectionTitle>
          <Paragraph>
            Podemos utilizar cookies e tecnologias de rastreamento semelhantes para
            acessar ou armazenar informações.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Seus Direitos</SectionTitle>
          <Paragraph>
            Dependendo da sua localização, você pode ter direitos como acesso,
            retificação, exclusão, restrição de processamento e portabilidade de dados.
            Entre em contato conosco para exercer esses direitos.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Segurança dos Dados</SectionTitle>
          <Paragraph>
            Implementamos medidas para proteger suas informações. No entanto, nenhum
            método de transmissão eletrônica ou armazenamento é 100% seguro.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Alterações Nesta Política</SectionTitle>
          <Paragraph>
            Podemos atualizar periodicamente esta política de privacidade. A versão
            atualizada terá uma nova data em “Última atualização”.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. Fale Conosco</SectionTitle>
          <Paragraph>
            Se você tiver dúvidas sobre esta política, envie um e-mail para{" "}
            <a href="mailto:support@plenna.com">support@plenna.com</a>.
          </Paragraph>
        </Section>
      </Container>
      <Footer />
    </>
  );
}

export { PrivacyPolicy };