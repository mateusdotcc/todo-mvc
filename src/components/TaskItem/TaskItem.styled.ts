import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

import Button from '../Button/Button';

import { easeOutExpo } from '~/themes/easings';
import { COLORS, SHADOWS, FONTS } from '~/themes/light.theme';

type Status = 'pending' | 'done';

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
    color: ${COLORS.tertiary};
    transition: color 0.25s;
  }

  &:hover {
    background-color: transparent;

    svg {
      color: ${shade(0.3, COLORS.primary)};
    }
  }
`;

export const Label = styled.span`
  font-family: ${FONTS.light};
  width: calc(100% - 9rem);

  margin-left: 2rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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
  box-shadow: ${props => (props.status === 'pending' ? SHADOWS.input : 'none')};

  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  margin-bottom: 1rem;
  padding: 3rem 2rem;
  border-radius: 1rem;

  transition: opacity 0.2s ease-in-out, background-color 0.25s, box-shadow 0.25s;

  &:hover {
    ${props =>
      props.status === 'pending' &&
      css`
        background-color: ${lighten(0.5, COLORS.primary)};
        box-shadow: none;
      `}
  }

  ${props =>
    props.status === 'done' &&
    css`
      ${Label} {
        color: ${shade(0.2, COLORS.secondary)};

        width: 100%;

        &:before {
          width: calc(100% - 9.9rem);
        }
      }

      ${ButtonDelete} {
        opacity: 0;
        right: -15px;
        visibility: hidden;
      }

      &:hover {
        > button div {
          border-color: ${lighten(0.3, COLORS.primary)};
        }
      }
    `}
`;
