import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class risk_role_master_coll {
  @JsonProperty('risk_roleid', Number, true)
  public risk_roleid: number = undefined;

  @JsonProperty('rolename', String, true)
  public rolename: string = undefined;

  @JsonProperty('role_desc', String, true)
  public role_desc: string = undefined;

}