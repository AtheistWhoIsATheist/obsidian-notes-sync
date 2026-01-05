---
created: 2023-10-04 17:34:16
Folder:
  - Prompts
title:
updated:
tags:
backlink: "[["
description: Reddit Prompt for Business, need to convert to philosophy
---


## Consume the following spec for creating good LLM prompts.

EXISTING SPEC: Introduction The Enhanced Recursive Tagging System (ERTS) is a robust and adaptable framework designed for seamless interaction with Language Model-based models (LLMs). ERTS facilitates the generation of precise instructions for LLMs across various tasks, including legal document analysis, financial reports, technical support responses, and content creation. Featuring a scalable and highly customizable structure, the ERTS is designed to suit any application.

Basic Syntax ERTS employs a hierarchical organization for tags, which are composed of three parts: the category, the subcategory, and the attributes. The category defines the broad classification of the tag, while the subcategory offers specific details. Attributes provide additional customization options. Tags are separated by a colon (:), categories are enclosed in curly brackets ({}), subcategories in square brackets (\[\]), and attributes in angle brackets (<>).

{Category: \[Subcategory\]}

To implement ERTS, construct a prompt using relevant tags for the task, and the LLM will interpret and generate output based on the provided instructions.

Categories ERTS organizes tags into the following categories:

Core Contextual Options Temporal Task-specific Communication Assessment Each category serves a unique purpose, providing a structured framework for tag organization.

Core The Core category encompasses tags that deliver essential information about the task: {Subject}: Defines the primary topic of the task. {Objective}: Outlines the main goal or purpose of the task. {Constraints}: Lists limitations or restrictions on the output. {Output}: Describes the desired format, medium, or structure of the output.

Contextual The Contextual category includes tags that offer context for the task: {Background}: Presents contextual information or background details. {Examples}: Supplies relevant examples or references. {Resources}: Specifies required resources or materials.

Options The Options category covers tags that indicate preferences or approaches: {Methodology}: Highlights preferred methods or techniques. {Approach}: Details the overall strategy for the task. {Theme}: Notes the primary focus or theme of the task.

Temporal The Temporal category contains tags that provide time-related information: {Deadline}: Sets a due date for the task. {Duration}: Indicates the task's intended time span.

Task-specific The Task-specific category comprises tags unique to the task: {Content}: Describes the content for the output. {Data}: Identifies necessary data or information. {Creative}: Notes required creative elements. {Technical}: Specifies technical requirements or aspects.

Communication The Communication category features tags related to communication: {Audience}: Identifies the target audience for the output. {Format}: Describes the output's format or medium. {Channels}: Lists channels or methods for communication.

Assessment The Assessment category includes tags related to evaluation: {Criteria}: Establishes standards or benchmarks for assessment. {Metrics}: Details metrics or measurements for evaluation. {Feedback}: Specifies the type of feedback to incorporate.

Recursive Structure ERTS employs a recursive structure, supporting arbitrary depth and arbitrary length of lists within categories, enabling users to create custom, intricate tags extendable for any use case or task.

Syntax The recursive structure syntax is as follows:

{Category(K): \[Subcategory(N)\]<Attributes(A)>}

This syntax implies a specific category (K) can have an arbitrary length of subcategories (N) and attributes (A). Users can create subcategories within existing subcategories to add depth and complexity to tags.

Examples These examples demonstrate the recursive structure:

{Category(Research): \[Subcategory(Topic), Subcategory(Methodology), Subcategory(Sources)\]<Attributes(Language, Region)>} {Category(Presentation): \[Subcategory(Format), Subcategory(Style), Subcategory(Audience)\]<Attributes(Platform, Interaction)>} {Category(Assessment): \[Subcategory(Criteria), Subcategory(Metrics)\]<Attributes(Weighting, Threshold)>}

These examples showcase the versatility of the recursive structure in creating custom and intricate tags for diverse use cases.

Best Practices To optimize the use of the Enhanced Recursive Tagging System, consider these best practices:

Use relevant and specific tags: Employ tags that accurately represent the task, ensuring the LLM understands your instructions. Maintain simplicity: Avoid overly complex tags or structures; the objective is to provide clear, concise instructions to the LLM. Be consistent: Implement consistent naming conventions and formats for tags to enhance comprehension. Iterate and refine: Test and adjust tags as needed, optimizing interactions with the LLM and enhancing output quality. Conclusion The Enhanced Recursive Tagging System is a powerful, adaptable framework for interacting with LLMs. It enables users to supply detailed instructions for a variety of tasks and use cases, leveraging a hierarchical structure that supports arbitrary depth and arbitrary length of lists within categories. By adhering to best practices and using tags effectively, users can enhance the efficiency and accuracy of their interactions with LLMs, making it an invaluable tool for knowledge work across industries. == END OF EXISTING SPEC==

Task: Based on the above ERTS framework write the following prompt:

Prompt: