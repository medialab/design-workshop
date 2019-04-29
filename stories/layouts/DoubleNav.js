import React from 'react';

import {
    LayoutWrapper,
    LayoutContainer,
    LayoutFooter,
    LayoutFooterColumn,
    LayoutContent,
    LayoutNav,
    LayoutContentColumn,
    LayoutHeaderContainer,
    LayoutHeaderContent,
    AppTitle,
    RunningTitle
} from '../../src/components';


export default () => (
  <LayoutWrapper hasNav>
    <LayoutHeaderContainer>
      <LayoutHeaderContent>
        <AppTitle>App name</AppTitle>
        <RunningTitle>Running title</RunningTitle>
      </LayoutHeaderContent>
    </LayoutHeaderContainer>
    <LayoutContainer>
      <LayoutNav>
        <ul>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
          <li>Step 4</li>
        </ul>
      </LayoutNav>
      <LayoutContent>
        <LayoutContent>
          <LayoutContentColumn isWorkspace>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget viverra nisl, nec imperdiet justo. In vitae turpis non nunc venenatis faucibus. Phasellus cursus finibus enim. Morbi commodo, lorem sollicitudin blandit maximus, tortor felis pretium nulla, eget ullamcorper tortor leo vehicula libero. In vitae sollicitudin mi, nec accumsan erat. Morbi viverra sem nunc, egestas consectetur turpis malesuada sed. Nulla dictum mi in tellus dapibus, sed finibus risus aliquet. Duis tempus turpis eu magna mollis malesuada. Nulla porttitor, massa lacinia rutrum bibendum, lectus nibh scelerisque neque, ut euismod dolor libero eget arcu. Morbi a nisi a lorem aliquet placerat ac eu urna. Praesent eget elit vulputate, tempus sem sed, consequat lacus. Morbi ullamcorper, odio pretium consectetur fermentum, lectus mi vehicula odio, id tempor felis sem in nunc. Nullam odio sapien, rutrum quis leo eu, convallis viverra leo. Nunc in lectus pretium, ultricies justo vel, elementum quam.
          </LayoutContentColumn>
        </LayoutContent>
        <LayoutFooter>
          <LayoutFooterColumn>
            Footer unique column
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget viverra nisl, nec imperdiet justo. In vitae turpis non nunc venenatis faucibus. Phasellus cursus finibus enim. Morbi commodo, lorem sollicitudin blandit maximus, tortor felis pretium nulla, eget ullamcorper tortor leo vehicula libero. In vitae sollicitudin mi, nec accumsan erat. Morbi viverra sem nunc, egestas consectetur turpis malesuada sed. Nulla dictum mi in tellus dapibus, sed finibus risus aliquet. Duis tempus turpis eu magna mollis malesuada. Nulla porttitor, massa lacinia rutrum bibendum, lectus nibh scelerisque neque, ut euismod dolor libero eget arcu. Morbi a nisi a lorem aliquet placerat ac eu urna. Praesent eget elit vulputate, tempus sem sed, consequat lacus. Morbi ullamcorper, odio pretium consectetur fermentum, lectus mi vehicula odio, id tempor felis sem in nunc. Nullam odio sapien, rutrum quis leo eu, convallis viverra leo. Nunc in lectus pretium, ultricies justo vel, elementum quam.
          </LayoutFooterColumn>
        </LayoutFooter>
      </LayoutContent>
    </LayoutContainer>
  </LayoutWrapper>
)
;
