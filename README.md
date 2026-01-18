<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>GOIT React HW-04 | Image Search</title>
</head>
<body>

  <h1>GOIT-REACT-HW-04</h1>

  <p>
    This project is an <strong>Image Search Application</strong> developed using
    <strong>React</strong>. The application allows users to search for images by keyword
    and fetches data from the <strong>Unsplash API</strong> using HTTP requests.
  </p>

  <p>
    The main goal of this homework is to practice:
    <strong>HTTP requests</strong>, <strong>React Hooks</strong>,
    and <strong>component-based architecture</strong>.
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
    <br />
    <li>
      <strong>Live Demo (Vercel):</strong><br />
      <a href="https://goit-react-hw-04-self-one.vercel.app/" target="_blank">
        https://goit-react-hw-04-self-one.vercel.app/
      </a>
    </li>
  </ul>

  <hr />

  <h2>📌 Project Requirements</h2>

  <ul>
    <li>The project is created using <strong>Vite</strong>.</li>
    <li><strong>Axios</strong> is used for HTTP requests.</li>
    <li>Styling is implemented with <strong>CSS Modules</strong>.</li>
    <li>All components are exported using <code>export default</code>.</li>
    <li>Code formatting is handled with <strong>Prettier</strong>.</li>
    <li>No errors or warnings appear in the console.</li>
  </ul>

  <hr />

  <h2>🧠 Technologies & Libraries Used</h2>

  <ul>
    <li>React</li>
    <li>Vite</li>
    <li>Axios</li>
    <li>React Hooks (useState, useEffect)</li>
    <li>React Hot Toast (notifications)</li>
    <li>React Modal</li>
    <li>CSS Modules</li>
  </ul>

  <hr />

  <h2>🌍 Image Search Service (Unsplash API)</h2>

  <p>
    The application fetches images from the <strong>Unsplash API</strong>.
    A developer account was created and an application was registered on Unsplash
    to obtain an access key.
  </p>

  <ul>
    <li>Images are fetched by keyword search</li>
    <li><code>small</code> image size is used for the gallery</li>
    <li><code>regular</code> image size is used in the modal</li>
    <li>The API key is stored securely in a <code>.env</code> file</li>
  </ul>

  <p>
    ⚠️ Unsplash demo accounts are limited to
    <strong>50 requests per hour</strong>.
  </p>

  <hr />

  <h2>🧩 Components</h2>

  <h3>SearchBar</h3>
  <ul>
    <li>Receives the search keyword from the user</li>
    <li>Displays a notification if the input is empty</li>
    <li>Uses React Hot Toast for notifications</li>
  </ul>

  <h3>ImageGallery</h3>
  <ul>
    <li>Renders a list of image cards</li>
    <li>Displayed only when images are available</li>
  </ul>

  <h3>ImageCard</h3>
  <ul>
    <li>Represents a single image item</li>
    <li>Opens a modal when clicked</li>
  </ul>

  <h3>Loader</h3>
  <ul>
    <li>Displayed while images are loading</li>
    <li>Rendered below the gallery</li>
  </ul>

  <h3>ErrorMessage</h3>
  <ul>
    <li>Displayed when an HTTP request fails</li>
  </ul>

  <h3>LoadMoreBtn</h3>
  <ul>
    <li>Loads the next page of images</li>
    <li>Displayed only if images exist</li>
  </ul>

  <h3>ImageModal</h3>
  <ul>
    <li>Displays a large version of the image</li>
    <li>Closes on ESC key or backdrop click</li>
    <li>Implemented using React Modal</li>
  </ul>

  <hr />

  <h2>🧱 Component Hierarchy</h2>

  <pre>
App
 ├─ SearchBar
 ├─ ImageGallery
 │   ├─ ImageCard
 │   ├─ ImageCard
 │   └─ ImageCard
 ├─ LoadMoreBtn
 ├─ Loader
 ├─ ErrorMessage
 └─ ImageModal
  </pre>

  <hr />

  <h2>📁 Project Structure</h2>

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
 ├── .gitignore
 ├── eslint.config.js
 ├── index.html
 ├── package.json
 ├── vite.config.js
 └── README.md
  </pre>

  <hr />

  <h2>🚀 How to Run the Project</h2>

  <pre>
npm install
npm run dev
  </pre>

  <p>
    The application runs at:
    <strong>http://localhost:5173</strong>
  </p>

  <hr />

  <h2>✅ Conclusion</h2>

  <p>
    This project demonstrates effective usage of
    <strong>HTTP requests</strong>,
    <strong>React Hooks</strong>,
    and a <strong>clean component structure</strong>.
    The application follows modern React best practices and meets all homework requirements.
  </p>

</body>
</html>
