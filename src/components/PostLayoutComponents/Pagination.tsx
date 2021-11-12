import Link from 'next/link';
import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size.data';
import { IPostString } from '@/types';

interface Props {
  type?: IPostString;
  prev?: number;
  next?: number;
  current?: number;
  total?: number;
  top?: string;
  bottom?: string;
}

export const Pagination = ({
  prev, next, current, total, type, top = '50', bottom = '100',
}: Props) => {
  const isFirst = current === 1;
  const isLast = current === total;

  const firstPath = `/${type}/page/1`;
  const lastPath = `/${type}/page/${total}`;
  const prevPath = `/${type}/page/${prev}`;
  const nextPath = `/${type}/page/${next}`;

  const paginatorStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #ffffff;
    box-shadow: 0 0 10px -4px #333333;
    letter-spacing: -1px;
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    & > #page-counter {
      margin-left: 10px;
      margin-right: 10px;
      color: #333333;
    }

    & > span > span#page-to-first,
    & > span > span#page-to-prev,
    & > span > span#page-to-next,
    & > span > span#page-to-last,
    & > span > a#page-to-first,
    & > span > a#page-to-prev,
    & > span > a#page-to-next,
    & > span > a#page-to-last {
      &:before {
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
      }
    }

    & > span > span#page-to-first,
    & > span > span#page-to-prev,
    & > span > span#page-to-next,
    & > span > span#page-to-last {
      padding: 0 8px;
      margin: 3px;
      display: inline-block;
      color: #aaaaaa;
      background-color: #33333310;
      border-radius: 5px;
    }

    & > span > a#page-to-first,
    & > span > a#page-to-prev,
    & > span > a#page-to-next,
    & > span > a#page-to-last {
      padding: 0 8px;
      margin: 3px;
      display: inline-block;
      border-radius: 5px;
      font-weight: 500;
      background-color: #33333330;
      color: #555555;

      &:hover {
        background-color: #333333;
        color: #ffffff;
      }
    }

    & > span > span#page-to-first:before,
    & > span > a#page-to-first:before {content: '\\f100';}

    & > span > span#page-to-prev:before,
    & > span > a#page-to-prev:before {content: '\\f104';}

    & > span > span#page-to-next:before,
    & > span > a#page-to-next:before {content: '\\f105';}

    & > span > span#page-to-last:before,
    & > span > a#page-to-last:before {content: '\\f101';}

    @media (min-width: 1px) and (max-width: 600px) {
      & a,
      & span {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & a,
      & span {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & a,
      & span {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <div id='blog-post-paginator' css={paginatorStyle}>
        <span id='prev'>
          {
            !isFirst
              ? <Link href={firstPath} passHref><a id='page-to-first' /></Link>
              : <span id='page-to-first' />
          }
          {
            !isFirst
              ? <Link href={prevPath} passHref><a id='page-to-prev' /></Link>
              : <span id='page-to-prev' />
          }
        </span>
        <span id='page-counter'>{current} / {total}</span>
        <span id='next'>
          {
            !isLast
              ? <Link href={nextPath} passHref><a id='page-to-next' /></Link>
              : <span id='page-to-next' />
          }
          {
            !isLast
              ? <Link href={lastPath} passHref><a id='page-to-last' /></Link>
              : <span id='page-to-last' />
          }
        </span>
      </div>
    </>
  );
};