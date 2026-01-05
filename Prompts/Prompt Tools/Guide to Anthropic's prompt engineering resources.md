---
date: 2024-02-23 18:11:46
created: 2024-02-23 18:07:11
Folder:
  - Prompts / AI Convos / Claude
  - Prompts / Prompt Tools
---

# Guide to Anthropic's prompt engineering resources

2/24/24

\---

# Introduction

Welcome to Anthropic's comprehensive guide to our prompt engineering resources! This guide provides links to all of Anthropic's educational resources on prompt engineering with Claude.

The linked materials cover core concepts, best practices, debugging checklists, prompt examples, and interactive materials. Whether you're new to prompt engineering or an experienced prompter, these resources serve to help you craft better prompts for Claude!

<br>

# Claude 2.1 & the Messages API is here!

To learn more about our latest model’s features and capabilities, check out our guide to Claude 2.1.

To learn more about the Messages API, see our Messages API documentation.

# <br>

# Getting Started

## Prompt Engineering Tutorial

To start, we recommend you look at our interactive prompting tutorial that teaches basic to advanced prompting techniques for Claude, such as role prompting and hallucination troubleshooting. The tutorial is split into 9 modules, each in a pair of lessons & exercises.

<br>

### Prompt Engineering Interactive Tutorial

This interactive version of the prompt engineering tutorial requires an API key.

If you have an API key, you will need to save a copy to your Google Drive, download the Claude for Sheets extension, and add your API key in order to call Claude in tutorial (in-depth instructions in the first tab)

If you don’t have an API key, you can still look at the tutorial and try out exercise solutions within Claude.ai or whatever interface you prefer to use to interact with Claude; or you can reference the answer key below.

<br>

### Prompt Engineering Interactive Tutorial Answer Key

The static answer key to our prompt engineering tutorial has all answers filled in. There are no calls to Claude made in this document - all text is static.

In-Depth Prompt Engineering

Below are additional resources that dive deeper into prompt engineering with Claude.

Claude Prompt Engineering Techniques Presentation

Our Claude prompt engineering techniques presentation features ~100 slides encompassing beginning to advanced techniques for prompting with Claude, along with troubleshooting techniques (for hallucinations etc.) as well as some direct examples of prompt engineering in action.

<br>

📘

# For Bedrock Users

If you are using Claude on Bedrock, we recommend you check out our Bedrock prompt engineering deck instead!

### <br>

### Prompt Engineering Documentation

This documentation and user guide you're currently reading is full of tips and tricks on troubleshooting, prompt formatting, and ways to access and talk to Claude! Use the lefthand menu to navigate to various pages. Below, we've curated a few links that we think might be of use:

### <br>

### Configuring GPT prompts for Claude

A guide on how to tailor prompts designed for GPT models so they work optimally for Claude.

## <br>

## Introduction to prompt design

A leaner, more basic set of information than can be found in our comprehensive prompt engineering techniques presentation, but with more in-line examples and thus perhaps more illustrative than slides alone.

<br>

### Constructing a prompt

A high-level overview of some but not all intermediate techniques for prompt construction. While less in-depth than the presentation, it also features in-line examples that exemplify the concepts described.

<br>

### Optimizing your prompt

An overview of how you can begin thinking about and implementing a process for iterating and evaluating prompts.

<br>

## Examples & Code

### Example Prompts & Templates

#### Example Prompts (using Claude for Sheets)

We have a prompt workbook filled with some starting example prompts based on specific use-cases (one use-case per tab), with some guidance on the prompt engineering techniques that underlie those prompts.

<br>

#### Here is a non-exhaustive list of the tasks we cover in the various tabs:

Simple Q&A

Information extraction

Removing PII

Content generation

Multiple choice classification

Dialogue agents and roleplay

Summarization

Advanced Q&A on long documents

Function calling / tool use

Prompt chains

🚧

<br>

### Interactive Version

If you want to interact with and edit this workbook, you will have to make a copy, download the Claude for Sheets add-on, and add your API key following the instructions in the first tab.

### Example Harmlessness Screens

Harmlessness screens are prompts used to catch prompt injections or prompt misuse as a protective measure; these are usually run in parallel with or before your main prompt. Here is a workbook of some example harmlessness screens.

Claude is already quite resilient to prompt injections and bad user behavior, but running parallel or first-line harmlessness screens can reduce the risk even further.

### <br>

### Example Code & Demos

#### Prompt Engineering Cookbook

Our prompt engineering cookbook contains recipes in the form of Jupyter notebooks for using Claude in neat and effective ways. The current recipes include:

Long Context: Q&A

Long Context: Wikipedia Search

Long Context: PDF "Upload" and Summarization

Retrieval Augmented Generation (RAG) Demo

This lightweight RAG demo uses the Anthropic Python SDK to experiment with Claude's Search and Retrieval capabilities over a variety of knowledge bases (Elasticsearch, vector databases, web search, and Wikipedia).

<br>

### Function Calling / Tool Use Repo

This tool use demo houses our lightweight demo for using tools/function calling with Anthropic models.

SDKs

General Anthropic SDKs

Anthropic Python SDK

Anthropic Typescript SDK

Claude on Bedrock SDKs

Anthropic Bedrock Python SDK

Anthropic Bedrock Typescript SDK

Other Useful Resources

Claude for Sheets

You can now call Claude on Google Sheets if you have an API key! To do so, follow our Claude for Google Sheets guide.

💡

<br>

### Quick & Dirty: How does Claude for Google Sheets work?

With Claude for Sheets, you can call Claude as a Google Sheets function like so: =CLAUDE("Hi Claude, why is the sky blue?") Claude’s response to your prompt will be automatically inserted into the cell that contains the formula.

### Claude for Sheets Workbook Templates

This template workbook houses a variety of basic prompt engineering and testing templates to make it easy for you plug & play and get started prompt engineering via Claude for Sheets.

The templates cover both single and multi-input testing, as well as single-document Q&A.

### Prompt Engineering Support Checklist

If you still need prompt engineering support from our team at Anthropic, we want to make sure we make the best use of your time! See this prompt engineering support checklist for a guide on what you should bring to get the best out of a prompt engineering support session.

\[Updated 2 months ago\]