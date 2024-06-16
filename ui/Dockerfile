# Check out https://hub.docker.com/_/node to select a new base image
FROM docker.io/library/node:18-slim

# Declaring env
ENV NODE_ENV prod
ENV HOME=/home/app-user

RUN useradd -m -d $HOME -s /bin/bash app-user
RUN mkdir -p $HOME/app

WORKDIR $HOME/app

COPY . .
RUN chown -R app-user:app-user $HOME
USER app-user
RUN npm install
# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=4000

EXPOSE ${PORT}

CMD [ "npm", "start" ]


