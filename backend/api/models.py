from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title


unitPositionTypes = {
    "MEMB":"Member",
    "TELE":"Team Leader",
    "VICC":"Vehicle Commander",
    "SQLE":"Squad Leader",
    "SELE":"Section Leader",
    "PLSG":"Platoon Sergeant",
    "PLCO":"Platoon Commander",
    "CO1S":"Company Senior NCO",
    "COXO":"Company Executive Officer",
    "COCO":"Company Commander",
    "BASM":"Battalion Sergeant Major",
    "BAXO":"Battalion Executive Officer",
    "BACO":"Battalion Commander"
}

CommisionType = \
    {
        "ENL":"Enlisted",
        "NCO":"Non-Commisioned Officer",
        "SNC":"Senior Non-Commisioned Officer",
        "WOF":"Warrant Officer",
        "COF":"Commisioned Officer"
    }


Ranks = {
    'Aly': "Allied Member",
    'Whsd': "Whiteshield",
    'ARct': "Armsman Recruit",
    'VApr': "Voidsman Apprentice",
    'Gd3': "Guardsman 3rd Class",
    'Vdm': "Voidsman",
    'Amn': "Armsman",
    'Gd2': "Guardsman 2rd Class",
    'Gd1': "Guardsman 1st Class",
    'SVdm': "Senior Voidsman",
    'SAmn': "Senior Armsman",
    "GdSp": "Specialist Guardsman",
    'GdV': "Veteran Guardsman",
    "GdSn": "Senior Guardsman",
    'MVdm': "Master Voidsman",
    'MAmn': "Master Armsman",
    'BAst': "Brother Astartes",
    "LCpl": "Lance Corporal",
    "LPO": "Lance Petty Officer",
    "Cpl": "Corporal",
    "PO": "Petty Officer",
    "Sgt": "Sergeant",
    "SPO": "Senior Petty Officer",
    "SeSg": "Senior Sergeant",
    "MPO": "Master Petty Officer",
    "StSg": "Staff Sergeant",
    "CPO": "Chief Petty Officer",
    "CSgt": "Color Sergeant",
    "MCPO": "Master Chief Petty Officer",
    'SAst': "Sergeant Astartes",
    "WOC": "Warrant Officer Cadet",
    "NWOC": "Naval Warrant Officer Cadet",
    "WO2": "Warrant Officer Class 2",
    "NWO2": "Naval Warrant Officer Class 2",
    "WO1": "Warrant Officer Class 1",
    "NWO1": "Naval Warrant Officer Class 1",
    "CWO": "Chief Warrant Officer",
    "NCWO": "Naval Chief Warrant Officer",
    "OCa": "Officer Cadet",
    "3Lt": "3rd Lieutenant",
    "JEns": "Junior Ensign",
    "2Lt": "2nd Lieutenant",
    "Ens": "Ensign",
    "1Lt": "1st Lieutenant",
    "LtJG": "Lieutenant Junior Grade",
    "Cpt": "Captain",
    "Lt": "Lieutenant",
    'LAst': "Lieutenant Astartes",
    "Maj": "Major",
    "LCdr": "Lieutenant Commander",
    "LCo": "Lieutenant Colonel",
    "Cdr": "Commander",
    "Col": "Colonel",
    "Capt": "Captain",
    "LCpt": "Lord Captain",
    'CAst': "Captain Astartes",
    "Cdre": "Commadore",
    "BGe": "Brigadier General",
    "RAdm": "Rear Admiral",
    "MGe": "Major General",
    "LGe": "Lieutenant General",
    "VAdm": "Vice Admiral",
    "Gen": "General",
    "Adm": "Admiral",
    "HAdm": "High Admiral",
    "LdGn": "Lord General",
    "LAdm": "Lord Admiral",
    'DAst': "Captain-Commander Astartes",
}




