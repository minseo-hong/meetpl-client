import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { FaSchool } from 'react-icons/fa';
import { HiTemplate } from 'react-icons/hi';

import PageHeading from '../components/PageHeading';
import Roadmap from '../components/Roadmap';
import SectionHeadingContent from '../components/SectionHeadingContent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

interface HeadingButtonProps {
  children: React.ReactNode;
}

interface ShareIconButtonProps {
  name: string;
  iconUrl: string;
}

interface AgendaProps {
  seq: number;
  name: string;
  placeholder?: string;
  value?: string;
}

interface TeamSpaceLinkProps {
  name: string;
  iconUrl: string;
  iconAlt: string;
  bgColor?: string;
  textColor?: string;
}

interface TeamSpaceLinkBlockProps {
  bgcolor: string;
}

interface TeamSpaceNameProps {
  textcolor: string;
}

interface IconTextProps {
  text: string;
  iconUrl: string;
  iconAlt: string;
}

interface RightTitleSectionProps {
  children: React.ReactNode;
}

interface RightSectionListItemProps {
  children: React.ReactNode;
}

const data = [
  {
    num: 1,
    title: '온보딩',
    contents: ['역할분배'],
  },
  {
    num: 2,
    title: '자료수집',
    contents: ['초기 설정', '자료 제작', '기능 기획'],
  },
  { num: 3, title: '연구설계', contents: ['설문 조사', '자료 분석'] },
  {
    num: 4,
    title: '발표준비',
    contents: ['발표 레이아웃', '발표 PPT 제작'],
  },
  { num: 5, title: '최종 마무리', contents: ['발표 제작'] },
];

const PurpleButton = ({ children }: HeadingButtonProps) => {
  return (
    <button className="rounded-xl bg-tagPurple2 px-4 py-3 font-semibold text-blue1">
      {children}
    </button>
  );
};

const ShareIconButton = ({ name, iconUrl }: ShareIconButtonProps) => {
  return (
    <button className="flex items-center gap-2">
      <div className="flex h-7 w-7 justify-end">
        <img src={iconUrl} alt={name} className="h-full" />
      </div>
      <span>{name}</span>
    </button>
  );
};

const Agenda = ({ seq, name, placeholder, value }: AgendaProps) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="rounded-2xl bg-tagPurple2 px-6 py-4 text-xl font-medium shadow-lg">
        <span className="font-bold">안건 {seq}.</span>&nbsp;{name}
      </div>
      <textarea
        className="w-full resize-none rounded-2xl px-6 py-4 leading-6 shadow-lg outline-none"
        rows={4}
        placeholder={placeholder}
        defaultValue={value}
      ></textarea>
    </div>
  );
};

const TeamSpaceLinkBlock = styled(Link)<TeamSpaceLinkBlockProps>`
  background-color: ${(props) => props.bgcolor};
`;

const TeamSpaceName = styled.span<TeamSpaceNameProps>`
  color: ${(props) => props.textcolor};
`;

const TeamSpaceLink = ({
  name,
  iconUrl,
  iconAlt,
  bgColor = '#FFFFFF',
  textColor = '#000000',
}: TeamSpaceLinkProps) => {
  return (
    <TeamSpaceLinkBlock
      to="#"
      className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-white shadow"
      bgcolor={bgColor}
    >
      <i className="block h-1/2 w-1/2">
        <img src={iconUrl} alt={iconAlt} className="h-full object-cover" />
      </i>
      <TeamSpaceName className="text-xs" textcolor={textColor}>
        {name}
      </TeamSpaceName>
    </TeamSpaceLinkBlock>
  );
};

const IconText = ({ text, iconUrl, iconAlt }: IconTextProps) => {
  return (
    <div className="flex items-center gap-2">
      <i className="h-4 w-4">
        <img src={iconUrl} alt={iconAlt} className="w-full" />
      </i>
      <span className="text-xs font-medium text-gray3">{text}</span>
    </div>
  );
};

const RightSectionTitle = ({ children }: RightTitleSectionProps) => {
  return (
    <h2 className="mt-7">
      <span className="font-semibold">{children}</span>
    </h2>
  );
};

const RightSectionListItemBlock = styled.li`
  & + & {
    border-top: 1px solid #e5e5e5;
  }
`;

const RightSectionListItem = ({ children }: RightSectionListItemProps) => {
  return (
    <RightSectionListItemBlock>
      <Link to="#" className="flex items-center justify-between py-3">
        <span className="text-sm">{children}&nbsp;&gt;</span>
        <span className="text-sm text-gray3">연결된 스텝</span>
      </Link>
    </RightSectionListItemBlock>
  );
};

