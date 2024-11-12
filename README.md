# NeuraNotes

This project is a modern web application for co-working with AI-integrations that leverages several advanced tools and technologies for building a scalable, efficient, and secure application. Below is an overview of the tech stack used and how each component contributes to the project's functionality.

Try the [Live version here](https://neura-notes-roysignalers-projects.vercel.app/).

## Key Features

- User Authentication: Managed by Clerk, enabling secure user registration, login, and session management.
- Real-Time Collaboration: Liveblocks allows users to work collaboratively in real-time, supported by Firebase Firestore for data storage.
- Responsive UI: Built with Tailwind CSS for a responsive, mobile-friendly design.
- Server-Side and Client-Side Rendering: Utilizing Next.js 14’s server/client components to optimize page load times and performance.
- Edge-Optimized Functions: Using Cloudflare Workers and Pages for quick response times and global reach.
- AI-Powered Features: Integrated OpenAI for document summarization and other NLP tasks.

## Tech Stack

### Next.js 14

Description: A powerful React framework that enables server-side rendering and static site generation.
Usage: The application is built using Next.js 14, which includes both server and client components, enhancing performance and scalability.
Key Features:

- Server/Client components
- Server Actions

### React.js

Description: A JavaScript library for building user interfaces, particularly single-page applications.
Usage: Used as the core UI library within the Next.js framework, providing a reactive and component-based structure.

### Tailwind CSS

Description: A utility-first CSS framework that allows for fast and responsive UI styling.
Usage: Applied throughout the application to create a consistent and customizable UI with minimal CSS code.

### Firebase Firestore

Description: A flexible, scalable NoSQL database from Firebase.
Usage: Used as the primary database for storing application data, such as user information and documents.

### Clerk

Description: A complete user management and authentication solution.
Usage: Integrated for handling user authentication and session management, including features like sign-in and sign-up processes.

### ShadCN

Description: A component library for building accessible and customizable UI components.
Usage: Provides reusable components that ensure accessibility across the application.

### TypeScript

Description: A strongly typed programming language that builds on JavaScript by adding static types.
Usage: Used throughout the project for type safety, reducing runtime errors and improving code maintainability.

### Vercel

Description: A cloud platform for static sites and serverless functions, which powers the Next.js framework.
Usage: Used for hosting the application, providing deployment and serverless functions, and handling server-side rendering.

### OpenAI

Description: An API for accessing powerful language models.
Usage: Integrated to perform various AI-driven tasks, such as summarizing documents or answering questions.

### Liveblocks

Description: A real-time collaboration platform that allows multiple users to work together in shared spaces.
Usage: Used to manage live sessions, generate session tokens, and handle real-time document editing and user presence.

### Cloudflare Pages

Description: A platform for deploying static websites and frontend applications.
Usage: Hosts parts of the application’s frontend or static assets.

### Cloudflare Workers

Description: A serverless computing platform that runs code at the edge.
Usage: Powers backend functionality for handling HTTP requests and running serverless code, enhancing performance with edge computing.

### Cloudflare C3

Description: A system on Cloudflare's edge network for handling specific routing and processing needs.
Usage: Enables efficient communication between Cloudflare services and other parts of the stack.

### Hono

Description: A framework for building Cloudflare Worker applications with a simple routing system.
Usage: Provides routing for Cloudflare Workers, such as handling CORS and creating RESTful API endpoints (/hello-world).

### AI Bindings

Description: Connects AI capabilities with the application, likely a feature of Cloudflare or OpenAI integration.
Usage: Used to bind AI-powered features, such as language processing or data handling, to different parts of the app.

### Getting Started

To get started with this project, clone the repository and install dependencies:

```bash
git clone https://github.com/Roysignaler/neura-notes.git
cd neura-notes
npm install
```

Environment Variables
Make sure to add environment variables for Firebase, Clerk, OpenAI, and other services as required. You may set these in a .env.local file.

### Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment

This application is hosted on Vercel. To deploy your own version, you can connect your GitHub repository to Vercel and push changes directly.
