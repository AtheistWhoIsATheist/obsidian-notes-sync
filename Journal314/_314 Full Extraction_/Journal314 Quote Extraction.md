---
created: 2024-08-14 11:22:06
Folder:
  - Journal314 / 314 Quotes
  - Journal314 / 314Universal
  - Prompts / Best
---

# Journal314 Quote Extraction

8/14/24

[[gemini]], [[314Universal]], [[314quotes]]

- Made from [[Prompts/Superprompt/Journal314 Best Prompt]]

* * *

# Gemini Pro 1.5 Experimental

<br>

You will be provided with two input variables:  
\
{$QUOTES}: A set of quotes from prominent figures, organized by the source document "Journal314\_{47-51}".  
{$THEMES}: A list of themes that the quotes should be organized and analyzed under.  
\
Your task is to generate responses for each theme that showcase relevant quotes, analyze how the quotes relate to the theme, and discuss how the quotes can be applied to illustrate the theme.  
\
Here is the format you should follow for each theme:  
\
\### {THEME}  
\- \*\*Quote from {AUTHOR}\*\*: "{QUOTE}"  
  - \*\*Analysis\*\*: Provide an analysis of how this quote relates to the theme.  
  - \*\*Application\*\*: Discuss how this quote can be used to illustrate or apply the theme.  
\
Repeat this format for each relevant quote under the theme. If there are no relevant quotes for a particular theme, simply state "No relevant quotes."  
\
Make sure to replace the {THEME}, {AUTHOR}, and {QUOTE} placeholders with the actual values from the input variables. Do not include any additional text or formatting beyond what is specified in the example structure.  
\
After generating responses for all the themes, your final output should be a complete set of themed quote analyses, with each theme section following the prescribed format.  

* * *

# ChatGPT4.o New

You will be provided with a document and a list of themes. Your task is to analyze the document and identify relevant quotes that fit each of the given themes. For each relevant quote, provide an analysis explaining how the quote aligns with the theme, and an application describing how the quote can be used to illustrate or explore the theme.  
\
Here are the steps you should follow:  
\
1\. Read through the <document>{$DOCUMENT}</document> carefully and identify quotes that are relevant to the themes provided in <themes>{$THEMES}</themes>.  
\
2\. For each relevant quote, do the following:  
   <Relevant Quotes>  
   - Provide the quote inside <quote></quote> tags.  
   - Provide an analysis of how the quote aligns with the theme, inside <analysis></analysis> tags.  
   - Provide an application describing how the quote can be used to illustrate or explore the theme, inside <application></application> tags.  
   </Relevant Quotes>  
\
3\. After identifying and analyzing all relevant quotes, provide a synthesis that addresses the overall task. In your synthesis, make connections between the different themes and how the quotes collectively contribute to a deeper understanding of the topic. Write your synthesis inside <synthesis></synthesis> tags.  
\
Remember to follow the formatting closely and to only provide information that is directly supported by the given document and themes. Do not introduce any new information or personal opinions. Your role is to extract and analyze the relevant content, not to speculate or draw unsupported conclusions.  
\
Begin your response with <result> and end it with </result>.

* * *

# ChatGPT4.o New V2

You will be organizing quotes from the provided document into the specified themes. The document mentions several prominent figures, and you will need to extract relevant quotes from them and explain how each quote fits into the associated theme.

Here is the information you will be working with:

{$THEMES} {$QUOTES}

For each theme, follow these steps:

1. Identify the quotes from the provided list that are most relevant to that theme.
2. For each relevant quote, do the following:
    - Write down the quote verbatim.
    - Explain how the quote relates to and supports the given theme.
    - Discuss how the quote could be applied to illustrate or expand upon the theme.
3. After analyzing all relevant quotes for a theme, provide a synthesis of the insights gained from those quotes. Discuss how the quotes collectively contribute to an understanding of the theme.

Make sure to clearly delineate your responses for each themeusing the theme titles provided. Do not mix content for different themes together.

If there are no relevant quotes for a particular theme, state "No relevant quotes" and move on to the next theme.

Once you have worked through all the themes, provide an overall synthesis of the insights gained from analyzing the quotes across the different themes. Discuss how the themes relate to and inform each other.

Submit your full response with the relevant quotes, analyses, and syntheses.

* * *

# ChatGPT4.o V3

You will be analyzing a document and identifying relevant quotes that align with a set of specified themes.

First, here is the document you will be working with: {$DOCUMENT}

And here are the themes you should focus on: {$THEMES}

Your task is to go through the document, find relevant quotes for each theme, and then analyze how those quotes relate to the theme.

For each theme:

1. Identify the relevant quotes from the document that support that theme. Write down the quotes in numbered order.

\[1\] Quote 1 that relates to the theme \[2\] Quote 2 that relates to the theme \[3\] Quote 3 that relates to the theme

2. Analyze how each quote supports or relates to the theme. Explain the connection between the quote and the theme in a couple sentences.

\[1\] This quote relates to the theme by... \[2\] This quote illustrates the theme because... \[3\] This quote supports the theme in the way that...

3. Synthesize the quotes and analyses to provide a comprehensive response for the theme. Draw insights and connections between the different quotes.

The quotes identified for the \[THEME\] theme demonstrate how \[SUMMARY OF HOW QUOTES RELATE TO THEME\]. \[ADDITIONAL INSIGHTS OR CONNECTIONS BETWEEN QUOTES\].

Repeat this process for each of the themes provided. Make sure to clearly delineate your responses for each theme using the provided XML tags.

Once you have completed the analysis for all themes, provide a final summary tying together the key insights from across the themes. <final\_summary> \[SUMMARY OF KEY INSIGHTS ACROSS THEMES\] </final\_summary>

Remember to only use information and quotes directly from the provided document. Do not introduce any external information. Let me know if you have any other questions!