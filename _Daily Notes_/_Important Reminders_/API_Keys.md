---
{}
---
# API Keys

## Mem AI V2.0 API KEY

- sk-mem-df603188-cc75-4981-82b1-93522b8ffafd

---

## OpenAI API KEY

-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

---
## OpenRouter R1 Free API KEY

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

### OpenRouter API EndPoints

Integrating OpenRouter Deepseek R1 FREE with Obsidian's SystemSculpt

Here's how to configure the Obsidian SystemSculpt plugin to use the Deepseek R1 FREE model via OpenRouter: 

1. **Obtain an OpenRouter API key:**
    - Go to openrouter.ai and create an account (if you don't have one).
    - Navigate to the "Keys" section (usually under your profile dropdown or settings).
    - Click "Create Key" and give it a descriptive name (e.g., "Obsidian SystemSculpt").
    - **Crucially, copy this API key immediately as you won't be able to view it again**. Store it securely, perhaps in an Obsidian note.
2. **Configure the SystemSculpt plugin in Obsidian:**
    - Open Obsidian's settings.
    - Go to "Community Plugins" and ensure SystemSculpt (or the equivalent plugin you're using for AI completion) is enabled.
    - Locate SystemSculpt's settings.
    - **Set the API endpoint:** The OpenRouter base URL for API interactions is `https://openrouter.ai/api/v1`. You may also use `https://openrouter.ai/api/v1/chat/completions`.
    - **Input your API Key:** In the SystemSculpt settings, paste the OpenRouter API key you copied earlier into the designated API key field.
    - **Specify the Deepseek R1 FREE model:** In the plugin settings, set the model name to `deepseek/deepseek-r1:free`.
3. **Save and reload:**
    - Save your changes in the plugin settings and reload Obsidian (or restart the application if the plugin requires it).
4. **Verify the setup:**
    - Test the functionality by sending a message or command to the plugin (e.g., using a Copilot icon or triggering a specific command).
    - You should now be able to interact with the Deepseek R1 FREE model through the OpenRouter API within Obsidian. 

**Important considerations**

- Double-check that all settings are saved to avoid losing changes.
- You might find it useful to familiarize yourself with the OpenRouter documentation and the specific model documentation for Deepseek R1 for further customization and usage details.