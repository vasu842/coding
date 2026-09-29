import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize the Google Gen AI client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/generate-project', async (req, res) => {
  const { projectType, title, description } = req.body;

  const systemInstruction = `
You are ProjectGPT, an expert software architect AI.
Generate a complete project blueprint and code setup based on the project type and user requirements.
Return JSON strictly adhering to this schema:
{
  "rootPlan": "Detailed step-by-step architectural plan",
  "html": "Complete HTML index structure string",
  "css": "CSS styling code string",
  "mainJs": "JavaScript entry point code",
  "appJsx": "React App component code",
  "sql": "SQL schema creation and sample seed queries"
}
`;

  const prompt = `Project Type: ${projectType}\nProject Name: ${title}\nDescription: ${description}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      },
    });

    const resultData = JSON.parse(response.text);
    res.json(resultData);
  } catch (error) {
    console.error('Generation Error:', error);
    res.status(500).json({ error: 'Failed to generate project codebase' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));