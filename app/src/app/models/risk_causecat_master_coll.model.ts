import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class risk_causecat_master_coll {
  @JsonProperty('risk_cause_id', Number, true)
  public risk_cause_id: number = undefined;

  @JsonProperty('cause_category', String, true)
  public cause_category: string = undefined;

  @JsonProperty('cause_desc', String, true)
  public cause_desc: string = undefined;

}