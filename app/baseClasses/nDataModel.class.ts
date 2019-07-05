import { risk_general_coll } from '../src/app/models/risk_general_coll.model';
import { risk_master_coll } from '../src/app/models/risk_master_coll.model';
import { risk_role_master_coll } from '../src/app/models/risk_role_master_coll.model';
import { risk_role_coll } from '../src/app/models/risk_role_coll.model';
import { user } from '../src/app/models/user.model';
import { risk_causecat_master_coll } from '../src/app/models/risk_causecat_master_coll.model';
import { risk_conseq_master_coll } from '../src/app/models/risk_conseq_master_coll.model';
import { risk_cause_coll } from '../src/app/models/risk_cause_coll.model';
import { risk_consequence_coll } from '../src/app/models/risk_consequence_coll.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
risk_general_coll: risk_general_coll;
risk_master_coll: risk_master_coll;
risk_role_master_coll: risk_role_master_coll;
risk_role_coll: risk_role_coll;
user: user;
risk_causecat_master_coll: risk_causecat_master_coll;
risk_conseq_master_coll: risk_conseq_master_coll;
risk_cause_coll: risk_cause_coll;
risk_consequence_coll: risk_consequence_coll;
//DECLARE NEW VARIABLE

constructor() {
this.risk_general_coll = new risk_general_coll();
this.risk_master_coll = new risk_master_coll();
this.risk_role_master_coll = new risk_role_master_coll();
this.risk_role_coll = new risk_role_coll();
this.user = new user();
this.risk_causecat_master_coll = new risk_causecat_master_coll();
this.risk_conseq_master_coll = new risk_conseq_master_coll();
this.risk_cause_coll = new risk_cause_coll();
this.risk_consequence_coll = new risk_consequence_coll();
//CREATE NEW DM INSTANCE
    }
}