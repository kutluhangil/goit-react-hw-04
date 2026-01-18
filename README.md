<h1>📸 React Homework 04 — Image Search Application</h1>

<p>
This project is an <strong>Image Search Application</strong> built with <strong>React</strong>.
The main purpose of this homework is to practice working with
<strong>HTTP requests</strong>, <strong>React Hooks</strong>, and <strong>external APIs</strong>.
</p>

<hr />

<h2>🔗 Project Links</h2>

<ul>
  <li>
    <strong>GitHub Repository:</strong><br />
    <a href="https://github.com/kutluhangil/goit-react-hw-04" target="_blank">
      https://github.com/kutluhangil/goit-react-hw-04
    </a>
  </li>
  <li>
    <strong>Live Demo (Vercel):</strong><br />
    <a href="https://goit-react-hw-04-self-one.vercel.app/" target="_blank">
      https://goit-react-hw-04-self-one.vercel.app/
    </a>
  </li>
</ul>

<hr />

<h2>🛠️ Technologies & Libraries Used</h2>

<ul>
  <li><strong>React</strong> — Building the user interface with components and hooks</li>
  <li><strong>Vite</strong> — Fast development environment and build tool</li>
  <li><strong>Axios</strong> — Performing HTTP requests</li>
  <li><strong>Unsplash API</strong> — Fetching images by keyword</li>
  <li><strong>React Hooks</strong> — useState and useEffect</li>
  <li><strong>React Hot Toast</strong> — User notifications</li>
  <li><strong>React Modal</strong> — Modal window implementation</li>
  <li><strong>CSS Modules</strong> — Scoped and modular styling</li>
  <li><strong>Prettier</strong> — Code formatting and consistency</li>
</ul>

<hr />

<h2>📦 Library Installation</h2>

<p>The following libraries were installed manually during the project setup:</p>

<pre>
npm install axios
npm install react-hot-toast
npm install react-modal
</pre>

<p>
All dependencies are listed in <code>package.json</code> and used throughout the application.
</p>

<hr />

<h2>🌍 Image Search Service (Unsplash API)</h2>

<p>
The application fetches images from the <strong>Unsplash API</strong>.
</p>

<ul>
  <li>A developer account was created on Unsplash</li>
  <li>An application was registered to obtain an <strong>Access Key</strong></li>
  <li>The API key is stored in environment variables (<code>.env</code>)</li>
  <li>Images are fetched using keyword-based search</li>
  <li>API request limits (50 requests/hour) are respected</li>
</ul>

<p><strong>Image usage:</strong></p>
<ul>
  <li><code>small</code> — Gallery thumbnails</li>
  <li><code>regular</code> — Modal preview</li>
</ul>

<hr />

<h2>📂 Project Structure</h2>

<pre>
GOIT-REACT-HW-04
├── node_modules
├── public
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── ErrorMessage
│   │   ├── ImageCard
│   │   ├── ImageGallery
│   │   ├── ImageModal
│   │   ├── Loader
│   │   ├── LoadMoreBtn
│   │   └── SearchBar
│   ├── services
│   │   └── unsplash-api.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── .env.example
├── package.json
├── vite.config.js
└── README.md
</pre>

<hr />

<h2>📖 Application Description</h2>

<p>
The Image Search application allows users to search for images by keyword
and view results in a responsive gallery.
</p>

<ul>
  <li>Search images by keyword</li>
  <li>Fetch data from an external API</li>
  <li>Display images in a gallery layout</li>
  <li>Load more images using pagination</li>
  <li>Show a loader during HTTP requests</li>
  <li>Handle API errors gracefully</li>
  <li>Open images in a modal view</li>
</ul>

<hr />

<h2>🧩 Component Architecture</h2>

<p>All components are rendered inside the <strong>App</strong> component.</p>

<pre>
App
├── SearchBar
├── ImageGallery
│   ├── ImageCard
│   ├── ImageCard
│   └── ImageCard
├── LoadMoreBtn
├── Loader
├── ErrorMessage
└── ImageModal
</pre>

<hr />

<h2>🪜 Homework Steps Implementation</h2>

<ul>
  <li><strong>Step 1:</strong> Search images by keyword</li>
  <li><strong>Step 2:</strong> Fetch images using Axios and Unsplash API</li>
  <li><strong>Step 3:</strong> Load additional images with pagination</li>
  <li><strong>Step 4:</strong> Handle loading and error states</li>
  <li><strong>Step 5:</strong> Display large image preview in a modal</li>
</ul>

<hr />

<h2>🚀 How to Run the Project Locally</h2>

<pre>
npm install
npm run dev
</pre>

<p>The application will be available at:</p>

<pre>
http://localhost:5173
</pre>

<hr />

<h2>📌 Final Notes</h2>

<p>
This homework focuses on <strong>HTTP requests and React Hooks</strong>,
reinforcing key concepts such as:
</p>

<ul>
  <li>Side effects with <code>useEffect</code></li>
  <li>State management with <code>useState</code></li>
  <li>Working with external APIs</li>
  <li>Component responsibility separation</li>
  <li>Clean and scalable project structure</li>
</ul>

<p>
It provides a strong foundation for more advanced React applications.
</p>

<p><strong>Happy coding! 🚀</strong></p>
