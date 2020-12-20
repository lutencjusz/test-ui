/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import Is from "is_js";
import { styles } from "../../constaints";

const IsTest = () => {
  const [x, setX] = useState();
  const d = document.createElement("div");
  const handleChange = (e) => {
    const a = e.target.value.split(",").map((item) => item.trim());

    setX(
      <Fragment>
        {Is.array(a) && <h7>Table = [{a.map((t) => `${t};`)}]</h7>}
        <h6>{!Is.online() && "Nie jesteś podłączony do internetu."}</h6>
        <h6>{Is.weekend(new Date()) && "Jest weekend 😄"}</h6>
        <h6>{Is.ie() && "Otworzyłeś w IE"}</h6>
        <h6>{Is.chrome() && "Otworzyłeś w Chromie"}</h6>
        <p>{Is.firefox() && "Otworzyłeś w FireFox'ie"}</p>
        <p>{Is.edge() && "Otworzyłeś w Edge"}</p>
        <p>{Is.opera() && "Otworzyłeś w Opera"}</p>
        <p>{Is.androidPhone() && "Otworzyłeś na telefonie z Androidem"}</p>
        <p>{Is.desktop() && "Otworzyłeś na komputerze"}</p>
        <p>{Is.any.url(a) && "jest URL"}</p>
        <p>{Is.include(...a) && "zawiera tekst złożony"}</p>
        <p>{Is.palindrome(...a) && "zawiera palindrom"}</p>
        <p>{Is.sorted(a, ">=") && "jest posortowane rosnąco"}</p>
        <p>{Is.sorted(a, "<") && "jest posortowane malejąco"}</p>
        <p>{Is.any.ipv4(a) && "jest adres IPv4"}</p>
        <p>{Is.any.ipv6(a) && "jest adres IPv6"}</p>
        <p>{Is.any.affirmative(a) && "jest potwierdzenie ang"}</p>
        <p>{Is.any.email(a) && "jest email"}</p>
        <p>{Is.any.creditCard(a) && "jest nr karty kredytowej"}</p>
        <p>{Is.any.timeString(a) && "jest czas w stringu"}</p>
        <p>{Is.any.dateString(a) && "jest data w stringu"}</p>
        <p>{Is.any.number(a) && "jest liczba..."}</p>
        <p>{Is.empty(a) ? "jest pusta..." : "nie jest pusta"}</p>
        <p>{Is.any.string(a) && "jest string"}</p>
        <p>{Is.array(a) ? "Table jest tablicą" : "Table nie jest tablicą"}</p>
        <p>
          {Is.domNode(d) ? "d jest elementem DOM" : "d nie jest elementem DOM"}
        </p>
      </Fragment>
    );
  };

  return (
    <div className="frame">
      <container style={styles.form_input}>
        <h1>Test Is</h1>
        <input
          type="text"
          onChange={handleChange}
          className="form-control"
          placeholder="Test Is_js"
          style={{
            width: "50%",
            marginBottom: "1rem",
            marginLeft: "25%",
          }}
        />
        <p>{x}</p>
      </container>
    </div>
  );
};

export default IsTest;
