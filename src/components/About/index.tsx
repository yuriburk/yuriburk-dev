import React from 'react';

import Layout from '../Layout';
import SEO from '../SEO';
import Socials from '../Socials';
import profile from '../../../content/images/yuriburk.jpg';
import promoGames from '../../../content/images/promogames.png';
import mathHero from '../../../content/images/math-hero.png';
import {
  Container,
  Wallpaper,
  Content,
  SocialsContainer,
  Project,
} from './styles';

const About: React.FC = () => (
  <Layout showSidebar={false}>
    <SEO title="Sobre mim" />
    <Container>
      <Wallpaper>
        <img src={profile} alt="Yuri Burk" />
        <h1>Olá, eu sou o Yuri!</h1>
        <SocialsContainer>
          <Socials color="rgba(28,28,40,0.75)" />
        </SocialsContainer>
      </Wallpaper>
      <Content>
        <h2>Sobre mim</h2>
        <p>
          Meu nome é Jefferson Yuri Cunha Burk, formado em Sistemas de
          Informação, moro em Blumenau/SC onde trabalho na{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hbsis.com.br/"
          >
            HBSIS
          </a>{' '}
          como analista de desenvolvimento full-stack.
        </p>
        <br />
        <p>
          Minha principal área de conhecimento é desenvolvimento back-end
          utilizando C#, também estou me esforçando bastante para me tornar
          especialista em mobile/front-end, utilizando React.
        </p>
        <br />
        <p>
          Meu hobby é aprender novas tecnologias e aplicar elas em prática, por
          tal motivo desenvolvi este blog como forma de estudo utilizando
          Gatsby, onde irei compartilhar um pouco do que estou estudando.
        </p>
        <h2>Alguns projetos</h2>
        <Project>
          <div>
            <img src={promoGames} alt="promogames" />
          </div>
          <div>
            <h4>PromoGames</h4>
            <p>
              PromoGames é um aplicativo desenvolvido em React Native e .NET
              Core, a sua função é buscar promoções de diversas categorias
              selecionadas, retornando as melhores ofertas para o usuário.
            </p>
            <p>
              Está disponível para download na{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.promogames"
              >
                Play Store
              </a>{' '}
              com uma avaliação de 5 estrelas.
            </p>
          </div>
        </Project>
        <Project>
          <div>
            <img src={mathHero} alt="math-hero" />
          </div>
          <div>
            <h4>Math Hero</h4>
            <p>
              Math Hero é um protótipo de jogo educacional, desenvolvido para o
              meu TCC utilizando C# com a ferramenta Unity 3D, servindo como
              apoio ao ensino das operações básicas de matemática.
            </p>
            <p>
              O código fonte está disponível no meu{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/yuriburk/math-hero"
              >
                Github
              </a>
              .
            </p>
          </div>
        </Project>
      </Content>
    </Container>
  </Layout>
);

export default About;
