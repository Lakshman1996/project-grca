import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class risk_cause_coll {
  @JsonProperty('risk_id', Number, true)
  public risk_id: number = undefined;

  @JsonProperty('risk_cause_id', Number, true)
  public risk_cause_id: number = undefined;

  @JsonProperty('cause_details', String, true)
  public cause_details: string = undefined;

}