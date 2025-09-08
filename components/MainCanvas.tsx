
import React from 'react';

const MainCanvas: React.FC = () => {
  return (
    <main className="flex-1 pl-[22rem] pt-12 pb-24 overflow-auto">
      <div className="flex items-start justify-center gap-6 p-8">
        <WhatColumn />
        <WhoColumn />
        <WhyColumn />
      </div>
    </main>
  );
};

const ContentBoard: React.FC<{ title: string; subtitle?: string; titleBg: string; children: React.ReactNode; className?: string }> = ({ title, subtitle, titleBg, children, className }) => (
  <div className={`bg-white rounded-lg shadow-md w-96 flex-shrink-0 ${className}`}>
    <div className={`p-4 rounded-t-lg ${titleBg}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle && <p className="text-xs text-gray-700 mt-1">{subtitle}</p>}
    </div>
    <div className="p-4 space-y-4">
      {children}
    </div>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
  <div>
    <h3 className="font-bold mb-2">{title}</h3>
    {children}
  </div>
);

const StickyNote: React.FC<{ color: string; children: React.ReactNode; size?: 'small' | 'large' }> = ({ color, children, size = 'small' }) => (
  <div className={`rounded-md shadow-sm ${color} ${size === 'small' ? 'p-3 text-xs' : 'p-4 text-sm'}`}>
    {children}
  </div>
);


const WhatColumn: React.FC = () => (
  <ContentBoard title="What" titleBg="bg-pink-200">
    <Section title="Problem">
      <StickyNote color="bg-red-200" size="large">Insert the opportunity you're trying to solve with the product here</StickyNote>
    </Section>
    <Section title="Approach">
      <div className="grid grid-cols-2 gap-4">
        <StickyNote color="bg-pink-200">Brainstorming Session</StickyNote>
        <StickyNote color="bg-pink-200">User Interviews</StickyNote>
        <StickyNote color="bg-pink-200">Competitive Analysis</StickyNote>
        <StickyNote color="bg-pink-200">Data Analysis</StickyNote>
      </div>
    </Section>
    <Section title="Purpose">
      <div className="grid grid-cols-2 gap-4">
        <StickyNote color="bg-orange-200">Solve user pain points</StickyNote>
        <StickyNote color="bg-orange-200">Increase engagement</StickyNote>
        <StickyNote color="bg-orange-200">Drive revenue growth</StickyNote>
        <StickyNote color="bg-orange-200">Improve user satisfaction</StickyNote>
      </div>
    </Section>
  </ContentBoard>
);

const WhoColumn: React.FC = () => (
    <ContentBoard title="Who" subtitle="Who are they, what are their needs, behaviors, attitude, needs/challenges, goals, and how can we help?" titleBg="bg-green-200">
        <PersonaSection title="Primary personas" />
        <PersonaSection title="Secondary personas" />
    </ContentBoard>
);

const PersonaSection: React.FC<{ title: string }> = ({ title }) => (
    <Section title={title}>
        <div className="p-3 bg-gray-50 rounded-md border flex items-center gap-3">
            <div className="text-3xl">🙂</div>
            <div>
                <p className="font-bold">Name</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
            <StickyNote color="bg-green-200">Demographics</StickyNote>
            <StickyNote color="bg-green-200">Attitude</StickyNote>
            <StickyNote color="bg-green-200">Needs / Challenges</StickyNote>
            <StickyNote color="bg-green-200">Behaviors</StickyNote>
            <StickyNote color="bg-green-200">Goals</StickyNote>
            <StickyNote color="bg-green-200">How can we help?</StickyNote>
        </div>
    </Section>
);

const WhyColumn: React.FC = () => (
    <ContentBoard title="Why" subtitle="Insert high level and long term goals here" titleBg="bg-blue-200">
        <Section title="Success metrics">
            <div className="grid grid-cols-2 gap-4">
                <StickyNote color="bg-blue-200">Metric 1</StickyNote>
                <StickyNote color="bg-blue-200">Metric 2</StickyNote>
                <StickyNote color="bg-blue-200">Metric 3</StickyNote>
                <StickyNote color="bg-blue-200">Metric 4</StickyNote>
                <StickyNote color="bg-blue-200">Metric 5</StickyNote>
                <StickyNote color="bg-blue-200">Metric 6</StickyNote>
            </div>
        </Section>
        <Section title="Value proposition">
            <StickyNote color="bg-purple-200" size="large">Insert your value proposition here</StickyNote>
        </Section>
    </ContentBoard>
);


export default MainCanvas;
