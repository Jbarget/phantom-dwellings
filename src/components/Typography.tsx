import styled, { css } from "styled-components";

import {
  getFont,
  getLineHeight,
  getFontSize,
  getColor,
  FontSize,
  FontName,
  Color,
  LineHeight,
  Spacing,
  getSpacing,
  Border,
  getBorder,
} from "../css/themeHelpers";

export type TextAlign = "left" | "center" | "right";

export interface SpacingProps {
  m?: Spacing;
  mt?: Spacing;
  mb?: Spacing;
  mr?: Spacing;
  ml?: Spacing;
  mv?: Spacing;
  mh?: Spacing;
  p?: Spacing;
  pt?: Spacing;
  pb?: Spacing;
  pr?: Spacing;
  pl?: Spacing;
  pv?: Spacing;
  ph?: Spacing;
}

export interface BorderProps {
  b?: Border;
  bt?: Border;
  bb?: Border;
  br?: Border;
  bl?: Border;
}

interface TextStylesProps {
  fontSize?: FontSize;
  lineHeight?: LineHeight;
  font?: FontName;
  color?: Color;
  transform?: "uppercase" | "capitalize";
  ta?: TextAlign;
}

export const spacingStyles = css<SpacingProps>`
  ${(props) => props.m && `margin: ${getSpacing(props.m)};`}
    ${(props) => props.mt && `margin-top: ${getSpacing(props.mt)};`}
    ${(props) => props.mb && `margin-bottom: ${getSpacing(props.mb)};`}
    ${(props) => props.mr && `margin-right: ${getSpacing(props.mr)};`}
    ${(props) => props.ml && `margin-left: ${getSpacing(props.ml)};`}
    ${(props) =>
      props.mv &&
      `
      margin-top: ${getSpacing(props.mv)};
      margin-bottom: ${getSpacing(props.mv)};
    `}
    ${(props) =>
      props.mh &&
      `
      margin-right: ${getSpacing(props.mh)};
      margin-left: ${getSpacing(props.mh)};
    `}
    ${(props) => props.p && `padding: ${getSpacing(props.p)};`}
    ${(props) => props.pt && `padding-top: ${getSpacing(props.pt)};`}
    ${(props) => props.pb && `padding-bottom: ${getSpacing(props.pb)};`}
    ${(props) => props.pr && `padding-right: ${getSpacing(props.pr)};`}
    ${(props) => props.pl && `padding-left: ${getSpacing(props.pl)};`}
    ${(props) =>
      props.pv &&
      `
      padding-top: ${getSpacing(props.pv)};
      padding-bottom: ${getSpacing(props.pv)};
    `}
    ${(props) =>
      props.ph &&
      `
      padding-right: ${getSpacing(props.ph)};
      padding-left: ${getSpacing(props.ph)};
    `}
  `;

export const borderStyles = css<BorderProps>`
  ${(props) => props.b && `border: ${getBorder(props.b)};`}
    ${(props) => props.bt && `border-top: ${getBorder(props.bt)};`}
    ${(props) => props.bb && `border-bottom: ${getBorder(props.bb)};`}
    ${(props) => props.br && `border-right: ${getBorder(props.br)};`}
    ${(props) => props.bl && `border-left: ${getBorder(props.bl)};`}
  `;

const textStyles = css<TextStylesProps & BorderProps & SpacingProps>`
  ${(props) =>
    `font-size: ${
      typeof props.fontSize === "number"
        ? getFontSize(props.fontSize)
        : "inherit"
    }`};
  ${(props) =>
    `line-height: ${
      props.lineHeight ? getLineHeight(props.lineHeight) : "inherit"
    }`};
  ${(props) => `font-family: ${props.font ? getFont(props.font) : "inherit"}`};
  ${(props) => `color: ${props.color ? getColor(props.color) : "inherit"}`};
  ${(props) => props.transform && `text-transform: ${props.transform};`}
  ${(props) => props.ta && `text-align: ${props.ta};`}
  ${spacingStyles}
  ${borderStyles}
`;

const headingStyles = css`
  width: 100%;
`;

export const Text400 = styled.span`
  ${textStyles}
`;

export const Text500 = styled.span`
  ${textStyles}
`;

export const H1 = styled.h1`
  ${textStyles}
  ${headingStyles}
`;

export const H2 = styled.h2`
  ${textStyles}
  ${headingStyles}
`;

export const H3 = styled.h3`
  ${textStyles}
  ${headingStyles}
`;

export const H4 = styled.h4`
  ${textStyles}
  ${headingStyles}
`;

export const P = styled.p`
  ${textStyles}
`;

export const Span = styled.span`
  ${textStyles}
`;
