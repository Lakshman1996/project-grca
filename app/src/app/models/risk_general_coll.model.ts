import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class risk_general_coll {
  @JsonProperty('risk_id', Number, true)
  public risk_id: number = undefined;

  @JsonProperty('risk_title', String, true)
  public risk_title: string = undefined;

  @JsonProperty('risk_desc', String, true)
  public risk_desc: string = undefined;

  @JsonProperty('valid_from', Date, true)
  public valid_from: Date = undefined;

  @JsonProperty('valid_to', Date, true)
  public valid_to: Date = undefined;

  @JsonProperty('risk_category', String, true)
  public risk_category: string = undefined;

  @JsonProperty('risk_status', String, true)
  public risk_status: string = undefined;

  @JsonProperty('created_by', String, true)
  public created_by: string = undefined;

  @JsonProperty('created_date', Date, true)
  public created_date: Date = undefined;

  @JsonProperty('process_id', Number, true)
  public process_id: number = undefined;

}