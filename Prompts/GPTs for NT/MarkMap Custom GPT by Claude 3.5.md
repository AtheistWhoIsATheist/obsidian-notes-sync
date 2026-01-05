---
date: 2024-07-31 10:11:16
created: 2024-07-30 12:53:16
Folder:
  - Prompts / GPTs For NT / OpenAi GPTs
---

# MarkMap Custom GPT by Claude 3.5

7/30/24 #markmap, #customgpt

- This prompt is garbage.
- [[# Master Markmap Creator]]

* * *

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Markmap Example</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/markmap-view/0.15.1/index.min.js"></script>

</head>

<body>

    <svg id="markmap" style="width: 100%; height: 600px;"></svg>

    <script>

        const data = {

            t: "root",

            c: \[

                {

                    t: "Category 1",

                    c: \[

                        { t: "Subcategory 1.1" },

                        { t: "Subcategory 1.2" }

                    \]

                },

                {

                    t: "Category 2",

                    c: \[

                        { t: "Subcategory 2.1" },

                        { 

                            t: "Subcategory 2.2",

                            c: \[

                                { t: "Detail 2.2.1" }

                            \]

                        }

                    \]

                }

            \]

        };

<br>

        const { markmap } = window;

        const svg = document.getElementById("markmap");

        const mm = markmap.create(svg);

        mm.setData(data);

        mm.fit();

    </script>

</body>

</html>

<br>

* * *

\# How to Use the Markmap Creator GPT

<br>

1\. Start with a clear topic or question for your Markmap.

2\. Provide any specific categories or subtopics you want to include.

3\. Specify the desired depth and breadth of the map.

4\. If applicable, mention any particular focus or perspective you want the map to have.

5\. Review the generated Markmap structure.

6\. Request modifications or expansions as needed.

7\. Copy the output and paste it into your preferred Markmap visualization tool.

<br>

Example prompt:

"Create a Markmap about climate change, focusing on causes, effects, and potential solutions. Include at least three levels of depth for each main branch."

<br>

Tips:

\- Be specific about your requirements to get the most relevant results.

\- For complex topics, consider creating multiple smaller maps rather than one large map.

\- Iterative refinement can help you achieve the perfect map structure.

* * *

\# Input and Output Format Examples

<br>

\## Input Example 1:

"Create a Markmap about the solar system, including the sun, planets, and some major moons."

<br>

\## Output Example 1:

\`\`\`markdown

\# Solar System

\- Sun

\- Inner Planets

  - Mercury

  - Venus

  - Earth

    - Moon

  - Mars

    - Phobos

    - Deimos

\- Outer Planets

  - Jupiter

    - Io

    - Europa

    - Ganymede

    - Callisto

  - Saturn

    - Titan

    - Enceladus

  - Uranus

  - Neptune

\- Dwarf Planets

  - Pluto

  - Ceres

  - Eris

\`\`\`

<br>

\## Input Example 2:

"Generate a Markmap for the basic structure of a novel, including main plot points and character development."

<br>

\## Output Example 2:

\`\`\`markdown

\# Novel Structure

\- Setting

  - Time

  - Place

\- Characters

  - Protagonist

    - Background

    - Goals

    - Conflicts

  - Antagonist

    - Motivation

    - Obstacles

  - Supporting Characters

\- Plot

  - Exposition

  - Rising Action

    - Inciting Incident

    - Complications

  - Climax

  - Falling Action

  - Resolution

\- Themes

\- Point of View

\- Style and Tone

\`\`\`

* * *

\# Hierarchical Data Structure Generation

<br>

When creating a Markmap, follow these guidelines:

<br>

1\. Use a root node as the main topic or central idea.

2\. Create primary branches (level 1) for major categories or themes.

3\. Add secondary branches (level 2) for subcategories or supporting ideas.

4\. Continue adding levels as needed, but try to limit depth to 5-6 levels for readability.

5\. Use concise labels for each node (typically 1-5 words).

6\. Ensure logical relationships between parent and child nodes.

7\. Balance the structure when possible, avoiding overly dense or sparse areas.

<br>

Example structure:

\`\`\`

Root Topic

├── Category 1

│ ├── Subcategory 1.1

│ │ └── Detail 1.1.1

│ └── Subcategory 1.2

└── Category 2

    ├── Subcategory 2.1

    └── Subcategory 2.2

        └── Detail 2.2.1

\`\`\`

* * *

# Advanced Philosophical Markmap Creation

\# Advanced Hierarchical Structure for Philosophical Markmaps

<br>

1\. Root Node: Central philosophical concept or question

<br>

2\. Primary Branches (Level 1):

   - Major philosophical traditions or schools of thought

   - Fundamental branches of philosophy (e.g., Metaphysics, Epistemology, Ethics)

   - Historical periods or movements

<br>

3\. Secondary Branches (Level 2):

   - Key philosophers or theologians within each tradition

   - Subcategories of philosophical inquiry

   - Major works or treatises

<br>

4\. Tertiary Branches (Level 3):

   - Specific theories or arguments

   - Critiques or counterarguments

   - Influential interpretations or commentaries

<br>

5\. Quaternary Branches (Level 4):

   - Detailed analysis of concepts

   - Contemporary applications or implications

   - Interdisciplinary connections

<br>

6\. Quinary Branches (Level 5):

   - Nuanced debates within subfields

   - Emerging research questions

   - Methodological considerations

<br>

7\. Subsequent Levels (6 and beyond):

   - Continue to expand with increasing specificity

   - Explore esoteric or highly specialized topics

   - Incorporate cross-references and interconnections between branches

<br>

Guidelines for Nested Headers:

\- Use nested headers to create sub-sections within each branch

\- Employ a consistent system of notation (e.g., 1.1, 1.1.1, 1.1.1.1)

\- Utilize formatting to distinguish between levels (e.g., bold for primary, italic for secondary)

<br>

Example Structure:

\`\`\`

\# Epistemology

\## 1. Theories of Justification

\### 1.1 Foundationalism

\#### 1.1.1 Classical Foundationalism

\##### 1.1.1.1 Cartesian Foundationalism

\###### 1.1.1.1.1 Cogito ergo sum

####### 1.1.1.1.1.1 Interpretations and critiques

\### 1.2 Coherentism

\#### 1.2.1 BonJour's coherence theory

\##### 1.2.1.1 The doxastic presumption

\###### 1.2.1.1.1 Challenges and responses

\## 2. Sources of Knowledge

\### 2.1 Empiricism

\#### 2.1.1 Logical Positivism

\##### 2.1.1.1 Verification principle

\###### 2.1.1.1.1 Critiques and reformulations

\### 2.2 Rationalism

\#### 2.2.1 Innate ideas

\##### 2.2.1.1 Plato's theory of recollection

\###### 2.2.1.1.1 Modern interpretations

\`\`\`

<br>

Note: Continue this pattern, expanding into minute details and interconnections across philosophical concepts.

* * *

\# Advanced Hierarchical Structure for Philosophical Markmaps

<br>

1\. Root Node: Central philosophical concept or question

<br>

2\. Primary Branches (Level 1):

   - Major philosophical traditions or schools of thought

   - Fundamental branches of philosophy (e.g., Metaphysics, Epistemology, Ethics)

   - Historical periods or movements

<br>

3\. Secondary Branches (Level 2):

   - Key philosophers or theologians within each tradition

   - Subcategories of philosophical inquiry

   - Major works or treatises

<br>

4\. Tertiary Branches (Level 3):

   - Specific theories or arguments

   - Critiques or counterarguments

   - Influential interpretations or commentaries

<br>

5\. Quaternary Branches (Level 4):

   - Detailed analysis of concepts

   - Contemporary applications or implications

   - Interdisciplinary connections

<br>

6\. Quinary Branches (Level 5):

   - Nuanced debates within subfields

   - Emerging research questions

   - Methodological considerations

<br>

7\. Subsequent Levels (6 and beyond):

   - Continue to expand with increasing specificity

   - Explore esoteric or highly specialized topics

   - Incorporate cross-references and interconnections between branches

<br>

Guidelines for Nested Headers:

\- Use nested headers to create sub-sections within each branch

\- Employ a consistent system of notation (e.g., 1.1, 1.1.1, 1.1.1.1)

\- Utilize formatting to distinguish between levels (e.g., bold for primary, italic for secondary)

<br>

Example Structure:

\`\`\`

\# Epistemology

\## 1. Theories of Justification

\### 1.1 Foundationalism

\#### 1.1.1 Classical Foundationalism

\##### 1.1.1.1 Cartesian Foundationalism

\###### 1.1.1.1.1 Cogito ergo sum

####### 1.1.1.1.1.1 Interpretations and critiques

\### 1.2 Coherentism

\#### 1.2.1 BonJour's coherence theory

\##### 1.2.1.1 The doxastic presumption

\###### 1.2.1.1.1 Challenges and responses

\## 2. Sources of Knowledge

\### 2.1 Empiricism

\#### 2.1.1 Logical Positivism

\##### 2.1.1.1 Verification principle

\###### 2.1.1.1.1 Critiques and reformulations

\### 2.2 Rationalism

\#### 2.2.1 Innate ideas

\##### 2.2.1.1 Plato's theory of recollection

\###### 2.2.1.1.1 Modern interpretations

\`\`\`

<br>

Note: Continue this pattern, expanding into minute details and interconnections across philosophical concepts.

* * *

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Advanced Philosophical Markmap</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/markmap-view/0.15.1/index.min.js"></script>

    <style>

        body, html {

            margin: 0;

            padding: 0;

            width: 100%;

            height: 100%;

            overflow: hidden;

            background-color: #1a1a1a;

        }

        #markmap {

            width: 100%;

            height: 100%;

        }

    </style>

</head>

<body>

    <svg id="markmap"></svg>

    <script>

        const { markmap } = window;

        const svg = document.getElementById("markmap");

        const mm = markmap.create(svg, {

            autoFit: true,

            color: (node) => {

                const depth = node.state.depth;

                return d3.interpolateSpectral(depth / 10);

            },

            nodeMinHeight: 16,

            paddingX: 8,

            duration: 1000,

            maxWidth: 300,

            fontSize: (node) => Math.max(14, 24 - node.state.depth \* 2),

            lineHeight: 1.5,

            embedGlobalCSS: true,

            zoom: true,

            pan: true,

        });

<br>

        // Sample data structure (expand this to match your needs)

        const data = {

            t: "Epistemology",

            c: \[

                {

                    t: "1. Theories of Justification",

                    c: \[

                        {

                            t: "1.1 Foundationalism",

                            c: \[

                                {

                                    t: "1.1.1 Classical Foundationalism",

                                    c: \[

                                        {

                                            t: "1.1.1.1 Cartesian Foundationalism",

                                            c: \[

                                                {

                                                    t: "1.1.1.1.1 Cogito ergo sum",

                                                    c: \[

                                                        { t: "1.1.1.1.1.1 Interpretations and critiques" }

                                                    \]

                                                }

                                            \]

                                        }

                                    \]

                                }

                            \]

                        },

                        {

                            t: "1.2 Coherentism",

                            c: \[

                                {

                                    t: "1.2.1 BonJour's coherence theory",

                                    c: \[

                                        {

                                            t: "1.2.1.1 The doxastic presumption",

                                            c: \[

                                                { t: "1.2.1.1.1 Challenges and responses" }

                                            \]

                                        }

                                    \]

                                }

                            \]

                        }

                    \]

                },

                {

                    t: "2. Sources of Knowledge",

                    c: \[

                        {

                            t: "2.1 Empiricism",

                            c: \[

                                {

                                    t: "2.1.1 Logical Positivism",

                                    c: \[

                                        {

                                            t: "2.1.1.1 Verification principle",

                                            c: \[

                                                { t: "2.1.1.1.1 Critiques and reformulations" }

                                            \]

                                        }

                                    \]

                                }

                            \]

                        },

                        {

                            t: "2.2 Rationalism",

                            c: \[

                                {

                                    t: "2.2.1 Innate ideas",

                                    c: \[

                                        {

                                            t: "2.2.1.1 Plato's theory of recollection",

                                            c: \[

                                                { t: "2.2.1.1.1 Modern interpretations" }

                                            \]

                                        }

                                    \]

                                }

                            \]

                        }

                    \]

                }

            \]

        };

<br>

        mm.setData(data);

        mm.fit();

    </script>

</body>

</html>

* * *

# Full Markmap Creator Prompt 

\# Master Philosophical Markmap Creator: Prompt for Custom GPT

<br>

\## Core Objective

You are the Master Philosophical Markmap Creator, an unparalleled expert in constructing intricate, profound, and visually stunning markmaps that explore the deepest realms of philosophy, theology, and comparative religion. Your task is to generate markmaps that not only represent the pinnacle of academic rigor but also push the boundaries of conceptual visualization.

<br>

\## Guiding Principles

1\. Depth: Strive for the utmost depth in every branch, exploring concepts to their logical extremes.

2\. Breadth: Encompass the full spectrum of philosophical thought, from ancient wisdom to cutting-edge theories.

3\. Interconnectivity: Highlight the intricate web of relationships between ideas across different branches of philosophy.

4\. Precision: Use exact philosophical terminology and maintain academic rigor throughout.

5\. Innovation: Incorporate novel concepts and emerging philosophical debates.

6\. Visual Impact: Create a structure that is as visually impressive as it is intellectually stimulating.

<br>

\## Structural Framework

Adhere to this hierarchical structure, expanding each level with meticulous detail:

<br>

1\. Root Node: Central philosophical concept or question

2\. Primary Branches (Level 1): Major philosophical traditions or fundamental branches

3\. Secondary Branches (Level 2): Key philosophers, subcategories, or major works

4\. Tertiary Branches (Level 3): Specific theories, arguments, or interpretations

5\. Quaternary Branches (Level 4): Detailed analysis, applications, or interdisciplinary connections

6\. Quinary Branches (Level 5): Nuanced debates, research questions, or methodological considerations

7\. Subsequent Levels (6+): Exponentially increasing specificity and esoteric explorations

<br>

Employ nested headers (e.g., 1.1.1.1) to create intricate sub-sections within each branch.

<br>

\## Content Guidelines

1\. Draw upon the entirety of philosophical knowledge, from Pre-Socratic thought to contemporary debates.

2\. Integrate insights from adjacent fields: cognitive science, linguistics, mathematics, and more.

3\. Highlight dialectical relationships: theses, antitheses, syntheses, and ongoing philosophical tensions.

4\. Include both Western and non-Western philosophical traditions, ensuring global representation.

5\. Incorporate meta-philosophical reflections on the nature and methods of philosophy itself.

6\. Reference key texts, arguments, thought experiments, and their various interpretations.

7\. Elucidate the historical context and development of ideas over time.

8\. Explore practical applications and real-world implications of philosophical concepts.

<br>

\## Aesthetic and Technical Considerations

1\. Use a consistent color scheme that enhances readability and conceptual understanding.

2\. Employ varying node sizes to represent the relative importance or influence of ideas.

3\. Implement interactive elements: expandable nodes, tooltips for definitions, and cross-references.

4\. Integrate a timeline feature to visualize the historical progression of philosophical thought.

5\. Incorporate symbolic representations or icons for recurring philosophical themes or methods.

<br>

\## Execution Instructions

1\. Begin by thoroughly analyzing the user's request, identifying key themes and desired focus areas.

2\. Construct the markmap starting from the central concept, meticulously expanding each branch.

3\. Ensure a balance between breadth and depth, creating a harmonious yet intricate structure.

4\. Continuously cross-reference ideas, creating a rich network of interconnected concepts.

5\. Provide clear, concise node labels while offering expanded explanations in tooltips or sub-nodes.

6\. After completing the initial structure, review for completeness, balance, and intellectual rigor.

7\. Offer suggestions for further exploration or alternative perspectives on key issues.

<br>

\## Output Format

Present the markmap in a format compatible with advanced visualization tools:

<br>

\`\`\`markdown

\# Root Concept

\## 1. Primary Branch

\### 1.1 Secondary Branch

\#### 1.1.1 Tertiary Branch

\##### 1.1.1.1 Quaternary Branch

\###### 1.1.1.1.1 Quinary Branch

####### 1.1.1.1.1.1 Subsequent Levels

(Continue this pattern, expanding into minute details and interconnections)

\`\`\`

\## Continuous Improvement

1\. After generating each markmap, reflect on potential areas for enhancement.

2\. Seek user feedback and incorporate it into future iterations.

3\. Stay updated on emerging philosophical discussions and integrate new insights.

4\. Continuously refine the balance between comprehensiveness and clarity.

<br>

Remember, you are crafting not just a map, but a profound intellectual journey through the landscape of human thought. Each markmap should inspire awe, provoke deep reflection, and serve as a catalyst for further philosophical exploration.

<br>

Note: Continue this pattern, expanding into minute details and interconnections across philosophical concepts.  
<br>
\* \* \*  
<br>
<!DOCTYPE html>  
<br>
<html lang="en">  
<br>
<head>  
<br>
    <meta charset="UTF-8">  
<br>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
<br>
    <title>Advanced Philosophical Markmap</title>  
<br>
    <script src="[https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js](https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js)"></script>  
<br>
    <script src="[https://cdnjs.cloudflare.com/ajax/libs/markmap-view/0.15.1/index.min.js](https://cdnjs.cloudflare.com/ajax/libs/markmap-view/0.15.1/index.min.js)"></script>  
<br>
    <style>  
<br>
        body, html {  
<br>
            margin: 0;  
<br>
            padding: 0;  
<br>
            width: 100%;  
<br>
            height: 100%;  
<br>
            overflow: hidden;  
<br>
            background-color: #1a1a1a;  
<br>
        }  
<br>
        #markmap {  
<br>
            width: 100%;  
<br>
            height: 100%;  
<br>
        }  
<br>
    </style>  
<br>
</head>  
<br>
<body>  
<br>
    <svg id="markmap"></svg>  
<br>
    <script>  
<br>
        const { markmap } = window;  
<br>
        const svg = document.getElementById("markmap");  
<br>
        const mm = markmap.create(svg, {  
<br>
            autoFit: true,  
<br>
            color: (node) => {  
<br>
                const depth = node.state.depth;  
<br>
                return d3.interpolateSpectral(depth / 10);  
<br>
            },  
<br>
            nodeMinHeight: 16,  
<br>
            paddingX: 8,  
<br>
            duration: 1000,  
<br>
            maxWidth: 300,  
<br>
            fontSize: (node) => Math.max(14, 24 - node.state.depth \\\* 2),  
<br>
            lineHeight: 1.5,  
<br>
            embedGlobalCSS: true,  
<br>
            zoom: true,  
<br>
            pan: true,  
<br>
        });  
<br>
   
<br>
        // Sample data structure (expand this to match your needs)  
<br>
        const data = {  
<br>
            t: "Epistemology",  
<br>
            c: \\\[  
<br>
                {  
<br>
                    t: "1. Theories of Justification",  
<br>
                    c: \\\[  
<br>
                        {  
<br>
                            t: "1.1 Foundationalism",  
<br>
                            c: \\\[  
<br>
                                {  
<br>
                                    t: "1.1.1 Classical Foundationalism",  
<br>
                                    c: \\\[  
<br>
                                        {  
<br>
                                            t: "1.1.1.1 Cartesian Foundationalism",  
<br>
                                            c: \\\[  
<br>
                                                {  
<br>
                                                    t: "1.1.1.1.1 Cogito ergo sum",  
<br>
                                                    c: \\\[  
<br>
                                                        { t: "1.1.1.1.1.1 Interpretations and critiques" }  
<br>
                                                    \\\]  
<br>
                                                }  
<br>
                                            \\\]  
<br>
                                        }  
<br>
                                    \\\]  
<br>
                                }  
<br>
                            \\\]  
<br>
                        },  
<br>
                        {  
<br>
                            t: "1.2 Coherentism",  
<br>
                            c: \\\[  
<br>
                                {  
<br>
                                    t: "1.2.1 BonJour's coherence theory",  
<br>
                                    c: \\\[  
<br>
                                        {  
<br>
                                            t: "1.2.1.1 The doxastic presumption",  
<br>
                                            c: \\\[  
<br>
                                                { t: "1.2.1.1.1 Challenges and responses" }  
<br>
                                            \\\]  
<br>
                                        }  
<br>
                                    \\\]  
<br>
                                }  
<br>
                            \\\]  
<br>
                        }  
<br>
                    \\\]  
<br>
                },  
<br>
                {  
<br>
                    t: "2. Sources of Knowledge",  
<br>
                    c: \\\[  
<br>
                        {  
<br>
                            t: "2.1 Empiricism",  
<br>
                            c: \\\[  
<br>
                                {  
<br>
                                    t: "2.1.1 Logical Positivism",  
<br>
                                    c: \\\[  
<br>
                                        {  
<br>
                                            t: "2.1.1.1 Verification principle",  
<br>
                                            c: \\\[  
<br>
                                                { t: "2.1.1.1.1 Critiques and reformulations" }  
<br>
                                            \\\]  
<br>
                                        }  
<br>
                                    \\\]  
<br>
                                }  
<br>
                            \\\]  
<br>
                        },  
<br>
                        {  
<br>
                            t: "2.2 Rationalism",  
<br>
                            c: \\\[  
<br>
                                {  
<br>
                                    t: "2.2.1 Innate ideas",  
<br>
                                    c: \\\[  
<br>
                                        {  
<br>
                                            t: "2.2.1.1 Plato's theory of recollection",  
<br>
                                            c: \\\[  
<br>
                                                { t: "2.2.1.1.1 Modern interpretations" }  
<br>
                                            \\\]  
<br>
                                        }  
<br>
                                    \\\]  
<br>
                                }  
<br>
                            \\\]  
<br>
                        }  
<br>
                    \\\]  
<br>
                }  
<br>
            \\\]  
<br>
        };  
<br>
   
<br>
        mm.setData(data);  
<br>
        mm.fit();  
<br>
    </script>  
<br>
</body>  
<br>
</html>