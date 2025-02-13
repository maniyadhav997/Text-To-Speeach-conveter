# Text-to-Speech Converter

## Description
A web application that converts text into realistic speech using OpenAI's Text-to-Speech API. Users can enter text, select a voice, generate speech, play the audio, and download it.

## Features
- Input text to convert into speech.
- Select from multiple voice styles.
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

## Setup and Installation
### Backend Setup:
1. Clone the repository:
   ```sh
   git clone https://github.com/maniyadhav997/Text-To-Speeach-conveter.git
   ```
2. Navigate to the backend folder:
   ```sh
   cd text-to-speech-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
5. Start the server:
   ```sh
   npm start
   ```

### Frontend Setup:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/text-to-speech-frontend.git
   ```
2. Navigate to the frontend folder:
   ```sh
   cd text-to-speech-frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the frontend application:
   ```sh
   npm start
   ```

## Usage
1. Open the frontend in your browser.
2. Enter text, choose a voice, and click the "Generate Speech" button.
3. Listen to the generated audio and download it if needed.

## Deployment
- The backend can be deployed on platforms like Heroku, Vercel, or AWS.
- The frontend can be hosted on Vercel or Netlify.

## Future Enhancements
- Support for more languages and voices.
- User authentication for API usage.
- Improved UI/UX.

## License
This project is open-source and available under the MIT License.

## Contact
For any questions or issues, please contact [yadavmani8543@gmail.com].
