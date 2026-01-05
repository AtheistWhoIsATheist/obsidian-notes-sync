<?xml version="1.0" encoding="UTF-8"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns
         http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd">
  
  <!-- Attribute Definitions -->
  <key id="d0" for="node" attr.name="title" attr.type="string"/>
  <key id="d1" for="node" attr.name="level" attr.type="int"/>
  <key id="d2" for="node" attr.name="tags" attr.type="string"/>
  <key id="d3" for="node" attr.name="content" attr.type="string"/>
  <key id="d4" for="edge" attr.name="type" attr.type="string"/>
  <key id="d5" for="edge" attr.name="weight" attr.type="double"/>
  
  <graph id="Nihiltheism" edgedefault="directed">
    
    <!-- Level 1 Nodes -->
    <node id="1">
      <data key="d0">Foundational Ontology of Nihiltheism</data>
      <data key="d1">1</data>
      <data key="d2">Nihiltheism,Level1,ontology,foundations</data>
      <data key="d3">The foundational ontology establishes the paradoxical ground wherein Nothingness functions as primordial presence.</data>
    </node>
    
    <node id="2">
      <data key="d0">Phenomenology of Nihilistic Experience</data>
      <data key="d1">1</data>
      <data key="d2">Nihiltheism,Level1,phenomenology,experience</data>
      <data key="d3">Phenomenological analysis of nihilistic despair as mystical state and gateway to the Sacred.</data>
    </node>
    
    <node id="3">
      <data key="d0">Philosophical Architecture and Methodology</data>
      <data key="d1">1</data>
      <data key="d2">Nihiltheism,Level1,methodology,philosophy</data>
      <data key="d3">Methodological frameworks including iterative densification and Socratic questioning.</data>
    </node>
    
    <node id="4">
      <data key="d0">Theological Dimensions and God-Concept</data>
      <data key="d1">1</data>
      <data key="d2">Nihiltheism,Level1,theology,God</data>
      <data key="d3">Theological reconceptualization of God as Nothingness and critique of traditional theism.</data>
    </node>
    
    <node id="5">
      <data key="d0">Existential and Psychological Dimensions</data>
      <data key="d1">1</data>
      <data key="d2">Nihiltheism,Level1,existential,psychology</data>
      <data key="d3">Existential analysis of authenticity, anxiety, and meaning-making in face of the Void.</data>
    </node>
    
    <node id="6">
      <data key="d0">Philosophical Lineages and Influences</data>
      <data key="d1">1</data>
      <data key="d2">Nihiltheism,Level1,history,influences</data>
      <data key="d3">Intellectual genealogy including Cioran, Ligotti, Zapffe, Heidegger, and Nietzsche.</data>
    </node>
    
    <node id="7">
      <data key="d0">Praxis and Lived Application</data>
      <data key="d1">1</data>
      <data key="d2">Nihiltheism,Level1,praxis,application</data>
      <data key="d3">Practical implementation through contemplative practices, ethics, and daily integration.</data>
    </node>
    
    <!-- Level 2 Sample Nodes -->
    <node id="1.1">
      <data key="d0">The Paradox of Sacred Nothingness</data>
      <data key="d1">2</data>
      <data key="d2">Nihiltheism,Level2,paradox,sacred</data>
      <data key="d3">Central ontological claim that Void functions as both negation and presence.</data>
    </node>
    
    <node id="1.2">
      <data key="d0">Rejection of Naïve Binaries</data>
      <data key="d1">2</data>
      <data key="d2">Nihiltheism,Level2,critique,binaries</data>
      <data key="d3">Critique of theism/atheism dichotomy and occupation of rupture between positions.</data>
    </node>
    
    <!-- Level 3 Sample Nodes -->
    <node id="1.1.1">
      <data key="d0">Nothingness Not as Absence but Primordial Presence</data>
      <data key="d1">3</data>
      <data key="d2">Nihiltheism,Level3,nothingness,presence</data>
      <data key="d3">Ontological inversion: Nothingness as saturated fullness rather than privation.</data>
    </node>
    
    <!-- Edges -->
    
    <!-- Sibling Relationships (Level 1) -->
    <edge source="1" target="2">
      <data key="d4">sibling</data>
      <data key="d5">0.8</data>
    </edge>
    
    <edge source="1" target="3">
      <data key="d4">sibling</data>
      <data key="d5">0.8</data>
    </edge>
    
    <!-- Parent-Child Relationships -->
    <edge source="1" target="1.1">
      <data key="d4">parent-child</data>
      <data key="d5">1.0</data>
    </edge>
    
    <edge source="1" target="1.2">
      <data key="d4">parent-child</data>
      <data key="d5">1.0</data>
    </edge>
    
    <edge source="1.1" target="1.1.1">
      <data key="d4">parent-child</data>
      <data key="d5">1.0</data>
    </edge>
    
    <!-- Cousin Relationships -->
    <edge source="1.1" target="2.1">
      <data key="d4">cousin</data>
      <data key="d5">0.7</data>
    </edge>
    
    <!-- Transversal Relationships -->
    <edge source="1" target="7.1">
      <data key="d4">transversal</data>
      <data key="d5">0.6</data>
    </edge>
    
    <edge source="1.1.1" target="4.1.4">
      <data key="d4">transversal</data>
      <data key="d5">0.6</data>
    </edge>
    
  </graph>
</graphml>