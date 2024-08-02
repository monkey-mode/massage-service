<div hidden>
```
@startuml servicesPlantUML

actor Requester as REQ01

box "bff-onboarding-request" #PowderBlue
    entity "bff-onboarding-request" as BFF01  #DeepSkyBlue
end box
box "orch-onboarding-request" #PowderBlue
    entity "orch-onboarding-request" as ORC01 #DeepSkyBlue
end box

REQ01 -> BFF01: POST /bff-onboarding-request/api/v1/customer-tnc

group STEP 1: Set parameter
    BFF01 -> BFF01 : Validate Request
    note right of BFF01        
       set isAcceptedTnc = "Y"
    end note  
end group

group STEP 2: Onboarding Request
    BFF01 -> ORC01 : POST /orch-onboarding-request/api/v1/customer-tnc
    ORC01 -> BFF01 : Response
    alt <color:green>if HTTP Status = 200</color>
        note right of BFF01
            Request success with HTTP Status 200
            Mapping Response Body and return Response
        end note
    else  <color:darkred>else if HTTP Status != 200</color>        
        note right of BFF01
            <color:Red>Hardstop then return inherit error from Response</color>
        end note    
    end alt    
end group
BFF01 -> REQ01 -- : Response

hide footbox
@enduml
```
</div>

![](servicesPlantUML.svg)
