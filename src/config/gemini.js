import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

// Get the model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
console.log(model); // Log the model to check its structure

// Ensure that the model has the necessary methods
const geminiMethods = {
  generateContent: model.generateContent,
  summarizeText: model.summarizeText,
  classifyText: model.classifyText,
  generateTitle: model.generateTitle,
};

export default geminiMethods; // Export the variable
