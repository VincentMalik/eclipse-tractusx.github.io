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
input data. With these improvements, it will be much much easier and more flexible for you to
participate in the RuL use case.


# Overview
The RuL use case takes advantage of knowledge graphs. Therefore, every participant must support the Knowledge Agent (see Knowledge Agent KIT).

## Roles
As a developer in the Remaining Useful Life use case, you may apply to one or more
of the following roles:
 - RuL consumer (RuL result requester)
 - skill provider (provider of the use case logic)
 - RuL data provider (provider of usage data, likely an OEM)
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


## Knowledge graph basics
Knowledge graphs are buildup of semantic triplets (subject --predicate-> object), where subject and object are nodes, the predicate is a unidirectional edge. All nodes are object instances, and the edges between are the relations between these instances. For more information, see [W3C Resource Description Framework (RDF)](https://www.w3.org/RDF/).  
Object types and relations are formally defined within ontologies.


## Basic Architecture
 (applies to RuL calculation service provider, RuL data provider)




### What you must provide as a RuL calculation service provider
With a 

### What you must provide as a data provider
As the name says, a data provider must provide data. 
Delegation, Sub-Skill filling.
As the initiator of the RuL calculation does not know all the related components and their manufacturers, the data provider has to make the connection to the next level.

### What you must do as a initiator of RuL calculations
If not provided by others, you must develop a skill that .
In the future, this KIT will provide a generalized RuL skill that can be used as is (or adapted if necessary). 



## Overview
 - Summary of used components (ontology, skill, standards, bindings)
 - Reference: Semantic Web (W3C)

## Architecture?
 - adoption view?

## Ontology

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

# Service Bindings
Applies to: *RuL calculation service provider*

## Overview
In most cases, services are provided via REST APIs and are using JSON as input and output format. For the RuL use case, the output format is specified by a SAMM model.  
To include those services into the knowledge graph, you have to bind/map them to the underlying ontologies.
 
## Service mapping tool
To bind a service to the knowledge graph, you must use a **remoting agent**, also called the **service binding agent**. The software **RDF4J** (see the RDF4J webpage [https://rdf4j.org/](https://rdf4j.org/)), which is under the Eclipse Distribution License (EDL), v1.0, is our tool of choice in this case.  
  
## Service mapping configuration
For RDF4J, a configuration must be provided that formally describes the service binding.  
The configuration is written in Turtle (Terse RDF Triple Language) and has the extension **.ttl**. For more information, see the Knowledge Agent KIT.  

### RDF4J repository
The RDF4J repository is the basic configuration that referes to the service object and defines the callback endpoint for an asynchronous response of this service.

```ttl
  [] rdf:type rep:Repository ;
    rep:repositoryID "rul" ;
    rdfs:label "Remainig Useful Life Functions Repository" ;
    rep:repositoryImpl [
        rep:repositoryType "openrdf:SailRepository" ;
        sr:sailImpl [
          sail:sailType "org.eclipse.tractusx.agents:Remoting" ;
          cx-fx:supportsInvocation cx-behaviour:RemainingUsefulLife;
          cx-fx:callbackAddress <https://remoting-agent.supplier.com/rdf4j-server/callback>;
        ]
    ].
```

The callback address in this example is the callback address of the own RDF4J server.

### Binding of a Types to be bound
#### cx-fx:Function
Definition of the function. It defines the endpoint and describes the input and output elements.

```ttl
cx-behaviour:RemainingUsefulLife rdf:type cx-fx:Function;
    dcterms:description "Remaining Useful Life is an asynchronous batch invocation."@en ;
    dcterms:title "Remaining Useful Life" ;
    cx-fx:targetUri "https://rul.supplier.com/api/v1/routine/notification";
    cx-fx:invocationMethod "POST-JSON";
  # cx-common:authenticationKey "Authorization";
  # cx-common:authenticationCode "Basic Zdm7vsdgasfghcg==";
    cx-fx:invocationMethod "POST-JSON";
    cx-fx:invocationIdProperty "header.notificationID,content.requestRefId";
    cx-fx:callbackProperty "header.respondAssetId";
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
    cx-fx:input cx-behaviour:observationType;
    cx-fx:input cx-behaviour:statusDate;
    cx-fx:input cx-behaviour:statusOperatingHours;
    cx-fx:input cx-behaviour:statusMileage;
    cx-fx:input cx-behaviour:observationType;
    cx-fx:input cx-behaviour:metadata;
    cx-fx:input cx-behaviour:countingMethod;
    cx-fx:input cx-behaviour:countingValue;
    cx-fx:input cx-behaviour:countingUnit;
    cx-fx:input cx-behaviour:headerChannels;
    cx-fx:input cx-behaviour:bodyClasses;
    cx-fx:input cx-behaviour:bodyCountsList;
    cx-fx:result cx-behaviour:response.
```

#### cx-fx:Argument
The input data that are received from the knowledge graph are converted to the desired JSON format that is requested by the service. Therefore, each value (input parameter) that is represented in the ontology as a separate object must be described as an argument which is related to the corresponding JSON path. The argument name represents the JSON path. Default values can be specified in case some values are not present in the knowledge graph.

```ttl
  cx-behaviour:recipient rdf:type cx-fx:Argument;
    dcterms:description "Recipient of the notification as a BPN."@en ;
    dcterms:title "Notification Recipient";
    cx-fx:argumentName "header.recipientBPN";
    cx-fx:default "anonymous".
```

#### cx-fx:Result
The result of the service is also a JSON string. It consists of properties and output values.  
The properties are of predefined types and are mapped directly (without further descriptions and attributes).  
The output values are specified each separate.

```ttl
  cx-behaviour:response rdf:type cx-fx:Result;
    dcterms:description "The asynchronous notification response."@en ;
    dcterms:title "Asynchronous notification response." ;
    cx-fx:callbackProperty "header.referencedNotificationID";
    cx-fx:outputProperty "content.endurancePredictorOutputs";
    cx-fx:output cx-behaviour:remainingOperatingHours;
    cx-fx:output cx-behaviour:remainingRunningDistance.
```


#### cx-fx:ReturnValue
The output values (return values) are specified with their path in the output JSON structure and their data type.

```ttl
  cx-behaviour:remainingOperatingHours rdf:type cx-fx:ReturnValue;
    dcterms:description "Predicted Operating Hours of Remaining Useful Life Response"@en ;
    dcterms:title "Remaining Useful Life Operating Hours" ;
    cx-fx:valuePath "0.remainingUsefulLife.remainingOperatingHours";
    cx-fx:dataType xsd:float.
```

### Full Example
In this example, an asynchronous calculation service for gearbox RuL values is bound. It uses the Catena-X notification format as a container for the input data. The content of the notification is a JSON structure with a list of load spectra in it. The input format provides more than one Element (batch processing), but the RuL logic always requires exact one input per calculation. Therefore, always the first (and only the first) item of the input list is bound.

```ttl
  #
  # Rdf4j configuration for a rul-specific remoting
  #
  @prefix rdf:            <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
  @prefix rdfs:           <http://www.w3.org/2000/01/rdf-schema#>.
  @prefix rep:            <http://www.openrdf.org/config/repository#>.
  @prefix sr:             <http://www.openrdf.org/config/repository/sail#>.
  @prefix sail:           <http://www.openrdf.org/config/sail#>.
  @prefix sp:             <http://spinrdf.org/sp#>.
  @prefix xsd:            <http://www.w3.org/2001/XMLSchema#> .
  @prefix json:           <https://json-schema.org/draft/2020-12/schema#> .
  @prefix dcterms:        <http://purl.org/dc/terms/> .
  @prefix cx-fx:          <https://w3id.org/catenax/ontology/function#>.
  @prefix cx-common:      <https://w3id.org/catenax/ontology/common#>.
  @prefix cx-core:        <https://w3id.org/catenax/ontology/core#>.
  @prefix cx-vehicle:     <https://w3id.org/catenax/ontology/vehicle#>.
  @prefix cx-reliability: <https://w3id.org/catenax/ontology/reliability#>.
  @prefix cx-behaviour:   <https://w3id.org/catenax/ontology/behaviour#>.
  
  [] rdf:type rep:Repository ;
    rep:repositoryID "rul" ;
    rdfs:label "Remainig Useful Life Functions Repository" ;
    rep:repositoryImpl [
        rep:repositoryType "openrdf:SailRepository" ;
        sr:sailImpl [
          sail:sailType "org.eclipse.tractusx.agents:Remoting" ;
          cx-fx:supportsInvocation cx-behaviour:RemainingUsefulLife;
          cx-fx:callbackAddress <https://remoting-agent.supplier.com/rdf4j-server/callback>;
        ]
    ].
  
  cx-behaviour:RemainingUsefulLife rdf:type cx-fx:Function;
    dcterms:description "Remaining Useful Life is an asynchronous batch invocation."@en ;
    dcterms:title "Remaining Useful Life" ;
    cx-fx:targetUri "https://rul.supplier.com/api/v1/routine/notification";
    cx-fx:invocationMethod "POST-JSON";
  # cx-common:authenticationKey "Authorization";
  # cx-common:authenticationCode "Basic Zdm7vsdgasfghcg==";
    cx-fx:invocationMethod "POST-JSON";
    cx-fx:invocationIdProperty "header.notificationID,content.requestRefId";
    cx-fx:callbackProperty "header.respondAssetId";
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
    cx-fx:input cx-behaviour:observationType;
    cx-fx:input cx-behaviour:statusDate;
    cx-fx:input cx-behaviour:statusOperatingHours;
    cx-fx:input cx-behaviour:statusMileage;
    cx-fx:input cx-behaviour:observationType;
    cx-fx:input cx-behaviour:metadata;
    cx-fx:input cx-behaviour:countingMethod;
    cx-fx:input cx-behaviour:countingValue;
    cx-fx:input cx-behaviour:countingUnit;
    cx-fx:input cx-behaviour:headerChannels;
    cx-fx:input cx-behaviour:bodyClasses;
    cx-fx:input cx-behaviour:bodyCountsList;
    cx-fx:result cx-behaviour:response.
  
  cx-behaviour:notification rdf:type cx-fx:Argument;
    dcterms:description "A default notification output template."@en ;
    dcterms:title "Notification Template";
    cx-fx:argumentName ".";
    cx-fx:dataType json:Object;
    cx-fx:priority "-1"^^xsd:integer;
    #cx-fx:default "{ \"content\": { \"endurancePredictorInputs\": [ { } ]}}"^^json:Object.
    cx-fx:default "{ \"content\": { \"endurancePredictorInputs\": [ ]}}"^^json:Object.
  
  cx-behaviour:sender rdf:type cx-fx:Argument;
    dcterms:description "Sender of the notification as a BPN."@en ;
    dcterms:title "Notification Sender";
    cx-fx:argumentName "header.senderBPN";
    cx-fx:default "anonymous".
  
  cx-behaviour:senderConnector rdf:type cx-fx:Argument;
    dcterms:description "Sender Address of the notification as a URL."@en ;
    dcterms:title "Notification Sender Address";
    cx-fx:argumentName "header.senderAddress";
    cx-fx:default "unknown".
  
  cx-behaviour:recipient rdf:type cx-fx:Argument;
    dcterms:description "Recipient of the notification as a BPN."@en ;
    dcterms:title "Notification Recipient";
    cx-fx:argumentName "header.recipientBPN";
    cx-fx:default "anonymous".
  
  cx-behaviour:recipientConnector rdf:type cx-fx:Argument;
    dcterms:description "Recipient Address of the notification as a URL."@en ;
    dcterms:title "Notification Recipient Address";
    cx-fx:argumentName "header.recipientAddress";
    cx-fx:default "unknown".
  
  cx-behaviour:severity rdf:type cx-fx:Argument;
    dcterms:description "Severity of the notification."@en ;
    dcterms:title "Notification Severity";
    cx-fx:argumentName "header.severity";
    cx-fx:dataType xsd:string;
    cx-fx:default "MINOR".
  
  cx-behaviour:status rdf:type cx-fx:Argument;
    dcterms:description "Status of the notification."@en ;
    dcterms:title "Notification Status";
    cx-fx:argumentName "header.status";
    cx-fx:dataType xsd:string;
    cx-fx:default "SENT".
  
  cx-behaviour:targetDate rdf:type cx-fx:Argument;
    dcterms:description "Target Date of the notification."@en ;
    dcterms:title "Notification Target Date";
    cx-fx:dataType xsd:dateTime;
    cx-fx:argumentName "header.targetDate".
  
  cx-behaviour:timeStamp rdf:type cx-fx:Argument;
    dcterms:description "Timestamp of the notification."@en ;
    dcterms:title "Notification Timestamp";
    cx-fx:dataType xsd:dateTime;
    cx-fx:argumentName "header.timeStamp".
  
  cx-behaviour:classification rdf:type cx-fx:Argument;
    dcterms:description "Classification of the notification."@en ;
    dcterms:title "Notification Classification";
    cx-fx:argumentName "header.classification";
    cx-fx:dataType xsd:string;
    cx-fx:default "RemainingUsefulLifePredictor".
  
  cx-behaviour:component rdf:type cx-fx:Argument;
    dcterms:description "Component of the Predicition."@en ;
    dcterms:title "Predicted Component";
    cx-fx:formsBatchGroup "true"^^xsd:boolean;
    cx-fx:argumentName "content.endurancePredictorInputs.0.componentId,content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.targetComponentId".
  
  cx-behaviour:observationType rdf:type cx-fx:Argument;
    dcterms:description "The type of observation made."@en ;
    dcterms:title "Observation Type";
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.componentDescription";
    cx-fx:dataType xsd:string.
  
  cx-behaviour:metadata rdf:type cx-fx:Argument;
    dcterms:description "Metadata of the Loadspectrum."@en ;
    dcterms:title "Loadspectrum Metadata";
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}";
    cx-fx:dataType json:Object;
    cx-fx:priority "0"^^xsd:integer;
    cx-fx:default "{ \"metadata\":{ \"projectDescription\": \"pnr_76543\", \"routeDescription\": \"logged\" }, \"bammId\": \"urn:bamm:io.openmanufacturing.digitaltwin:1.0.0#ClassifiedLoadSpectrum\" }"^^json:Object.
  
  cx-behaviour:statusDate rdf:type cx-fx:Argument;
    dcterms:description "Time of Recording."@en ;
    dcterms:title "Loadspectrum Recording Time";
    cx-fx:dataType xsd:dateTime;
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.status.date".
  
  cx-behaviour:statusOperatingHours rdf:type cx-fx:Argument;
    dcterms:description "Operating Hours of Target Component at Time of Recording."@en ;
    dcterms:title "Loadspectrum Operating Hours";
    cx-fx:dataType xsd:float;
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.status.operatingHours".
  
  cx-behaviour:statusMileage rdf:type cx-fx:Argument;
    dcterms:description "Mileage of Component at Time of Recording."@en ;
    dcterms:title "Loadspectrum Mileage";
    cx-fx:dataType xsd:int;
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.status.mileage".
  
  cx-behaviour:countingUnit rdf:type cx-fx:Argument;
    dcterms:description "Counting Unit of Load Spectrum."@en ;
    dcterms:title "Loadspectrum Counting Unit";
    cx-fx:dataType xsd:string;
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.countingUnit".
  
  cx-behaviour:countingValue rdf:type cx-fx:Argument;
    dcterms:description "Counting Value Name of Load Spectrum."@en ;
    dcterms:title "Loadspectrum Counting Value";
    cx-fx:dataType xsd:string;
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.countingValue,content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.body.counts.countsName".
  
  cx-behaviour:countingMethod rdf:type cx-fx:Argument;
    dcterms:description "Counting Method of Load Spectrum."@en ;
    dcterms:title "Loadspectrum Counting Method";
    cx-fx:dataType xsd:string;
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.countingMethod".
  
  cx-behaviour:headerChannels rdf:type cx-fx:Argument;
    dcterms:description "Channels of Load Spectrum."@en ;
    dcterms:title "Loadspectrum Channels";
    cx-fx:dataType json:Object;
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.channels".
  
  cx-behaviour:bodyClasses rdf:type cx-fx:Argument;
    dcterms:description "Classes of Load Spectrum."@en ;
    dcterms:title "Loadspectrum Classes";
    cx-fx:dataType json:Object;
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.body.classes".
  
  cx-behaviour:bodyCountsList rdf:type cx-fx:Argument;
    dcterms:description "Counts List of Load Spectrum."@en ;
    dcterms:title "Loadspectrum Counts List";
    cx-fx:dataType json:Object;
    cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.body.counts.countsList".
  
  cx-behaviour:response rdf:type cx-fx:Result;
    dcterms:description "The asynchronous notification response."@en ;
    dcterms:title "Asynchronous notification response." ;
    cx-fx:callbackProperty "header.referencedNotificationID";
    cx-fx:outputProperty "content.endurancePredictorOutputs";
    cx-fx:output cx-behaviour:remainingOperatingHours;
    cx-fx:output cx-behaviour:remainingRunningDistance.
  
  cx-behaviour:remainingOperatingHours rdf:type cx-fx:ReturnValue;
    dcterms:description "Predicted Operating Hours of Remaining Useful Life Response"@en ;
    dcterms:title "Remaining Useful Life Operating Hours" ;
    cx-fx:valuePath "0.remainingUsefulLife.remainingOperatingHours";
    cx-fx:dataType xsd:float.
  
  cx-behaviour:remainingRunningDistance rdf:type cx-fx:ReturnValue;
    dcterms:description "Predicted Distance of Remaining Useful Life Response"@en ;
    dcterms:title "Remaining Useful Life Distance" ;
    cx-fx:valuePath "0.remainingUsefulLife.remainingRunningDistance";
    cx-fx:dataType xsd:int.
```

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

The following diagram shows a basic data processing flow how a company's internal data ...

<!--![Basic Data FLow](../assets/data_provisioning_data_flow.png)-->

#### Register Assets ...

##### Property specificAssetIds


...