# grids-styled-components

Grid system of styled-components with similar naming

## Features

- Container: for wrap component with calculate padding
- Row: for wrap component using property flex-wrap
- Column: for wrap component with responsive view
- Display flex and inline-flex

## Installing

#### note!: before you install grids-styled-components you need to install styled-components first

Using npm:

```bash
$ npm install styled-components grids-styled-components
```

Using yarn:

```bash
$ yarn add styled-components grids-styled-components
```

## Props API

#### Container

| Type props | Extra Small (xs)  <576px | Small (sm)  ≥576px | Medium (md)  ≥768px | Large (lg)  ≥992px | X-Large (xl)  ≥1200px | XX-Large (xxl)  ≥1400px |
|------------|--------------------------|--------------------|---------------------|--------------------|-----------------------|-------------------------|
| None       | 100%                     | 540px              | 720px               | 960px              | 1140px                | 1320px                  |
| sm         | 100%                     | 540px              | 720px               | 960px              | 1140px                | 1320px                  |
| md         | 100%                     | 100%               | 720px               | 960px              | 1140px                | 1320px                  |
| lg         | 100%                     | 100%               | 100%                | 960px              | 1140px                | 1320px                  |
| xl         | 100%                     | 100%               | 100%                | 100%               | 1140px                | 1320px                  |
| xxl        | 100%                     | 100%               | 100%                | 100%               | 100%                  | 1320px                  |

#### Column

|                   | xs  <576px  | sm  ≥576px | md  ≥768px | lg  ≥992px | xl  ≥1200px | xxl  ≥1400px |
|-------------------|-------------|------------|------------|------------|-------------|--------------|
| Column  max-width | None (auto) | 540px      | 720px      | 960px      | 1140px      | 1320px       |
| Type props        | None        | col-sm-    | col-md-    | col-lg-    | col-xl-     | col-xxl-     |

## Example

```js
import { Container, Row, Col } from "grids-styled-components";

<Container>
  <Row>
    <Col type="col-md-6">Hi, my name is</Col>
    <Col type="col-md-6">Novandra Zulfi Ramadhan</Col>
  </Row>
</Container>
```

You can also add props like classname or style

```js
import { Container, Row, Col } from "grids-styled-components";

<Container>
  <Row>
    <Col type="col-md-6" className="first" style={{backgroundColor: "purple"}}>Hi, my name is</Col>
    <Col type="col-md-6" className="second" style={{backgroundColor: "skyblue"}}>Novandra Zulfi Ramadhan</Col>
  </Row>
</Container>
```

and You can add styling to the component as you like
```js
import styled from "styled-components";
import { Container, Row, Col } from "grids-styled-components";

const SRow = styled(Row)`
  margin: 20px 0;
  overflow-y: hidden;
`

export default Home = () => {
  <Container>
    <SRow>
      <Col type="col-md-6" className="first" style={{backgroundColor: "purple"}}>Hi, my name is</Col>
      <Col type="col-md-6" className="second" style={{backgroundColor: "skyblue"}}>Novandra Zulfi Ramadhan</Col>
    </SRow>
  </Container>
}
```

## Credits
grids-styled-components is inspired by the [bootstrap grid system](https://getbootstrap.com/docs/5.0/layout/grid/) But implement in javascript using react and styled-components;

### Follow Me

![Facebook](https://raw.githubusercontent.com/gilbarbara/logos/master/logos/facebook.svg) | ![Instagram](https://raw.githubusercontent.com/gilbarbara/logos/master/logos/instagram.svg) | ![Twitter](https://raw.githubusercontent.com/gilbarbara/logos/master/logos/twitter.svg) | ![Linkedin](https://raw.githubusercontent.com/gilbarbara/logos/master/logos/linkedin.svg) | ![Youtube](https://raw.githubusercontent.com/gilbarbara/logos/master/logos/youtube.svg) |
--- | --- | --- | --- | --- |
[Facebook](https://www.facebook.com/iNoozura) | [Instagram](https://instagram.com/inozura) | [Twitter](https://twitter.com/inoozura) | [Linkedin](https://www.linkedin.com/in/novandra-zulfi-ramadhan-33ab2a1aa/) | [Youtube](https://www.youtube.com/channel/UCkMufXWiJI1unr8eLpci6FA) |