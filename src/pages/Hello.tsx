import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React from 'react';


/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
    title: string;
    index: number;
    desc: string;
    href: string;
  }> = ({ title, href, index, desc }) => {


    return (
      <div
        style={{
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '22px',
          padding: '16px 19px',
          minWidth: '220px',
          flex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              lineHeight: '22px',
              backgroundSize: '100%',
              textAlign: 'center',
              padding: '8px 16px 16px 12px',
              color: '#FFF',
              fontWeight: 'bold',
              backgroundImage:
                "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
            }}
          >
            {index}
          </div>
          <div
            style={{
              fontSize: '16px',
              paddingBottom: 8,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            fontSize: '14px',
            textAlign: 'justify',
            lineHeight: '22px',
            marginBottom: 8,
          }}
        >
          {desc}
        </div>
        <a href={href} target="_blank" rel="noreferrer">
          了解更多 {'>'}
        </a>
      </div>
    );
  };


const HelloWordPage: React.FC = () => {
    return (
        <PageContainer>
          <Card
            style={{
              borderRadius: 8,
            }}

          >
            <div
              style={{
                backgroundPosition: '100% -30%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '274px auto',
                backgroundImage:
                  "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  //color: token.colorTextHeading,
                }}
              >
                HELLO WORLD
              </div>
              <p
                style={{
                  fontSize: '14px',
                  //color: token.colorTextSecondary,
                  lineHeight: '22px',
                  marginTop: 16,
                  marginBottom: 32,
                  width: '65%',
                }}
              >
                 这是一个基本的测试页面，体验一下antd pro 的开发方式。
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 16,
                }}
              >
                <InfoCard
                  index={1}
                  href="https://umijs.org/docs/introduce/introduce"
                  title="了解 umi"
                  desc="umi 是一个可扩展的企业级前端应用框架,umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。"
                />
                <InfoCard
                  index={2}
                  title="GitHUB"
                  href="https://www.github.com/"
                  desc="this is github "
                />
                <InfoCard
                  index={3}
                  title="CodeQL"
                  href="https://codeql.github.com"
                  desc="CodeQL: the libraries and queries that power security researchers around the world, as well as code scanning in GitHub Advanced Security"
                />
              </div>
            </div>
          </Card>
        </PageContainer>
      );

};


export default HelloWordPage;