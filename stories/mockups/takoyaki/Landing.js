import React from 'react';

import {
    LayoutWrapper,
    LayoutContainer,
    LayoutFooter,
    LayoutFooterColumn,
    DropZone,
    LayoutContent,
    LayoutContentColumn,
    LayoutHeader,
    AppTitle,
    RunningTitle,
    Content,
    ButtonContainer,
    Button
} from '../../../src/components';


export default () => (
  <LayoutWrapper hasConfig>
    <LayoutHeader>
      <AppTitle>Takoyaki</AppTitle>
      <RunningTitle>Choose a file</RunningTitle>
    </LayoutHeader>
    <LayoutContainer>
      <LayoutContent>
        <LayoutContentColumn isConfig>
          <ButtonContainer><Button isColor="info">
                Paste
          </Button>
          </ButtonContainer>
          <ButtonContainer><Button>
                Upload a file
          </Button>
          </ButtonContainer>
          <ButtonContainer><Button>
                From URL
          </Button>
          </ButtonContainer>
          <ButtonContainer><Button>
                Samples
          </Button>
          </ButtonContainer>
        </LayoutContentColumn>
        <LayoutContentColumn isWorkspace>
          <DropZone>
            <span className="tech-info">Drag and drop some files here, or click to select files</span>
          </DropZone>
          <Content isSize={'medium'}>
            Copy and paste your data from other applications or websites. You can use tabular (TSV, CSV, DSV) or JSON data.
          </Content>
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
