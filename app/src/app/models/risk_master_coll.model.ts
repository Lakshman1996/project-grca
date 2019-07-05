import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class risk_master_coll {
  @JsonProperty('legal_entity_name', String, true)
  public legal_entity_name: string = undefined;

  @JsonProperty('legal_entity_code', String, true)
  public legal_entity_code: string = undefined;

  @JsonProperty('business_unit', String, true)
  public business_unit: string = undefined;

  @JsonProperty('function_name', String, true)
  public function_name: string = undefined;

  @JsonProperty('business_process', String, true)
  public business_process: string = undefined;

  @JsonProperty('process_id', String, true)
  public process_id: string = undefined;

  @JsonProperty('function_id', String, true)
  public function_id: string = undefined;

}