import React from "react";
import styled from "styled-components";

import { useImageSize } from "../../../../components/media/TrimmedImage";

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

/**
 * @typedef Props
 * @type {object}
 * @property {string | null} url
 */

/** @type {React.VFC<Props>} */
export const HeroImage = ({ url }) => {
  const { ref, height, width } = useImageSize({
    calc: true,
    height: 735,
    width: 1024,
  });
  return (
    <Wrapper ref={ref} style={{ height, width }}>
      {url && <Image alt="" src={url} style={{ height, width }} />}
    </Wrapper>
  );
};
