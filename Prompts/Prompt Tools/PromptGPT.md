---
date: 2023-12-13 17:44:45
created: 2023-11-23 20:17:00
Folder:
  - Prompts / Prompt Tools / Brief Prompt Enhancements
---

# PromptGPT 

Nov 23, 2023

Revised by [GodofPrompt.Ai](GodofPrompt.Ai.md "upnote://x-callback-url/openNote?noteId=EB3278F1-4ACC-4FA0-A285-C92BD451A149") 

* * *

[PPM](PPM.md "upnote://x-callback-url/openNote?noteId=047BC142-533E-43B7-8112-531DC4A711F0")

* * *

<br>

* * *

# PromptGPT

Use these criteria to write out a fully detailed prompt concerning { ‘Prompt Goes Here’ }

## Best Practices:

1. **Put instructions at the beginning of the prompt and use ### or """ to separate the instruction and context**

Less effective ❌:

```
Summarize the text below as a bullet point list of the most important points.

{text input here}
```

Better ✅:

```
Summarize the text below as a bullet point list of the most important points.

Text: """
{text input here}
"""
```

2. **Be specific, descriptive and as detailed as possible about the desired context, outcome, length, format, style, etc**

Less effective ❌:

```
Write a poem about OpenAI. 
```

Better ✅:

```
Write a short inspiring poem about OpenAI, focusing on the recent DALL-E product launch (DALL-E is a text to image 
```

<br>

3. **Articulate the desired output format through examples ([example 1](https://beta.openai.com/playground/p/DoMbgEMmkXJ5xOyunwFZDHdg), [example 2](https://beta.openai.com/playground/p/3U5Wx7RTIdNNC9Fg8fc44omi)).**

Less effective ❌:

```
Extract the entities mentioned in the text below. Extract the following 4 entity types: company names, people names, specific topics and themes.

Text: {text}
```

Show, and tell - the models respond better when shown specific format requirements. This also makes it easier to programmatically parse out multiple outputs reliably.

Better ✅:

```
Extract the important entities mentioned in the text below. First extract all company names, then extract all people names, then extract specific topics which fit the content and finally extract general overarching themes

Desired format:
Company names: <comma_separated_list_of_company_names>
People names: -||-
Specific topics: -||-
General themes: -||-

Text: {text}
```

<br>

4. **Start with zero-shot, then few-shot ([example](https://beta.openai.com/playground/p/Ts5kvNWlp7wtdgWEkIAbP1hJ)), neither of them worked, then fine-tune**

✅ Zero-shot

```
Extract keywords from the below text.

Text: {text}

Keywords:
```

✅ Few-shot - provide a couple of examples

```
Extract keywords from the corresponding texts below.

Text 1: Stripe provides APIs that web developers can use to integrate payment processing into their websites and mobile applications.
Keywords 1: Stripe, payment processing, APIs, web developers, websites, mobile applications
##
Text 2: OpenAI has trained cutting-edge language models that are very good at understanding and generating text. Our API provides access to these models and can be used to solve virtually any task that involves processing language.
Keywords 2: OpenAI, language models, text processing, API.
##
Text 3: {text}
Keywords 3:
```

5. **Reduce “fluffy” and imprecise descriptions**

Less effective ❌:

```
The description for this product should be fairly short, a few sentences only, and not too much more.
```

Better ✅:

```
Use a 3 to 5 sentence paragraph to describe this product.
```

6. **Instead of just saying what not to do, say what to do instead**

Less effective ❌:

```
The following is a conversation between an Agent and a Customer. DO NOT ASK USERNAME OR PASSWORD. DO NOT REPEAT.

Customer: I can’t log in to my account.
Agent:
```

Better ✅:

```
The following is a conversation between an Agent and a Customer. The agent will attempt to diagnose the problem and suggest a solution, whilst refraining from asking any questions related to PII. Instead of asking for PII, such as username or password, refer the user to the help article www.samplewebsite.com/help/faq

Customer: I can’t log in to my account.
Agent:
```

  

7. **Code Generation Specific - Use “leading words” to nudge the model toward a particular pattern**

Less effective ❌:

```
# Write a simple python function that
# 1. Ask me for a number in mile
# 2. It converts miles to kilometers
```

In this code example below, adding “_import_” hints to the model that it should start writing in Python. (Similarly “SELECT” is a good hint for the start of a SQL statement.)

Better ✅:

```
# Write a simple python functrite a simple python function that
# 1. Ask me for a number in mile
# 2. It converts miles to kilometers
 
import
```

* * *

## Review on How to Structure a Prompt:  

## Rules:

1\. Put instructions at the beginning of the prompt and use ### or """ to separate the instruction and context 

@2. Be specific, descriptive and as detailed as possible about the desired context, outcome, length, format, style, etc. 

3\. Articulate the desired output format through examples (example 1, example 2). 

4\. Start with zero-shot, then few-shot (example), neither of them worked, then fine-tune

5\. Reduce “fluffy” and imprecise descriptions

6\. Instead of just saying what not to do, say what to do instead 

7. Code Generation Specific - Use “leading words” to nudge the model toward a particular pattern

<br>