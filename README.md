Kanban Board Project

This project is a Kanban Board application developed using Next.js and React.
The application features drag-and-drop functionality with react-beautiful-dnd and assigns unique IDs to each board using UUID.

Features:

Drag and Drop: Supports drag and drop between lists and cards using react-beautiful-dnd.
Unique IDs: Each board is assigned a unique ID using the uuid library.
React and Next.js: Fast and efficient user interface with modern JavaScript technologies.

Requirements:

To run this project, you need to have the following tools installed on your computer:

Node.js (>= 14.0.0)
npm or yarn package manager

Installation:
Clone the repository: https://github.com/bariskisadal/kanban-board.git  
cd kanban-board

Install the necessary packages:

npm install

# or

yarn install

Running the Project

npm run dev

# or

yarn dev

Packages Used:
next: Framework for React applications.
react: JavaScript library for building user interfaces.
react-beautiful-dnd: Drag-and-drop functionality for React.
react-dom: React package for working with the DOM.
uuid: Library for generating unique IDs.

Project Structure:

├── app
│ ├── board
│ ├── [id]
├── page.tsx
│ ├── page.tsx
│ └── layout.tsx
│ └── global.css
├── components
│ ├── Board.tsx
│ ├── CardItem.tsx
│ ├── Layout.tsx
│ └── TaskList.tsx
├── constanst
│ ├── const.ts
└── README.md

components: React components for the application.
pages: Next.js pages.
public: Static files (icons, etc.).
styles: CSS files.