const Management = () => {
  const [progress] = useState(50);

  return (
    <div className="flex">
      {/* 왼쪽 영역 */}
      <div className="flex-1 flex-col space-y-6 px-14 py-12">
        {/* 페이지 제목 */}
        <PageHeading title="내 회의록, 로드맵 관리" previous="공유" />
        {/* 헤딩 섹션 */}
        <section className="flex justify-between rounded-2xl bg-white px-6 py-4">
          <div className="flex w-full justify-between">
            <SectionHeadingContent title="경영 팀플 발표" subtitle="" />
            <div className="flex gap-5">
              <PurpleButton>원본 데이터 보기</PurpleButton>
              <PurpleButton>
                <span className="flex items-center gap-1">
                  <span>밋플에 작성하기</span>
                  <i className="h-4 w-4">
                    <img
                      src="/icons/edit-icon-purple.svg"
                      alt="수정 아이콘"
                      className="w-full"
                    />
                  </i>
                </span>
              </PurpleButton>
            </div>
          </div>
        </section>
        {/* 로드맵 섹션 */}
        <section className="rounded-2xl bg-white py-8">
          <h3 className="mb-5 text-center text-2xl font-bold">
            IT 프로젝트(로드맵 이름)
          </h3>
          <Roadmap data={data} />
        </section>
        {/* 템플릿 수정 섹션 */}
        <section className="rounded-2xl bg-white px-8 py-8">
          {/* 템플릿 수정 헤딩 */}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">공유하기</h3>
            <div className="flex gap-5">
              <ShareIconButton name="Notion" iconUrl="/icons/notion-icon.png" />
              <ShareIconButton
                name="Google Docs"
                iconUrl="/icons/google-docs-icon.png"
              />
              <PurpleButton>
                <span className="flex items-center gap-1">
                  <span>복사하기</span>
                  <i className="h-4 w-4">
                    <img
                      src="/icons/copy-icon-purple.svg"
                      alt="복사 아이콘"
                      className="w-full"
                    />
                  </i>
                </span>
              </PurpleButton>
            </div>
          </div>
          {/* 템플릿 안건 모음 */}
          <div className="mt-6 flex flex-col space-y-6">
            <Agenda
              seq={1}
              name="자기소개"
              value="다들 만나서 반가워요 !  각자 학번이랑 이름을 말씀해주실 수 있나요 ?"
            />
            <Agenda
              seq={2}
              name="역할분담"
              value="그럼 각자 자료조사할지 뭘 할지 정해봅시다"
            />
            <Agenda
              seq={3}
              name="타임라인 작성"
              value="최종발표일 : 12/4, 장표 디자인 시작 :11/24"
            />
          </div>
        </section>
      </div>
      {/* 오른쪽 영역 */}
      <div className="w-80 bg-gray8 px-8 py-6">
        {/* 진행률 차트 */}
        <div className="flex justify-center">
          <div className="w-2/3">
            <CircularProgressbarWithChildren
              value={100 - progress}
              strokeWidth={20}
              styles={buildStyles({
                rotation: 1,
                strokeLinecap: 'butt',
                pathTransitionDuration: 0.5,
                pathColor: '#DDE1EA',
                trailColor: '#5257D6',
              })}
            >
              <span className="translate-y-1 text-sm">진행률</span>
              <span>
                <b className="text-[2.5rem] font-semibold">{progress}</b>%
              </span>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        {/* 팀 이름 */}
        <h1 className="mt-5 flex w-full justify-center">
          <div className="flex items-center gap-1 text-xl font-bold">
            <span>경영정보시스템</span>
            <i className="h-7 w-7">
              <img
                src="/icons/edit-icon-black.svg"
                alt="수정 아이콘"
                className="w-full"
              />
            </i>
          </div>
        </h1>
        {/* 팀 카테고리 */}
        <div className="mt-3 flex w-full justify-center">
          <div className="flex items-center gap-2 text-sm">
            <i className="text-tagPurple1">
              <FaSchool />
            </i>
            <span className="text-gray-600">팀플</span>
          </div>
        </div>
        {/* 팀 스페이스 링크 */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-3">
            <TeamSpaceLink
              name="Notion"
              iconUrl="/icons/notion-icon.png"
              iconAlt="노션 아이콘"
            />
            <TeamSpaceLink
              name="Figma"
              iconUrl="/icons/figma-icon.png"
              iconAlt="피그마 아이콘"
              bgColor="#000000"
              textColor="#FFFFFF"
            />
            <TeamSpaceLink
              name="Jira"
              iconUrl="/icons/jira-icon.jpg"
              iconAlt="지라 아이콘"
              textColor="#1C79F7"
            />
          </div>
        </div>
        {/* 지난 로드맵 */}
        <section>
          <RightSectionTitle>지난 로드맵</RightSectionTitle>
          <div className="mt-3 flex w-full flex-col rounded-2xl bg-white px-7 py-4">
            <div className="flex justify-start">
              <div className="flex w-auto items-center gap-1 rounded-full bg-[#E3F7FD] px-3 py-1">
                <i className="text-[#7DD8F4]">
                  <HiTemplate />
                </i>
                <span className="text-xs font-medium text-gray-600">
                  동아리 / 학회
                </span>
              </div>
            </div>
            <h3 className="mt-3 font-semibold">홍보 영상 제작 팀플 로드맵</h3>
            <div className="mt-3 flex items-center gap-3">
              <IconText
                text="43팀 사용중"
                iconUrl="/icons/people-icon.svg"
                iconAlt="사용자 아이콘"
              />
              <IconText
                text="10 steps"
                iconUrl="/icons/stair.svg"
                iconAlt="계단 아이콘"
              />
            </div>
            <Link to="#" className="mt-5 flex justify-end">
              <span className="text-xs text-gray4">자세히 보기 &gt;</span>
            </Link>
          </div>
        </section>
        {/* 회의록 템플릿 */}
        <section>
          <RightSectionTitle>회의록 리스트</RightSectionTitle>
          <ul className="mt-3 flex w-full flex-col rounded-2xl bg-white px-7 py-2">
            <RightSectionListItem>역할분배 회의</RightSectionListItem>
            <RightSectionListItem>아이데이션 회의</RightSectionListItem>
            <RightSectionListItem>1차 회의</RightSectionListItem>
            <RightSectionListItem>2차 회의</RightSectionListItem>
            <RightSectionListItem>최종 기획서 회의</RightSectionListItem>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Management;
