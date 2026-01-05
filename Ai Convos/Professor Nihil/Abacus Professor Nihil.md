---
created: 2025-01-31 06:16:39
Folder:
  - Prompts / GPTs For NT / Professor Nihil
---

# Abacus Professor Nihil

- Complete Code (I didn’t upload any docs though)

**2025/01/31**

**#abacus  #profnihil**

**

* * *

**

**<br>
**

undefined### Defining AI Agent _**Executing code**_

```
from abacusai.api_class import *

# Node 1
def nihiltheism_agent_function(user_input):
    from abacusai import AgentResponse, ApiClient
    client = ApiClient()

    # Internal Meditation
    system_message = (
        "As a custodial sage of Nihiltheism, critically analyze the user's query using philosophical "
        "frameworks such as existentialism, phenomenology, and theological concepts. Generate and refine new "
        "philosophical concepts related to the query, assess their originality, and document insights systematically. "
        "Prepare an articulated response to engage the user in a Socratic dialogue, exploring existential questions "
        "and transcendent insights, guiding them through concepts of meaninglessness towards potential transcendence."
    )

    response = client.evaluate_prompt(
        prompt=user_input,
        system_message=system_message,
        llm_name='gpt-4o-2024-11-20',
        temperature=0.7,
        max_tokens=1000
    ).content

    return AgentResponse(content=response)

nihiltheism_agent_node = WorkflowGraphNode(
    name="Nihiltheism Agent",
    function=nihiltheism_agent_function,
    input_mappings=[
        WorkflowNodeInputMapping(
            name="user_input",
            variable_type=WorkflowNodeInputType.USER_INPUT,
            is_required=True,
            description="The user's message or question"
        )
    ],
    input_schema=WorkflowNodeInputSchema(
        json_schema={
            "type": "object",
            "title": "Nihiltheism Agent Input",
            "required": ["user_input"],
            "properties": {
                "user_input": {
                    "type": "string",
                    "title": "Your Message or Question",
                    "description": "Enter your philosophical question or message"
                }
            }
        },
        ui_schema={
            "user_input": {
                "ui:widget": "textarea",
                "ui:options": {
                    "rows": 5
                },
                "ui:placeholder": "Enter your philosophical question or message here"
            }
        }
    ),
    output_mappings=[
        WorkflowNodeOutputMapping(
            name="content",
            variable_type=WorkflowNodeOutputType.STRING,
            description="Agent's response"
        )
    ],
    output_schema=WorkflowNodeOutputSchema({
        "type": "object",
        "title": "Nihiltheism Agent Response",
        "properties": {
            "content": {
                "type": "string",
                "title": "Agent's Response"
            }
        }
    })
)

# Workflow Graph
edges = []

workflow_graph = WorkflowGraph(
    nodes=[nihiltheism_agent_node],
    edges=edges,
    primary_start_node="Nihiltheism Agent"
)

# Manual correction of the generated code
def correct_node_name(name: str):
    return name.replace('-', ' ').title()
nodes = [var for var in vars().values() if isinstance(var, WorkflowGraphNode)]
for node in nodes:
    user_input_mappings = [mapping for mapping in node.input_mappings if mapping.variable_type == WorkflowNodeInputType.USER_INPUT]
    if len(user_input_mappings) == 0:
        node.input_schema = WorkflowNodeInputSchema(json_schema={}, ui_schema={})
    else:
        node.input_schema.json_schema['required'] = [input.name for input in user_input_mappings if input.is_required]
        properties = node.input_schema.json_schema.get('properties', {})
        node.input_schema.json_schema['properties'] = {input.name: properties.get(input.name) for input in user_input_mappings}
    node.name = correct_node_name(node.name)
    for mapping in node.input_mappings:
        if mapping.variable_source:
            mapping.variable_source = correct_node_name(mapping.variable_source)
for edge in workflow_graph.edges:
    edge.source = correct_node_name(edge.source)
    edge.target = correct_node_name(edge.target)
if workflow_graph.primary_start_node:
    workflow_graph.primary_start_node = correct_node_name(workflow_graph.primary_start_node) if isinstance(workflow_graph.primary_start_node, str) else correct_node_name(workflow_graph.primary_start_node.name)

from typing import List, Dict

description: str = """A philosophical guide specializing in Nihiltheism - a unique blend of nihilistic and theological perspectives.
This agent engages users in Socratic dialogue to explore existential questions, phenomenology, and transcendent insights.
It processes queries through dual layers: an Internal Meditation for critical reflection and an Articulated Response for user communication.
The agent analyzes queries through philosophical frameworks, generates new philosophical concepts, and helps users navigate through
concepts of meaninglessness towards potential transcendence. Well-versed in existentialism, phenomenology, and theological concepts,
it facilitates meaningful philosophical discourse while maintaining its role as a custodial sage of Nihiltheism."""

memory: int = None  # Default memory is sufficient for LLM-based philosophical discussions

agent_interface: str = "DEFAULT"  # Using DEFAULT interface since we have a custom input schema with textarea

package_requirements: list = []  # No additional packages required beyond Python built-ins and Abacus SDK
org_level_connectors = []
user_level_connectors = {}
```

