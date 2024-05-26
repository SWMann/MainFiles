from django.contrib import admin

from .models import Member, MOS, Role, Branch, Unit, OverrideCode, PromotionRequest, Approval, PolicyInfo, Resource, PolicyResourceLink


# Register your models here.
admin.site.register(Member)
admin.site.register(MOS)
admin.site.register(Role)
admin.site.register(Branch)
admin.site.register(Unit)
admin.site.register(OverrideCode)
admin.site.register(PromotionRequest)
admin.site.register(Approval)
admin.site.register(PolicyInfo)
admin.site.register(Resource)
admin.site.register(PolicyResourceLink)