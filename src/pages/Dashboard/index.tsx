import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <HeaderContent>
        <img src={logoImg} alt="GoBarber" />

        <Profile>
          <img
            src="https://xesque.rocketseat.dev/users/avatar/profile-fcd3d342-3beb-44ac-a1d0-58be6c42f513-1599049342246.jpg"
            alt="teste"
          />
          <div>
            <span>Bem vindo,</span>
            <strong>Diego Fernandes</strong>
          </div>
        </Profile>

        <button type="button">
          <FiPower />
        </button>
      </HeaderContent>
    </Header>
  </Container>
);

export default Dashboard;
