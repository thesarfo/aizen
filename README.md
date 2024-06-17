### Aizen

A small chatbot for interrogating PDF documents with Gemini. In simple terms, it helps you to understand and extract information from PDF documents. You upload a PDF, which Aizen then analyze and summarizes into key points. You can ask a question about about the document, and Aizen will provide answers based on the documents context.

Additionally, Aizen keeps track of conversations related to different documents, making it easier for users to revisit or continue discussions via chat using Langchain's capabilities.


### Documentation

Explore the API documentation in the `postman.json` file. Additionally, find testing files in the `testfiles` folder.

### Preview
<!-- 
Below the user authenticates, uploads a pdf file, the document is vectorized and saved to a vector store. Then, the user creates a conversation and proceeds to interrogate the document via chat. The LLM enhances its context by making use of the message history. -->
Authentication, PDF Upload, and Document Interrogation:
<br>

<br>
<img
    src="./docs/demo.gif"
/>

<br>

The API allows you to interrogate the document of your choice and also to retrieve the text sources (pages and lines).
<br>

<img
    src="./docs/demo2.gif"
/>

### Technologies

- Langchain
- Express
- TypeORM
- Zod
- Postgres
- PGVector

### Installation

```
npm install
```

### Docker
Build and run with Docker:

bash
```
docker compose build
docker compose up -d
```

### Development
Start development server:
```
npm run dev
```

### Build
Build the project:
```
npm run build
```

### Test
Run tests:
```
npm run test
```

### JWT Secret
Generate JWT secret:
```
openssl rand -hex 64
```
