import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ( { children, ...delegated } ) => {
	return <Wrapper { ...delegated }>
		<PrimaryText>{ children }</PrimaryText>
		<HoverText aria-hidden={true}>{ children }</HoverText>
	</Wrapper>
}

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${ WEIGHTS.medium };
	// Allow for text to slide up.
	overflow: hidden;
	position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
	display: block;
  transform: translateY(var(--translate-from));
  transition: transform 600ms;

  /* must be using a device with hover capability and no motion preferences */
  @media (hover:hover) and (prefers-reduced-motion: no-preference) {
    ${ Wrapper }:hover & {
      transform: translateY(var(--translate-to));
      transition: transform 200ms;
    }
  }
`;

const PrimaryText = styled(Text)`
  --translate-from: 0;
  --translate-to: -100%;
`;

const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0;
	font-weight: ${WEIGHTS.bold};
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
`;

export default NavLink;