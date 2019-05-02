import React from 'react';

import {
    LayoutWrapper,
    LayoutContainer,
    LayoutFooter,
    Delete,
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


const ClusterCard = ({cluster}) => (
  <div style={{marginBottom: '2rem', padding: '1rem', paddingTop: 0, paddingLeft: '.5rem'}}>
    <div style={{width: '100%', display: 'flex', flexFlow: 'row nowrap'}}>
      <div style={{width: '30%', minWidth: '11rem'}}>
        <ButtonContainer>
          <Button isColor="primary">Harmonize</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button isColor="warning">Drop</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button>Explore</Button>
        </ButtonContainer>
      </div>
      <div style={{width: '70%', paddingTop: '.5rem', maxWidth: 'calc(100% - 11rem)'}}>
        {
            cluster.map(val => (
              <div
                style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                fontFamily: 'monospace',
                fontSize: '0.77rem',
                borderBottom: '1px solid #dbdbdb',
              }}
                key={val}>
                <span style={{
                  maxWidth: '3rem',
                  minWidth: '3rem',
                  display: 'flex',
                  flexFlow: 'row nowrap'
                }}>
                  <Delete />
                  <span style={{
                    minWidth: '2rem',
                    display: 'inline-block',
                    textAlign: 'right',
                  }}>
                    <b>{parseInt(Math.random() * 20 + 1, 10)}</b>
                  </span>
                </span>
                <span style={{
                  display: 'inline-block',
                  marginLeft: '.5rem',
                  paddingLeft: '.5rem',
                  background: 'white',
                  flex: 1,
                }}>{val}</span>
              </div>
            ))
          }
        <div style={{paddingLeft: '3.5rem', paddingTop: '.5rem', boxSizing: 'border-box'}}>
          <input style={{width: '100%'}} className="input" value={cluster[0]} />
        </div>
      </div>
      {/* <Column isSize={7}>
          {
            cluster.map(val => <div key={val}>{val}</div>)
          }
          <div>
            <input className="input" value={cluster[0]} />
          </div>
        </Column> */}
    </div>
  </div>
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
          <Field >
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
