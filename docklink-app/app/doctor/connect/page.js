import React from "react";

export default function Component() {
  return (
    <div className="p-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Avatar className="w-10 h-10 border">
            <image alt="Dr. Jane Foster" src="/placeholder-doctor.jpg" />
          </Avatar>
          <div className="space-y-0">
            <h2 className="text-lg font-bold">Dr. Jane Foster</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
          </div>
        </div>
        <Button size="sm">Call</Button>
      </div>

      <div className="grid items-start max-w-3xl w-full px-4 py-6 gap-6 relative">
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="rounded-full border border-gray-200 dark:border-gray-800 p-2 flex items-center justify-center">
            <PhoneCallIcon className="h-6 w-6" />
          </button>
          <button className="rounded-full border border-gray-200 dark:border-gray-800 p-2 flex items-center justify-center">
            <VideoIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Rest of the existing content */}
      </div>

      <div className="flex w-full items-end">
        <Input className="rounded-full flex-1" placeholder="Type a message" />
        <Button className="h-auto px-3">➕</Button>
        <Button className="h-auto px-7 bg-gray-300 text-black">Send</Button>
      </div>
    </div>
  );
}

function PhoneCallIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* SVG paths */}
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* SVG paths */}
    </svg>
  );
}
