# docks 

## Overview
Docks is a real-time document collaboration platform built using the MERN stack, Socket.io, and QuillJS. It allows multiple users to edit documents simultaneously with real-time updates. The platform is containerized using Docker and deployed on Vercel and Render for a seamless experience.

## Features
- **User Authentication**: Secure login system.
- **Real-Time Editing**: Collaborate on documents with others in real-time.
- **Personal Documents**: Create, edit, and manage your own documents.
- **Access Control**: Share documents for public viewing or keep them private.
- **Auto-Save**: Documents are automatically saved when connected to the internet.
- **Title Customization**: Change document titles with a simple click.
- **Permanent Deletion**: Delete documents when no longer needed.
- **Multi-User Collaboration**: Share a document link with friends for joint editing.

## Getting Started
### Prerequisites
- Node.js
- MongoDB
- Docker (Optional, for containerized deployment)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/changrtanay/docksv4.git
   cd docks
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`

### Deployment
Docks is deployed using Vercel (Frontend) and Render (Backend). You can also deploy using Docker:
```bash
docker-compose up -d
```

## Usage Guide
1. **Login to Docks**
2. **Create a new document** from the header menu.
3. **Manage your documents** from the profile menu (top-right corner).
4. **Control document visibility**: Set documents to public or private during creation or editing.
5. **Edit document titles**: Click on the title, update it, and confirm with the tick symbol.
6. **Delete documents permanently** from the document header.
7. **Collaborate with others**: Share the document link with friends to co-edit in real-time.
8. **Auto-Save**: Changes are automatically saved when online.

## Technologies Used
- **Frontend**: React, QuillJS
- **Backend**: Node.js, Express.js, MongoDB
- **Real-Time Communication**: Socket.io
- **Deployment**: Docker, Vercel, Render

## Contributing
We welcome contributions! Feel free to submit a pull request or open an issue.

## License
MIT License

## Contact
For queries or feedback, reach out to [tanay092004@gmail.com](mailto:tanay092004@gmail.com).

