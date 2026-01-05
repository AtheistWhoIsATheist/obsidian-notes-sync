---
date: 2024-06-20 11:56:06
created: 2024-06-20 11:47:33
Folder:
  - Prompts / Prompt Tools / Prompt Generators
---

## Prompt Markup Language

[https://www.promptml.org/](https://www.promptml.org/)

**Jun 20, 2024**

- **Give the code to ChatGPT and ask to run it's python tool to implement the Prompt ML structuring to prompts.**

[![Logo](https://www.promptml.org/assets/logo.png)](https://www.promptml.org/)

<br>

## PromptML (Prompt Markup Language)

<br>

Prompt Markup Language a.k.a PromptML is a programming language designed to write AI prompts as code.

<br>

## Why PromptML ?

<br>

PromptML provides a way for prompt engineers to define the AI prompts in a deterministic way. This is a Domain Specific Language (DSL) which defines characteristics of a prompt including context, objective, instructions and it's metadata. A regular prompt is an amalgamation of all these aspects into one natural language sentence. PromptML splits it into multiple sections and makes the information explicit.

<br>

The language grammar can be found here: [grammar.lark](https://github.com/narenaryan/promptml/blob/main/src/promptml/grammar.lark)

<br>

## Installing promptml

<br>

To get the latest version of promptml parser, run the following pip command:

<br>

```
pip install promptml

```

<br>

## How PromptML looks ?

<br>

The language is simple. You start blocks with `@` section annotation. A section ends with `@end` marker. Comments are started with `#` key. The prompt files ends with `.pml` extension.

<br>

```
@prompt
    # Add task context
    @context
    @end

    # Add task objective
    @objective
    # This is the final question or ask
    @end

    # Add one or more instructions to execute the prompt
    @instructions
        @step
        @end
    @end

    # Add one or more examples
    @examples
        @example
            @input
            # Add your example input
            @end
            @output
            # Add your example output
            @end
        @end
    @end

    # Add task constraints
    @constraints
        @length min: 1 max: 10  @end
    @end

    # Add prompt category
    @category
    @end

    # Add custom metadata
    @metadata
    @end
@end

```

<br>

See [prompt.pml](https://www.promptml.org/prompt.pml) to see for complete syntax.

<br>

## Design

<br>

Regular text prompts are very abstract in nature. Natural languages are very flexible but provides least reliability. How to provide context for an AI system and ask something ? Shouldn't we specify that explicitly. PromptML is an attempt to make contents of a prompt explicit with a simple language.

<br>

## Core tenets of PromptML

<br>

Below are the qualities PromptML brings to prompt engineering domain:

<br>

1. Standardization instead of fragmentation
2. Collaboration instead of confusion
3. Enabling version control-ability
4. Promoting verbosity for better results

## Why not use XML, YAML, or JSON for prompt engineering ?

<br>

First, XML, JSON, and YAML are not DSL languages. They are data formats that can represent any form of data. Second, generative AI needs a strict, yet flexible data language with fixed constraints which evolve along with the domain.

<br>

PromptML is built exactly to solve those two issues.

<br>

Language grammar is influenced by XML & Ruby, so if you know any one of them, you will feel very comfortable writing prompts in PromptML.

<br>

## Usage

<br>

1. Install Python requirements

```
pip install -r requirements.txt

```

<br>

1. import the parser and parse a promptML file

```
from promptml.parser import PromptParser

promptml_code = '''
    @prompt
        @context
            This is the context section.
        @end

        @objective
            This is the objective section.
        @end

        @instructions
            @step
                Step 1
            @end
        @end

        @examples
            @example
                @input
                    Input example 1
                @end
                @output
                    Output example 1
                @end
            @end
        @end

        @category
            Prompt Management
        @end

        @constraints
            @length min: 1 max: 10 @end
        @end

        @metadata
            top_p: 0.9
            n: 1
            team: promptml
        @end
    @end
'''

parser = PromptParser(promptml_code)
prompt = parser.parse()

print(prompt)
# Output: {
#     'context': 'This is the context section.',
#     'objective': 'This is the objective section.',
#     'category': 'Prompt Management',
#     'instructions': ['Step 1'],
#     'examples': [
#         {'input': 'Input example 1', 'output': 'Output example 1'}
#     ],
#     'constraints': {'length': {'min': 1, 'max': 10}},
#     'metadata': {'top_p': 0.9, 'n': 1, 'team': 'promptml'}
# }

```

<br>

## Defining variables

<br>

You can define variables in the promptML file and use them in the prompt `context` and `objective`. The variables are defined in the `@vars` section and referenced using `$var` syntax in either `context` or `objective` sections.

<br>

```
@vars
    name = "John Doe"
@end

@prompt
    @context
        You are a name changing expert.
    @end

    @objective
        You have to change the name: $name to an ancient name.
    @end
@end

```

<br>

## TODO

<br>

We are currently working on:

<br>

1. `VSCode` syntax highlighting support
2. Add more unit tests
3. Add support for `XML` & `YAML` serialization