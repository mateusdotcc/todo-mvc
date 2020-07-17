import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Button from '../Button/Button';

import { easeOutExpo } from '../../assets/styles/easings';
import { COLORS, SHADOWS } from '../../themes/light.theme';

type Status = 'pending' | 'completed';

export const ButtonDone = styled(Button)`
  padding: 0;
  background-color: transparent;
  border-radius: 0;

  &:hover {
    background-color: transparent;
  }
`;

export const ButtonDelete = styled(Button)`
  position: absolute;
  right: 8px;
  padding: 1rem 2rem;
  background-color: transparent;
  border-radius: 0;

  transition: right 0.21s ${easeOutExpo}, opacity 0.21s ${easeOutExpo},
    visibility 0.21s ${easeOutExpo};

  svg {
    color: ${COLORS.primary};
    transition: color 0.2s;
  }

  &:hover {
    background-color: transparent;

    svg {
      color: ${shade(0.3, COLORS.primary)};
    }
  }
`;

export const Label = styled.span`
  white-space: nowrap;

  transition: color 0.25s;

  &:before {
    background-color: ${shade(0.2, COLORS.secondary)};

    content: '';

    display: inline-block;
    position: absolute;
    top: 50%;
    width: 0%;
    height: 0.1rem;

    transition: width 0.25s ${easeOutExpo};
  }
`;

export const Container = styled.li<{ status: Status }>`
  background-color: ${COLORS.secondary};
  box-shadow: ${SHADOWS.input};

  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  margin-bottom: 1rem;
  padding: 3rem 2rem;
  border-radius: 1rem;

  transition: opacity 0.2s ease-in-out;

  ${props =>
    props.status === 'completed' &&
    css`
      ${Label} {
        color: ${shade(0.2, COLORS.secondary)};

        &:before {
          width: calc(100% - 9.9rem);
        }
      }

      ${ButtonDelete} {
        opacity: 0;
        right: -15px;
        visibility: hidden;
      }
    `}
`;
