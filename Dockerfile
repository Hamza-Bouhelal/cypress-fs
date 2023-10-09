FROM cypress/included:cypress-13.1.0-node-20.5.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1

WORKDIR /app

COPY package.json yarn.lock cypress.config.ts ./
COPY /cypress ./cypress
COPY /src ./src

RUN yarn install --frozen-lockfile --non-interactive --production=false

ENTRYPOINT ["yarn", "test"]

