import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;

  ${(props) => {
    if (props.type === "sm") return;
    css`
      @media (min-width: 576px) {
        max-width: 540px;
      }
    `;
    if (props.type === "md") return;
    css`
      @media (min-width: 768px) {
        max-width: 720px;
      }
    `;
    if (props.type === "lg") return;
    css`
      @media (min-width: 992px) {
        max-width: 960px;
      }
    `;
    if (props.type === "xl") return;
    css`
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
    `;
    if (props.type === "xxl") return;
    css`
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `;
  }}
`;

export const Row = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);

  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) / 2);
    padding-left: calc(var(--bs-gutter-x) / 2);
    margin-top: var(--bs-gutter-y);
  }
`;

export const Col = styled.div`
  display: flex;

  ${(props) => {
    if (props.type === "auto")
      return css`
        flex: 0 0 auto;
        width: auto;
      `;
    if (props.type === "col-1")
      return css`
        flex: 0 0 auto;
        width: 8.3333333333%;
      `;
    if (props.type === "col-2")
      return css`
        flex: 0 0 auto;
        width: 16.6666666667%;
      `;
    if (props.type === "col-3")
      return css`
        flex: 0 0 auto;
        width: 25%;
      `;
    if (props.type === "col-4")
      return css`
        flex: 0 0 auto;
        width: 33.3333333333%;
      `;
    if (props.type === "col-5")
      return css`
        flex: 0 0 auto;
        width: 41.6666666667%;
      `;
    if (props.type === "col-6")
      return css`
        flex: 0 0 auto;
        width: 50%;
      `;
    if (props.type === "col-7")
      return css`
        flex: 0 0 auto;
        width: 58.3333333333%;
      `;
    if (props.type === "col-8")
      return css`
        flex: 0 0 auto;
        width: 66.6666666667%;
      `;
    if (props.type === "col-9")
      return css`
        flex: 0 0 auto;
        width: 75%;
      `;
    if (props.type === "col-10")
      return css`
        flex: 0 0 auto;
        width: 83.3333333333%;
      `;
    if (props.type === "col-11")
      return css`
        flex: 0 0 auto;
        width: 91.6666666667%;
      `;
    if (props.type === "col-12")
      return css`
        flex: 0 0 auto;
        width: 100%;
      `;
  }}

  /* Small size breakpoint */
  @media (min-width: 576px) {
    ${(props) => {
      if (props.type === "col-sm-auto")
        return css`
          flex: 0 0 auto;
          width: auto;
        `;
      if (props.type === "col-sm")
        return css`
          flex: 1 0 0%;
        }
      `;
      if (props.type === "col-sm-1")
        return css`
          flex: 0 0 auto;
          width: 8.3333333333%;
        `;
      if (props.type === "col-sm-2")
        return css`
          flex: 0 0 auto;
          width: 16.6666666667%;
        `;
      if (props.type === "col-sm-3")
        return css`
          flex: 0 0 auto;
          width: 25%;
        `;
      if (props.type === "col-sm-4")
        return css`
          flex: 0 0 auto;
          width: 33.3333333333%;
        `;
      if (props.type === "col-sm-5")
        return css`
          flex: 0 0 auto;
          width: 41.6666666667%;
        `;
      if (props.type === "col-sm-6")
        return css`
          flex: 0 0 auto;
          width: 50%;
        `;
      if (props.type === "col-sm-7")
        return css`
          flex: 0 0 auto;
          width: 58.3333333333%;
        `;
      if (props.type === "col-sm-8")
        return css`
          flex: 0 0 auto;
          width: 66.6666666667%;
        `;
      if (props.type === "col-sm-9")
        return css`
          flex: 0 0 auto;
          width: 75%;
        `;
      if (props.type === "col-sm-10")
        return css`
          flex: 0 0 auto;
          width: 83.3333333333%;
        `;
      if (props.type === "col-sm-11")
        return css`
          flex: 0 0 auto;
          width: 91.6666666667%;
        `;
      if (props.type === "col-sm-12")
        return css`
          flex: 0 0 auto;
          width: 100%;
        `;
    }}
  }

  /* medium size breakpoint */
  @media (min-width: 768px) {
    ${(props) => {
      if (props.type === "col-md-auto")
        return css`
          flex: 0 0 auto;
          width: auto;
        `;
      if (props.type === "col-md")
        return css`
          flex: 1 0 0%;
        }
      `;
      if (props.type === "col-md-1")
        return css`
          flex: 0 0 auto;
          width: 8.3333333333%;
        `;
      if (props.type === "col-md-2")
        return css`
          flex: 0 0 auto;
          width: 16.6666666667%;
        `;
      if (props.type === "col-md-3")
        return css`
          flex: 0 0 auto;
          width: 25%;
        `;
      if (props.type === "col-md-4")
        return css`
          flex: 0 0 auto;
          width: 33.3333333333%;
        `;
      if (props.type === "col-md-5")
        return css`
          flex: 0 0 auto;
          width: 41.6666666667%;
        `;
      if (props.type === "col-md-6")
        return css`
          flex: 0 0 auto;
          width: 50%;
        `;
      if (props.type === "col-md-7")
        return css`
          flex: 0 0 auto;
          width: 58.3333333333%;
        `;
      if (props.type === "col-md-8")
        return css`
          flex: 0 0 auto;
          width: 66.6666666667%;
        `;
      if (props.type === "col-md-9")
        return css`
          flex: 0 0 auto;
          width: 75%;
        `;
      if (props.type === "col-md-10")
        return css`
          flex: 0 0 auto;
          width: 83.3333333333%;
        `;
      if (props.type === "col-md-11")
        return css`
          flex: 0 0 auto;
          width: 91.6666666667%;
        `;
      if (props.type === "col-md-12")
        return css`
          flex: 0 0 auto;
          width: 100%;
        `;
    }}
  }

  /* Large size breakpoint */
  @media (min-width: 992px) {
    ${(props) => {
      if (props.type === "col-lg-auto")
        return css`
          flex: 0 0 auto;
          width: auto;
        `;
      if (props.type === "col-lg")
        return css`
          flex: 1 0 0%;
        }
      `;
      if (props.type === "col-lg-1")
        return css`
          flex: 0 0 auto;
          width: 8.3333333333%;
        `;
      if (props.type === "col-lg-2")
        return css`
          flex: 0 0 auto;
          width: 16.6666666667%;
        `;
      if (props.type === "col-lg-3")
        return css`
          flex: 0 0 auto;
          width: 25%;
        `;
      if (props.type === "col-lg-4")
        return css`
          flex: 0 0 auto;
          width: 33.3333333333%;
        `;
      if (props.type === "col-lg-5")
        return css`
          flex: 0 0 auto;
          width: 41.6666666667%;
        `;
      if (props.type === "col-lg-6")
        return css`
          flex: 0 0 auto;
          width: 50%;
        `;
      if (props.type === "col-lg-7")
        return css`
          flex: 0 0 auto;
          width: 58.3333333333%;
        `;
      if (props.type === "col-lg-8")
        return css`
          flex: 0 0 auto;
          width: 66.6666666667%;
        `;
      if (props.type === "col-lg-9")
        return css`
          flex: 0 0 auto;
          width: 75%;
        `;
      if (props.type === "col-lg-10")
        return css`
          flex: 0 0 auto;
          width: 83.3333333333%;
        `;
      if (props.type === "col-lg-11")
        return css`
          flex: 0 0 auto;
          width: 91.6666666667%;
        `;
      if (props.type === "col-lg-12")
        return css`
          flex: 0 0 auto;
          width: 100%;
        `;
    }}
  }

  /* Extral Large breakpoint */
  @media (min-width: 1200px) {
    ${(props) => {
      if (props.type === "col-xl-auto")
        return css`
          flex: 0 0 auto;
          width: auto;
        `;
      if (props.type === "col-xl")
        return css`
          flex: 1 0 0%;
        }
      `;
      if (props.type === "col-xl-1")
        return css`
          flex: 0 0 auto;
          width: 8.3333333333%;
        `;
      if (props.type === "col-xl-2")
        return css`
          flex: 0 0 auto;
          width: 16.6666666667%;
        `;
      if (props.type === "col-xl-3")
        return css`
          flex: 0 0 auto;
          width: 25%;
        `;
      if (props.type === "col-xl-4")
        return css`
          flex: 0 0 auto;
          width: 33.3333333333%;
        `;
      if (props.type === "col-xl-5")
        return css`
          flex: 0 0 auto;
          width: 41.6666666667%;
        `;
      if (props.type === "col-xl-6")
        return css`
          flex: 0 0 auto;
          width: 50%;
        `;
      if (props.type === "col-xl-7")
        return css`
          flex: 0 0 auto;
          width: 58.3333333333%;
        `;
      if (props.type === "col-xl-8")
        return css`
          flex: 0 0 auto;
          width: 66.6666666667%;
        `;
      if (props.type === "col-xl-9")
        return css`
          flex: 0 0 auto;
          width: 75%;
        `;
      if (props.type === "col-xl-10")
        return css`
          flex: 0 0 auto;
          width: 83.3333333333%;
        `;
      if (props.type === "col-xl-11")
        return css`
          flex: 0 0 auto;
          width: 91.6666666667%;
        `;
      if (props.type === "col-xl-12")
        return css`
          flex: 0 0 auto;
          width: 100%;
        `;
    }}
  }

  /* Double Extra Large breakpoint */
  @media (min-width: 1400px) {
    ${(props) => {
      if (props.type === "col-xxl-auto")
        return css`
          flex: 0 0 auto;
          width: auto;
        `;
      if (props.type === "col-xxl")
        return css`
          flex: 1 0 0%;
        }
      `;
      if (props.type === "col-xxl-1")
        return css`
          flex: 0 0 auto;
          width: 8.3333333333%;
        `;
      if (props.type === "col-xxl-2")
        return css`
          flex: 0 0 auto;
          width: 16.6666666667%;
        `;
      if (props.type === "col-xxl-3")
        return css`
          flex: 0 0 auto;
          width: 25%;
        `;
      if (props.type === "col-xxl-4")
        return css`
          flex: 0 0 auto;
          width: 33.3333333333%;
        `;
      if (props.type === "col-xxl-5")
        return css`
          flex: 0 0 auto;
          width: 41.6666666667%;
        `;
      if (props.type === "col-xxl-6")
        return css`
          flex: 0 0 auto;
          width: 50%;
        `;
      if (props.type === "col-xxl-7")
        return css`
          flex: 0 0 auto;
          width: 58.3333333333%;
        `;
      if (props.type === "col-xxl-8")
        return css`
          flex: 0 0 auto;
          width: 66.6666666667%;
        `;
      if (props.type === "col-xxl-9")
        return css`
          flex: 0 0 auto;
          width: 75%;
        `;
      if (props.type === "col-xxl-10")
        return css`
          flex: 0 0 auto;
          width: 83.3333333333%;
        `;
      if (props.type === "col-xxl-11")
        return css`
          flex: 0 0 auto;
          width: 91.6666666667%;
        `;
      if (props.type === "col-xxl-12")
        return css`
          flex: 0 0 auto;
          width: 100%;
        `;
    }}
  }
`;

export const Dflex = styled.div`
  display: flex !important;
`;

export const Dinlineflex = styled.div`
  display: inline-flex !important;
`;
