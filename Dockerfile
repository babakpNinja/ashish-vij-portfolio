FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY public /usr/share/nginx/html
EXPOSE 8080
