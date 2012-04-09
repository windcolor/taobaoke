# -*- coding: utf-8 -*-	 

from django.http import HttpResponse
import datetime

from pyTOP.user import User

def usr_info(request):
	user = User()
	user.get('etxiaohei')
	print user
	now = datetime.datetime.now()
	html = "<html><body>It is now %s.</body></html>" % now
	return HttpResponse(html)	