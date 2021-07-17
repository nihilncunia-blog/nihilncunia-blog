import React from 'react';
import { css } from '@emotion/react';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import getTagsAndCategories from '@/utils/mdx/getTagsAndCategories';
import size from '@/data/size';
import Link from 'next/link';
import { GoogleAd } from '@/components/ContentComponents';
import { Box, BoxHeader } from '@/components/LayoutComponensts';
import KeywordPostsPage from '@/pages/illust/keywords/[keyword]';
import PropTypes from 'prop-types';

const KeywordsPage = ({ keywords, }) => {
  const siteData = {
    pageName: '일러스트 키워드 목록',
    pageURL: '/illust/keywords',
  };
  
  const wordStyle = css`
    text-align: center;
    
    & > a {
      border: 2px solid #555555;
      padding: 5px 10px;
      display: inline-block;
      margin: 2px;
      transition: all 0.3s;
      border-radius: 10px;
      color: #555555;
      letter-spacing: -1px;

      &:before {
        content: '\\f1fc';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }

      &:hover {
        color: #ffffff;
        background-color: #333333;
        transition: all 0.3s;
        border: 2px solid #333333;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > a {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > a {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & > a {font-size: ${size[3]};}
      }
    }
  `;
  
  return (
    <>
      <BlogLayout {...siteData}>
        <div id='blog-keywords-page'>
          <Box bottom={'100'} top={'100'}>
            <BoxHeader i='f1fc' w='900' f='Free'>일러스트 키워드 목록</BoxHeader>
            <P>이 페이지는 일러스트와 관련된 키워드들이 모여있는 목록을 보여줍니다. 각 키워드에는 링크가 되어있고 어떤 키워드가 어떤 일러스트와 관련이 있는지 확인 할 수 있는 키워드 별 일러스트 목록을 제공합니다. 숫자는 관련된 일러스트의 수를 의미합니다.</P>
            <div css={wordStyle}>
              {keywords.map((keyword, index) => (
                <Link key={index + keyword.keywordName} href={`/illust/keywords/${keyword.keywordName}`}>
                  <a>{keyword.keywordName} ({keyword.keywordCount}건)</a>
                </Link>
              ))}
            </div>
          </Box>
        </div>
        <GoogleAd pos={'bottom'} margin={'100'} />
      </BlogLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const keywords = await getTagsAndCategories('keywords');
  
  return {
    props: {
      keywords,
    },
  };
};

export default KeywordsPage;

KeywordPostsPage.propTypes = {
  keywords: PropTypes.array,
};