class Member(models.Model):

    memberStatusTypes = \
        {
            "NAM": "Not A member",
            "AWO": "Away with out leave",
            "DIS" : "Discharged",
            "FRE":"Friendly Member",
            "ALY": "Allied Member",
            "RCT":"Recruit",
            "ELA":"Extended Leave of Absence",
            "LOA": "Leave of Absence",
            "RET":"Retired",
            "ACT":"Active",

        }

    memberMOStypes =\
        {
            "PMO": "Primary MOS",
            "SM1": "Secondary MOS 1",
            "SM2": "Secondary MOS 2",
        }

    AstartesType = {

        "NAA": "Not an Astartes",
        "FAA": "Failed Astartes Training",
        "BAA": "Banned from Astartes Training",
        "AAA": "Active Adeptus Astartes"

    }

    member_DOID = models.CharField(unique=True, max_length=50)
    member_discord_name = models.CharField (max_length = 100, unique=True)
    member_discord_id =models.CharField(max_length = 100)
    member_game_name = models.CharField(max_length=100)
    member_email = models.EmailField(null=True, blank=True)
    member_date_joined = models.DateTimeField(auto_now_add=True)
    member_date_of_birth = models.DateField()
    member_rank = models.CharField(max_length=4, choices=Ranks)
    member_sponsor = models.ForeignKey('self', blank=True, null=True, on_delete=models.DO_NOTHING, related_name="member_sponsors")
    member_status = models.CharField(max_length=3, choices=memberStatusTypes)
    member_last_promotion_date = models.DateField(null=True, blank=True)
    member_leave_date = models.DateField(null=True, blank=True)
    member_officer_note = models.TextField(max_length=800, null=True, blank=True)
    member_rejoin_date = models.DateField(null=True, blank=True)
    member_retired_date = models.DateField(null=True, blank=True)
    member_backend_admin = models.BooleanField(default=False)
    member_public_admin = models.BooleanField(default=False)
    member_private_admin = models.BooleanField(default=False)
    member_public_gm = models.BooleanField(default=False)
    member_profile_image = models.ImageField(null=True, blank=True)
    member_is_recruiter = models.BooleanField(default=False)
    member_unit = models.ForeignKey('Unit', on_delete=models.DO_NOTHING, related_name="unit_members")
    member_unit_position = models.CharField(max_length=4, choices=unitPositionTypes, null=True, blank=True)
    member_primary_MOS = models.ForeignKey('MOS', blank=True, null=True, on_delete=models.DO_NOTHING, related_name="primary_mos")
    member_secondary_MOS_1 = models.ForeignKey('MOS', blank=True, null=True, on_delete=models.DO_NOTHING, related_name="secondary_mos_1")
    member_secondary_MOS_2 = models.ForeignKey('MOS', blank=True, null=True, on_delete=models.DO_NOTHING, related_name="secondary_mos_2")
    member_desired_MOS = models.ForeignKey('MOS', blank=True, null=True, on_delete=models.DO_NOTHING, related_name="MOS_desired")
    member_desired_MOS_to_replace = models.CharField(choices=memberMOStypes, max_length=10, null=True, blank=True)
    member_commission_type=models.CharField(choices=CommisionType, max_length=10)
    member_astartes = models.CharField(choices=AstartesType, max_length=20)
    member_linked_user = models.ForeignKey(User, blank=False, null=True, on_delete=models.DO_NOTHING, related_name="User_Model")

    def __str__(self):

        return self.member_rank + ". " + self.member_game_name


class Unit(models.Model):
    unit_code = models.CharField(max_length=5)
    unit_name = models.CharField(max_length=50)
    unit_description = models.TextField()
    unit_co = models.ForeignKey(Member, on_delete=models.DO_NOTHING, related_name="member_CO",null=True, blank=True)
    unit_xo = models.ForeignKey(Member, on_delete=models.DO_NOTHING, related_name="member_XO",null=True, blank=True)
    unit_image = models.ImageField(null=True, blank=True)
    unit_status = models.CharField(max_length=50)

    def __str__(self):
        return self.unit_name

class MOS(models.Model):
    MOS_code = models.CharField(max_length=4, unique=True, primary_key=True, null=False)
    MOS_name = models.CharField(max_length=50)
    MOS_description = models.TextField()
    MOS_branch =models.ForeignKey("Branch", on_delete=models.DO_NOTHING, related_name="Branch_MOS")
    MOS_default_image = models.ImageField(null=True, blank=True)
    MOS_commision_type = models.CharField(max_length=4, choices=CommisionType)
    MOS_deputy_in_charge = models.ForeignKey(Member, on_delete=models.DO_NOTHING, related_name="MOS_deputy_in_charge",null=True, blank=True)
    MOS_in_charge = models.ForeignKey(Member, on_delete=models.DO_NOTHING, related_name="MOS_in_charge",null=True, blank=True)
    MOS_Creation_date = models.DateField(auto_now_add=True,)
    MOS_active = models.BooleanField(default=False)
    MOS_recruiting = models.BooleanField(default=False)

    def __str__(self):
        return self.MOS_code
