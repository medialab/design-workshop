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
    Field,
    Label,
    Control,
    Button
} from '../../../src/components';


export default () => (
  <LayoutWrapper hasConfig>
    <LayoutHeader>
      <AppTitle>Takoyaki</AppTitle>
      <RunningTitle>Working on <b>Article title</b>, found <b>n</b> columns using the <b>Fingerprint collision</b> method</RunningTitle>
    </LayoutHeader>
    <LayoutContainer>
      <LayoutContent>
        <LayoutContentColumn isConfig>
          <Field>
            <Label>
                    Order by
            </Label>
            <Control>
              <div className="buttons has-addons">
                <Button isColor={'info'} >number</Button>
                <Button>distinct values</Button>
                <Button>affected rows</Button>
              </div>
            </Control>
          </Field>
        </LayoutContentColumn>
        <LayoutContentColumn isWorkspace>
          Todo workspace
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
