import React, { useState, useEffect, Suspense } from 'react';

function SvgLoader({ name, icon }: any) {
  const [Svg, setSvg] = useState<any>(null);
  useEffect(() => {
    if (name !== 'empty') {
      setSvg(
        React.lazy(() => import(`./svgs/${icon ? `icon-${name}` : name}.svg`)),
      );
    }
  }, [name, icon]);

  return <Suspense fallback={<span />}>{Svg && <Svg />}</Suspense>;
}

SvgLoader.defaultProps = {
  icon: true,
};

export default SvgLoader;
