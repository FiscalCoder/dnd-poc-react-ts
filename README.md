# Full Stack Application: Cat GIF Gallery

## Project Overview
This project implements a full-stack application using React, TypeScript, and Vite for the frontend, with Node.js and SQLite for the backend. The application displays a grid of cat GIFs that can be reordered via drag and drop.

## Tech Stack
- Frontend: React, TypeScript, Vite, Ant Design
- Backend: Node.js, Express, SQLite
- Package Manager and Runtime: Bun
- Containerization: Docker

## Thought Process and Approach

### 1. Frontend Development
- **Technologies Used**: React, TypeScript, and Vite were chosen to leverage modern development paradigms. Vite's instantaneous HMR updates and fast build times made the development process smoother and more efficient.
- **UI Components with Ant Design**: Ant Design was used for its comprehensive set of UI components, enabling rapid UI development with a clean and professional appearance.
- **Drag-and-Drop Functionality**: Implemented using the `react-grid-dnd` library, allowing users to reorder items intuitively and enhancing the interactive aspect of the application.
- **Error Handling**: Basic error handling was incorporated using Ant Design's `message` component to notify users if data retrieval fails, improving the overall user experience.
- **Mocking with MSW**: Initially used Mock Service Worker (MSW) to simulate API interactions without a running backend. The code for MSW is still present in `main.tsx` and can be reactivated by modifying the API endpoint settings.
- **Performance Optimization**: Utilized React Hooks like `useCallback` to optimize component re-renders, ensuring the application remains performant as the data set grows.

### 2. Backend Development
- **Lightweight Implementation**: Built using Node.js with SQLite to meet the requirements of a simple read-only database. Bun was used for its fast runtime, ensuring minimal setup time and efficient operation.
- **API Design**: Developed a basic REST API to fetch data from the SQLite database. The backend code was kept minimal, emphasizing simplicity and speed.

### 3. Deployment
- **Docker Compose**: The entire application was containerized using Docker Compose to streamline deployment, allowing for easy start-up of both frontend and backend.

### 4. Areas for Improvement
- **Mobile Responsiveness**: Implement a custom hook to adjust the number of columns based on window size, making the application fully responsive on mobile and tablet devices.
- **Accessibility Enhancements**: Add ARIA labels and enhance keyboard accessibility, particularly for drag-and-drop actions.
- **Expanded Error Handling**: Enhance error feedback for failed image loads or issues during drag-and-drop actions.
- **Optimization of Re-Renders**: Further refine component updates using `React.memo` for child components to reduce re-renders in certain scenarios.
- Implement write operations to the database
- Add unit and integration tests
- Optimize performance for larger datasets
- Enhance the UI/UX with additional features like filtering or searching

## Setup and Running the Project

### Prerequisites
- Docker

### Running the Application
1. Clone the repository
2. Navigate to the project directory
3. Start the application:
   ```
   docker-compose up
   ```
4. Open your browser and go to `http://localhost:5173`

## API Design
Currently, the API is minimal with a single GET endpoint (/api/cat-gifs) to fetch all cat GIFs. For future extensibility, consider the following potential endpoints:

- POST /api/cat-gifs: Add a new cat GIF
- PUT /api/cat-gifs/{id}: Update an existing cat GIF
- DELETE /api/cat-gifs/{id}: Remove a cat GIF

## Additional Features to Implement

1. New Card Addition Functionality:
   - Add a "New Card" button to the grid.
   - Clicking this button will add a new card in an edit state.
   - The new card will have editable fields for title, URL, and description.
   - Implement front-end validations for these fields.
   - Add a "Save" button at the bottom of the new card, enabled only when all validations pass.
   - On save, make a backend API call to persist the new card data.
   - Use optimistic updates to immediately display the new card, reverting only if the API call fails.
   - Include a close icon (×) at the top right of the card for cancellation.
   - When closing an unsaved card, show a confirmation popup.
   - For existing cards, show the close icon only on hover.

2. Card Deletion:
   - Add a close icon to existing cards, visible only on hover.
   - Clicking the close icon will prompt for confirmation before deletion.
   - Implement the deletion both in the UI and via a backend API call.

3. Image Overlay Functionality:
   - When a card is clicked, display the image as an overlay in the middle of the webpage.
   - Add the ability to close the overlay by pressing the ESC key.

4. Error Handling Enhancements:
   - Improve error feedback for failed image loads.
   - Add error handling for the new card addition and deletion processes.

5. Accessibility Improvements:
   - Enhance keyboard navigation for the drag-and-drop functionality.
   - Add appropriate ARIA labels to all interactive elements.

6. Mobile Responsiveness:
   - Implement a responsive design that adapts to various screen sizes.
   - Create a custom hook to dynamically adjust the grid layout based on viewport width.

## Note on Original Requirements
The original requirement document mentioned a "saving" functionality that was unclear. It was not certain if this referred to adding new cards or some other form of data persistence. Due to this ambiguity, that specific feature was not implemented in the current version. Instead, the proposed new card addition feature above addresses data creation and persistence in a clear, user-friendly manner.

## Conclusion
This project demonstrates a simple yet functional full-stack application that meets the core requirements while providing a foundation for future enhancements and scalability. The focus on modern development practices, efficient tooling, and a clean user interface showcases a well-rounded approach to full-stack development.
