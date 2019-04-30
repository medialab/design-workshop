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
    Level,
    Columns,
    Column
} from '../../../src/components';


const ClusterCard = ({cluster}) => (
  <Level>
    <Columns>
      <Column isSize={6}>
        <ButtonContainer>
          <Button isColor="primary">Harmonize</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button isColor="warning">Drop</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button>Explore</Button>
        </ButtonContainer>
      </Column>
      <Column isSize={6}>
        {
            cluster.map(val => (
              <div key={val}>
                <span style={{minWidth: '2rem', display: 'inline-block', textAlign: 'right'}}>×</span>
                <span style={{minWidth: '2rem', display: 'inline-block', textAlign: 'right'}}>{parseInt(Math.random() * 20 + 1, 10)}</span>
                <span style={{paddingLeft: '1rem'}}>{val}</span>
              </div>
            ))
          }
        <div style={{paddingLeft: '5rem'}}>
          <input className="input" value={cluster[0]} style={{padding: '0', fontSize: '.5rem'}} />
        </div>
      </Column>
      {/* <Column isSize={7}>
          {
            cluster.map(val => <div key={val}>{val}</div>)
          }
          <div>
            <input className="input" value={cluster[0]} />
          </div>
        </Column> */}
    </Columns>
  </Level>
);
const clusters = [];
for (let i = 0; i < 100; i++) {
  clusters.push(['ELSEVIER', 'Elsevier', 'Elesvier']);
}

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
          {
            clusters.map((cluster, clusterIndex) => (
              <ClusterCard key={clusterIndex} cluster={cluster} />
            ))
          }
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
