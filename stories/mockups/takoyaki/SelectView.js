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
    ActionableTable,
    RunningTitle,
    Button,
    Field,
    Label,
    Control,
    ButtonsRow,
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
                <Button isColor={'info'} >Table</Button>
                <Button>Unique values</Button>
              </ButtonsRow>
            </Control>
          </Field>
        </LayoutContentColumn>
        <LayoutContentColumn isWorkspace>
          <div style={{position: 'relative', width: '100%', height: '70vh'}}>
            <ActionableTable
              onColumnAction={column => console.log('on click', column)/* eslint no-console: 0 */}
              values={createMockData()}
              columnNames={columnsNames}
              actionMessage={'cluster'} />
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
