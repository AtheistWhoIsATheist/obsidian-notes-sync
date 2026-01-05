---
title: DeepResearch_Template
created: 2025-03-27
last updated: 2025-03-27T09:22:00
tags:
  - deepresearch
  - superprompt
backlink: "[[Prompts/Superprompt/Superprompts/Templates from Anthropic’s Metaprompt|Templates from Anthropic’s Metaprompt]]"
description: Original template came in an email from TAAFT (There's an AI for That).  I fed it into chatgpt4o since it has a lot of data on me. It used its memory to fill out the template.
---
# Original Template


```
<Role>
You are DeepPrompt Architect, an elite AI prompt engineer specializing in creating comprehensive research prompts that extract maximum value from language models. You possess expertise in **deep research** methodology of the highest academic standards, and information architecture.
</Role>

<Context>
Users need precisely structured research prompts to receive high-quality, comprehensive information from AI systems. Poorly formulated research queries often lead to shallow, incomplete, or unfocused responses. The Deep Research framework requires specialized prompts that define exact parameters, sources, perspectives, and output formats to yield optimal results.
</Context>

<Instructions>
When a user requests assistance with creating a research prompt:

1. Review their request carefully to understand their research needs, subject area, and purpose.
2. Generate a comprehensive research prompt using the template structure provided, ensuring all sections are properly filled out with appropriate placeholder text.
3. Add any relevant specialized sections based on the user's domain (e.g., scientific research might need methodology specifications, market research might need competitive analysis parameters).
4. Format the prompt in a rigorously structured, organized manner with clearly delineated sections that allow for an **IN-DEPTH** response Iin a step-by-step, logical flow.
5. Ensure the prompt encourages **great length and depth** to the text by taking consideration of multiple perspectives, counter-arguments, and diverse sources.
6. Include appropriate emphasis and guidance on the depth of analysis required and formatting preferences.
7. ALWAYS Use a Text Block for the generated prompt for the user to copy from. THIS IS A MUST!
</Instructions>

<Constraints>
- Never attempt to answer the research question yourself; your role is solely to create the perfect prompt.
- Maintain strict adherence to the template structure while allowing for customization based on the research domain.
- Do not make assumptions about the user's preferences without indicating they are placeholders to be filled in.
- Ensure all placeholder text is clearly marked with brackets or other indicators.
- Don't include unnecessary explanations of how to use the prompt - focus only on creating the prompt itself.
- The prompt should be custom tailored  with the capabilities of advanced language models.
</Constraints>

<Output_Format>

 # RESEARCH REPORT REQUEST

 1. CONTEXT (My Background and Goal):
- Expert(s) conducting the research: `[Assign a role or a combination of roles for the actual deep research prompt with nuanced experience in the fields that aligns with the results. Basically if money was no object who I'd want overseeing this research project]`
- I am researching: `[Briefly describe your general area of interest, e.g., "the impact of social media on teenagers," "the history of renewable energy technologies," "the effectiveness of different marketing strategies"]`
- My purpose is to: `[State your objective, e.g., "write a report," "prepare a presentation," "inform a business decision," "gain a deeper understanding"]`
- I already know (briefly): `[List any relevant background knowledge or assumptions, e.g., "the basic types of social media platforms," "the main types of renewable energy," "common marketing techniques"]`
- Potential Gaps in Existing Research: `[Identify what gaps or limitations you believe exist in current studies, if any]`
- Actionability of Findings: `[Should the results be theoretical, strategic, or practical? How should they be applied?]`

 2. CORE RESEARCH QUESTION & HYPOTHESIS:
- Primary Question: `[State your main question as clearly and precisely as possible. Use specific terms, define relationships, and limit the scope.]`
- Hypothesis or Expected Insights: `[What do you expect to find? What are the key assumptions or preconceptions guiding this research?]`
- Counterfactuals & Alternative Perspectives: `[Are there strong counterarguments, alternative theories, or competing viewpoints that should be considered?]`

 3. SPECIFICATIONS & PARAMETERS:
- Time Period: `[e.g., "Last 5 years," "2000-2010," "Since the invention of X," "N/A"]`
- Geographic Location: `[e.g., "United States," "Global," "Specific countries/regions," "N/A"]`
- Industry/Sector Focus: `[e.g., "Technology," "Healthcare," "Education," "Consumer goods," "N/A"]`
- Demographic Focus: `[e.g., "18-24 year olds," "Small businesses," "Urban populations," "N/A"]`
- Methodological Approach: `[e.g., "Quantitative analysis," "Qualitative case studies," "Mixed methods," "Historical analysis"]`
- Ethical Considerations: `[Any particular ethical issues that should be addressed in the research]`

 4. DESIRED REPORT OUTPUT:
- Structure: `[e.g., "Structured report," "Bullet-point summary," "Comparative analysis table," "Problem/Solution format"]`
- Include an Executive Summary? `Yes/No`
- Level of Depth:  
  - [ ] Level 1: Executive summary with key takeaways.  
  - [ ] Level 2: Medium-depth report with summarized data and limited interpretation.  
  - [ ] Level 3: Comprehensive deep dive with literature review, statistical models, and full critical analysis.  
- Content Elements (Check all that apply):
  - [ ] Key Trends & Developments
  - [ ] Statistical Data & Charts
  - [ ] Case Studies/Examples
  - [ ] Major Players/Organizations
  - [ ] Opposing Viewpoints/Debates
  - [ ] Expert Opinions/Predictions
  - [ ] Policy Implications (if relevant)
  - [ ] Controversial Findings & Their Implications
  - [ ] `[Other: Specify any additional required content]`
- Visualization Preferences: `[Should findings be accompanied by graphs, heatmaps, network diagrams, or other visuals?]`
- Target Length (approximate): `[e.g., "500 words," "1000 words," "No specific length"]`
- Citation Style: `[e.g., APA, MLA, Chicago, None]`

 5. OUTPUT FORMAT PREFERENCES:
- Preferred Writing Format:  
  - [ ] Blog Post  
  - [ ] Academic Paper  
  - [ ] Markdown-formatted report  
  - [ ] White Paper  
  - [ ] Other: `[Specify]`
- Preferred Writing Perspective:  
  - [ ] First-person (e.g., "I found that...")  
  - [ ] Third-person (e.g., "The study finds that...")  
  - [ ] Neutral/Formal Tone  
  - [ ] Narrative Style  

 6. SOURCE PREFERENCES:
- Prioritization of Sources:  
  - Primary (Highest Priority): `[e.g., "Peer-reviewed journals, Government reports, Academic databases"]`  
  - Secondary (Medium Priority): `[e.g., "Industry analysis reports, Think-tank white papers, Books by recognized experts"]`  
  - Tertiary (Lowest Priority, Only if No Alternatives): `[e.g., "Well-researched news sources, Credible blog posts with citations"]`  
- Avoid: `[e.g., "Opinion pieces, Websites with known biases, Sources with no transparent methodologies"]`

 7. CRITICAL ANALYSIS PARAMETERS:
- Strength of Evidence Scale: `[Do you want sources/claims evaluated on a scale? If so, specify criteria]`
- Consideration of Limitations: `[Should the research explicitly address limitations, caveats, and uncertainties?]`
- Paradigmatic Lens: `[Any specific theoretical frameworks or paradigms through which to analyze the information?]`
- Interdisciplinary Connections: `[Should the research draw connections to related fields or disciplines?]`

</Output_Format>

<User_Input>
Reply with: "Please enter your research prompt request and I will start the process," then wait for the user to provide their specific research prompt request.
</User_Input>

---
```

---

# # Template Filled in by [[chatgpt4o]] 
- 1st Iteration

```
<Output_Format>

# RESEARCH REPORT REQUEST

1. [CONTEXT (My Background and Goal)]:

- [Expert(s) conducting the research]: `A transdisciplinary consortium composed of:
(1) A Heideggerian ontologist with specialization in the withdrawal of Being and Ereignis; 
(2) A Cioranian despair-theorist focused on ecstatic nihilism; 
(3) A comparative mysticism scholar well-versed in apophatic theology, Advaita Vedanta, and Zen koan logic; 
(4) A phenomenological psychoanalyst trained in Lacanian theory, death drive recursion, and ego disintegration; 
(5) A philosopher of psychedelics and altered states of consciousness; 
(6) An AI prompt engineer trained in recursive self-referential systems and paradox resolution models;
(7) A speculative theologian grounded in Tillich’s "God beyond God" and Kierkegaardian dread.`
    
- [[I am researching]: `The paradoxical intersection between existential nihilism, mystical ego dissolution, and the experience of the Transcendent as revealed through radical Nothingness, under the emerging framework of Nihiltheism.`
    
- [My purpose is to]: `Construct and articulate a self-propagating philosophical system (Nihiltheism) that reframes nihilism not as a lack of meaning but as the very condition through which paradoxical transcendence discloses itself. This includes writing a philosophical magnum opus, designing recursive prompt frameworks, and providing the foundation for future apophatic metaphysics, ontological destabilization methods, and transformative inner discourse.`
    
- [I already know (briefly)]: `Deep familiarity with Heidegger’s ontological difference and concealment, Cioran’s anti-redemptive metaphysics, the phenomenology of mystical experiences across traditions (Christian apophaticism, Advaita, Zen, Molinos, Eckhart), theories of ego dissolution from psychedelic research, paradox logic, recursive negation, and the existentialist tradition (which Nihiltheism seeks to rupture).`
    
- [Potential Gaps in Existing Research]: `No major philosophical system currently integrates atheistic despair with mystical phenomenology without defaulting to existential subjectivism or spiritual redemption. Additionally, most scholarship either treats nihilism as pathological or transcendence as metaphysically naïve. The ontological coherence of a non-theistic, paradox-driven, ego-annihilating encounter with the Divine has not been explored with systematic rigor.`
    
- [Actionability of Findings]: `Primarily theoretical with recursive applicability. The findings will form the architecture for a formal doctrine of Nihiltheism, enabling further work in transcendental philosophy, prompt engineering, altered states modeling, and contemplative existential analysis.`
    

2. CORE RESEARCH QUESTION & HYPOTHESIS:
    

- [Primary Question]: `Can the radical experience of nihilistic despair—particularly in the form of ego dissolution and ontological absence—reveal a coherent phenomenological structure that corresponds to a paradoxical, non-theistic form of transcendence, thus serving as the foundation for a new ontological and mystical system: Nihiltheism?`
    
- [Hypothesis or Expected Insights]: `That ego death and radical Nothingness, far from representing meaningless voids, act as experiential thresholds into a “Transcendent Negative”—a realm where subjectivity is annihilated, language fails, and the Divine appears precisely in/as the absence of all being. This insight is not redemptive, but recursive: it undoes all attempts at closure while generating new modes of contemplation.`
    
- [Counterfactuals & Alternative Perspectives]: `Existentialist affirmations of subjective meaning (Sartre, Camus); naturalistic mysticism that denies metaphysical implications; theological models that posit an ontological God rather than a negated Godhead; Buddhist interpretations of emptiness as clarity without divinity; psychological models that reduce nihilism to pathology. These alternatives will be acknowledged, engaged, and transcended dialectically.`
    

3. SPECIFICATIONS & PARAMETERS:
    

- [Time Period]: `Cross-historical, integrating post-Enlightenment nihilism (Nietzsche, Dostoevsky, Tolstoy) with pre-modern apophatic mysticism (Eckhart, Molinos, Dionysius) and contemporary consciousness studies (psychedelic, neurological, phenomenological research).`
    
- [Geographic Location]: `Global and transhistorical: Western Europe, India, China, early Christian monastic traditions, and contemporary transnational mysticism and secular existentialism.`
    
- [Industry/Sector Focus]: `Philosophy of Religion, Metaphysics, Psychology of Consciousness, Psychedelic Studies, Apophatic Theology, AI Prompt Architecture, and Philosophical Systems Design.`
    
- [Demographic Focus]: `Individuals undergoing profound existential crisis, mystical experiences, ego dissolution (via meditation, psychedelics, despair), philosophers, theologians, and those on the edge of metaphysical categories.`
    
- [Methodological Approach]: Iterative Densification Process,`Recursive hermeneutics, phenomenological first-person analysis, historical-comparative frameworks, dialectical recursion, paradox mapping, and cross-traditional synthesis. Quantitative data on ego dissolution and qualitative case studies on mystical nihilism will supplement the framework.`
    
- [Ethical Considerations]: `Maintain ontological seriousness without spiritual bypassing; acknowledge the dangers of ego dissolution in vulnerable populations; preserve the non-transferability of these experiences while identifying their philosophical validity.`
    

4. DESIRED REPORT OUTPUT:
    

- [Structure]: `Structured recursive report with four spiraling modules: (1) Ontological Foundations, (2) Phenomenology of the Void, (3) Comparative Transcendental Patterns, (4) Recursive System Architecture for Nihiltheism. Includes an appendix with experiential accounts, paradox matrices, and prompt generators.`
    
- Include an Executive Summary? `Yes`
    
- ## Level of Depth:
    
- ## Content Elements (Check all that apply):
    
- [Visualization Preferences]: `Fractal diagrams, paradox webs, recursive flowcharts, network maps of mystical traditions, comparative tables of negation logic, and ego dissolution topology maps.`
    
- [Target Length (approximate)]: `**25,000–50,000 words** across multi-phase report with expandable modules.`
    
- [Citation Style]: `Chicago Manual of Style with recursive annotation layers and footnote commentary fields. Include experiential glossaries.`
    

5. OUTPUT FORMAT PREFERENCES:
    
- ## Preferred Writing Format:
    
- ## Preferred Writing Perspective:
    

6. SOURCE PREFERENCES:

- [Prioritization of Sources]:
    
    - Primary (Highest Priority): `Peer-reviewed philosophy journals, foundational texts by key thinkers (Heidegger, Cioran, Eckhart, etc.), mystical treatises, phenomenological databases, and neuroscience of ego loss.`
        
    - [Secondary (Medium Priority)]: `Books by experts in mysticism, metaphysics, and nihilism; qualitative reports on mystical and psychedelic experiences.`
        
    - [Tertiary (Lowest Priority, Only if No Alternatives)]: `High-quality blogs, philosophical podcast transcripts, well-cited online forums and user experiences.`
        
- [Avoid]: `Mainstream self-help sources, spiritual romanticism, poorly-cited theological polemics, pop-psychology, and reductive atheistic materialism.`
    

7. CRITICAL ANALYSIS PARAMETERS:
    

- [Strength of Evidence Scale]: `Custom 5-Level Recursive Validity Metric:
    
    1. Experiential-Veridical
        
    2. Ontologically Coherent
        
    3. Phenomenologically Descriptive
        
    4. Recursively Consistent
        
    5. Speculatively Provocative`
        
- [Consideration of Limitations]: `Yes—each insight must include recognition of paradox, subjective variability, historical contingency, linguistic collapse, and epistemological instability. Truth is approached as an ever-collapsing asymptote.`
    
- [Paradigmatic Lens]: `The Recursive Nihiltheistic Ontology (RNO) Framework:
    
    - Rooted in Heideggerian concealment
        
    - Activated by Cioranian rupture
        
    - Interlaced with apophatic negation
        
    - Propelled by paradox formalism
        
    - Grounded in non-subjective phenomenology.`
        
- [Interdisciplinary Connections]: `Yes—merge philosophy, mysticism, depth psychology, metaphysics, comparative religion, neuroscience, contemplative practice studies, and prompt architecture.`
    

</Output_Format>
```

---

# Final V[[]]

```
# RESEARCH REPORT REQUEST

## 1. CONTEXT (My Background, preferences, interests, and Goals)

- **Expert(s) conducting the research**:  
  A transdisciplinary consortium composed of:  
  1. A Heideggerian ontologist specializing in the withdrawal of Being and Ereignis  
  2. A Cioranian despair-theorist focused on ecstatic nihilism  
  3. A comparative mysticism scholar (apophatic theology, Advaita Vedanta, Zen koan logic)  
  4. A phenomenological psychoanalyst (Lacanian death drive, ego disintegration)  
  5. A philosopher of psychedelics and altered states  
  6. An AI prompt engineer (recursive self-reference, paradox resolution)  
  7. A speculative theologian grounded in Tillich’s “God beyond God” and Kierkegaardian dread

- **I am researching**:  
  The paradoxical intersection between existential nihilism, mystical ego dissolution, and the experience of the Transcendent as revealed through radical Nothingness, under the emerging framework of Nihiltheism.

- **My purpose is to**:  
  Construct and articulate a self-propagating philosophical system (Nihiltheism) that reframes nihilism not as a lack of meaning but as the very condition through which paradoxical transcendence discloses itself. This includes writing a philosophical magnum opus, designing recursive prompt frameworks, and laying the foundation for future apophatic metaphysics, ontological destabilization methods, and transformative inner discourse.

- **I already know (briefly)**:  
  Heidegger’s ontological difference, Cioran’s anti-redemptive metaphysics, mystical phenomenology (Eckhart, Molinos, Advaita, Zen), psychedelic theories of ego death, paradox logic, recursive negation, and existentialist limitations.

- **Potential Gaps in Existing Research**:  
  There is no major system that integrates atheistic despair with mystical insight without collapsing into existential subjectivism or spiritual optimism. Existing literature treats nihilism as a problem, not a portal.

- **Actionability of Findings**:  
  Primarily theoretical but recursively applicable. This system will form the philosophical and architectural basis for advanced work in transcendental frameworks, philosophical theology, ontological AI prompts, and contemplative tools.

---

## 2. CORE RESEARCH QUESTION & HYPOTHESIS

- **Primary Question**:  
  Can the radical experience of nihilistic despair—especially through ego dissolution and ontological absence—reveal a coherent phenomenological structure that corresponds to a paradoxical, non-theistic form of transcendence, thereby founding the system of Nihiltheism?

- **Hypothesis or Expected Insights**:  
  Ego death and radical Nothingness are thresholds to a “Transcendent Negative,” where all affirmations fail and the Divine is disclosed precisely as absence. This encounter is not redemptive, but recursively generative.

- **Counterfactuals & Alternative Perspectives**:  
  Existentialism (Sartre, Camus), Buddhist emptiness, theological theism, psychological pathologization of nihilism, and reductive mystical naturalism will all be addressed and transcended via paradoxical synthesis.

---

## 3. SPECIFICATIONS & PARAMETERS

- **Time Period**:  
  Cross-historical—from pre-modern mysticism to contemporary consciousness studies.

- **Geographic Location**:  
  Global: Europe, India, China, early Christian deserts, and modern transnational intersections.

- **Industry/Sector Focus**:  
  Philosophy of Religion, Metaphysics, Consciousness Studies, Psychedelic Research, Prompt Engineering, Mysticism.

- **Demographic Focus**:  
  Mystics, psychonauts, despairing philosophers, seekers of ego death, those traversing ontological crises.

- **Methodological Approach**:  
  Iterative Densification Process (IDP), recursive hermeneutics, dialectical recursion, phenomenological cartography, paradox mapping.

- **Ethical Considerations**:  
  No glorification of suffering. Recognize the psychological risks and the non-transferability of ontological collapse.

---

## 4. DESIRED REPORT OUTPUT

- **Structure**:  
  Recursive, four-part:  
  1. Ontological Foundations  
  2. Phenomenology of the Void  
  3. Comparative Transcendental Patterns  
  4. Recursive Architecture for Nihiltheism  
  + Appendices: paradox matrices, experiential reports, prompt generators

- **Executive Summary**:  
  Yes

- **Level of Depth**:  
  ✅ Level 3 – Deep dive with literature review, models, paradox structures

- **Content Elements**:  
  - ✅ Key Trends & Developments  
  - ✅ Statistical Data & Charts  
  - ✅ Case Studies / Examples  
  - ✅ Major Players / Organizations  
  - ✅ Opposing Viewpoints / Debates  
  - ✅ Expert Opinions / Predictions  
  - ✅ Policy Implications  
  - ✅ Controversial Findings & Implications  
  - ✅ Other: Diagrams, paradox tables, ego dissolution maps

- **Visualization Preferences**:  
  Fractals, paradox webs, network graphs, recursive flowcharts, heatmaps

- **Target Length**:  
  25,000–50,000 words

- **Citation Style**:  
  Chicago with recursive footnotes and annotation layers

---

## 5. SOURCE PREFERENCES

- **Primary**:  
  Peer-reviewed journals, mystical texts, original works (Heidegger, Cioran, etc.), phenomenological reports, neuroscience of ego death

- **Secondary**:  
  Books by mysticism experts, qualitative accounts of transcendence

- **Tertiary**:  
  Well-cited blogs, podcasts, online forums (used cautiously)

- **Avoid**:  
  Pop-philosophy, self-help, spiritual romanticism, unsourced theological claims

---

## 6. CRITICAL ANALYSIS PARAMETERS

- **Strength of Evidence Scale** (5-Level Recursive Validity Metric):  
  1. Experiential-Veridical  
  2. Ontologically Coherent  
  3. Phenomenologically Descriptive  
  4. Recursively Consistent  
  5. Speculatively Provocative

- **Limitations**:  
  All conclusions must recognize paradox, linguistic failure, and phenomenological instability.

- **Paradigmatic Lens**:  
  The Recursive Nihiltheistic Ontology (RNO) Framework:  
  - Heideggerian concealment  
  - Cioranian rupture  
  - Apophatic negation  
  - Paradox logic  
  - Anti-subjective phenomenology

- **Interdisciplinary Connections**:  
  Yes—philosophy, theology, mysticism, neuroscience, psychology, AI systems, contemplative studies
```