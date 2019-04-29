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
} from '../../src/components';


export default () => (
  <LayoutWrapper hasConfig>
    <LayoutHeader>
        <AppTitle>App name</AppTitle>
        <RunningTitle>Running title</RunningTitle>
    </LayoutHeader>
    <LayoutContainer>
      <LayoutContent>
        <LayoutContentColumn isConfig>
          <h3>Config space</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget viverra nisl, nec imperdiet justo. In vitae turpis non nunc venenatis faucibus. Phasellus cursus finibus enim. Morbi commodo, lorem sollicitudin blandit maximus, tortor felis pretium nulla, eget ullamcorper tortor leo vehicula libero. In vitae sollicitudin mi, nec accumsan erat. Morbi viverra sem nunc, egestas consectetur turpis malesuada sed. Nulla dictum mi in tellus dapibus, sed finibus risus aliquet. Duis tempus turpis eu magna mollis malesuada. Nulla porttitor, massa lacinia rutrum bibendum, lectus nibh scelerisque neque, ut euismod dolor libero eget arcu. Morbi a nisi a lorem aliquet placerat ac eu urna. Praesent eget elit vulputate, tempus sem sed, consequat lacus. Morbi ullamcorper, odio pretium consectetur fermentum, lectus mi vehicula odio, id tempor felis sem in nunc. Nullam odio sapien, rutrum quis leo eu, convallis viverra leo. Nunc in lectus pretium, ultricies justo vel, elementum quam.
        </LayoutContentColumn>
        <LayoutContentColumn isWorkspace>
          <h3>Work space</h3>


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget viverra nisl, nec imperdiet justo. In vitae turpis non nunc venenatis faucibus. Phasellus cursus finibus enim. Morbi commodo, lorem sollicitudin blandit maximus, tortor felis pretium nulla, eget ullamcorper tortor leo vehicula libero. In vitae sollicitudin mi, nec accumsan erat. Morbi viverra sem nunc, egestas consectetur turpis malesuada sed. Nulla dictum mi in tellus dapibus, sed finibus risus aliquet. Duis tempus turpis eu magna mollis malesuada. Nulla porttitor, massa lacinia rutrum bibendum, lectus nibh scelerisque neque, ut euismod dolor libero eget arcu. Morbi a nisi a lorem aliquet placerat ac eu urna. Praesent eget elit vulputate, tempus sem sed, consequat lacus. Morbi ullamcorper, odio pretium consectetur fermentum, lectus mi vehicula odio, id tempor felis sem in nunc. Nullam odio sapien, rutrum quis leo eu, convallis viverra leo. Nunc in lectus pretium, ultricies justo vel, elementum quam.

Cras hendrerit molestie lorem vel dictum. Cras in efficitur orci, quis rhoncus ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent dignissim, urna at lobortis congue, odio sapien finibus massa, a maximus tortor lorem ac ipsum. Nulla eu faucibus nibh, ut condimentum libero. Cras aliquam, dolor in consequat molestie, elit quam sollicitudin odio, sed tempor erat est posuere orci. Cras tempus diam elit, ut sollicitudin arcu sollicitudin sed. In placerat tellus sed elementum euismod. Quisque quis nibh augue. Nunc id ornare sem. Fusce egestas accumsan lectus.

Aliquam erat volutpat. Vestibulum vel finibus ipsum, in convallis risus. Morbi at volutpat turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ut ex eros. Vivamus sit amet lacus pulvinar, scelerisque nisl in, imperdiet turpis. Ut lectus justo, elementum et nibh in, sodales efficitur quam.

Integer a metus sit amet purus aliquet facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pulvinar lorem nec elit bibendum, commodo volutpat justo placerat. Etiam vestibulum cursus aliquet. Donec pellentesque, magna non sollicitudin fermentum, turpis lacus facilisis leo, eget viverra diam neque eu leo. Fusce dictum rutrum arcu nec euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nam aliquam quis justo vel ullamcorper. Mauris sed volutpat arcu, molestie condimentum nulla. Integer et volutpat nibh, eget rhoncus erat. Sed cursus finibus velit vel sodales. Suspendisse bibendum luctus purus, eu porttitor sem vulputate accumsan. Phasellus ullamcorper vitae augue et blandit. Sed felis ipsum, consequat et lacus sit amet, tincidunt ornare leo. Sed rutrum ipsum id dui pretium, ut luctus velit posuere. Proin condimentum ullamcorper hendrerit. Fusce nec laoreet lacus. Nunc auctor massa ac velit blandit convallis. Quisque maximus hendrerit augue, auctor viverra enim sodales vitae. Quisque at arcu nec massa venenatis rhoncus. Fusce quis justo dictum, suscipit lacus at, fermentum risus.
        </LayoutContentColumn>
      </LayoutContent>
      <LayoutFooter>
        <LayoutFooterColumn isSecondary>
          <h3>Footer secondary</h3>
        </LayoutFooterColumn>
        <LayoutFooterColumn isPrimary>
          <h3>Footer primary</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget viverra nisl, nec imperdiet justo. In vitae turpis non nunc venenatis faucibus. Phasellus cursus finibus enim. Morbi commodo, lorem sollicitudin blandit maximus, tortor felis pretium nulla, eget ullamcorper tortor leo vehicula libero. In vitae sollicitudin mi, nec accumsan erat. Morbi viverra sem nunc, egestas consectetur turpis malesuada sed. Nulla dictum mi in tellus dapibus, sed finibus risus aliquet. Duis tempus turpis eu magna mollis malesuada. Nulla porttitor, massa lacinia rutrum bibendum, lectus nibh scelerisque neque, ut euismod dolor libero eget arcu. Morbi a nisi a lorem aliquet placerat ac eu urna. Praesent eget elit vulputate, tempus sem sed, consequat lacus. Morbi ullamcorper, odio pretium consectetur fermentum, lectus mi vehicula odio, id tempor felis sem in nunc. Nullam odio sapien, rutrum quis leo eu, convallis viverra leo. Nunc in lectus pretium, ultricies justo vel, elementum quam.
        </LayoutFooterColumn>
      </LayoutFooter>
    </LayoutContainer>
  </LayoutWrapper>
)
;