class Role(models.Model):
    role_name = models.CharField(max_length=50)
    role_description = models.TextField()
    role_primary_MOS = models.ForeignKey(MOS, on_delete=models.DO_NOTHING, related_name="role_primary_MOS")
    role_secondary_MOS = models.ForeignKey(MOS,on_delete=models.DO_NOTHING, related_name="role_secondary_MOS",null=True, blank=True)
    role_tertiary_MOS = models.ForeignKey(MOS,on_delete=models.DO_NOTHING, related_name="role_tertiary_MOS",null=True, blank=True)
    role_absolute_minimum_rank = models.CharField(max_length=50, choices=Ranks)
    role_minimum_rank = models.CharField(max_length=50, choices=Ranks)
    role_is_command = models.BooleanField(default=False)
    role_has_short_range_radio=models.BooleanField(default=False)
    role_has_long_range_radio=models.BooleanField(default=False)
    role_can_be_in_charge=models.BooleanField(default=False)

    def __str__(self):
        return self.role_name

class Branch(models.Model):
    branch_name = models.CharField(max_length=50)
    branch_description = models.TextField()

    def __str__(self):
        return self.branch_name


class OverrideCode(models.Model):
    oid = models.CharField(max_length=20, unique=True)
    o_code = models.CharField(max_length=6, unique=True, null=False)
    o_member = models.ForeignKey(Member, on_delete=models.DO_NOTHING, related_name="member_code")
class PromotionRequest(models.Model):


    pr_statuses = {
        "NA": "No Action",
        "DE": "Denied",
        "AP": "Approved",
        "AR": "Approved and Reviewed",
    }

    pr_code = models.CharField(max_length=10, unique=True)
    pr_requesting = models.ForeignKey(Member, on_delete=models.DO_NOTHING, related_name="member_requested_promotions")
    pr_member_to_promote = models.ForeignKey(Member, on_delete=models.DO_NOTHING, related_name="member_promotion_request")
    pr_member_to_promote_current_rank = models.CharField(max_length=4, choices=Ranks)
    pr_member_to_promote_proposed_rank = models.CharField(max_length=4, choices=Ranks)
    pr_reason = models.CharField(max_length=500)
    pr_status = models.CharField(max_length=40, choices=pr_statuses)
    pr_reviewed_by_member = models.ForeignKey(Member, on_delete=models.DO_NOTHING, related_name = "member_reviewed_prs")
    pr_override_code_used = models.ForeignKey(OverrideCode, on_delete=models.DO_NOTHING, related_name = "prs_code_used_on")

class Approval(models.Model):
    ap_code = models.CharField(max_length=10, unique=True)
    ap_member = models.ForeignKey(Member, on_delete=models.DO_NOTHING, related_name="member_approvals")
    ap_linked_promotion_request = models.ForeignKey(PromotionRequest, on_delete=models.DO_NOTHING, related_name="approved_members")

class Resource(models.Model):
    resource_branch_choices = \
        {
            "IGS": "Imperial Guard Resource",
            "INS": "Imperial Navy Resource",
            "IAS": "Imperial Airforce Resource",
            "AAS": "Adeptus Astartes Resource"
        }
    resource_code= models.CharField(max_length=10, unique=True)
    resource_name=models.CharField(max_length=50, unique=True)
    resource_description=models.CharField(max_length=300)
    resource_content=models.CharField(max_length=1000)
    resource_branch=models.CharField(max_length=3, choices=resource_branch_choices)

    def __str__(self):
        return self.resource_branch+"-"+self.resource_code

class PolicyInfo(models.Model):

    policy_branch_choices = \
        {
            "IGP": "Imperial Guard Policy",
            "INP": "Imperial Navy Policy",
            "IAP": "Imperial Airforce Policy",
            "AAP": "Adeptus Astartes Policy"
        }
    policy_enforcement_choices = \
        {
            "LAX": "Lax",
            "GEN": "Generaly",
            "STR": "Strict",
            "VSTR": "Very Strict",
            "ESTR": "Extra Strict"
        }
    policy_code = models.CharField(max_length=10, unique=True)
    policy_name = models.CharField(max_length=20, unique=True)
    policy_branch = models.CharField(max_length=3, choices=policy_branch_choices)
    policy_description = models.CharField(max_length=500)
    policy_enforcement_level = models.CharField(max_length=5, choices=policy_enforcement_choices)
    policy_creator = models.ForeignKey(Member, on_delete=models.DO_NOTHING, related_name="created_policy")
    policy_created_date = models.DateField(auto_now_add=True)
    policy_active = models.BooleanField()

    def __str__(self):
        return self.policy_branch+"-"+self.policy_code


class PolicyResourceLink(models.Model):
    PRLCode = models.CharField(max_length=10, unique=True)
    PRL_Resource = models.ForeignKey(Resource, on_delete=models.DO_NOTHING, related_name="linked_resource")
    PRL_Policy = models.ForeignKey(PolicyInfo, on_delete=models.DO_NOTHING, related_name="linked_policy")
