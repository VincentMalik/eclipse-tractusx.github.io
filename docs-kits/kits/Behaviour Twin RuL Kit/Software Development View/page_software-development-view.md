---
id: Specification Remaining Useful Life Kit
title: Specification
description: 'Remaining Useful Life Kit'
sidebar_position: 4
---

![Remaining Useful Life kit banner](@site/static/img/doc-rul_header-minified.png)


<span style="font-size:3em;">&#x26a0;&#xfe0f;</span> **This is only a preview KIT.**  
There will be changes in the following releases.
We plan to provide a more general RuL skill and more generalized interfaces for service
input data. With these improvements, it will be much more easy and flexible for you to
participate in the RuL use case.


# Overview
## Roles
As a developer in the Remaining Useful Life use case, you may apply to one or more
of the following roles:
 - RuL consumer (RuL result requester)
 - skill provider (provider of the use case logic)
 - RuL data provider (provider of usage data, likely a OEM)
 - delegator (likely a supplier of a component that is assembled of subcomponents
   which are providing RuL calculation services)
 - RuL calculation service provider (likely a supplier of a part or component)

## Logic
The central logic of the RuL use case is a **RuL skill**.  
You can use a predefined RuL skill and use it or modify it to build up a similar use
case. It is written in SPARQL, a query language for federated knowledge graphs.  
The current RuL skill takes vehicle identifier numbers (VINs) as parameters.  
In general, a RuL skill will take one or more vehicle/component IDs as parameters.
It then collects the related usage data at the RuL data providers and calls the RuL
calculation services at the RuL service providers. The result is then collected and
transferred to the consumer.  

## Your interface
You always need access to your **running EDC with knowledge agent components** and
the (extensible) **ontologies of Catena-X**. In most cases, you can use them as they are.  

Your interface to the use case depends on your role(s):  
If you are only a consumer, you are fine with the previous mentioned components.  
If you are a data provider or delegator, you may have your data organized in relational databases. In this case, you need to have a running **provisioning
agent** with **configured data bindings** (linking your data to the knowledge graph).  
If you are a service provider, you need to have a running **remoting agent** with
**configured service bindings** (linking your service to the knowledge graph).  

For more information, see the operation view.

## Mandatory components and standards
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
| --------------------- | :---: | :---: | :---: | :---: | :---: |
| EDC + knowledge agent <br/>+ matchmaking agent | x | x | x | x | x |
| ontologies                                | x | x | x | x | x |
| skill-access                              |   |   |   | x | x |
| delegation data                           |   | x | x | x |   |
| usage data                                |   |   | x |   |   |
| provisioning agent                        |   |   | x |   |   |
| calculation service                       | x |   |   |   |   |
| remoting agent                            | x |   |   |   |   |



## Basic Architecture
 (applies to RuL calculation service provider, RuL data provider)




### What you have to provide as a RuL calculation service provider
With a 

### What you have to provide as a data provider
As the name says, a data provider must provide data. 
Delegation, Sub-Skill filling.
As the initiator of the RuL calculation does not know all the related components and their manufacturers, the data provider has to make the connection to the next level.

### What you have to do as a initiator of RuL calculations
If not provided by others, you have to develop a skill that .
In the future, this KIT will provide a generalized RuL skill that can be used as is (or adapted if necessary). 



## Overview
 - Summary of used components (ontology, skill, standards, bindings)
 - Reference: Semantic Web (W3C)

## Architecture?
 - adoption view?

## Onthology

