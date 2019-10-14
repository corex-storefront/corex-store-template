import React, { Suspense, useRef } from 'react';
import { graphqlArtifacts, Relay } from 'corex-store-interface';

function ModuleContainer({ viewer, ...props }) {
  const elements = useRef(
    viewer.template.cubes.map((cube) => {
      const Element = React.lazy(() => import(`../modules/${cube.cubeId}`));
      return (
        <Suspense
          key={cube.id}
          fallback={
            <div className="bg-black-10" style={{ height: '200px' }}>
              Loading {cube.cubeId}
            </div>
          }>
          <Element cube={cube} {...props} />
        </Suspense>
      );
    }),
  );

  return <main>{elements.current}</main>;
}

const ModuleContainerFragment = Relay.createRefetchContainer(
  ModuleContainer,
  { viewer: graphqlArtifacts.ContentFragment },
  graphqlArtifacts.ContentRefetchFragmnet,
);

function Partial({ data, ...props }) {
  const viewer = (data && data.viewer) || null;
  if (!viewer) return null;
  return <ModuleContainerFragment viewer={viewer} {...props} />;
}

export default Partial;
