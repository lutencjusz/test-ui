import React, { useRef, useState } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './primereact.css';
import { Button } from 'primereact/button';
import { Growl } from 'primereact/growl';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { AutoComplete } from 'primereact/autocomplete';
//import { Captcha } from 'primereact/captcha';
import data from './countries';

export default function PrimeButton() {
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState(null);

  // const [errorValue1, setEerrorValue1] = useState(false);
  // const [errorValue2, setEerrorValue2] = useState(false);
  // const [errorValue3, setEerrorValue3] = useState(false);

  let growl = useRef(null);

  const submit = () => {
    growl.current.show({
      severity: 'success',
      summary: 'Formularz Prime react zatwierdzony',
      detail: `Imię: ${value1}, data urodzenia: ${value2}, Kraj: ${value3.name}`,
    });
  };

  const searchCountry = (event) => {
    setTimeout(() => {
      let results = data.filter((country) => {
        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
      });
      setFilteredCountries(results);
    }, 50);
  };

  // const showResponse = (response) => {
  //   console.log({ response });
  // };

  const itemTemplate = (item) => {
    return (
      <div
        style={{
          color: 'white',
          fontSize: '1rem',
          lineHeight: '1rem',
          width: '100%',
        }}
      >
        {item.name}
      </div>
    );
  };

  return (
    <div className="frame">
      <h1>Prime react</h1>
      <div className="p-col-3 p-md-9">
        <Growl ref={growl} />
      </div>

      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-4 p-d-block">
          <span className="p-float-label">
            <InputText
              id="inputtext"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              className="p-invalid"
            />
            <label htmlFor="inputtext">
              Imię
              <i
                style={{ fontSize: '1rem', color: 'red' }}
                className="pi pi-star"
              />
            </label>
          </span>
        </div>
        <div className="p-field p-col-4 ">
          <span className="p-float-label">
            <Calendar
              id="calendar"
              dateFormat="dd/mm/yy"
              value={value2}
              onChange={(e) => setValue2(e.value)}
            />
            <label htmlFor="calendar">Data urodzenia</label>
          </span>
        </div>
        <div className="p-field p-col-4 ">
          <span className="p-float-label">
            <AutoComplete
              id="autocomplete"
              value={value3}
              suggestions={filteredCountries}
              completeMethod={searchCountry}
              field="name"
              onChange={(e) => setValue3(e.target.value)}
              itemTemplate={itemTemplate}
            />
            <label htmlFor="autocomplete">
              Kraj
              <i
                style={{ fontSize: '1rem', color: 'red' }}
                className="pi pi-star"
              />
            </label>
          </span>
        </div>
        <div className="p-field p-col-12">
          {/* <Captcha
            siteKey="6Lf98y8aAAAAAMPK9O3i0_L_OjKbzXOhYjB3EUUY"
            onResponse={showResponse}
          ></Captcha> */}
        </div>
        <div className="p-field p-col-3">
          <Button
            className="p-button-raised p-button-text"
            type="button"
            label="Zatwierdź"
            onClick={submit}
          />
        </div>
      </div>
    </div>
  );
}