For the Behaviour Twin (BT) RuL User Case, beside the [core](https://github.com/catenax-ng/product-ontology/blob/main/ontology/core_ontology.ttl) and [common](https://github.com/catenax-ng/product-ontology/blob/main/ontology/common_ontology.ttl) ontologies, a specific ontology was defined. For our use cases following sub-ontologies are needed:
- [reliability ontology](https://github.com/catenax-ng/product-ontology/blob/main/ontology/reliability_ontology.ttl)
- [vehicle ontology](https://github.com/catenax-ng/product-ontology/blob/main/ontology/vehicle_ontology.ttl) and
- [behaviour ontology](https://github.com/catenax-ng/product-ontology/blob/main/ontology/reliability_ontology.ttl)

All needed ontologies for the RuL use case are bundled in one named on our [Behaviour Twin Kit](https://github.com/catenax-ng/product-ontology/blob/main/ontology_use_case/behaviour_twin_use_case_ontology.ttl).

General information about Knowledge-Agent Semantic Models refer to the KA-KIT (https://catenax-ng.github.io/product-knowledge/docs/development-view/modules#semantic-models).  
The specific (reliability and behaviour) ontologies are based respectively compatible with the standardized SAMM Models( [Load Spectrum](https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.classified_load_spectrum) and [Remaining Useful Life](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.rul/1.0.0/RemainingUsefulLife.ttl)) release by  Behaviour Twin team.

For the calculation of the remaining useful life for a specific component, the service needs to get the Load Spectrum data to proceed with the calculation. Hence, in the reliability ontology all needed semantic models are defined.

``` ttl
###  https://w3id.org/catenax/ontology/reliability#LoadSpectrum
cx-reliability:LoadSpectrum rdf:type owl:Class ;
                            rdfs:subClassOf cx-reliability:AnalysisResult ;
                            rdfs:seeAlso <https://de.wikipedia.org/wiki/Lastkollektiv> ,
                                         <https://en.wikipedia.org/wiki/Mechanical_load> ;
                            skos:altLabel "load collective"@en ;
                            skos:definition "Load spectrum is a 2d histogram that contains the load history of a vehicle, i.e. how a vehicle was used, for a given time period."@en ;
                            skos:example "force"@en ,
                                         "tension"@en ,
                                         "torque"@en ;
                            skos:prefLabel "Lastkollektiv"@de ,
                                           "Load Spectrum"@en .
```

The RuL services were designed with interoperability in mind, thus the communication in both directions(input/input) fully supports the Catena-X Notification standard. These aspects are also covered by Catena-X ontologies. The RuL Calculation can return two values:
* Remaining Running Distance and
* Remaining Operating Hours

For this purpose, in the behaviour_ontology, a function is defined:
``` ttl
cx-behaviour:RemainingUsefulLife rdf:type cx-fx:Function;
  dc:description "Remaining Useful Life is a Prediction of the Estimated Mileage/Runtime until a Breakdown."@en ;
  dc:title "Remaining Useful Life" ;
  cx-fx:input cx-behaviour:notification;
  cx-fx:input cx-behaviour:sender;
  cx-fx:input cx-behaviour:senderConnector;
  cx-fx:input cx-behaviour:recipient;
  cx-fx:input cx-behaviour:recipientConnector;
  cx-fx:input cx-behaviour:recipient;
  cx-fx:input cx-behaviour:recipientConnector;
  cx-fx:input cx-behaviour:severity;
  cx-fx:input cx-behaviour:status;
  cx-fx:input cx-behaviour:targetDate;
  cx-fx:input cx-behaviour:timeStamp;
  cx-fx:input cx-behaviour:classification;
  cx-fx:input cx-behaviour:component;
  cx-fx:input cx-behaviour:metadata;
  cx-fx:input cx-behaviour:statusDate;
  cx-fx:input cx-behaviour:statusOperatingHours;
  cx-fx:input cx-behaviour:statusMileage;
  cx-fx:input cx-behaviour:countingMethod;
  cx-fx:input cx-behaviour:countingValue;
  cx-fx:input cx-behaviour:countingUnit;
  cx-fx:input cx-behaviour:headerChannels;
  cx-fx:input cx-behaviour:bodyClasses;
  cx-fx:input cx-behaviour:bodyCountsList;
  cx-fx:result cx-behaviour:response.
```  

The result contains the expected values:
``` ttl
cx-behaviour:response rdf:type cx-fx:Result;
dc:description "The asynchronous notification response."@en ;
dc:title "Asynchronous notification response." ;
cx-fx:output cx-behaviour:remainingOperatingHours;
cx-fx:output cx-behaviour:remainingRunningDistance.

cx-behaviour:remainingOperatingHours rdf:type cx-fx:ReturnValue;
  dc:description "Predicted Operating Hours of Remaining Useful Life Response"@en ;
  dc:title "Remaining Useful Life Operating Hours" ;
  cx-fx:dataType xsd:float.

cx-behaviour:remainingRunningDistance rdf:type cx-fx:ReturnValue;
  dc:description "Predicted Distance of Remaining Useful Life Response"@en ;
  dc:title "Remaining Useful Life Distance" ;
  cx-fx:dataType xsd:int.
```  

## Standards/SAMM
- [Load Spectrum](https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.classified_load_spectrum)
- [Remaining Useful Life](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.rul/1.0.0/RemainingUsefulLife.ttl)

# RuL Skill
For the RuL calculation of a vehicle part, we have three different "roles" involved:
* consumer: which request the RuL value by VIN.
* OEM: which has the vehicle Load Spectrum data and forwards them by calling the supplier of that specific part.
* Supplier: which provides the service for the RuL calculation for his parts.

A reference (sample) Agent-Skill for a Gearbox is implemented.

``` sparql
PREFIX cx-common:       <https://w3id.org/catenax/ontology/common#>
PREFIX cx-core:         <https://w3id.org/catenax/ontology/core#>
PREFIX cx-vehicle:      <https://w3id.org/catenax/ontology/vehicle#>
PREFIX cx-reliability:  <https://w3id.org/catenax/ontology/reliability#>
PREFIX cx-behaviour:    <https://w3id.org/catenax/ontology/behaviour#>
PREFIX rdf:             <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs:            <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd:             <http://www.w3.org/2001/XMLSchema#>
PREFIX json:            <https://json-schema.org/draft/2020-12/schema#> 
PREFIX bpnl:		    <bpn:legal:>
PREFIX oem:             <GraphAsset?oem=>
PREFIX supplier:        <GraphAsset?supplier=>

################################################################
# Sample for a Federated (Consumer-Deployed) SparQL Skill which
#  - Jumps into an OEM-owned reliability asset given a set of candidate VANs
#  - Feeds the gathered data back into the respective supplier connector/agent 
#.   to perform a health indication 
# Author: cgjung
# (c) 2023 Catena-X assocation
################################################################

SELECT DISTINCT ?vehicle ?van ?aggregate ?assembly ?supplier ?distanceKm ?timeHours WHERE {

  VALUES (?van ?aggregate) { 
      ("@van"^^xsd:string "Differential Gear"^^xsd:string) 
  }

  VALUES (?ls_type) { 
      ("GearOil"^^xsd:string) ("GearSet"^^xsd:string) 
  }

  bpnl:{{oemBPNL}} cx-common:hasConnector ?oemEDC.
  ?oemEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/reliability>; cx-common:id ?reliabilityAssetId].
  
  SERVICE ?oemEDC {  
      GRAPH ?reliabilityAssetId {
        ?vehicle rdf:type cx-vehicle:Vehicle;
            cx-vehicle:vehicleIdentificationNumber ?van.

        ?assembly rdf:type cx-vehicle:Part;
            cx-vehicle:name ?aggregate;
            cx-vehicle:isPartOf ?vehicle;
            cx-vehicle:supplier ?supplier.
            
        ?teleAnalysis rdf:type cx-reliability:Analysis;
            cx-reliability:analysedObject ?assembly;
            cx-reliability:operatingHoursOfVehicle ?operatingTime;
            cx-reliability:mileageOfVehicle ?mileage;
            cx-core:startDateTime ?recordDate;
            cx-reliability:result [
                cx-core:id ?ls_type;
                cx-core:name ?ls_name;
                cx-reliability:countingValue ?ls_value;
                cx-reliability:countingUnit ?ls_unit;
                cx-reliability:countingMethod ?ls_method;
                cx-reliability:channels ?ls_channels;
                cx-reliability:classes ?ls_classes;
                cx-reliability:values ?ls_values
            ].
    } # OEM#GRAPH

    ?supplier cx-common:hasConnector ?supplierEDC.
    ?supplierEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/behaviour>; cx-common:id ?prognosisAssetId].

    SERVICE ?supplierEDC {
        GRAPH ?prognosisAssetId {
            SELECT ?distanceKm ?timeHours WHERE {
                ?invocation a cx-behaviour:RemainingUsefulLife;
                        cx-behaviour:sender bpnl:{{oemBPNL}};
                        cx-behaviour:senderConnector ?oemEDC;
                        cx-behaviour:recipient ?supplier;
                        cx-behaviour:recipientConnector ?supplierEDC;
                        cx-behaviour:targetDate ?recordDate;
                        cx-behaviour:timeStamp ?recordDate;
                        cx-behaviour:component ?assembly;
                        cx-behaviour:observationType ?ls_type;
                        cx-behaviour:statusDate ?recordDate;
                        cx-behaviour:statusOperatingHours ?operatingTime;
                        cx-behaviour:statusMileage ?mileage;
                        cx-behaviour:countingValue ?ls_value;
                        cx-behaviour:countingUnit ?ls_unit;
                        cx-behaviour:countingMethod ?ls_method;
                        cx-behaviour:headerChannels ?ls_channels;
                        cx-behaviour:bodyClasses ?ls_classes;
                        cx-behaviour:bodyCountsList ?ls_values;
                        cx-behaviour:remainingOperatingHours ?timeHours;
                        cx-behaviour:remainingRunningDistance ?distanceKm.
            }
        } # SUPPLIER#GRAPH          
    } # SUPPLIER#CATALOG

  } # OEM#CATALOG

} # SELECT
```  
The above skill 

## RuL Skill deployment (TODO: move to operations view!!!)
After the skill is defined, it has to be registered.
As described in th "KA-KIT", one have to define the Asset, Policy and Contractdefiniton as for other EDC assets.

To bo able to invoke the sample Agent-Skill defined above, we have to deploy, or better said, to register it in our agent enabled EDC. For the registration we need, as for other EDC assets, the asset, a policy and a contract definition registration.

**Policy Registration**
``` json
{
    "@context": {
        "odrl": "http://www.w3.org/ns/odrl/2/",
        "cx-common": "https://w3id.org/catenax/ontology/common#"
    },
    "@type": "PolicyDefinitionRequestDto",
    "@id": "Policy?consumer=Asset&mode=open",
    "policy": {
		"@type": "Policy",
		"odrl:permission" : [{
			"odrl:action" : "USE",
			"odrl:constraint" : []
		}]
    }
} 
```

**Contractdefiniton Registration**
``` json
{
    "@context": {
         "cx-common": "https://w3id.org/catenax/ontology/common#"
    },
    "@id": "Contract?consumer=Asset&mode=open",
    "@type": "ContractDefinition",
    "accessPolicyId": "Policy?consumer=Asset&mode=open",
    "contractPolicyId": "Policy?consumer=Asset&mode=open",
    "assetsSelector" : {
        "@type" : "CriterionDto",
        "operandLeft": "https://w3id.org/catenax/ontology/common#publishedUnderContract",
        "operator": "=",
        "operandRight": "Contract?consumer=Asset&mode=open"
    }
}
```

**Skill Registration**

A Skill can be registered over the AgentPlane API:
```
curl --location 'agentPlaneEdcUrl/api/agent/skill?asset=SkillAsset%3Fconsumer%3DRemainingUsefulLife&distributionMode=PROVIDER%26contract%3DContract%3Fconsumer%3DAsset%26mode%3Dopen' \
--header 'Content-Type: application/sparql-query' \
--data-raw '
   skill from above
'
```

## Skill usage
The registered skill is available over Agent Plane API and can be called also for a list of input variables:

```curl 
curl --location 'agentPlaneEdcUrl/api/agent?asset=SkillAsset%3Fconsumer%3DRemainingUsefulLife' \
--header 'Content-Type: application/sparql-results+json' \
--data '{
    "head": { "vars": [ "van" ]},
    "results": { "bindings": [
            {   "van": { "type": "literal", "value": "FNLQNRVCOFLHAQ"}}
        ]
    }
}'
```

The RuL results for the given VAN's is provided are provided as bindings for the requested variables in the Skill itself and looks like:

```json
{
   "head": {
      "vars": [
         "vehicle",
         "van",
         "aggregate",
         "assembly",
         "supplier",
         "distanceKm",
         "timeHours"
      ]
   },
   "results": {
      "bindings": [
         {
            "vehicle": {
               "type": "uri",
               "value": "urn:uuid:4cf8b668-0f27-4f39-b986-36423d81d222"
            },
            "van": {
               "type": "literal",
               "value": "FNLQNRVCOFLHAQ"
            },
            "aggregate": {
               "type": "literal",
               "value": "Some vehicle name"
            },
            "assembly": {
               "type": "",
               "value": "urn:uuid:4cf8b668-0f27-4f39-b986-36423d81d111"
            },
            "supplier": {
               "type": "uri",
               "value": "bpn:legal:BPNL00000002HCQ9"
            },
            "distanceKm": {
               "type": "",
               "datatype": "http://w3.org/2001/XMLSchema#int",
               "value": "123000"
            },
            "timeHours": {
               "type": "",
               "datatype": "http://w3.org/2001/XMLSchema#float",
               "value": "12345.0"
            }
         }
      ]
   }
}
```

If the given VAN is not found on OEM side, then we get an empty binding result:
```json
{
    "head": {
        "vars": [
            "vehicle",
            "van",
            "aggregate",
            "assembly",
            "supplier",
            "distanceKm",
            "timeHours"
        ]
    },
    "results": {
        "bindings": []
    }
}
```

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