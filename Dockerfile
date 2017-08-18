FROM python:3.4-alpine

RUN apk update && apk add make
RUN pip install sphinx sphinx_rtd_theme sphinx-autobuild alabaster sphinx_bootstrap_theme
RUN pip install watchdog

EXPOSE 8000

CMD watchmedo shell-command --ignore-pattern='_build/*' --recursive --command='make html'
