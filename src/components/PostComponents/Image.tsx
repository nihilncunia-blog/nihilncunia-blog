import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';

interface Props {
  src?: string;
  alt?: string;
  title?: string;
  top?: string;
  bottom?: string;
}

export const Image = ({
  src, alt, title, top = '40', bottom = '40',
}: Props) => {
  const style = css`
    max-width: 940px;
    box-sizing: border-box;
    margin: ${top}px auto ${bottom}px auto;
    display: block;
    position: relative;
    background-color: #33333310;
    border: 2px solid #33333330;
    padding: 10px;
    border-radius: 10px;

    & > a {
      border: 2px solid #33333350;
      background-color: #ffffff;
      border-radius: 10px;
      color: #333333;
      padding: 5px 10px;
      margin: 20px auto 0 auto;
      display: block;
      text-align: center;
      font-weight: 500;
      width: 40%;

      & > span {
        font-size: 90%;
        color: inherit;
      }

      &:before {
        content: '\\f065';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 10px;
      }

      &:hover {
        background-color: #333333;
        color: #ffffff;
        border: 2px solid #333333;
      }
    }

    & > div {
      background-color: #333333;
      border-radius: 10px;
      padding: 5px;

      & > img {
        margin: 0 auto;
        max-width: 100%;
        display: block;
        border-radius: 10px;
      }
    }

    & > figcaption {
      margin-top: 5px;
      text-align: center;
      font-style: italic;
      color: #333333;
      letter-spacing: -1px;

      & > span {
        font-size: 90%;
        color: inherit;
      }

      &:before {
        content: '\\f03e';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      figcaption, a {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      figcaption, a {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      figcaption, a {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <figure className='post-image-block' css={style}>
        <div>
          <img src={src} alt={alt} title={title} />
        </div>
        <figcaption>
          <span>{alt}</span>
        </figcaption>
        <a href={src} target='_blank' rel='noreferrer noopener'>
          <span>크게 보기 (새 창)</span>
        </a>
      </figure>
    </>
  );
};