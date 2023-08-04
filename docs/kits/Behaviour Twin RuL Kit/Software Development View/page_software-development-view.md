---
id: Specification Remaining Useful Life Kit
title: Specification
description: 'Remaining Useful Life Kit'
sidebar_position: 4
---

![Remaining Useful Life kit banner](@site/static/img/doc-rul_header-minified.png)

### Remaining Useful Life Kit

## Overview
As a developer in the Remaining Useful Life use case, you may be part of one or more of the following three roles:
 - RuL calculation service provider (likely a supplier of a part or component)
 - supplier of a component (likely a supplier of a commponent that is assembled of subcomponents which provide RuL calculation services)
 - RuL data provider (provider of usage data, likely a OEM)
 - RuL consumer (RuL result requester)
 - skill provider

### Mandatory components and standards
 (applies to RuL calculation service provider, RuL data provider)
 - ontologies (semantic models)
 - usage data
 - calculation services
 - EDC + knowledge agent
 - delegation data
 - matchmaking agent: Mapping ontology to knowledge graph, integrated into KA-dataplane
 - binding agents:
   - provisioning agent: provide data
   - remoting agent: bind service to graph

| | calculation service provider | supplier of a component | RuL data provider | RuL consumer | skill provider |
| ----------------------- | :---: | :---: | :---: | :---: | :---: |
| EDC + knowledge agent + matchmaking agent  | x | x | x | x | x |
| ontologies              | x | x | x | x | x |
| skill-access            |  |  |  | x | x |
| delegation data         |  | x | x | x |  |
| usage data              |  |  | x |  |  |
| provisioning agent      |  |  | x |  |  |
| calculation service     | x |  |  |  |  |
| remoting agent          | x |  |  |  |  |


### What you have to provide as a RuL calculation service provider
With a 

### What you have to provide as a data provider
As the name says, a data provider must provide data. 
Delegation, Sub-Skill filling.
As the initiator of the RuL caluclation does not know all the related components and their manufacturers, the data provider has to make the connection to the next level.

### What you have to do as a initiator of RuL calculations
If not provided by others, you have to develop a skill that .
In the future, this KIT will provide a generalized RuL skill that can be used as is (or adapted if neccessary). 



## Overview
 - Summary of used components (ontology, skill, standards, bindings)
 - Reference: Semantic Web (W3C)

## Architecture?
 - adoption view?

## Onthology
 - References to: OWL/TTL, KA-KIT, genearal ontologies
 - Short explanation/context
 - Where is the ontology deployed (GitHub, reference to KA-KIT)
 - https://github.com/catenax-ng/product-ontology/blob/main/ontology_use_case/behaviour_twin_use_case_ontology.ttl

## Standards/SAMM
 - Load spectra (SAMM, link)
 - RuL (SAMM, link)

# RuL Skill
 - Example (generalized, derivied from requester)
 - Explanation of the example (central component)
 - References to: OWL

## Skill usage
 - Skill hosting/How to deploy (operations view)
 - How to bind to own application (example/explanation: how to call, how to receive results)

# Data bindings
 - Example (generalized, derivied from OEM)
 - Explanation of the example
 - How to deploy (link to KA-KIT, operations view)

# Service Bindings
 - Example (generalized, derivied from Supplier)
 - Explanation of the example
 - How to deploy (link to KA-KIT, operations view)

# Short sample application
 - trivial REST-Controller service provider example (mockup, Java)

# Deployment of Matchmaking/Binding agents
 - reference to KA-KIT (operations view)
 - Binding-/Remoting agents: OnTop/RDF4J
 - integrate configurations into deployment (bindings)


<!--
Development View of the Kit.
-->

<!-- !Mandatory! -->
## API Specifications
 
 --> Agent data plane????


<!-- Recommended -->
## Sample Data

In the following, example data for submodels are provided.

### As Planned Submodels Sample Data

### As Built Submodels Sample Data

#### Submodel SerialPartTypization

<!-- Recommended -->
## Sample Implementation

<!-- Recommended -->
## Documentation in the Context of Development

### Data Provisioning

The following diagram shows a basic data processing flow how a comany's internal data ...

<!--![Basic Data FLow](../assets/data_provisioning_data_flow.png)-->

#### Register Assets ...

##### Property specificAssetIds


...