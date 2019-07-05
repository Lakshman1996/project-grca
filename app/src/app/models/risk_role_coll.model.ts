import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class risk_role_coll {
  @JsonProperty('risk_id', String, true)
  public risk_id: string = undefined;

  @JsonProperty('risk_roleid', Number, true)
  public risk_roleid: number = undefined;

  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('userempid', String, true)
  public userempid: string = undefined;

  @JsonProperty('userorgunit', String, true)
  public userorgunit: string = undefined;

  @JsonProperty('valid_from', Date, true)
  public valid_from: Date = undefined;

  @JsonProperty('valid_till', Date, true)
  public valid_till: Date = undefined;

  @JsonProperty('active', String, true)
  public active: string = undefined;

}