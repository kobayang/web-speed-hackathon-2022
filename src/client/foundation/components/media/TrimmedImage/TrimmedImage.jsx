import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/**
 * アスペクト比を維持したまま、要素のコンテンツボックス全体を埋めるように拡大縮小したサイズを返す
 */

/**
 * @typedef Props
 * @property {string} src
 * @property {number} width
 * @property {number} height
 */

/** @type {React.VFC<Props>} */
export const TrimmedImage = ({ height: initialHeight, src, width }) => {
  const imgRef = useRef(null);
  const [height, setHeight] = useState(undefined);

  useEffect(() => {
    const imgElm = imgRef.current;
    if (!imgElm) return;
    const rectWidth = imgElm.getBoundingClientRect().width;
    setHeight(initialHeight * (rectWidth / width));
  }, [initialHeight, width]);

  return <Img ref={imgRef} src={src} style={{ height, width }} />;
};

const Img = styled.img`
  object-fit: cover;
  max-width: 100%;
`;
