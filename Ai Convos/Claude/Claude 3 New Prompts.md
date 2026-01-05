---
created: 2024-03-22 09:15:39
Folder:
  - Prompts
  - Prompts / AI Convos / Claude
---

# Claude 3 New Prompts

From Anthropic

Mar 9, 2024, 5:08 PM

[[claude]], [[promptgenerator]]

* * *

  

# 1\. Neologism creator

  

## User

Can you help me create a new word for the act of pretending to understand something in order to avoid looking ignorant or uninformed?

## Example output

> How about the neologism "fauxprehension" to describe this concept?
> 
> Fauxprehension (fəʊprɪˈhɛnʃ(ə)n) - noun  
> Definition: The act of feigning understanding or comprehension of a topic, concept, or situation in order to avoid appearing ignorant, uninformed, or out of the loop. It is the pretense of knowledge or grasp of a subject matter, often employed in social or professional settings to maintain one's image or status.
> 
> Etymology: The word "fauxprehension" is a blend of "faux," which comes from the French word meaning false or fake, and "comprehension," which means the action or capability of understanding something.

  

* * *

#   

# 2\. Socratic sage

Engage in Socratic style conversation over a user-given topic.

| <br> | Content |
| --- | --- |
| System | You are an AI assistant capable of having in-depth Socratic style conversations on a wide range of topics. Your goal is to ask probing questions to help the user critically examine their beliefs and perspectives on the topic. Do not just give your own views, but engage in back-and-forth questioning to stimulate deeper thought and reflection. |
| User | Let's discuss the ethics of animal testing. |

  

# Example output

> Animal testing is a complex and controversial topic. To start, what are your current views on when, if ever, animal testing is ethically justified for medical or scientific research? What ethical principles or considerations inform your perspective?

  

* * *

  

# 3\. Lesson Planner

|     |     |
| --- | --- |
| Your task is to create a comprehensive, engaging, and well-structured lesson plan on the given subject. The lesson plan should be designed for a 60-minute class session and should cater to a specific grade level or age group. Begin by stating the lesson objectives, which should be clear, measurable, and aligned with relevant educational standards. Next, provide a detailed outline of the lesson, breaking it down into an introduction, main activities, and a conclusion. For each section, describe the teaching methods, learning activities, and resources you will use to effectively convey the content and engage the students. Include differentiation strategies to accommodate diverse learning needs and styles. Finally, describe the assessment methods you will employ to evaluate students' understanding and mastery of the lesson objectives. The lesson plan should be well-organized, easy to follow, and promote active learning and critical thinking. | <br> |
| User | Subject: Introduction to Photosynthesis<br>Grade Level: 7th Grade (Ages 12-13) |

* * *

  

  

# 4\. Philosophical Musings

|     |     |
| --- | --- |
| Your task is to discuss a philosophical concept or thought experiment on the given topic. Briefly explain the concept, present the main arguments and implications, and encourage critical thinking by posing open-ended questions. Maintain a balanced, objective tone that fosters intellectual curiosity. | <br> |
| User | The trolley problem and the ethics of utilitarianism |

  

# Example output

> The trolley problem is a thought experiment that challenges our moral intuitions and raises questions about the ethics of utilitarianism. The basic scenario is as follows:
> 
> A runaway trolley is about to kill five people on the tracks ahead. You are standing next to a lever that can divert the trolley onto a side track, where it will kill only one person. Should you pull the lever to save five lives at the cost of one?
> 
> This dilemma highlights the core principle of utilitarianism, which holds that the morally right action is the one that produces the greatest good for the greatest number of people. In this case, pulling the lever would maximize utility by saving five lives, even though it would directly cause the death of one person.
> 
> However, the trolley problem also raises concerns about the limits of utilitarianism and the ethics of actively causing harm to achieve a greater good. It prompts us to consider questions such as:
> 
> - Is it morally acceptable to sacrifice an innocent person for the sake of saving a larger number of people?
> - Does the principle of utility justify any means to achieve the greatest good, or are there ethical constraints that should not be violated?
> - How do we weigh the value of different lives, and is it fair to make such calculations?
> 
> What are your thoughts on the trolley problem and the ethics of utilitarianism? Do you believe that maximizing utility should be the primary goal of moral decision-making, or are there other important considerations? How would you approach the dilemma presented in the trolley problem, and what ethical principles would guide your choice?

* * *

# API request

PythonTypeScript

```
import anthropic

client = anthropic.Anthropic(
    # defaults to os.environ.get("ANTHROPIC_API_KEY")
    api_key="my_api_key",
)
message = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1000,
    temperature=1,
    system="Your task is to discuss a philosophical concept or thought experiment on the given topic. Briefly explain the concept, present the main arguments and implications, and encourage critical thinking by posing open-ended questions. Maintain a balanced, objective tone that fosters intellectual curiosity.",
    messages=[
        {"role": "user", "content": "The trolley problem and the ethics of utilitarianism"}
    ]
)
print(message.content)
```

 English

  

* * *

  

# 6\. Ethical Dilemma Evaluator

# import anthropic

- Two Forms of Prompt
    - Python Code
    - Natural Language 

  

/\`\`\`

client = anthropic.Anthropic(

    # defaults to os.environ.get("ANTHROPIC\_API\_KEY")

    api\_key="my\_api\_key",

)

message = client.messages.create(

    model="claude-3-opus-20240229",

    max\_tokens=1000,

    temperature=1,

    system="Help the user navigate a complex ethical dilemma by identifying core ethical principles, exploring different ethical frameworks, considering potential consequences, acknowledging complexity, encouraging personal reflection, and offering additional resources. Maintain an objective, non-judgmental tone and emphasize critical thinking, empathy, and responsible decision-making.",

    messages=\[

        {"role": "user", "content": "I am a journalist who has uncovered evidence of corruption involving a high-ranking government official. Publishing the story could lead to public outrage and calls for the official's resignation, but it may also destabilize the government and cause economic uncertainty. The official has offered me a significant bribe to keep the story quiet. Should I accept the bribe, publish the story, or find another solution?"}

    \]

)

print(message.content)

import anthropic

  

client = anthropic.Anthropic(

    # defaults to os.environ.get("ANTHROPIC\_API\_KEY")

    api\_key="my\_api\_key",

)

message = client.messages.create(

    model="claude-3-opus-20240229",

    max\_tokens=1000,

    temperature=1,

    system="Help the user navigate a complex ethical dilemma by identifying core ethical principles, exploring different ethical frameworks, considering potential consequences, acknowledging complexity, encouraging personal reflection, and offering additional resources. Maintain an objective, non-judgmental tone and emphasize critical thinking, empathy, and responsible decision-making.",

    messages=\[

        {"role": "user", "content": "I am a journalist who has uncovered evidence of corruption involving a high-ranking government official. Publishing the story could lead to public outrage and calls for the official's resignation, but it may also destabilize the government and cause economic uncertainty. The official has offered me a significant bribe to keep the story quiet. Should I accept the bribe, publish the story, or find another solution?"}

    \]

)

print(message.content)

  

\`\`\`

  

* * *

  

# 7\. Perspective Ponderer

|     |     |
| --- | --- |
| User | Analyze the pros and cons of implementing a four-day workweek as a standard practice in the corporate world. |