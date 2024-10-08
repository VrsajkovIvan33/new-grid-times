import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LargeScreenOnly>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </LargeScreenOnly>
        <Logo />
        <LargeScreenOnly>
          <SubscribeWrapper>
            <SubscribeButton>Subscribe</SubscribeButton>
            <AlreadyASubscriberLink href="/">
              Already a subscriber?
            </AlreadyASubscriberLink>
          </SubscribeWrapper>
        </LargeScreenOnly>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const LargeScreenOnly = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: revert;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-bottom: 72px;
  }

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`;

const AlreadyASubscriberLink = styled.a`
  font-size: 0.875rem;
  text-decoration: underline;
  font-weight: var(--font-weight-normal);
  font-style: italic;
  font-family: var(--font-family-serif);

  grid-column: 2;
  grid-row: 2;
`;

const SubscribeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  justify-items: center;
`;

const SubscribeButton = styled(Button)`
  grid-column: 2;
  grid-row: 1;
`;

export default Header;
