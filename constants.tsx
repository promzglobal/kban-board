
import React from 'react';

export const CursorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.34315 3.46447L18.4645 15.5858L14.9289 19.1213L2.80762 7.00001L6.34315 3.46447Z" fill="currentColor"/>
  </svg>
);

export const HandIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18V13H11V18H9ZM13 18V13H15V18H13ZM5 18V13H7V18H5ZM17 11.5C17 10.12 15.88 9 14.5 9C13.12 9 12 10.12 12 11.5V12H5V10C5 9.45 5.45 9 6 9H10.5C11.33 9 12 8.33 12 7.5C12 6.67 11.33 6 10.5 6H6.5C5.67 6 5 6.67 5 7.5V8H3V7.5C3 5.57 4.57 4 6.5 4H10.5C12.43 4 14 5.57 14 7.5C14 9.43 12.43 11 10.5 11H9V11.5C9 12.33 9.67 13 10.5 13H11.5C12.88 13 14 11.88 14 10.5C14 9.12 12.88 8 11.5 8H10V6H8V7.5C8 8.33 8.67 9 9.5 9H10V11H12V10.5C12 9.67 11.33 9 10.5 9H6V11H12C12 12.38 13.12 13.5 14.5 13.5C15.88 13.5 17 12.38 17 11V11.5Z" fill="currentColor"/>
    <path d="M19 12H17V11.5C17 10.12 15.88 9 14.5 9C13.12 9 12 10.12 12 11.5C12 12.88 13.12 14 14.5 14C15.88 14 17 12.88 17 11.5V11H19V12ZM19 18V13H21V18H19Z" fill="currentColor"/>
  </svg>
);


export const PenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
  </svg>
);

export const StickyNoteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="#FBBF24"/>
  </svg>
);

export const CircleIcon = () => <div className="w-5 h-5 rounded-full border-2 border-purple-500"></div>;
export const SquareIcon = () => <div className="w-5 h-5 border-2 border-purple-500"></div>;

export const TextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 4V7H7.5V19H10.5V7H15.5V4H2.5ZM17.5 9V12H22.5V19H25.5V12H30.5V9H17.5Z" transform="translate(-4 -1)" fill="currentColor"/>
  </svg>
);

export const TableIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20V20H4V4ZM6 6V10H10V6H6ZM12 6V10H18V6H12ZM6 12V18H10V12H6ZM12 12V18H18V12H12Z" fill="currentColor"/>
  </svg>
);

export const StampIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.24 6 7 8.24 7 11C7 12.76 8.07 14.28 9.5 14.82V16H14.5V14.82C15.93 14.28 17 12.76 17 11C17 8.24 14.76 6 12 6ZM12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13Z" fill="currentColor"/>
  </svg>
);

export const EmoteIcon = () => <>😂</>;

export const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>
  </svg>
);

export const MinusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 13H5V11H19V13Z" fill="currentColor"/>
    </svg>
  );

// Icons for Sidebar
export const ToolbarIcon = () => <div className="w-20 h-5 bg-gray-200 rounded-sm border border-gray-300"></div>;
export const MoveAndZoomIcon = () => <div className="w-16 h-10 bg-gray-200 rounded border border-gray-300 flex items-center justify-center text-xs text-gray-500">Spacebar</div>;
export const WorkWithTeamIcon = () => <div className="w-20 h-10 bg-gray-200 rounded border border-gray-300 flex items-center justify-end pr-2"><div className="w-8 h-4 bg-purple-300 rounded"></div></div>;
export const StickiesIcon = () => <div className="relative w-12 h-12"><div className="absolute top-0 left-2 w-8 h-8 bg-yellow-200 rounded-sm shadow"></div><div className="absolute top-2 left-0 w-8 h-8 bg-pink-200 rounded-sm shadow"></div></div>;
export const StampsIcon = () => <div className="text-4xl">🙂</div>;
export const TimerIcon = () => <div className="text-2xl font-mono text-gray-600">02:00</div>;
export const EmotesIcon = () => <div className="text-4xl">👋</div>;
export const CursorChatIcon = () => <div className="text-xs p-1 bg-purple-200 rounded text-purple-800">Love this idea!</div>;

