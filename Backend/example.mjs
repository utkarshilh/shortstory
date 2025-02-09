import { ElevenLabsClient, play } from "elevenlabs";
import "dotenv/config"; // Loads environment variables from .env

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY, // Use API key from .env
});

async function generateAudio() {
  try {
    const audio = await client.textToSpeech.convert("JBFqnCBsd6RMkjVDRZzb", {
      text: " aur kutte",
      model_id: "eleven_multilingual_v2",
      output_format: "mp3_44100_128",
    });

    await play(audio); // Play audio directly
    console.log("Audio playback successful.");
  } catch (error) {
    console.error("Error generating audio:", error);
  }
}

generateAudio();
