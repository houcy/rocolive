from django.http import HttpResponse
from django.template import loader
from auxjs import writeIndexFiles, writePrevFiles

def main(request):
    template = loader.get_template('robotBuilder/index.html')
    context = {}
    return HttpResponse(template.render(context, request))
def test(request):
    template = loader.get_template('robotBuilder/test.html')
    context = {}
    return HttpResponse(template.render(context, request))
def new_index(request):
    writeIndexFiles()
    writePrevFiles()
    template = loader.get_template('robotBuilder/new_index.html')
    context = {}
    return HttpResponse(template.render(context, request))
