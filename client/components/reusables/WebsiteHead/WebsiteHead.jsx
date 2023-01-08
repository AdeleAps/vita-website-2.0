import Head from "next/head";
import React from "react";

const WebsiteHead = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta
        name="Psiholoģes Vitas Apsītes privātprakse"
        content="Psiholoģes Vitas Apsītes privātprakse"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default WebsiteHead;
