// ==UserScript==
// @name         cloudflare
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Autofill for Cloudflare Abuse Form
// @author       You
// @match        https://abuse.cloudflare.com/
// @icon         https://abuse.cloudflare.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function fillDMCA() {
    const details = {
      name: 'Jonathan Briden',
      agent_name: 'Lara Briden',
      email: 'admin@larabriden.com',
      email2: 'admin@larabriden.com',
      title: '',
      company: '',
      tele: '',
      address1: '6 Ridder Place, Halswell',
      city: 'Christchurch',
      state: 'Canterbury',
      country: 'NZ',
      urls: '',
      video_ids: '',
      original_work: 'Book: "Period Repair Manual" by Lara Briden',
      signature: 'Jonathan Briden'
    };

    const checks = {
      'I understand and agree': true,
      'Please forward my report to the website hosting provider.': true,
      'Include my name and contact information with the report to the website hosting provider.': true,
      'Please forward my report to the website owner.': true,
      'Include my name and contact information with the report to the website owner.': true
    };

    for (const fld in details) {
      const input = document.getElementsByName(fld)[0] ?? null;
      if (input) {
        input.value = details[fld];
      }
    }

    const boxes = document.querySelectorAll('input[type=checkbox]');
    boxes.forEach(box => {
      const label = box.labels[0].innerText;
      if (checks.hasOwnProperty(label)) {
        box.checked = checks[label];
      }
    });
  }

  const select = document.getElementById('form-select');
  select.addEventListener('change', function() {
    if (select.value == 'dmca') {
      setTimeout(fillDMCA, 200);
    }
  });
})();
