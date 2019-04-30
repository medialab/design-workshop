import React from 'react';

import {
    LayoutWrapper,
    LayoutContainer,
    LayoutFooter,
    LayoutFooterColumn,
    Content,
    LayoutContent,
    LayoutContentColumn,
    LayoutHeader,
    AppTitle,
    RunningTitle,
    Field,
    Label,
    Control,
    ButtonsRow,
    Button,
    AccordionContainer,
    ButtonContainer,
    AccordionElement,
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
              <ButtonsRow>
                <Button isColor={'info'} >number</Button>
                <Button>distinct values</Button>
                <Button>affected rows</Button>
              </ButtonsRow>
            </Control>
          </Field>
          <Field>
            <Label>
                    Cluster by
            </Label>
            <Control>

              <AccordionContainer>
                {
                  ['Fingerprint collision', 'Cologne collision', 'Metaphone collision', 'Levenshtein VPTree']
                  .map((method, index) => (
                    <AccordionElement
                      isSelected={index === 0}
                      key={index}
                      title={method}
                      subtitle="233 comp.">
                      <Content isSize={'small'}>
                        Computing clusters of strings whose fingerprints are the same. This is definitely the first recipe you want to try since it is really performant and usually produces very good results.
                      </Content>
                      <Button isColor="primary" isDisabled={index === 0}>
                        Use this method
                      </Button>
                    </AccordionElement>
                  ))
                }
              </AccordionContainer>
            </Control>
          </Field>
          <ButtonContainer>
            <Button isFullWidth isColor={'primary'}>
            Add a recipe
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button isFullWidth isColor={'primary'}>
            Recluster
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button isFullWidth isColor={'primary'}>
            Download
            </Button>
          </ButtonContainer>
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
