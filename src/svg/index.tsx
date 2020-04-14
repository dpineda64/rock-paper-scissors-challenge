import React, { useState, useEffect, Suspense } from 'react';
import { capitalize } from '../utils';

function SvgLoader({ name, icon }: any) {
  const [Svg, setSvg] = useState<any>(null);
  useEffect(() => {
    if (name !== 'empty') {
      const iconName = capitalize(name);
      const sv = React.lazy(() => import(`../icons/${iconName}.js`));
      setSvg(sv);
    }
  }, [name, icon]);

  return <Suspense fallback={<span />}>{Svg && <Svg />}</Suspense>;
}

SvgLoader.defaultProps = {
  icon: true,
};

export default SvgLoader;
