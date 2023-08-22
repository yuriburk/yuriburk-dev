import React from 'react';

import Layout from '../Layout';
import SEO from '../SEO';
import Socials from '../Socials';
import profile from '../../../content/images/yuriburk.jpg';
import promoGames from '../../../content/images/promogames.png';
import mathHero from '../../../content/images/math-hero.png';
import twitchfy from '../../../content/images/twitchfy.png';
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
        <img src="" alt="Yuri Burk" />
        <h1>Olá, eu sou o Yuri!</h1>
        <SocialsContainer>
          <Socials color="rgba(28,28,40,0.75)" />
        </SocialsContainer>
      </Wallpaper>
      <Content>
        <h2>Habilidades</h2>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>C#</li>
          <li>React Native</li>
          <li>Javascript (ES6+)</li>
          <li>HTML</li>
          <li>CSS (Design Responsivo)</li>
          <li>Git</li>
          <li>Scrum</li>
          <li>Architectural Patterns</li>
          <li>Testes Automatizados</li>
          <li>Bancos de dados relacionais e não relacionais</li>
        </ul>

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
              Math Hero é um protótipo de jogo educacional, foi desenvolvido
              para o meu TCC utilizando C# com a ferramenta Unity 3D, servindo
              como apoio ao ensino das operações básicas de matemática.
            </p>
            <p>
              O código fonte está disponível no meu{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/yuriburk/math-hero"
              >
                Github
              </a>{' '}
              e pode ser jogado{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://math-hero.ronn.in/"
              >
                aqui
              </a>
              .
            </p>
          </div>
        </Project>
        <Project>
          <div>
            <img src={twitchfy} alt="twitchfy" />
          </div>
          <div>
            <h4>Twitchfy</h4>
            <p>
              Twitchfy é um projeto criado para estudar o Next.JS com Server
              Side Rendering. Ele funciona buscando na API da Twitch os clips em
              tendência, permitindo ao usuário filtrar por jogo ou período.
            </p>
            <p>
              Pode ser acesso em{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitchfy.com/"
              >
                Twitchfy
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
