/* eslint-disable no-unused-vars */
import React from "react";
import useFetch from "use-http";

export default function DemoLanguage() {
  const url =
    "https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc";

  const xml =
    '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ns="http://CIS/BIR/PUBL/2014/07"> ' +
    '<soap:Header xmlns:wsa="http://www.w3.org/2005/08/addressing"> ' +
    "<wsa:To>https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc</wsa:To> " +
    "<wsa:Action>http://CIS/BIR/PUBL/2014/07/IUslugaBIRzewnPubl/Zaloguj</wsa:Action> " +
    "</soap:Header> " +
    "<soap:Body> " +
    "<ns:Zaloguj> " +
    "<ns:pKluczUzytkownika>abcde12345abcde12345</ns:pKluczUzytkownika> " +
    "</ns:Zaloguj> " +
    "</soap:Body> " +
    "</soap:Envelope>";

  const options = {
    data: xml,
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    referrerPolicy: "same-origin",
    init: {
      headers: {
        "Content-Type": "application/xop+xml",
        Origin: "*",
      },
    },
  };
  const { post, response, loading, error, data = [] } = useFetch(url, options);

  const callWebService = async () => {
    console.log("Wysłany komunikat!");
    const res = await post({
      data: xml,
    });
    if (response.ok) console.log({ res });
  };

  return (
    <div className="frame">
      <h1>Demo wiersz</h1>
      <h6>Przykładowy komponent DemoLanguage, który można wykorzystać do</h6>
      <button type="button" onClick={() => callWebService()}>
        Wywołaj SOAP
      </button>
      <div>
        {error && `Error!: ${error}`}
        {loading && "Loading..."}
        {data && `Data: ${data}`}
      </div>
    </div>
  );
}
