
import React from 'react';
import { ToolbarIcon, MoveAndZoomIcon, WorkWithTeamIcon, StickiesIcon, StampsIcon, TimerIcon, EmotesIcon, CursorChatIcon } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="absolute top-4 left-4 z-20 w-80 bg-white rounded-lg shadow-lg p-6 space-y-8 overflow-y-auto h-[calc(100vh-2rem)]">
      <AboutTemplate />
      <QuickTips />
    </aside>
  );
};

const AboutTemplate: React.FC = () => (
  <div>
    <h2 className="text-lg font-bold mb-1">About this template</h2>
    <p className="text-sm text-gray-600 mb-4">Outline the requirements, personas, and goals of your product</p>
    <div className="grid grid-cols-2 gap-4 text-xs">
      <div>
        <h3 className="font-bold text-gray-500 mb-2">GOOD FOR</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Brainstorming your product's purpose, features, and functionality</li>
          <li>Socializing your product requirements with stakeholders</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-gray-500 mb-2">PEOPLE</h3>
        <p className="text-gray-600">1 to as many as you want!</p>
        <h3 className="font-bold text-gray-500 mt-4 mb-2">MORE TEMPLATES</h3>
        <ul className="space-y-1">
          <li><a href="#" className="text-blue-600 underline">Business model canvas</a></li>
          <li><a href="#" className="text-blue-600 underline">Project retrospective</a></li>
          <li><a href="#" className="text-blue-600 underline">Strategic plan</a></li>
        </ul>
      </div>
    </div>
  </div>
);

const QuickTips: React.FC = () => (
  <div>
    <h2 className="text-lg font-bold mb-4">Quick tips & HELPFUL TOOLS</h2>
    <div className="space-y-4">
      <TipCard title="Toolbar" icon={<ToolbarIcon />} description="It's at the bottom of your canvas—select objects, stamps, and anything you need." />
      <TipCard title="Move and Zoom" icon={<MoveAndZoomIcon />} description="Holding Spacebar, use the hand tool to pan around. Zoom controls are in the top right corner." />
      <TipCard title="Work with your team" icon={<WorkWithTeamIcon />} description="FigJam's better with others. Click the Share button above to invite your team." />
      <TipCard title="Stickies" icon={<StickiesIcon />} description="Press 'S' to quickly add a sticky to the canvas." />
      <TipCard title="Stamps" icon={<StampsIcon />} description="Liven up your file on the canvas with a stamp. Set up an avatar in account settings to enable avatar stamping." />
      <TipCard title="Timer" icon={<TimerIcon />} description="Set timers for to time-box your activities. Use transitions so you can stay on schedule, or vote when time is up. Combine the timer with other delightful features." />
      <TipCard title="Emotes" icon={<EmotesIcon />} description="Quickly access the emoji wheel to add live reactions when collaborating with others." />
      {/* FIX: Corrected component name from Tip-Card to TipCard. */}
      <TipCard title="Cursor chat" icon={<CursorChatIcon />} description="Chat with others in the file by pressing '/'. Or try holding down E to enter cursor chat." />
    </div>
  </div>
);

interface TipCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const TipCard: React.FC<TipCardProps> = ({ title, icon, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-24 h-20 bg-gray-50 rounded-md flex items-center justify-center">
      {icon}
    </div>
    <div className="text-xs">
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);


export default Sidebar;
