import React from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import {
  TermsWrapper,
  TermsHeader,
  TermsSection,
  TermsTitle,
  TermsParagraph,
  LastUpdated,
} from "./style";

const ServiceTerms: React.FC = () => {
  return (
    <>
        <Header />
        <TermsWrapper>
            <TermsHeader>Termos de Serviço</TermsHeader>
            <LastUpdated>Última atualização: Novembro 20, 2025</LastUpdated>

            <TermsSection>
                <TermsTitle>1. Introdução</TermsTitle>
                <TermsParagraph>
                    Bem-vindo à Plenna. Estes termos e condições estabelecem as regras
                    e diretrizes para o uso do nosso site. Ao acessar este site, presumimos
                    que você aceita estes termos. Não continue utilizando nosso site caso
                    discorde de qualquer condição aqui apresentada.
                </TermsParagraph>
            </TermsSection>

            <TermsSection>
                <TermsTitle>2. Responsabilidades do Usuário & Contas</TermsTitle>
                <TermsParagraph>
                    Ao criar uma conta conosco, você deve fornecer informações precisas,
                    completas e atualizadas. A falta de conformidade constitui violação dos
                    Termos e pode resultar na imediata suspensão ou encerramento da sua
                    conta. Você é responsável por proteger sua senha e por qualquer atividade
                    realizada sob sua conta.
                </TermsParagraph>
            </TermsSection>

            <TermsSection>
                <TermsTitle>3. Compras e Pagamentos</TermsTitle>
                <TermsParagraph>
                    Caso deseje adquirir algum produto ou serviço oferecido em nossa
                    plataforma, poderá ser solicitado que forneça informações de pagamento e
                    faturamento. Todos os preços podem ser alterados sem aviso prévio.
                </TermsParagraph>
            </TermsSection>

            <TermsSection>
                <TermsTitle>4. Propriedade Intelectual</TermsTitle>
                <TermsParagraph>
                    Todo conteúdo, funcionalidades e recursos presentes neste site permanecem
                    como propriedade exclusiva da Plenna e seus licenciadores. Nossas
                    marcas registradas e identidade visual não podem ser utilizadas sem
                    permissão prévia por escrito.
                </TermsParagraph>
            </TermsSection>

            <TermsSection>
                <TermsTitle>5. Limitação de Responsabilidade</TermsTitle>
                <TermsParagraph>
                    A Plenna não será responsável por danos indiretos, incidentais,
                    especiais ou consequenciais, incluindo perda de lucros, dados, uso ou
                    qualquer outro prejuízo decorrente do uso ou da incapacidade de uso de
                    nossos serviços.
                </TermsParagraph>
            </TermsSection>

            <TermsSection>
                <TermsTitle>6. Legislação Aplicável</TermsTitle>
                <TermsParagraph>
                    Estes Termos serão regidos e interpretados de acordo com as leis da
                    jurisdição aplicável. A falha em fazer cumprir qualquer disposição não
                    constitui renúncia de direito.
                </TermsParagraph>
            </TermsSection>

            <TermsSection>
                <TermsTitle>7. Alterações nos Termos</TermsTitle>
                <TermsParagraph>
                    Reservamo-nos o direito de modificar ou substituir estes Termos a
                    qualquer momento. Caso as alterações sejam significativas, buscaremos
                    fornecer um aviso com pelo menos 30 dias de antecedência antes que os
                    novos termos entrem em vigor.
                </TermsParagraph>
            </TermsSection>

            <TermsSection>
                <TermsTitle>8. Informações de Contato</TermsTitle>
                <TermsParagraph>
                    Se você tiver qualquer dúvida sobre estes Termos, entre em contato conosco
                    pelo e-mail{" "}
                    <a href="mailto:support@plenna.com">support@plenna.com</a>.
                </TermsParagraph>
            </TermsSection>
        </TermsWrapper>
        <Footer />
    </>
  );
};

export { ServiceTerms };