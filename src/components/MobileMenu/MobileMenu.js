/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogContent, DialogOverlay } from '@reach/dialog';

import { WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { keyframes } from "styled-components";

const MobileMenu = ( { isOpen, onDismiss } ) => {
	return (
		<Wrapper isOpen={ isOpen } onDismiss={ onDismiss }>
			<Content aria-label="Menu">
				<InnerWrapper>
					<CloseButton onClick={ onDismiss }>
						<Icon id="close" />
						<VisuallyHidden>Dismiss menu</VisuallyHidden>
					</CloseButton>
					<Filler />
					<Nav>
						<NavLink href="/sale">Sale</NavLink>
						<NavLink href="/new">New&nbsp;Releases</NavLink>
						<NavLink href="/men">Men</NavLink>
						<NavLink href="/women">Women</NavLink>
						<NavLink href="/kids">Kids</NavLink>
						<NavLink href="/collections">Collections</NavLink>
					</Nav>
					<Footer>
						<SubLink href="/terms">Terms and Conditions</SubLink>
						<SubLink href="/privacy">Privacy Policy</SubLink>
						<SubLink href="/contact">Contact Us</SubLink>
					</Footer>
				</InnerWrapper>
			</Content>
		</Wrapper>
	);
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled( DialogOverlay )`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;

  // Backdrop
  &:before {
    animation: ${ fadeIn } 500ms;
    background: var(--color-backdrop);
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }
`;

const Content = styled( DialogContent )`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  position: relative;

  /* must be using a device with no motion preferences */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${ slideIn } 500ms both 200ms ease-out;
  }
`;

const InnerWrapper = styled.div`
  animation: ${ fadeIn } 500ms both 500ms;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CloseButton = styled( UnstyledButton )`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${ WEIGHTS.medium };
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
