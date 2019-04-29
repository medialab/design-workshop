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
    RunningTitle,
    Button,
    Field,
    Label,
    Control,
} from '../../../src/components';


export default () => (
  <LayoutWrapper hasConfig>
    <LayoutHeader>
      <AppTitle>Takoyaki</AppTitle>
      <RunningTitle>Select a dimension to work with</RunningTitle>
    </LayoutHeader>
    <LayoutContainer>
      <LayoutContent>
        <LayoutContentColumn isConfig>
          <Field>
            <Label>
                    View data as
            </Label>
            <Control>
              <div className="buttons has-addons">
                <Button isColor={'info'} >Table</Button>
                <Button>Unique values</Button>
              </div>
            </Control>
          </Field>
        </LayoutContentColumn>
        <LayoutContentColumn isWorkspace>
            TODO workspace
        </LayoutContentColumn>
      </LayoutContent>
      <LayoutFooter>
        <LayoutFooterColumn isSecondary>
          <h3>médialab SciencesPo</h3>
        </LayoutFooterColumn>
        <LayoutFooterColumn isPrimary>
          Takoyaki is developped by Mr. Guillaume Plique at médialab Sciences Po.
        </LayoutFooterColumn>
      </LayoutFooter>
    </LayoutContainer>
  </LayoutWrapper>
)
;
