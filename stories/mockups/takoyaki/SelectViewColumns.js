import React from 'react';
import lorem from 'fast-lorem-ipsum';
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
    ButtonsRow,
    ActionCard,
    ActionCardHeader,
    ActionCardBody,
    ActionCardFooter,
} from '../../../src/components';

const columnsNames = ['Publisher', 'Journal title', 'Article title', 'Cost', 'Author', 'Year'];

const createMockData = (rowsNumber = 200) => {
  const output = [];
  for (let i = 0; i < rowsNumber; i++) {
    const row = columnsNames.reduce((res, columnName) => {
      const base = lorem(200, 'w').split(' ');
      const length = parseInt(Math.random() * 7 + 2, 10);
      const from = parseInt(Math.random() * (100 - length), 10);
      const to = from + length;
      const value = base.slice(from, to).join(' ');
      return {
        ...res,
        [columnName]: value
      };
    }, {});
    output.push(row);
  }
  return output;
};

const mockData = createMockData();

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
              <ButtonsRow>
                <Button >Table</Button>
                <Button isColor={'info'}>Unique values</Button>
              </ButtonsRow>
            </Control>
          </Field>
        </LayoutContentColumn>
        <LayoutContentColumn isWorkspace>
          <div style={{position: 'relative', width: '100%', height: '70vh'}}>
            <div style={{
              position: 'absolute',
              overflowX: 'auto',
              display: 'flex',
              flexFlow: 'row nowrap',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              paddingBottom: '1rem'
            }}>
              {
                columnsNames.map(columnName => (
                  <div
                    key={columnName}
                    style={{
                            background: 'red',
                            height: '100%',
                            minWidth: '20rem',
                            display: 'flex',
                            alignItems: 'stretch',
                            marginRight: '1rem'
                        }}>
                    <ActionCard style={{flex: 1}}>
                      <ActionCardHeader>
                        <td style={{width: '100%', display: 'inline-block'}}>
                          <b>{columnName} ({parseInt(Math.random() * 200, 10)} values)</b></td>
                      </ActionCardHeader>
                      <ActionCardBody>
                        {
                                    mockData.map((item, itemIndex) => {
                                        const value = item[columnName];
                                        return (
                                          <tr key={itemIndex}>
                                            <td>
                                              {value}
                                            </td>
                                            <td>
                                                    12
                                            </td>
                                          </tr>
                                        );
                                    })
                                }
                      </ActionCardBody>
                      <ActionCardFooter>
                        <Button isFullWidth isColor="primary">
                                    Cluster
                        </Button>
                      </ActionCardFooter>
                    </ActionCard>
                  </div>
                ))
            }
            </div>
          </div>
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
