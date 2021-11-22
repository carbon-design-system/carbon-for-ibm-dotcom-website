import React, { useState } from 'react';
import { Button, Form, Loading, TextInput } from 'carbon-components-react';
import './beacon-web-ui.scss';

/**
 * Beacon web UI component
 *
 * @returns {*} Beacon web UI component
 * @constructor
 */
const BeaconWebUI = () => {
  const [isLoading, setIsLoading] = useState(false);

  /* eslint-disable no-useless-escape */
  const urlPattern = '^(http|https)://[^ "]+$';

  const formProps = {
    className: 'beacon-web-ui__form',
    onSubmit: (evt) => {
      evt.preventDefault();
      setIsLoading(true);
      const iframe = document.getElementById('beacon-web-ui-iframe');
      const url = document.getElementById('text-input-1').value;
      fetch(
        `https://beacon-for-ibm-dotcom-api.gz4o4xx2g28.us-south.codeengine.appdomain.cloud/?url=${url}`
      )
        .then((response) => response.text())
        .then((data) => {
          setIsLoading(false);
          iframe.classList.add('has-results');
          iframe.srcdoc = data;
        });
    },
  };

  return (
    <>
      <Form {...formProps}>
        <TextInput
          size="lg"
          pattern={urlPattern}
          required
          id="text-input-1"
          placeholder="Enter URL to audit, for example https://www.ibm.com"
        />
        <Button type="submit">Analyze page</Button>
      </Form>
      <Loading active={isLoading} />
      <iframe id="beacon-web-ui-iframe" title="Beacon for IBM.com" src="" />
    </>
  );
};

export default BeaconWebUI;
