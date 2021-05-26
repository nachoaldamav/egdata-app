import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

export default function Dropdown(elements) {
    var countryStr = 'US,PL,RU,ID,CN,AD,AU,BE,CH,DK,FR,IE,IT,JP,NO,DE,ES,IL,MC,MX,PR,VA,BR,TR,CZ,LV,FI,NL,CA,KR,LT,PT,SE,AE,AT,CY,LU,MT,SA,SI,SK,BY,UA,EE';
    const countries = countryStr.split(',')
    
    let selected;

    if (typeof window !== 'undefined') {
        selected = (localStorage.getItem('selectedCountry') || 'US')
    }

    return (
        <ReactFlagsSelect
        searchable
        searchPlaceholder="Search countries"
        countries={countries}
        selected={selected}
        onSelect={code => updateCountry(code)}
        optionsSize={14}
        className="menu-flags"
        selectButtonClassName="menu-flags-button"
        placeholder="Select Country" />
    )
}

async function updateCountry(code) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('selectedCountry', code)
    }
    location.reload();
}