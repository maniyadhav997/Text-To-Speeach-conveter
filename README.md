# Text-to-Speech Converter

## Description
A full-stack web application that converts text into realistic speech using OpenAI's Text-to-Speech API. Users can input text, select a voice, generate speech, play the audio, and download it.

## Features
- Input text to convert into speech.
- Choose from multiple voice styles.
- Generate and listen to speech.
- Download the generated speech as an audio file.

## Technologies Used
### Frontend:
- React.js
- Axios (for API requests)

### Backend:
- Node.js
- Express.js
- Axios (for API communication)
- OpenAI's Text-to-Speech API

### Deployment:
- Frontend: Hosted on Vercel/Netlify.
- Backend: Hosted on AWS/Heroku/Vercel.

## Project Structure
```
Text-To-Speeach-converter/
│── backend/  # Node.js + Express backend
│   │── server.js
│   │── routes/
│   │── controllers/
│   │── package.json
│
│── frontend/  # React frontend
│   │── src/
│   │── components/
│   │── App.js
│   │── package.json
│
│── README.md
```

## Setup and Installation
### Backend Setup:
1. Clone the repository:
   ```sh
   git clone https://github.com/maniyadhav997/Text-To-Speeach-conveter.git
   ```
2. Navigate to the backend folder:
   ```sh
   cd backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
5. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup:
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm start
   ```

## Usage
1. Open the frontend in your browser.
2. Enter text, choose a voice, and click "Generate Speech".
3. Listen to the generated audio and download it if needed.

## Deployment
- **Frontend:** Deploy on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
- **Backend:** Deploy on [Render](https://render.com/), [Vercel](https://vercel.com/), or AWS.

## Future Enhancements
- Support for more languages and voice styles.
- User authentication for API usage.
- Improved UI/UX.

## License
This project is open-source and available under the MIT License.

## Contact
For any questions or issues, please contact [yadavmani8543@gmail.com].