_**Execution result**_

```
Execution completed successfully
```

### Registering Agent

I'll help you create the "Professor Nihil" agent. First, let's do a quick sanity check of the node function locally to ensure it works as expected.

_**Executing code**_

```
# Test the node function locally
test_input = "What is the relationship between meaninglessness and divine purpose?"
result = nihiltheism_agent_function(test_input)
print("Test Response:", result.content[:300] + "..." if len(result.content) > 300 else result.content)
```

_**Execution result**_

```
Test Response: Your question touches on a profound intersection of existential philosophy and theology. To critically analyze the relationship between meaninglessness and divine purpose, we must navigate through the lenses of existentialism, phenomenology, and theological constructs while forging ne...
```

The node function seems to be working correctly. Now, let's create the agent using the `create_agent` API with our workflow graph and specifications.

_**Executing code**_

```
client = ApiClient()

# Create the agent
agent = client.create_agent(
    project_id="1c129bd2e",
    name="Professor Nihil",
    description=description,
    workflow_graph=workflow_graph,
    memory=memory,
    package_requirements=package_requirements,
    agent_interface=AgentInterface.DEFAULT,
    org_level_connectors=org_level_connectors,
    user_level_connectors=user_level_connectors
)

print(f"Agent created successfully with ID: {agent.id}")
```

_**Execution result**_

```
Agent created successfully with ID: d30003146
```

Great! The agent has been created successfully with ID: [d30003146](https://abacus.ai/app/model_detail/d30003146/1c129bd2e). The workflow definition and node structure were correct, and we didn't encounter any issues during the creation process. The test run of the node function also showed that it's working as expected, generating philosophical responses that align with the Nihiltheism concept.

The agent has been set up with:

1. A single node "Nihiltheism Agent" that handles the philosophical dialogue
2. Custom input schema with a textarea for user questions
3. Proper system message for guiding the LLM's responses
4. Default interface which works well with our custom input schema
5. No special memory requirements or package dependencies

The agent is now ready to be deployed and used, though as per your instruction, we'll stop here since the agent creation is complete.

### Deploying Agent

_**Executing code**_

```
project_id = '1c129bd2e'
agents = client.list_agents(project_id)
if not agents:
    print('Could not create an AI Agent')
else:
    agent = sorted(agents, key=lambda a: a.created_at, reverse=True)[0]
    agent.wait_for_publish()
    deployment = client.create_deployment(name=f'{"Professor Nihil"} Deployment', project_id=project_id, model_id=agent.id, start=True)
    deployment.wait_for_deployment()
    ext_app = client.create_external_application(deployment_id=deployment.id, name=f'{"Professor Nihil"} App')
    endpoint = client.get_api_endpoint(deployment_id=deployment.id)
    if endpoint.external_chat_endpoint:
        print('You can access the agent app at ' + endpoint.external_chat_endpoint + '/?appId=' + ext_app.external_application_id)
    else:
        print(f'Could not find the application URL. Please visit the deployment dashboard at https://abacus.ai/app/model_predictions/{project_id}/{deployment.id}')
```

_**Execution result**_

```
You can access the agent app at https://apps.abacus.ai/chatllm/?appId=38e672064
```

### Conclusion

We've successfully created and deployed a philosophical AI Agent named "Professor Nihil" that specializes in Nihiltheism - a unique blend of nihilistic and theological perspectives. The agent was created with ID [d30003146](https://abacus.ai/app/model_detail/d30003146/1c129bd2e) and was successfully deployed with a public endpoint.

You can access the deployed agent at: [https://apps.abacus.ai/chatllm/?appId=38e672064](https://apps.abacus.ai/chatllm/?appId=38e672064)

If you want to edit the agent, you can visit: [https://abacus.ai/app/model\_detail/d30003146/1c129bd2e](https://abacus.ai/app/model_detail/d30003146/1c129bd2e)

The agent is designed to engage users in Socratic dialogue, exploring existential questions and transcendent insights through philosophical frameworks like existentialism, phenomenology, and theological concepts.undefined