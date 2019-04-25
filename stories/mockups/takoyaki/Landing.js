import React from 'react';

import {
    LayoutWrapper,
    LayoutContainer,
    LayoutFooter,
    LayoutFooterColumn,
    LayoutContent,
    LayoutContentColumn,
    LayoutHeader,
    AppTitle,
    RunningTitle
} from '../../../src/components';


export default () => (
  <LayoutWrapper>
    <LayoutHeader>
      <AppTitle>Takoyaki</AppTitle>
      <RunningTitle>Landing</RunningTitle>
    </LayoutHeader>
    <LayoutContainer>
      <LayoutContent>
        <LayoutContentColumn>
                    left
        </LayoutContentColumn>
        <LayoutContentColumn>
                    right
        </LayoutContentColumn>
      </LayoutContent>
      <LayoutFooter>
        <LayoutFooterColumn>
                    Footer left
        </LayoutFooterColumn>
        <LayoutFooterColumn>
                    Footer right
        </LayoutFooterColumn>
      </LayoutFooter>
    </LayoutContainer>
  </LayoutWrapper>
)
;
