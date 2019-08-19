import { useEffect } from 'react';

const Meta = (props) => {
  const cube = props.cube;
  const blocks = cube.blocks;
  const [block] = blocks || [];
  const [title, description, image] = block.props;

  useEffect(() => {
    document.title = title.value;
  }, [title, description, image]);

  return null;
};

export default Meta;
