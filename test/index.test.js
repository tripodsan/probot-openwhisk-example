/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-env jest */

const { Application } = require('probot');
// Requiring our app implementation
const myProbotApp = require('../src/thanks_for_the_fish.js');
const { main } = require('../src/index.js');

const issuesOpenedPayload = require('./fixtures/issues.opened.json');

test('that we can run tests', () => {
  // your real tests go here
  expect(1 + 2 + 3).toBe(6);
});

describe('My Probot app', () => {
  let app; let
    github;

  beforeEach(() => {
    app = new Application();
    // Initialize the app based on the code from index.js
    app.load(myProbotApp);
    // This is an easy way to mock out the GitHub API
    github = {
      issues: {
        createComment: jest.fn().mockReturnValue(Promise.resolve({})),
      },
    };
    // Passes the mocked out GitHub API into out app instance
    app.auth = () => Promise.resolve(github);
  });

  test('creates a comment when an issue is opened', async () => {
    // Simulates delivery of an issues.opened webhook
    await app.receive({
      name: 'issues.opened',
      payload: issuesOpenedPayload,
    });

    // This test passes if the code in your index.js file calls
    // `context.github.issues.createComment`
    expect(github.issues.createComment).toHaveBeenCalled();
  });

  test('Delivers docs view.', async () => {
    // eslint-disable-next-line no-new
    const result = await main({
      __ow_method: 'get',
      __ow_path: '/docs',
    });

    expect(result.statusCode).toBe(200);
  });
});
